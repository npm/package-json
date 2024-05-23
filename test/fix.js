const t = require('tap')
const PackageJson = require('../')

const pkg = (data = {}) => {
  return JSON.stringify({
    name: '@npmcli/test-package',
    version: '1.0.0',
    scripts: {},
    repository: {
      type: 'git',
      url: 'git+https://github.com/npm/cli.git',
    },
    ...data,
  })
}
const testMethods = {
  'with changes': async (t, testdir = {}, { dir = (v) => v, ...opts } = {}) => {
    const p = t.testdir(testdir)
    const changes = []
    const fixed = await PackageJson.fix(dir(p), { ...opts, changes })
    t.matchSnapshot(changes)
    return fixed
  },
  'no changes': async (t, testdir = {}, { dir = (v) => v, ...opts } = {}) => {
    const p = t.testdir(testdir)
    if (Object.keys(opts).length) {
      return PackageJson.fix(dir(p), opts)
    }
    return PackageJson.fix(dir(p))
  },
}

for (const [name, testFix] of Object.entries(testMethods)) {
  t.test(name, async t => {
    t.test('fixNameField', async t => {
      t.test('extra slash', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli/test-package/extra' }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /Invalid name/ }
        )
      })
      t.test('leading dot', async t => {
        const testdir = {
          'package.json': pkg({ name: '.@npmcli/test-package' }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /Invalid name/ }
        )
      })
      t.test('node_modules', async t => {
        const testdir = {
          'package.json': pkg({ name: 'node_modules' }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /Invalid name/ }
        )
      })
      t.test('favicon.ico', async t => {
        const testdir = {
          'package.json': pkg({ name: 'node_modules' }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /Invalid name/ }
        )
      })
      t.test('non-string', async t => {
        const testdir = {
          'package.json': pkg({ name: ['@npmcli/invalid-test-package'] }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /string/ }
        )
      })
      t.test('encoded', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli%2ftest-package' }),
        }
        await t.rejects(
          testFix(t, testdir),
          { message: /Invalid name/ }
        )
      })
      t.test('strict upper case', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli/Test-Package' }),
        }
        await t.rejects(
          testFix(t, testdir, { strict: true }),
          { message: /Invalid name/ }
        )
      })
      t.test('strict whitespace', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli/test-package ' }),
        }
        await t.rejects(
          testFix(t, testdir, { strict: true }),
          { message: /Invalid name/ }
        )
      })
      t.test('scoped whitespace', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli/test-package ' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.name, '@npmcli/test-package')
      })
      t.test('unscoped whitespace', async t => {
        const testdir = {
          'package.json': pkg({ name: '@npmcli/test-package ' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.name, '@npmcli/test-package')
      })
    })
    t.test('fixVersionField', async t => {
      t.test('none', async t => {
        const testdir = {
          'package.json': pkg({ version: undefined }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.version, '')
      })
      t.test('unclean', async t => {
        const testdir = {
          'package.json': pkg({ version: 'v1.0.0' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.version, '1.0.0')
      })
      t.test('strict', async t => {
        const testdir = {
          'package.json': pkg({ version: 'v1.0.0-00' }),
        }
        await t.rejects(
          testFix(t, testdir, { strict: true }),
          { message: 'Invalid version' }
        )
      })
    })
    t.test('fixRepositoryField', async t => {
      t.test('repositories array', async t => {
        const testdir = {
          'package.json': pkg({ repositories: ['github.com/npm/cli'] }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.repository, { type: 'git', url: 'github.com/npm/cli' })
      })
      t.test('shortcut', async t => {
        const testdir = {
          'package.json': pkg({ repository: 'npm/cli' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.repository, { type: 'git', url: 'git+https://github.com/npm/cli.git' })
      })
      t.test('full', async t => {
        const testdir = {
          'package.json': pkg({ repository: 'https://github.com/npm/cli' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.repository, { type: 'git', url: 'git+https://github.com/npm/cli.git' })
      })
      t.test('object no url', async t => {
        const testdir = {
          'package.json': pkg({ repository: { shortcut: 'github/npm' } }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.repository, { shortcut: 'github/npm' })
      })
    })
    t.test('scriptpath', async t => {
      t.test('non-object scripts', async t => {
        const testdir = {
          'package.json': pkg({ scripts: '@npmcil/test-package' }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'scripts')
      })
      t.test('non-object script entry', async t => {
        const testdir = {
          'package.json': pkg({ scripts: { test: ['asdf'] } }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.scripts, {})
      })
      t.test('strips node_modules/.bin', async t => {
        const testdir = {
          'package.json': pkg({ scripts: { test: './node_modules/.bin/test-script' } }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.scripts, { test: 'test-script' })
      })
      t.test('no scripts', async t => {
        const testdir = {
          'package.json': pkg({ scripts: undefined }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'scripts')
      })
      t.test('falsy scripts', async t => {
        const testdir = {
          'package.json': pkg({ scripts: 0 }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.scripts, undefined)
      })
    })
    t.test('bundleDependencies', async t => {
      t.test('null', async t => {
        const testdir = {
          'package.json': pkg({ bundleDependencies: null }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'bundleDependencies')
      })
    })
    t.test('binRefs', async t => {
      t.test('scoped name', async t => {
        const testdir = {
          'package.json': pkg({ bin: '@npmcil/test-package' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.bin, { 'test-package': '@npmcil/test-package' })
      })
      t.test('array', async t => {
        const testdir = {
          'package.json': pkg({ bin: ['@npmcil/test-package'] }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.bin, { 'test-package': '@npmcil/test-package' })
      })
      t.test('no bin target', async t => {
        const testdir = {
          'package.json': pkg({ bin: { 'test-package': '/' } }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'bin')
      })
      t.test('empty bin name', async t => {
        const testdir = {
          'package.json': pkg({ bin: { '/': 'test-slash' } }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'bin')
      })
    })
    t.test('fixDependencies', async t => {
      t.test('string dependencies', async t => {
        const testdir = {
          'package.json': pkg({ dependencies: 'npm@1.0.0' }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.dependencies, { npm: '1.0.0' })
      })
      t.test('array dependencies', async t => {
        const testdir = {
          'package.json': pkg({ dependencies: ['npm@1.0.0', true] }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.dependencies, { npm: '1.0.0' })
      })
      t.test('false dependencies', async t => {
        const testdir = {
          'package.json': pkg({ dependencies: false }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'dependencies')
      })
      t.test('non-string dependency', async t => {
        const testdir = {
          'package.json': pkg({ dependencies: { npm: true } }),
        }
        const { content } = await testFix(t, testdir)
        t.notHas(content, 'dependencies')
      })
      t.test('git dependency', async t => {
        const testdir = {
          'package.json': pkg({ dependencies: { npm: 'github/npm' } }),
        }
        const { content } = await testFix(t, testdir)
        t.strictSame(content.dependencies, { npm: 'github:github/npm' })
      })
    })
  })
}
