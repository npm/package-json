/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.js TAP create with data > should save package.json with name 1`] = `
{
  "name": "create-test"
}

`

exports[`test/index.js TAP create without data > should save empty package.json 1`] = `
{}

`

exports[`test/index.js TAP load create:true empty dir > should save empty package.json 1`] = `
{}

`

exports[`test/index.js TAP load create:true existing parseable package.json > package.json should match existing 1`] = `
{"name":"test-package"}
`

exports[`test/index.js TAP load custom formatting > should save back custom format to package.json 1`] = `
{"name":"@npmcli/test","version":"1.0.1","description":"Lorem ipsum dolor"}
`

exports[`test/index.js TAP load read, update content and write > should properly save content to a package.json 1`] = `
{
        "name": "@npmcli/test",
        "version": "1.0.1",
        "description": "Lorem ipsum dolor"
}

`

exports[`test/index.js TAP load update long package.json > should only update the defined property 1`] = `
{
  "version": "7.18.1",
  "name": "npm",
  "description": "a package manager for JavaScript",
  "workspaces": [
    "docs",
    "packages/*",
    "./new-workspace"
  ],
  "files": [
    "bin",
    "docs/content/**/*.md",
    "docs/output/**/*.html",
    "lib",
    "man"
  ],
  "keywords": [
    "install",
    "modules",
    "package manager",
    "package.json"
  ],
  "preferGlobal": true,
  "config": {
    "publishtest": false
  },
  "homepage": "https://docs.npmjs.com/",
  "author": "Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me)",
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli"
  },
  "bugs": {
    "url": "https://github.com/npm/cli/issues"
  },
  "directories": {
    "bin": "./bin",
    "doc": "./doc",
    "lib": "./lib",
    "man": "./man"
  },
  "main": "./lib/npm.js",
  "bin": {
    "npm": "bin/npm-cli.js",
    "npx": "bin/npx-cli.js"
  },
  "exports": {
    ".": [
      {
        "default": "./lib/npm.js"
      },
      "./lib/npm.js"
    ],
    "./package.json": "./package.json"
  },
  "dependencies": {
    "@npmcli/arborist": "^2.6.3",
    "@npmcli/ci-detect": "^1.2.0",
    "@npmcli/config": "^2.2.0",
    "@npmcli/run-script": "^1.8.5",
    "abbrev": "~1.1.1",
    "ansicolors": "~0.3.2",
    "ansistyles": "~0.1.3",
    "archy": "~1.0.0",
    "byte-size": "^7.0.1",
    "cacache": "^15.2.0",
    "chalk": "^4.1.0",
    "chownr": "^2.0.0",
    "cli-columns": "^3.1.2",
    "cli-table3": "^0.6.0",
    "columnify": "~1.5.4",
    "glob": "^7.1.7",
    "graceful-fs": "^4.2.6",
    "hosted-git-info": "^4.0.2",
    "ini": "^2.0.0",
    "init-package-json": "^2.0.3",
    "is-cidr": "^4.0.2",
    "json-parse-even-better-errors": "^2.3.1",
    "leven": "^3.1.0",
    "libnpmaccess": "^4.0.2",
    "libnpmdiff": "^2.0.4",
    "libnpmexec": "^2.0.0",
    "libnpmfund": "^1.1.0",
    "libnpmhook": "^6.0.2",
    "libnpmorg": "^2.0.2",
    "libnpmpack": "^2.0.1",
    "libnpmpublish": "^4.0.1",
    "libnpmsearch": "^3.1.1",
    "libnpmteam": "^2.0.3",
    "libnpmversion": "^1.2.1",
    "make-fetch-happen": "^9.0.3",
    "minipass": "^3.1.3",
    "minipass-pipeline": "^1.2.4",
    "mkdirp": "^1.0.4",
    "mkdirp-infer-owner": "^2.0.0",
    "ms": "^2.1.2",
    "node-gyp": "^7.1.2",
    "nopt": "^5.0.0",
    "npm-audit-report": "^2.1.5",
    "npm-package-arg": "^8.1.5",
    "npm-pick-manifest": "^6.1.1",
    "npm-profile": "^5.0.3",
    "npm-registry-fetch": "^11.0.0",
    "npm-user-validate": "^1.0.1",
    "npmlog": "~4.1.2",
    "opener": "^1.5.2",
    "pacote": "^11.3.3",
    "parse-conflict-json": "^1.1.1",
    "qrcode-terminal": "^0.12.0",
    "read": "~1.0.7",
    "read-package-json": "^3.0.1",
    "read-package-json-fast": "^2.0.2",
    "readdir-scoped-modules": "^1.1.0",
    "rimraf": "^3.0.2",
    "semver": "^7.3.5",
    "ssri": "^8.0.1",
    "tar": "^6.1.0",
    "text-table": "~0.2.0",
    "tiny-relative-date": "^1.3.0",
    "treeverse": "^1.0.4",
    "validate-npm-package-name": "~3.0.0",
    "which": "^2.0.2",
    "write-file-atomic": "^3.0.3"
  },
  "bundleDependencies": [
    "@npmcli/arborist",
    "@npmcli/ci-detect",
    "@npmcli/config",
    "@npmcli/run-script",
    "abbrev",
    "ansicolors",
    "ansistyles",
    "archy",
    "byte-size",
    "cacache",
    "chalk",
    "chownr",
    "cli-columns",
    "cli-table3",
    "columnify",
    "glob",
    "graceful-fs",
    "hosted-git-info",
    "ini",
    "init-package-json",
    "is-cidr",
    "json-parse-even-better-errors",
    "leven",
    "libnpmaccess",
    "libnpmdiff",
    "libnpmexec",
    "libnpmfund",
    "libnpmhook",
    "libnpmorg",
    "libnpmpack",
    "libnpmpublish",
    "libnpmsearch",
    "libnpmteam",
    "libnpmversion",
    "make-fetch-happen",
    "minipass",
    "minipass-pipeline",
    "mkdirp",
    "mkdirp-infer-owner",
    "ms",
    "node-gyp",
    "nopt",
    "npm-audit-report",
    "npm-package-arg",
    "npm-pick-manifest",
    "npm-profile",
    "npm-registry-fetch",
    "npm-user-validate",
    "npmlog",
    "opener",
    "pacote",
    "parse-conflict-json",
    "qrcode-terminal",
    "read",
    "read-package-json",
    "read-package-json-fast",
    "readdir-scoped-modules",
    "rimraf",
    "semver",
    "ssri",
    "tar",
    "text-table",
    "tiny-relative-date",
    "treeverse",
    "validate-npm-package-name",
    "which",
    "write-file-atomic"
  ],
  "devDependencies": {
    "eslint": "^7.26.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-standard": "^5.0.0",
    "licensee": "^8.2.0",
    "tap": "^32.0.0"
  },
  "scripts": {
    "dumpconf": "env | grep npm | sort | uniq",
    "preversion": "bash scripts/update-authors.sh && git add AUTHORS && git commit -m /"update AUTHORS/" || true",
    "licenses": "licensee --production --errors-only",
    "test": "tap",
    "check-coverage": "tap",
    "snap": "tap",
    "postsnap": "make -s docs/content/*/*.md",
    "test:nocleanup": "NO_TEST_CLEANUP=1 npm run test --",
    "sudotest": "sudo npm run test --",
    "sudotest:nocleanup": "sudo NO_TEST_CLEANUP=1 npm run test --",
    "posttest": "npm run lint",
    "eslint": "eslint",
    "lint": "npm run eslint -- test/lib test/bin lib scripts docs smoke-tests",
    "lintfix": "npm run lint -- --fix",
    "prelint": "rimraf test/npm_cache*",
    "resetdeps": "bash scripts/resetdeps.sh",
    "smoke-tests": "tap smoke-tests/index.js",
    "new-script": "touch something",
    "new-foo": "touch foo"
  },
  "tap": {
    "test-env": [
      "LC_ALL=sk"
    ],
    "color": 1,
    "files": "test/{lib,bin}",
    "coverage-map": "test/coverage-map.js",
    "check-coverage": true,
    "timeout": 600
  },
  "license": "Artistic-2.0",
  "engines": {
    "node": ">=10"
  },
  "optionalDependencies": {
    "ntl": "^5.1.0"
  }
}

`

exports[`test/index.js TAP load update long package.json > should properly write updated pacakge.json contents 1`] = `
{
  "version": "7.18.1",
  "name": "npm",
  "description": "a package manager for JavaScript",
  "workspaces": [
    "docs",
    "packages/*",
    "./new-workspace"
  ],
  "files": [
    "bin",
    "docs/content/**/*.md",
    "docs/output/**/*.html",
    "lib",
    "man"
  ],
  "keywords": [
    "install",
    "modules",
    "package manager",
    "package.json"
  ],
  "preferGlobal": true,
  "config": {
    "publishtest": false
  },
  "homepage": "https://docs.npmjs.com/",
  "author": "Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me)",
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli"
  },
  "bugs": {
    "url": "https://github.com/npm/cli/issues"
  },
  "directories": {
    "bin": "./bin",
    "doc": "./doc",
    "lib": "./lib",
    "man": "./man"
  },
  "main": "./lib/npm.js",
  "bin": {
    "npm": "bin/npm-cli.js",
    "npx": "bin/npx-cli.js"
  },
  "exports": {
    ".": [
      {
        "default": "./lib/npm.js"
      },
      "./lib/npm.js"
    ],
    "./package.json": "./package.json"
  },
  "dependencies": {
    "@npmcli/arborist": "^2.6.3",
    "@npmcli/ci-detect": "^1.2.0",
    "@npmcli/config": "^2.2.0",
    "@npmcli/run-script": "^1.8.5",
    "abbrev": "~1.1.1",
    "ansicolors": "~0.3.2",
    "ansistyles": "~0.1.3",
    "archy": "~1.0.0",
    "byte-size": "^7.0.1",
    "cacache": "^15.2.0",
    "chalk": "^4.1.0",
    "chownr": "^2.0.0",
    "cli-columns": "^3.1.2",
    "cli-table3": "^0.6.0",
    "columnify": "~1.5.4",
    "glob": "^7.1.7",
    "graceful-fs": "^4.2.6",
    "hosted-git-info": "^4.0.2",
    "ini": "^2.0.0",
    "init-package-json": "^2.0.3",
    "is-cidr": "^4.0.2",
    "json-parse-even-better-errors": "^2.3.1",
    "leven": "^3.1.0",
    "libnpmaccess": "^4.0.2",
    "libnpmdiff": "^2.0.4",
    "libnpmexec": "^2.0.0",
    "libnpmfund": "^1.1.0",
    "libnpmhook": "^6.0.2",
    "libnpmorg": "^2.0.2",
    "libnpmpack": "^2.0.1",
    "libnpmpublish": "^4.0.1",
    "libnpmsearch": "^3.1.1",
    "libnpmteam": "^2.0.3",
    "libnpmversion": "^1.2.1",
    "make-fetch-happen": "^9.0.3",
    "minipass": "^3.1.3",
    "minipass-pipeline": "^1.2.4",
    "mkdirp": "^1.0.4",
    "mkdirp-infer-owner": "^2.0.0",
    "ms": "^2.1.2",
    "node-gyp": "^7.1.2",
    "nopt": "^5.0.0",
    "npm-audit-report": "^2.1.5",
    "npm-package-arg": "^8.1.5",
    "npm-pick-manifest": "^6.1.1",
    "npm-profile": "^5.0.3",
    "npm-registry-fetch": "^11.0.0",
    "npm-user-validate": "^1.0.1",
    "npmlog": "~4.1.2",
    "opener": "^1.5.2",
    "pacote": "^11.3.3",
    "parse-conflict-json": "^1.1.1",
    "qrcode-terminal": "^0.12.0",
    "read": "~1.0.7",
    "read-package-json": "^3.0.1",
    "read-package-json-fast": "^2.0.2",
    "readdir-scoped-modules": "^1.1.0",
    "rimraf": "^3.0.2",
    "semver": "^7.3.5",
    "ssri": "^8.0.1",
    "tar": "^6.1.0",
    "text-table": "~0.2.0",
    "tiny-relative-date": "^1.3.0",
    "treeverse": "^1.0.4",
    "validate-npm-package-name": "~3.0.0",
    "which": "^2.0.2",
    "write-file-atomic": "^3.0.3"
  },
  "bundleDependencies": [
    "@npmcli/arborist",
    "@npmcli/ci-detect",
    "@npmcli/config",
    "@npmcli/run-script",
    "abbrev",
    "ansicolors",
    "ansistyles",
    "archy",
    "byte-size",
    "cacache",
    "chalk",
    "chownr",
    "cli-columns",
    "cli-table3",
    "columnify",
    "glob",
    "graceful-fs",
    "hosted-git-info",
    "ini",
    "init-package-json",
    "is-cidr",
    "json-parse-even-better-errors",
    "leven",
    "libnpmaccess",
    "libnpmdiff",
    "libnpmexec",
    "libnpmfund",
    "libnpmhook",
    "libnpmorg",
    "libnpmpack",
    "libnpmpublish",
    "libnpmsearch",
    "libnpmteam",
    "libnpmversion",
    "make-fetch-happen",
    "minipass",
    "minipass-pipeline",
    "mkdirp",
    "mkdirp-infer-owner",
    "ms",
    "node-gyp",
    "nopt",
    "npm-audit-report",
    "npm-package-arg",
    "npm-pick-manifest",
    "npm-profile",
    "npm-registry-fetch",
    "npm-user-validate",
    "npmlog",
    "opener",
    "pacote",
    "parse-conflict-json",
    "qrcode-terminal",
    "read",
    "read-package-json",
    "read-package-json-fast",
    "readdir-scoped-modules",
    "rimraf",
    "semver",
    "ssri",
    "tar",
    "text-table",
    "tiny-relative-date",
    "treeverse",
    "validate-npm-package-name",
    "which",
    "write-file-atomic"
  ],
  "devDependencies": {
    "eslint": "^7.26.0",
    "eslint-plugin-import": "^2.23.4",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^5.1.0",
    "eslint-plugin-standard": "^5.0.0",
    "licensee": "^8.2.0",
    "tap": "^32.0.0"
  },
  "scripts": {
    "dumpconf": "env | grep npm | sort | uniq",
    "preversion": "bash scripts/update-authors.sh && git add AUTHORS && git commit -m /"update AUTHORS/" || true",
    "licenses": "licensee --production --errors-only",
    "test": "tap",
    "check-coverage": "tap",
    "snap": "tap",
    "postsnap": "make -s docs/content/*/*.md",
    "test:nocleanup": "NO_TEST_CLEANUP=1 npm run test --",
    "sudotest": "sudo npm run test --",
    "sudotest:nocleanup": "sudo NO_TEST_CLEANUP=1 npm run test --",
    "posttest": "npm run lint",
    "eslint": "eslint",
    "lint": "npm run eslint -- test/lib test/bin lib scripts docs smoke-tests",
    "lintfix": "npm run lint -- --fix",
    "prelint": "rimraf test/npm_cache*",
    "resetdeps": "bash scripts/resetdeps.sh",
    "smoke-tests": "tap smoke-tests/index.js",
    "new-script": "touch something"
  },
  "tap": {
    "test-env": [
      "LC_ALL=sk"
    ],
    "color": 1,
    "files": "test/{lib,bin}",
    "coverage-map": "test/coverage-map.js",
    "check-coverage": true,
    "timeout": 600
  },
  "license": "Artistic-2.0",
  "engines": {
    "node": ">=10"
  },
  "optionalDependencies": {
    "ntl": "^5.1.0"
  }
}

`

exports[`test/index.js TAP read package > must match snapshot 1`] = `
Object {
  "name": "@npmcli/test",
  "version": "1.0.0",
}
`
