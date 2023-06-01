const t = require('tap')
const { join } = require('path')
const pkg = require('../')
const rpj = require('read-package-json-fast')

const testMethods = {
  '@npmcli/package-json': async (t, testdir = {}, { dir = (v) => v, ...opts } = {}) => {
    const p = t.testdir(testdir)
    return pkg.normalize(dir(p), opts)
  },
  'read-package-json-fast': (t, testdir = {}, { dir = (v) => v } = {}) => {
    const p = t.testdir(testdir)
    return rpj(join(dir(p), 'package.json')).then(r => ({ content: r }))
  },
}

for (const [name, testNormalize] of Object.entries(testMethods)) {
  const isLegacy = name === 'read-package-json-fast'

  t.test(name, async t => {
    t.test('errors for bad/missing data', async t => {
      t.test('raises an error for missing file', t =>
        t.rejects(testNormalize(t, {}, {}), { code: 'ENOENT' }))

      await t.test('rejects if file is not json', t =>
        t.rejects(testNormalize(t, ({
          'package.json': 'this is not json',
        })), { code: 'EJSONPARSE' }))
    })

    t.test('clean up bundleDependencies', async t => {
      t.test('change name if bundleDependencies is not present', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ bundledDependencies: [] }),
        }))
        t.strictSame(content.bundleDependencies, [])
      })

      t.test('dont array-ify if its an array already', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ bundleDependencies: ['a'] }),
        }))
        t.strictSame(content.bundleDependencies, ['a'])
      })

      t.test('handle bundledDependencies: true', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            bundledDependencies: true,
            dependencies: { a: '1.2.3' },
          }),
        }))
        t.strictSame(content.bundleDependencies, ['a'])
      })

      t.test('handle bundleDependencies: true', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            bundleDependencies: true,
            dependencies: { a: '1.2.3' },
          }),
        }))
        t.strictSame(content.bundleDependencies, ['a'])
      })

      t.test('handle bundleDependencies: true with no deps', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            bundleDependencies: true,
          }),
        }))
        t.strictSame(content.bundleDependencies, [])
      })

      t.test('handle bundleDependencies: false', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            bundleDependencies: false,
            dependencies: { a: '1.2.3' },
          }),
        }))
        t.has(content, { bundleDependencies: [] })
      })

      t.test('handle bundleDependencies object', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            bundleDependencies: { a: '1.2.3' },
            dependencies: { a: '1.2.3' },
          }),
        }))
        t.strictSame(content.bundleDependencies, ['a'])
      })
    })

    t.test('clean up scripts', async t => {
      t.test('delete non-object scripts', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            scripts: 1234,
          }),
        }))
        t.has(content, { scripts: undefined })
      })

      t.test('delete non-string script targets', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            scripts: {
              foo: 'bar',
              bar: ['baz'],
              baz: { bar: { foo: 'barbaz' } },
            },
          }),
        }))
        t.strictSame(content.scripts, { foo: 'bar' })
      })
    })

    t.test('convert funding string to object', async t => {
      const { content } = await testNormalize(t, ({
        'package.json': JSON.stringify({ funding: 'hello' }),
      }))
      t.strictSame(content.funding, { url: 'hello' })
    })

    t.test('cleanup bins', async t => {
      t.test('handle string when a name is set', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ name: 'x', bin: 'y' }),
        }))
        t.strictSame(content.bin, { x: 'y' })
      })

      t.test('delete string bin when no name', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ bin: 'y' }),
        }))
        t.has(content, { bin: undefined })
      })

      t.test('remove non-object bin', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ bin: 1234 }),
        }))
        t.has(content, { bin: undefined })
      })

      t.test('remove non-string bin values', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({ bin: {
            x: 'y',
            y: 1234,
            z: { a: 'b' },
          } }),
        }))
        t.strictSame(content.bin, { x: 'y' })
      })
    })

    t.test('dedupe optional deps out of regular deps', async t => {
      t.test('choose optional deps in conflict, removing empty dependencies', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            optionalDependencies: {
              whowins: '1.2.3-optional',
            },
            dependencies: {
              whowins: '1.2.3-prod',
            },
          }),
        }))
        t.has(content, { dependencies: undefined })
        t.strictSame(content.optionalDependencies, { whowins: '1.2.3-optional' })
      })

      t.test('choose optional deps in conflict, leaving populated dependencies', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            optionalDependencies: {
              whowins: '1.2.3-optional',
            },
            dependencies: {
              otherdep: '1.0.0',
              whowins: '1.2.3-prod',
            },
          }),
        }))
        t.strictSame(content.dependencies, { otherdep: '1.0.0' })
        t.strictSame(content.optionalDependencies, { whowins: '1.2.3-optional' })
      })

      t.test('do not create regular deps if only optional specified', async t => {
        const { content } = await testNormalize(t, ({
          'package.json': JSON.stringify({
            optionalDependencies: {
              whowins: '1.2.3-optional',
            },
          }),
        }))
        t.has(content, { dependencies: undefined })
        t.strictSame(content.optionalDependencies, { whowins: '1.2.3-optional' })
      })
    })

    t.test('set _id if name and version set', async t => {
      const { content } = await testNormalize(t, ({
        'package.json': JSON.stringify({ name: 'a', version: '1.2.3' }),
      }))
      t.equal(content._id, 'a@1.2.3')
    })

    t.test('preserve indentation', async t => {
      const obj = {
        name: 'object',
        version: '1.2.3',
      }
      const path = t.testdir({
        none: {
          'package.json': JSON.stringify(obj),
        },
        twospace: {
          'package.json': JSON.stringify(obj, null, 2),
        },
        tab: {
          'package.json': JSON.stringify(obj, null, '\t'),
        },
        weird: {
          'package.json': JSON.stringify(obj, null, ' \t \t '),
        },
        winEol: {
          none: {
            'package.json': JSON.stringify(obj).replace(/\n/g, '\r\n'),
          },
          twospace: {
            'package.json': JSON.stringify(obj, null, 2).replace(/\n/g, '\r\n'),
          },
          tab: {
            'package.json': JSON.stringify(obj, null, '\t').replace(/\n/g, '\r\n'),
          },
          weird: {
            'package.json': JSON.stringify(obj, null, ' \t \t ').replace(/\n/g, '\r\n'),
          },
        },
        doubleSpaced: {
          none: {
            'package.json': JSON.stringify(obj).replace(/\n/g, '\n\n'),
          },
          twospace: {
            'package.json': JSON.stringify(obj, null, 2).replace(/\n/g, '\n\n'),
          },
          tab: {
            'package.json': JSON.stringify(obj, null, '\t').replace(/\n/g, '\n\n'),
          },
          weird: {
            'package.json': JSON.stringify(obj, null, ' \t \t ').replace(/\n/g, '\n\n'),
          },
        },
        doubleWin: {
          none: {
            'package.json': JSON.stringify(obj).replace(/\n/g, '\r\n\r\n'),
          },
          twospace: {
            'package.json': JSON.stringify(obj, null, 2).replace(/\n/g, '\r\n\r\n'),
          },
          tab: {
            'package.json': JSON.stringify(obj, null, '\t').replace(/\n/g, '\r\n\r\n'),
          },
          weird: {
            'package.json': JSON.stringify(obj, null, ' \t \t ').replace(/\n/g, '\r\n\r\n'),
          },
        },
      })
      const i = Symbol.for('indent')
      const n = Symbol.for('newline')
      t.equal((await pkg.normalize(`${path}/none`)).content[i], '')
      t.equal((await pkg.normalize(`${path}/none`)).content[n], '')
      t.equal((await pkg.normalize(`${path}/twospace`)).content[i], '  ')
      t.equal((await pkg.normalize(`${path}/twospace`)).content[n], '\n')
      t.equal((await pkg.normalize(`${path}/tab`)).content[i], '\t')
      t.equal((await pkg.normalize(`${path}/tab`)).content[n], '\n')
      t.equal((await pkg.normalize(`${path}/weird`)).content[i], ' \t \t ')
      t.equal((await pkg.normalize(`${path}/weird`)).content[n], '\n')
      t.equal((await pkg.normalize(`${path}/winEol/none`)).content[i], '')
      t.equal((await pkg.normalize(`${path}/winEol/none`)).content[n], '')
      t.equal((await pkg.normalize(`${path}/winEol/twospace`)).content[i], '  ')
      t.equal((await pkg.normalize(`${path}/winEol/twospace`)).content[n], '\r\n')
      t.equal((await pkg.normalize(`${path}/winEol/tab`)).content[i], '\t')
      t.equal((await pkg.normalize(`${path}/winEol/tab`)).content[n], '\r\n')
      t.equal((await pkg.normalize(`${path}/winEol/weird`)).content[i], ' \t \t ')
      t.equal((await pkg.normalize(`${path}/winEol/weird`)).content[n], '\r\n')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/none`)).content[i], '')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/none`)).content[n], '')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/twospace`)).content[i], '  ')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/twospace`)).content[n], '\n\n')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/tab`)).content[i], '\t')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/tab`)).content[n], '\n\n')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/weird`)).content[i], ' \t \t ')
      t.equal((await pkg.normalize(`${path}/doubleSpaced/weird`)).content[n], '\n\n')
      t.equal((await pkg.normalize(`${path}/doubleWin/none`)).content[i], '')
      t.equal((await pkg.normalize(`${path}/doubleWin/none`)).content[n], '')
      t.equal((await pkg.normalize(`${path}/doubleWin/twospace`)).content[i], '  ')
      t.equal((await pkg.normalize(`${path}/doubleWin/twospace`)).content[n], '\r\n\r\n')
      t.equal((await pkg.normalize(`${path}/doubleWin/tab`)).content[i], '\t')
      t.equal((await pkg.normalize(`${path}/doubleWin/tab`)).content[n], '\r\n\r\n')
      t.equal((await pkg.normalize(`${path}/doubleWin/weird`)).content[i], ' \t \t ')
      t.equal((await pkg.normalize(`${path}/doubleWin/weird`)).content[n], '\r\n\r\n')
    })

    t.test('strip _fields', async t => {
      const { content } = await testNormalize(t, ({
        'package.json': JSON.stringify({
          name: 'underscore',
          version: '1.2.3',
          _lodash: true,
        }),
      }))
      t.has(content, { _lodash: undefined })
    })

    // For now this is just checking one of the many side effects of
    // npm-normalize-package-bin so we're sure it got called
    t.test('normalize bin', async t => {
      const { content } = await testNormalize(t, ({
        'package.json': JSON.stringify({
          bin: false,
        }),
      }))
      t.has(content, { bin: undefined })
    })

    t.test('skipping steps', async t => {
      if (isLegacy) {
        return t.skip('rpj does not have configurable steps')
      }
      const packageJson = {
        _lodash: true,
        dependencies: { a: '' },
        optionalDependencies: { a: '' },
        bundledDependencies: true,
        funding: 'just a string',
        scripts: { test: './node_modules/.bin/test' },
        bin: { a: ['invalid array'] },
      }
      const { content } = await testNormalize(t, ({
        'package.json': JSON.stringify(packageJson),
      }), { steps: [] })
      t.strictSame(content, packageJson)
      t.has(content, {
        bundleDependencies: undefined,
        _id: undefined,
      })
    })
  })
}
