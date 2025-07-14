const t = require('tap')
const PackageJson = require('../')
const { normalize } = require('../lib/normalize.js')

const pkg = (data = {}) => {
  return JSON.stringify({
    name: '@npmcli/test-package',
    version: '1.0.0',
    ...data,
  })
}

// Helper to test the fixName step
const testFixNameStep = async (t, testdir, expectation) => {
  const p = t.testdir(testdir)

  // Test using normalize directly with fixName step
  const instance = await PackageJson.load(p)
  await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })

  // Apply expectation function if provided
  if (expectation) {
    expectation(t, instance.content)
  }

  return instance
}

t.test('fixName step', async t => {
  t.test('valid package name passes validation', async t => {
    const testdir = {
      'package.json': pkg({ name: '@npmcli/test-package' }),
    }

    await testFixNameStep(t, testdir, (t, content) => {
      t.strictSame(content.name, '@npmcli/test-package', 'name should remain unchanged')
    })
  })

  t.test('missing name field throws error', async t => {
    const testdir = {
      'package.json': pkg({ name: undefined }),
    }

    await t.rejects(
      async () => {
        const instance = await PackageJson.load(t.testdir(testdir))
        await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
      },
      { message: /name field must be a string/ },
      'should reject with appropriate error message'
    )
  })

  t.test('non-string name field throws error', async t => {
    const testdir = {
      'package.json': pkg({ name: ['@npmcli/invalid-test-package'] }),
    }

    await t.rejects(
      async () => {
        const instance = await PackageJson.load(t.testdir(testdir))
        await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
      },
      { message: /name field must be a string/ },
      'should reject with appropriate error message'
    )
  })

  t.test('invalid package name formats throw error', async t => {
    t.test('leading dot', async t => {
      const testdir = {
        'package.json': pkg({ name: '.npmcli-test-package' }),
      }

      await t.rejects(
        async () => {
          const instance = await PackageJson.load(t.testdir(testdir))
          await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
        },
        { message: /Invalid name/ },
        'should reject names starting with a dot'
      )
    })

    t.test('invalid scoped package name format', async t => {
      const testdir = {
        'package.json': pkg({ name: '@npmcli/test/package/extra' }),
      }

      await t.rejects(
        async () => {
          const instance = await PackageJson.load(t.testdir(testdir))
          await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
        },
        { message: /Invalid name/ },
        'should reject invalid scoped package names'
      )
    })

    t.test('node_modules reserved name', async t => {
      const testdir = {
        'package.json': pkg({ name: 'node_modules' }),
      }

      await t.rejects(
        async () => {
          const instance = await PackageJson.load(t.testdir(testdir))
          await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
        },
        { message: /Invalid name/ },
        'should reject reserved name node_modules'
      )
    })

    t.test('favicon.ico reserved name', async t => {
      const testdir = {
        'package.json': pkg({ name: 'favicon.ico' }),
      }

      await t.rejects(
        async () => {
          const instance = await PackageJson.load(t.testdir(testdir))
          await normalize(instance, { steps: ['fixName'], strict: true, allowLegacyCase: true })
        },
        { message: /Invalid name/ },
        'should reject reserved name favicon.ico'
      )
    })
  })

  t.test('builtin module name conflict', async t => {
    const builtinModules = require('node:module').builtinModules
    const builtinName = builtinModules[0] // Use the first builtin module name

    const testdir = {
      'package.json': pkg({ name: builtinName }),
    }

    // For builtin modules, we don't throw but we log a warning
    const instance = await testFixNameStep(t, testdir, (t, content) => {
      t.strictSame(content.name, builtinName, 'should allow builtin module names')
    })

    // We can't directly test the warning since it's logged, but we can confirm the name remains unchanged and the operation completes without error
    t.ok(instance, 'operation should complete without error')
  })

  t.test('package with uppercase name', async t => {
    const testdir = {
      'package.json': pkg({ name: '@NPMCLI/Test-Package' }),
    }

    // Case is allowed
    await testFixNameStep(t, testdir, (t, content) => {
      t.strictSame(content.name, '@NPMCLI/Test-Package', 'should allow uppercase in package name for publishing')
    })
  })
})
