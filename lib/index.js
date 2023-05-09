const { readFile, writeFile } = require('fs/promises')
const { resolve } = require('path')
const updateDeps = require('./update-dependencies.js')
const updateScripts = require('./update-scripts.js')
const updateWorkspaces = require('./update-workspaces.js')
const normalize = require('./normalize.js')

const parseJSON = require('json-parse-even-better-errors')

// a list of handy specialized helper functions that take
// care of special cases that are handled by the npm cli
const knownSteps = new Set([
  updateDeps,
  updateScripts,
  updateWorkspaces,
])

// list of all keys that are handled by "knownSteps" helpers
const knownKeys = new Set([
  ...updateDeps.knownKeys,
  'scripts',
  'workspaces',
])

class PackageJson {
  // default behavior, just loads and parses
  static async load (path) {
    return await new PackageJson(path).load()
  }

  // read-package-json-fast compatible behavior
  static async normalize (path) {
    return await new PackageJson(path).normalize()
  }

  #filename
  #path
  #manifest = {}
  #readFileContent = ''

  constructor (path) {
    this.#path = path
    this.#filename = resolve(path, 'package.json')
  }

  async load () {
    try {
      this.#readFileContent =
        await readFile(this.#filename, 'utf8')
    } catch (err) {
      err.message = `Could not read package.json: ${err}`
      throw err
    }

    try {
      this.#manifest =
        parseJSON(this.#readFileContent)
    } catch (err) {
      err.message = `Invalid package.json: ${err}`
      throw err
    }

    return this
  }

  get content () {
    return this.#manifest
  }

  update (content) {
    // validates both current manifest and content param
    const invalidContent =
      typeof this.#manifest !== 'object'
        || typeof content !== 'object'
    if (invalidContent) {
      throw Object.assign(
        new Error(`Can't update invalid package.json data`),
        { code: 'EPACKAGEJSONUPDATE' }
      )
    }

    for (const step of knownSteps) {
      this.#manifest = step({ content, originalContent: this.#manifest })
    }

    // unknown properties will just be overwitten
    for (const [key, value] of Object.entries(content)) {
      if (!knownKeys.has(key)) {
        this.#manifest[key] = value
      }
    }

    return this
  }

  async save () {
    const {
      [Symbol.for('indent')]: indent,
      [Symbol.for('newline')]: newline,
    } = this.#manifest

    const format = indent === undefined ? '  ' : indent
    const eol = newline === undefined ? '\n' : newline
    const fileContent = `${
      JSON.stringify(this.#manifest, null, format)
    }\n`
      .replace(/\n/g, eol)

    if (fileContent.trim() !== this.#readFileContent.trim()) {
      return await writeFile(this.#filename, fileContent)
    }
  }

  async normalize () {
    await this.load()
    await normalize(this)
    return this
  }
}

module.exports = PackageJson
