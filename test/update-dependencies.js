const t = require('tap')
const updateDeps = require('../lib/update-dependencies.js')

t.test('no original content', async t => {
  const result = updateDeps({
    content: {
      name: 'missing-package-json-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
  })
  t.strictSame(
    result,
    {
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
    'should return new deps content'
  )
})

t.test('existing content', async t => {
  const result = updateDeps({
    content: {
      name: 'missing-package-json-test',
      version: '1.0.0',
      dependencies: {},
    },
    originalContent: {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
    },
    'should write new package.json with tree data'
  )
})

t.test('unchanged package.json', async t => {
  const result = updateDeps({
    content: {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
    originalContent: {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'existing-package-json-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {
        abbrev: '^1.0.0',
      },
    },
    'should keep package.json with same data'
  )
})

t.test('existing package.json with optionalDependencies', async t => {
  const result = updateDeps({
    content: {
      name: 'missing-package-json-optional-test',
      version: '1.0.0',
      dependencies: {
        abbrev: '^1.0.0',
      },
      optionalDependencies: {
        abbrev: '^1.0.0',
      },
    },
    originalContent: {
      name: 'existing-package-json-optional-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      dependencies: {},
    },
  })
  t.strictSame(
    result,
    {
      name: 'existing-package-json-optional-test',
      version: '1.0.0',
      bin: './file.js',
      funding: 'http://example.com',
      optionalDependencies: {
        abbrev: '^1.0.0',
      },
    },
    'should add only optionalDependencies to result content'
  )
})

t.test('existing package.json with optionalDependencies and some existing dependencies',
  async t => {
    const result = updateDeps({
      content: {
        name: 'missing-package-json-optional-test',
        version: '1.0.0',
        dependencies: {
          abbrev: '^1.0.0',
          foo: '^1.0.0',
          bar: '^1.2.3',
        },
        optionalDependencies: {
          abbrev: '^1.0.0',
        },
      },
      originalContent: {
        name: 'existing-package-json-optional-test',
        version: '1.0.0',
        bin: './file.js',
        funding: 'http://example.com',
        dependencies: {
          foo: '^1.0.0',
          bar: '^1.2.3',
        },
      },
    })
    t.strictSame(
      result,
      {
        name: 'existing-package-json-optional-test',
        version: '1.0.0',
        bin: './file.js',
        funding: 'http://example.com',
        dependencies: {
          foo: '^1.0.0',
          bar: '^1.2.3',
        },
        optionalDependencies: {
          abbrev: '^1.0.0',
        },
      },
      'should add only optionalDependencies to result content and preserve original dependencies'
    )
  })

t.test('preserve deps duplicated in peer and prod', async t => {
  const result = updateDeps({
    content: {
      name: 'duplicated-peer',
      version: '1.0.0',
      peerDependencies: {
        foo: '2.x',
      },
    },
    originalContent: {
      name: 'duplicated-peer',
      version: '1.0.0',
      dependencies: {
        foo: '1.2.3', // being weirdly tricky
      },
      peerDependencies: {
        foo: '1.x',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'duplicated-peer',
      version: '1.0.0',
      peerDependencies: {
        foo: '2.x', // now they match.
      },
      dependencies: {
        foo: '2.x',
      },
    },
    'peer/prod duplication preserved'
  )
})

t.test('remove peer/prod dupes from both if removed from peer', async t => {
  const result = updateDeps({
    content: {
      name: 'duplicated-peer',
      version: '1.0.0',
      dependencies: {},
      peerDependencies: {
        bar: '1.x',
      },
    },
    originalContent: {
      name: 'duplicated-peer',
      version: '1.0.0',
      dependencies: {
        foo: '1.2.3', // being weirdly tricky
      },
      peerDependencies: {
        foo: '1.x',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'duplicated-peer',
      version: '1.0.0',
      // no dupe
      peerDependencies: {
        bar: '1.x',
      },
    },
    'peer/prod foo removed'
  )
})

t.test('deps are alphabetized', async t => {
  const result = updateDeps({
    content: {
      name: 'unordered-deps',
      version: '1.0.0',
      dependencies: {
        b: '1.0.0',
        a: '1.0.0',
        d: '1.0.0',
        c: '1.0.0',
      },
    },
  })
  t.matchSnapshot(
    JSON.stringify(result),
    'should order dep keys'
  )
})

t.test('missing dependency when updating previously duplicated dep', async t => {
  const result = updateDeps({
    content: {
      name: 'duplicated-peer',
      version: '1.0.0',
      dependencies: {},
      peerDependencies: {
        foo: '2.x',
      },
    },
    originalContent: {
      name: 'duplicated-peer',
      version: '1.0.0',
      dependencies: {
        foo: '1.x',
      },
      peerDependencies: {
        foo: '1.x',
      },
    },
  })
  t.strictSame(
    result,
    {
      name: 'duplicated-peer',
      version: '1.0.0',
      // no dupe
      dependencies: {
        foo: '2.x',
      },
      peerDependencies: {
        foo: '2.x',
      },
    },
    'should include dependency in result even if property was missing in update'
  )
})
