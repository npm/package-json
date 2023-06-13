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

t.test('no path means no filename', async t => {
  const p = new PackageJson()
  t.equal(p.filename, undefined)
})

t.test('cannot normalize with no content', async t => {
  const p = new PackageJson()
  await t.rejects(p.normalize(), {
    message: 'Can not normalize without existing data',
  })
})

t.test('cannot update with no content', async t => {
  const p = new PackageJson()
  await t.throws(() => {
    p.update({})
  }, {
    message: 'Can not update without existing data',
  })
})
