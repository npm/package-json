const fs = require('fs')
const { resolve } = require('path')
const t = require('tap')
const PackageJson = require('../lib/index.js')

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
      'should properly save contennt to a package.json'
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
    const fixture = resolve(__dirname, 'fixtures', 'package.json')
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

t.test('fix', async t => {
  const path = t.testdir({
    'package.json': JSON.stringify({
      name: '@npmcli/test-package ',
      version: 'v1.0.0',
      bin: '@npmcli/test-package',
      dependencies: ['lodash'],
      scripts: true,
      repository: 'github.com/npm/test-package',
    }),
  })
  const { content } = await PackageJson.fix(path)
  t.strictSame(content.name, '@npmcli/test-package')
  t.strictSame(content.version, '1.0.0')
  t.strictSame(content.bin, { 'test-package': '@npmcli/test-package' })
  t.strictSame(content.dependencies, { lodash: '' })
  t.strictSame(content.repository, { type: 'git', url: 'github.com/npm/test-package' })
})
