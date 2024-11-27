const fs = require('node:fs')
const { join, resolve } = require('node:path')
const t = require('tap')
const PackageJson = require('../lib/index.js')

const getPackageFile = (file) =>
  JSON.parse(
    fs.readFileSync(join(__dirname, 'fixtures', file, 'package.json'), 'utf8')
  )

const redactCwd = (path) => {
  const normalizePath = p => p
    .replace(/\\+/g, '/')
    .replace(/\r\n/g, '\n')
  return normalizePath(path)
    .replace(new RegExp(normalizePath(process.cwd()), 'g'), '{CWD}')
}

t.cleanSnapshot = (str) => redactCwd(str)

t.test('load', t => {
  t.test('read a valid package.json', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'foo',
        version: '1.0.0',
      }),
    })

    const pj = await PackageJson.load(path)
    t.same(
      pj.content,
      { name: 'foo', version: '1.0.0' },
      'should return content for a valid package.json'
    )
  })
  t.test('read, update content and write', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'foo',
        version: '1.0.0',
      }, null, 8),
    })

    const pkgJson = await PackageJson.load(path)
    pkgJson.update({
      version: '1.0.1',
      description: 'Lorem ipsum dolor',
    })
    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should properly save content to a package.json'
    )
  })
  t.test('read missing package.json', async t => {
    const path = t.testdirName
    return t.rejects(
      PackageJson.load(path),
      {
        message: /package.json/,
        code: 'ENOENT',
      }
    )
  })
  t.test('do not overwite unchanged file on EOF line added/removed', async t => {
    const originalPackageJsonContent = '{\n  "name": "foo"\n}'
    const path = t.testdir({
      'package.json': originalPackageJsonContent,
    })

    const pkgJson = await PackageJson.load(path)
    await pkgJson.save()

    t.equal(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      originalPackageJsonContent,
      'should not change file'
    )
  })
  t.test('update long package.json', async t => {
    const fixture = resolve(__dirname, 'fixtures', 'legacy', 'package.json')
    const path = t.testdir({})
    fs.copyFileSync(fixture, resolve(path, 'package.json'))
    const pkgJson = await PackageJson.load(path)

    pkgJson.update({
      dependencies: {
        ...pkgJson.content.dependencies,
        ntl: '^5.1.0',
      },
      optionalDependencies: {
        ntl: '^5.1.0',
      },
      devDependencies: {
        ...pkgJson.content.devDependencies,
        tap: '^32.0.0',
      },
      scripts: {
        ...pkgJson.content.scripts,
        'new-script': 'touch something',
      },
      workspaces: [
        ...pkgJson.content.workspaces,
        './new-workspace',
      ],
    })

    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should properly write updated pacakge.json contents'
    )

    // updates a single property
    pkgJson.update({
      scripts: {
        ...pkgJson.content.scripts,
        'new-foo': 'touch foo',
      },
    })

    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should only update the defined property'
    )
  })
  t.test('custom formatting', async t => {
    const path = t.testdir({
      'package.json': JSON.stringify({
        name: 'foo',
        version: '1.0.0',
      }, null, 0),
    })

    const pkgJson = await PackageJson.load(path)
    pkgJson.update({
      version: '1.0.1',
      description: 'Lorem ipsum dolor',
    })
    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should save back custom format to package.json'
    )
  })

  t.test('create:true', t => {
    t.test('empty dir', async t => {
      const path = t.testdir({})
      const pkgJson = await PackageJson.load(path, { create: true })
      await pkgJson.save()
      t.matchSnapshot(
        fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
        'should save empty package.json'
      )
    })
    t.test('existing parseable package.json', async t => {
      const path = t.testdir({
        'package.json': JSON.stringify({ name: 'test-package' }),
      })
      const pkgJson = await PackageJson.load(path, { create: true })
      await pkgJson.save()
      t.matchSnapshot(
        fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
        'package.json should match existing'
      )
    })

    t.test('existing unparseable package.json', async t => {
      const path = t.testdir({
        'package.json': '{this is[not json!',
      })
      await t.rejects(PackageJson.load(path, { create: true }), {
        message: 'Invalid package.json',
      })
    })
    t.end()
  })
  t.end()
})

t.test('create', t => {
  t.test('with data', async t => {
    const path = t.testdir({})
    const pkgJson = await PackageJson.create(path, { data: { name: 'create-test' } })
    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should save package.json with name'
    )
  })
  t.test('without data', async t => {
    const path = t.testdir({})
    const pkgJson = await PackageJson.create(path)
    await pkgJson.save()

    t.matchSnapshot(
      fs.readFileSync(resolve(path, 'package.json'), 'utf8'),
      'should save empty package.json'
    )
  })

  t.end()
})

t.test('no path means no filename', async t => {
  const p = new PackageJson()
  t.equal(p.filename, undefined)
})

t.test('cannot normalize with no content', async t => {
  const p = new PackageJson()
  await t.rejects(p.normalize(), {
    message: /Can not normalize without content/,
  })
})

t.test('cannot update with no content', async t => {
  const p = new PackageJson()
  await t.throws(() => {
    p.update({})
  }, {
    message: /Can not update without content/,
  })
})

t.test('can set data', async t => {
  const p = new PackageJson().fromContent({ data: 1 })
  t.strictSame(p.content, { data: 1 })
  await t.rejects(p.save(), {
    message: /No package\.json to save to/,
  })
})

t.test('read package', async t => {
  const { readPackage } = require('../lib/read-package')
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: 'foo',
      version: '1.0.0',
    }),
  })
  const data = await readPackage(join(path, 'package.json'))
  t.matchSnapshot(data)
})

t.test('sorts on save', async t => {
  const allFieldsPopulated = getPackageFile('all-fields-populated')

  const path = t.testdir({
    'package.json': JSON.stringify(allFieldsPopulated, null, 2),
  })

  const pkgJson = await PackageJson.load(path)

  await pkgJson.save({ sort: true })

  t.strictSame(
    allFieldsPopulated,
    getPackageFile('all-fields-populated')
  )
})

t.test('not the same if name is at the bottom', async t => {
  const { name, ...allFieldsPopulated } = getPackageFile('all-fields-populated')
  const path = t.testdir({
    'package.json': JSON.stringify({
      ...allFieldsPopulated,
      name,
    }, null, 2),
  })

  const pkgJson = await PackageJson.load(path)

  await pkgJson.save({ sort: true })

  t.strictNotSame(
    allFieldsPopulated,
    JSON.parse(fs.readFileSync(resolve(path, 'package.json'), 'utf8'))
  )
})

t.test('unrecognised props at bottom', async t => {
  const { name, ...allFieldsPopulated } = getPackageFile('all-fields-populated')

  const path = t.testdir({
    'package.json': JSON.stringify({
      meow: true,
      ...allFieldsPopulated,
      name,
    }, null, 2),
  })

  const pkgJson = await PackageJson.load(path)

  await pkgJson.save({ sort: true })

  t.strictSame(
    {
      name,
      ...allFieldsPopulated,
      meow: true,
    },
    JSON.parse(fs.readFileSync(resolve(path, 'package.json'), 'utf8'))
  )
})

t.test('empty props at bottom', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
    }, null, 2),
  })

  const pkgJson = await PackageJson.load(path)

  await pkgJson.save({ sort: true })

  t.same(
    {},
    JSON.parse(fs.readFileSync(resolve(path, 'package.json'), 'utf8'))
  )
})
