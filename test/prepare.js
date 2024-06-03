const t = require('tap')
const pkg = require('../')
const { join } = require('node:path')

const testMethods = {
  '@npmcli/package-json': async (t, testdir, { dir = (v) => v, ...opts } = {}) => {
    const p = t.testdir(testdir)
    const logs = []
    const logger = (...a) => logs.push(a.slice(2))
    process.addListener('log', logger)
    t.teardown(() => process.removeListener('log', logger))
    if (opts.root === true) {
      opts.root = dir(p)
    }
    const res = await pkg.prepare(dir(p), Object.keys(opts).length ? opts : undefined)
    res.logs = logs
    return res
  },
  'read-package-json': (t, testdir, { dir = (v) => v } = {}) => {
    const p = t.testdir(testdir)
    const rpj = t.mock('read-package-json') // reset rpj caches
    const logs = []
    const logger = (...a) => logs.push(a.slice(1))
    return new Promise((res, rej) => {
      rpj(join(dir(p), 'package.json'), logger, (err, content) => {
        if (err) {
          rej(err)
        } else {
          res({ content, logs })
        }
      })
    })
  },
}

for (const [name, testPrepare] of Object.entries(testMethods)) {
  const isLegacy = name === 'read-package-json'
  t.test(name, async t => {
    t.test('errors for bad/missing data', async t => {
      t.test('invalid version', t =>
        t.rejects(testPrepare(t, ({
          'package.json': JSON.stringify({
            version: 'not semver',
          }),
        })), { message: 'Invalid version' }))

      t.test('non-string main entry', t =>
        t.rejects(testPrepare(t, ({
          'package.json': JSON.stringify({
            main: ['this is not a thing'],
          }),
        })), { name: 'TypeError' }))
    })

    t.test('strip underscores', async t => {
      const { content } = await testPrepare(t, ({
        'package.json': JSON.stringify({
          name: 'underscore',
          version: '1.2.3',
          _lodash: true,
        }),
      }))
      t.has(content, { _lodash: undefined })
    })

    t.test('bin', t => {
      t.test('non-string', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            bin: { key: {}, n: 123 },
          }),
        }))
        t.has(content, { bin: undefined })
      })

      t.test('good', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            bin: './bin/echo',
          }),
          bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        }))
        t.strictSame(content.bin, { 'bin-test': 'bin/echo' })
      })

      t.test('missing', async t => {
        const { content, logs } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            bin: './bin/missing',
          }),
        }))
        t.strictSame(content.bin, { 'bin-test': 'bin/missing' })
        const binLog = logs.find((l) => l[1].includes('bin file'))
        t.strictSame(binLog, ['bin-test@', 'No bin file found at bin/missing'])
      })

      t.test('empty', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            bin: {},
          }),
        }))
        t.has(content, { bin: undefined })
      })

      t.test('directories.bin no prefix', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            directories: {
              bin: './bin',
            },
          }),
          bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        }))
        t.strictSame(content.bin, { echo: 'bin/echo' })
      })

      t.test('directories.bin trim prefix', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            directories: {
              bin: '../../../../../bin',
            },
          }),
          bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        }))
        t.strictSame(content.bin, { echo: 'bin/echo' })
      })

      t.test('bin trim prefix', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            bin: '../../../../../bin/echo',
          }),
          bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        }))
        t.strictSame(content.bin, { 'bin-test': 'bin/echo' })
      })

      t.test('bin handles back slashes', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            bin: {
              echo: '..\\..\\..\\bin\\echo',
            },
          }),
          bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        }))
        t.strictSame(content.bin, { echo: 'bin/echo' })
      })

      t.test('directories.bin with bin', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            name: 'bin-test',
            directories: {
              bin: './bin',
            },
            bin: {
              echo: './bin/echo',
            },
          }),
          bin: {
            echo: '#!/bin/sh\n\necho "hello world"',
            echo2: '#!/bin/sh\n\necho "hello world2"',
          },
        }))
        t.strictSame(content.bin, { echo: 'bin/echo' })
      })

      t.end()
    })

    t.test('man', t => {
      t.test('resolves directory', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            directories: { man: './man' },
          }),
          man: { man1: { 'test.1': 'man test file' } },
        }))
        t.strictSame(content.man, ['man/man1/test.1'])
      })

      if (name === '@npmcli/package-json') {
        t.test('non-string', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              man: 123,
            }),
          }))
          t.has(content, { man: undefined })
        })

        t.test('good', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              man: './man/test.1',
            }),
          }))
          t.strictSame(content.man, ['man/test.1'])
        })

        t.test('empty', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              man: [],
            }),
          }))
          t.has(content, { man: undefined })
        })

        t.test('directories.man no prefix', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              name: 'man-test',
              directories: {
                man: './man',
              },
            }),
            man: { 'test.1': '.TH man "test man page"' },
          }))
          t.strictSame(content.man, ['man/test.1'])
        })

        t.test('directories.man trim prefix', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              name: 'man-test',
              directories: {
                man: '../../../../../man',
              },
            }),
            man: { 'test.1': '.TH man "test man page"' },
          }))
          t.strictSame(content.man, ['man/test.1'])
        })

        t.test('directories.man handles reversed slashes', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              name: 'man-test',
              directories: {
                man: '..\\..\\man',
              },
            }),
            man: { 'test.1': '.TH man "test man page"' },
          }))
          t.strictSame(content.man, ['man/test.1'])
        })

        t.test('directories.man with man', async t => {
          const { content } = await testPrepare(t, ({
            'package.json': JSON.stringify({
              name: 'man-test',
              directories: {
                man: './man',
              },
              man: '../../test.2',
            }),
            man: {
              'test.1': '.TH man "test man page 1"',
              'test.2': '.TH man "test man page 2"',
            },
          }))
          t.strictSame(content.man, ['test.2'])
        })
      }

      t.end()
    })

    t.test('bundleDependencies', t => {
      t.test('true', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            dependencies: { a: '' },
            bundleDependencies: true,
          }),
        }))
        t.strictSame(content.bundleDependencies, ['a'])
      })

      t.test('null', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            dependencies: { a: '' },
            bundleDependencies: null,
          }),
        }))
        t.has(content, { bundleDependencies: undefined })
      })

      t.test('false', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            dependencies: { a: '' },
            bundleDependencies: false,
          }),
        }))
        t.has(content, { bundleDependencies: undefined })
      })

      t.test('rename bundledDependencies', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            dependencies: { a: '', b: '' },
            devDependencies: { c: '' },
            bundledDependencies: ['a', 'b', 'c'],
          }),
        }))
        t.has(content, { bundledDependencies: undefined })
        t.strictSame(content.bundleDependencies, ['a', 'b', 'c'])
      })
      t.end()
    })

    t.test('server.js', t => {
      t.test('adds if missing', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'server.js': 'a file that exists',
        }))
        t.strictSame(content.scripts, { start: 'node server.js' })
      })
      t.test('keeps existing', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            scripts: {
              start: 'something else',
            },
          }),
          'server.js': 'a file that exists',
        }))
        t.strictSame(content.scripts, { start: 'something else' })
      })
      t.end()
    })

    t.test('gypfile', t => {
      t.test('with install', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            scripts: { install: 'existing script' },
          }),
          'test.gyp': 'a file that exists',
        }))
        t.strictSame(content.scripts.install, 'existing script')
      })
      t.test('with preinstall', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            scripts: { preinstall: 'existing script' },
          }),
          'test.gyp': 'a file that exists',
        }))
        t.has(content.scripts, { install: undefined })
        t.strictSame(content.scripts, { preinstall: 'existing script' })
      })
      t.test('no other scripts', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'test.gyp': 'a file that exists',
        }))
        t.strictSame(content.scripts, { install: 'node-gyp rebuild' })
      })
      t.end()
    })

    t.test('authors', t => {
      t.test('contributors already exists', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            contributors: 'exists',
          }),
          AUTHORS: 'name from authors file',
        }))
        t.strictSame(content.contributors, 'exists')
      })
      t.test('contributors does not exist', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
          }),
          AUTHORS: 'name from authors file',
        }))
        t.strictSame(content.contributors, [{ name: 'name from authors file' }])
      })
      t.end()
    })

    t.test('readme', t => {
      t.test('already exists', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            readme: 'a file that exists',
          }),
          'README.md': 'readme file',
        }))
        t.strictSame(content.readme, 'a file that exists')
      })

      t.test('no readme at all', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
        }))
        t.match(content.readme, /No README/)
      })

      t.test('finds .md file', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'README.md': 'readme file',
        }))
        t.strictSame(content.readme, 'readme file')
      })

      t.test('finds README file', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          README: 'readme file',
        }))
        t.strictSame(content.readme, 'readme file')
      })

      t.test('ignores directory', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'README.md': {},
        }))
        t.match(content.readme, /No README/)
      })

      t.test('ignores non-md', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          README: 'no extension',
          'README.txt': 'txt file',
        }))
        t.strictSame(content.readme, 'no extension')
      })
      t.end()
    })

    t.test('gitHead', t => {
      t.test('HEAD with no ref', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          '.git': { HEAD: 'testgitref' },
        }))
        t.strictSame(content.gitHead, 'testgitref')
      })

      t.test('HEAD with ref', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          '.git': {
            HEAD: 'ref: testgitref',
            testgitref: 'filegitref',
          },
        }))
        t.strictSame(content.gitHead, 'filegitref')
      })

      t.test('HEAD with valid packed ref', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          '.git': {
            HEAD: 'ref: testgitref',
            'packed-refs': `${'a'.repeat(40)} testgitref`,
          },
        }))
        t.strictSame(content.gitHead, 'a'.repeat(40))
      })

      t.test('HEAD with empty packed ref', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          '.git': {
            HEAD: 'ref: testgitref',
            'packed-refs': '',
          },
        }))
        t.has(content, { gitHead: undefined })
      })

      t.test('HEAD with unparseable packed ref', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          '.git': {
            HEAD: 'ref: testgitref',
            'packed-refs': 'not sure what this is',
          },
        }))
        t.has(content, { gitHead: undefined })
      })

      t.test('HEAD with ref in subdir', async t => {
        const { content } = await testPrepare(t, ({
          sub: { 'package.json': JSON.stringify({}) },
          '.git': {
            HEAD: 'ref: testgitref',
            testgitref: 'filegitref',
          },
        }), { dir: (p) => join(p, 'sub') })
        t.strictSame(content.gitHead, 'filegitref')
      })

      t.test('HEAD with ref in subdir but stop at root', async t => {
        const { content } = await testPrepare(t, ({
          sub: { 'package.json': JSON.stringify({}) },
          '.git': {
            HEAD: 'ref: testgitref',
            testgitref: 'filegitref',
          },
        }), { dir: (p) => join(p, 'sub'), root: true })
        // rpj has no way prevent walking up all directories
        t.strictSame(content.gitHead, isLegacy ? 'filegitref' : undefined)
      })
      t.end()
    })

    t.test('fillTypes', t => {
      t.test('custom main field', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            main: './custom-path.js',
          }),
          'custom-path.d.ts': 'a file that exists',
        }))
        t.strictSame(content.types, './custom-path.d.ts')
      })

      t.test('inferred index.js', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'index.d.ts': 'a file that exists',
        }))
        t.strictSame(content.types, './index.d.ts')
      })

      t.test('subpaths and starting with ./', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            main: './a/b/c.js',
          }),
          a: { b: {
            'c.d.ts': 'a file that exists',
            'c.js': 'another file that exists',
          } },
        }))
        t.strictSame(content.types, './a/b/c.d.ts')
      })

      t.test('existing types', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({
            types: '@types/express',
          }),
          'index.d.ts': 'a file that exists',
        }))
        t.strictSame(content.types, '@types/express')
      })

      t.test('no types present', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
        }))
        t.has(content, { type: undefined })
      })

      // eslint-disable-next-line max-len
      // https://nodejs.org/api/esm.html#esm_writing_dual_packages_while_avoiding_or_minimizing_hazards

      t.skip('handles esm modules', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'exports.json': JSON.stringify({
            type: 'module',
            exports: {
              '.': './a/b/c.js',
              './a': './a.mjs',
            },
          }),
          a: { b: {
            'c.d.ts': 'a file that exists',
            'c.js': 'another file that exists',
          } },
        }))
        t.strictSame(content.types, './a/b/c/d.ts')
      })
      t.skip('handles esm modules with sugared exports', async t => {
        const { content } = await testPrepare(t, ({
          'package.json': JSON.stringify({}),
          'sugar.json': JSON.stringify({
            exports: './a/b.js',
          }),
          a: {
            'b.d.ts': 'a file that exists',
            'b.js': 'another file that exists',
          },
        }))
        t.strictSame(content.types, './a/b/c/d.ts')
      })
      t.end()
    })

    t.test('skipping steps', async t => {
      if (isLegacy) {
        return t.skip('rpj does not have configurable steps')
      }
      const packageJson = {
        scripts: { test: './node_modules/.bin/test' },
        main: './custom-path.js',
        bin: {
          foo: ['invalid'],
          bar: './nonexistent',
        },
        directories: {
          man: './man',
          bin: './bin',
        },
      }
      const { content } = await testPrepare(t, ({
        'package.json': JSON.stringify(packageJson),
        'build.gyp': '',
        'server.js': '',
        AUTHORS: 'me',
        man: { man1: { 'test.1': 'man test file' } },
        bin: { echo: '#!/bin/sh\n\necho "hello world"' },
        '.git': { HEAD: 'testgitref' },
        'custom-path.d.ts': 'a file that exists',
      }), { steps: [] })
      t.strictSame(content, packageJson)
      t.has(content, {
        // _id and normalizeData both do this one
        _id: undefined,
        authors: undefined,
        bundleDependencies: undefined,
        man: undefined,
        readme: undefined,
        gitHead: undefined,
        types: undefined,
      })
      t.has(content.scripts, {
        install: undefined,
        start: undefined,
      })
    })

    t.test('parseIndex', t => {
      t.test('no files at all', t =>
        t.rejects(testPrepare(t, ({})), { code: 'ENOENT', message: /package.json/ }))

      t.test('index.js present but empty', t =>
        t.rejects(testPrepare(t, ({
          'index.js': 'no comments here',
        })), { code: 'ENOENT', message: /package.json/ }))

      t.test('index.js present but invalid', t =>
        t.rejects(testPrepare(t, ({
          'index.js': `console.log("I don't close my comment")
/**package
{
}`,
        })), { code: 'ENOENT', message: /package.json/ }))

      t.test('parseable index.js', async t => {
        const parsed = await testPrepare(t, ({
          '.git': { HEAD: 'testgitref' },
          'index.js': `console.log('i am a package!')
/**package
{
  "name": "from-index",
  "version": "1.0.0",
  "description": "Package that is just an index.js"
}
**/`,
        }))
        t.strictSame(parsed.content, {
          _id: 'from-index@1.0.0',
          name: 'from-index',
          version: '1.0.0',
          description: 'Package that is just an index.js',
          readme: 'ERROR: No README data found!',
          gitHead: 'testgitref',
        })
        if (isLegacy) {
          t.skip('rpj does not save files')
        } else {
          await t.rejects(parsed.save(), {
            message: /No package.json/,
          })
        }
      })
      t.end()
    })
  })
}
