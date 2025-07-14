const t = require('tap')
const PackageJson = require('../')

const base = {
  name: '@npmcli/test',
  description: 'test fixture',
  version: '0.0.0',
  readme: 'test fixture package',
  license: 'UNLICENSED',
}

async function normalizeData (t, data) {
  const changes = []
  const p = new PackageJson().fromContent(data)
  await p.normalize({ steps: 'normalizeData', changes })
  t.matchSnapshot(changes)
  return p
}

t.test('fixDescriptionField', async t => {
  t.test('non string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      description: true,
    })
    t.equal(content.description, base.readme)
  })

  t.test('no description and no readme', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      description: undefined,
      readme: undefined,
    })
    t.equal(content.description, undefined)
  })

  t.test('summarizes readme', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      description: undefined,
      readme: '# test package\ntest fixture readme\nsecond line\n\nthird line',
    })
    t.equal(content.description, 'test fixture readme second line')
  })
})

t.test('fixModulesField', async t => {
  const { content } = await normalizeData(t, {
    ...base,
    modules: true,
  })
  t.equal(content.modules, undefined)
})

t.test('fixFilesField', async t => {
  t.test('non array', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      files: './index.js',
    })
    t.equal(content.files, undefined)
  })

  t.test('invalid entry', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      files: [null, true, './index.js'],
    })
    t.same(content.files, ['./index.js'])
  })
})

t.test('fixManfield', async t => {
  t.test('string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      man: './man',
    })
    t.same(content.man, ['./man'])
  })
})

t.test('fixBugsField', async t => {
  t.test('no bugs with repository with url', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      repository: {
        url: 'git+https://github.com/npm/package-json.git',
      },
    })
    t.same(content.bugs, { url: 'https://github.com/npm/package-json/issues' })
  })

  t.test('non string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: {},
    })
    t.same(content.bugs, undefined)
  })

  t.test('string email', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: 'support@npmjs.org',
    })
    t.same(content.bugs, { email: 'support@npmjs.org' })
  })

  t.test('string url', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: 'https://npmjs.org',
    })
    t.same(content.bugs, { url: 'https://npmjs.org' })
  })

  t.test('string other', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: 'something else',
    })
    t.equal(content.bugs, undefined)
  })

  t.test('bugsTypos', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { web: 'https://npmjs.org' },
    })
    t.same(content.bugs, { url: 'https://npmjs.org' })
  })

  t.test('object valid url', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { url: 'https://npmjs.org' },
    })
    t.same(content.bugs, { url: 'https://npmjs.org' })
  })

  t.test('object invalid url string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { url: 'homepage' },
    })
    t.equal(content.bugs, undefined)
  })

  t.test('object invalid url other', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { url: {} },
    })
    t.equal(content.bugs, undefined)
  })

  t.test('object email', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { email: 'support@npmjs.org' },
    })
    t.same(content.bugs, { email: 'support@npmjs.org' })
  })

  t.test('object non email', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { email: 'support' },
    })
    t.equal(content.bugs, undefined)
  })

  t.test('object non-string email', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bugs: { email: {} },
    })
    t.equal(content.bugs, undefined)
  })

  t.test('repository w/ no bugs template', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      repository: { url: 'https://git.sr.ht/example/repo.git' },
    })
    t.equal(content.bugs, undefined)
  })
})

t.test('fixKeywordsField', async t => {
  t.test('splits string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      keywords: 'a, b, c',
    })
    t.same(content.keywords, ['a', 'b', 'c'])
  })

  t.test('non array', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      keywords: {},
    })
    t.equal(content.keywords, undefined)
  })

  t.test('filters non strings', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      keywords: ['a', 100, 'c'],
    })
    t.same(content.keywords, ['a', 'c'])
  })
})

t.test('fixBundleDependenciesField', async t => {
  t.test('bundledDependencies', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      dependencies: { '@npm/test': '*' },
      bundledDependencies: ['@npm/test'],
    })
    t.equal(content.bundledDependencies, undefined)
    t.same(content.bundleDependencies, ['@npm/test'])
  })

  t.test('non array', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bundleDependencies: '@npm/test',
    })
    t.equal(content.bundleDependencies, undefined)
  })

  t.test('filters non strings', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      dependencies: { '@npm/test': '*' },
      bundleDependencies: ['@npm/test', 100],
    })
    t.same(content.bundleDependencies, ['@npm/test'])
  })

  t.test('non-dependency', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      bundleDependencies: ['@npm/test'],
    })
    t.same(content.bundleDependencies, ['@npm/test'])
  })
})

t.test('fixHomepageField', async t => {
  t.test('no homepage with repository with url', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      repository: {
        url: 'git+https://github.com/npm/package-json.git',
      },
    })
    t.equal(content.homepage, 'https://github.com/npm/package-json#readme')
  })

  t.test('non string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      homepage: true,
    })
    t.equal(content.homepage, undefined)
  })

  t.test('no protocol', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      homepage: 'npmjs.org',
    })
    t.equal(content.homepage, 'http://npmjs.org')
  })

  t.test('repository w/ no docs template', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      repository: { url: 'https://git.sr.ht/example/repo.git' },
    })
    t.equal(content.docs, undefined)
  })

  t.test('non hosted repository', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      repository: { url: 'https://npmjs.org' },
    })
    t.equal(content.docs, undefined)
  })
})

t.test('fixReadmeField', async t => {
  t.test('no readme', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      readme: undefined,
    })
    t.equal(content.readme, 'ERROR: No README data found!')
  })
})

t.test('fixLicenseField', async t => {
  t.test('missing', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      license: undefined,
    })
    t.equal(content.license, undefined)
  })

  t.test('non string', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      license: 100,
    })
    t.equal(content.license, 100)
  })

  t.test('invalid', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      license: 'BESPOKE LICENSE',
    })
    t.equal(content.license, 'BESPOKE LICENSE')
  })
})

t.test('fixPeople', async t => {
  t.test('author', async t => {
    t.test('string', async t => {
      const { content } = await normalizeData(t, {
        ...base,
        author: 'npm',
      })
      t.same(content.author, { name: 'npm' })
    })

    t.test('no name', async t => {
      const { content } = await normalizeData(t, {
        ...base,
        author: {
          url: 'https://npmjs.org',
        },
      })
      t.same(content.author, {
        url: 'https://npmjs.org',
      })
    })

    t.test('name url and email', async t => {
      const { content } = await normalizeData(t, {
        ...base,
        author: {
          name: 'npm',
          url: 'https://npmjs.org',
          email: 'support@npmjs.org',
        },
      })
      t.same(content.author, {
        name: 'npm',
        url: 'https://npmjs.org',
        email: 'support@npmjs.org',
      })
    })

    t.test('web and mail', async t => {
      const { content } = await normalizeData(t, {
        ...base,
        author: {
          name: 'npm',
          web: 'https://npmjs.org',
          mail: 'support@npmjs.org',
        },
      })
      t.same(content.author, {
        name: 'npm',
        url: 'https://npmjs.org',
        email: 'support@npmjs.org',
      })
    })

    t.test('only name', async t => {
      const { content } = await normalizeData(t, {
        ...base,
        author: {
          name: 'npm',
        },
      })
      t.same(content.author, { name: 'npm' })
    })
  })

  t.test('maintainers', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      maintainers: ['npm'],
    })
    t.same(content.maintainers, [{ name: 'npm' }])
  })

  t.test('contributors', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      contributors: ['npm'],
    })
    t.same(content.contributors, [{ name: 'npm' }])
  })
})

t.test('fixTypos', async t => {
  t.test('top level', async t => {
    const { content } = await normalizeData(t, {
      ...base,
      script: {
        lint: 'npm run lint',
      },
    })
    t.same(content.script, { lint: 'npm run lint' })
  })
})
