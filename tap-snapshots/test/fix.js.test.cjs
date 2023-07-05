/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/fix.js TAP with changes binRefs scoped name > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes fixDependencies array dependencies > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "\\"dependencies\\" was converted from an array into an object",
]
`

exports[`test/fix.js TAP with changes fixDependencies false dependencies > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "Removed invalid \\"dependencies\\"",
]
`

exports[`test/fix.js TAP with changes fixDependencies git dependency > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "Normalized git reference to \\"dependencies.npm\\"",
]
`

exports[`test/fix.js TAP with changes fixDependencies non-string dependency > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "Removed invalid \\"dependencies.npm\\"",
]
`

exports[`test/fix.js TAP with changes fixDependencies string dependencies > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "\\"dependencies\\" was converted from a string into an object",
]
`

exports[`test/fix.js TAP with changes fixNameField scoped whitespace > must match snapshot 1`] = `
Array [
  "Whitespace was trimmed from \\"name\\"",
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes fixNameField unscoped whitespace > must match snapshot 1`] = `
Array [
  "Whitespace was trimmed from \\"name\\"",
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes fixRepositoryField full > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "\\"repository\\" was changed from a string to an object",
  "\\"repository.url\\" was normalized to \\"git+https://github.com/npm/cli.git\\"",
]
`

exports[`test/fix.js TAP with changes fixRepositoryField object no url > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes fixRepositoryField repositories array > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "\\"repository\\" was set to the first entry in \\"repositories\\" ([object Object])",
  "\\"repository\\" was changed from a string to an object",
]
`

exports[`test/fix.js TAP with changes fixRepositoryField shortcut > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "\\"repository\\" was changed from a string to an object",
  "\\"repository.url\\" was normalized to \\"git+https://github.com/npm/cli.git\\"",
]
`

exports[`test/fix.js TAP with changes fixVersionField none > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes fixVersionField unclean > must match snapshot 1`] = `
Array [
  "\\"version\\" was cleaned and set to \\"1.0.0\\"",
  "\\"bundleDependencies\\" was removed",
]
`

exports[`test/fix.js TAP with changes scriptpath non-object script entry > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "Invalid scripts.\\"test\\" was removed",
]
`

exports[`test/fix.js TAP with changes scriptpath non-object scripts > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was removed",
  "Removed invalid \\"scripts\\"",
]
`
