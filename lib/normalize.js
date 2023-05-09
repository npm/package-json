const normalizePackageBin = require('npm-normalize-package-bin')

const normalize = async (pkg) => {
  const data = pkg.content

  // remove _attributes
  for (const key in data) {
    if (key.startsWith('_')) {
      delete pkg.content[key]
    }
  }

  // _id
  if (data.name && data.version) {
    data._id = `${data.name}@${data.version}`
  }

  // bundleDependencies
  if (data.bundleDependencies === undefined && data.bundledDependencies !== undefined) {
    data.bundleDependencies = data.bundledDependencies
  }
  delete data.bundledDependencies
  const bd = data.bundleDependencies
  if (bd === true) {
    data.bundleDependencies = Object.keys(data.dependencies || {})
  } else if (bd && typeof bd === 'object') {
    if (!Array.isArray(bd)) {
      data.bundleDependencies = Object.keys(bd)
    }
  } else {
    data.bundleDependencies = []
  }

  // it was once common practice to list deps both in optionalDependencies and
  // in dependencies, to support npm versions that did not know about
  // optionalDependencies.  This is no longer a relevant need, so duplicating
  // the deps in two places is unnecessary and excessive.
  if (data.dependencies &&
    data.optionalDependencies && typeof data.optionalDependencies === 'object') {
    for (const name in data.optionalDependencies) {
      delete data.dependencies[name]
    }
    if (!Object.keys(data.dependencies).length) {
      delete data.dependencies
    }
  }

  // scripts
  if (typeof data.scripts === 'object') {
    for (const name in data.scripts) {
      if (typeof data.scripts[name] !== 'string') {
        delete data.scripts[name]
      }
    }
  } else {
    delete data.scripts
  }

  // funding
  if (data.funding && typeof data.funding === 'string') {
    data.funding = { url: data.funding }
  }

  // bin
  normalizePackageBin(data)
}

module.exports = normalize
