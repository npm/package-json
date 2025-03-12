/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies change name if bundleDependencies is not present > must match snapshot 1`] = `
Array [
  "Deleted incorrect \\"bundledDependencies\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies dont array-ify if its an array already > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies handle bundleDependencies object > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was changed from an object to an array",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies handle bundleDependencies: false > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was changed from \\"false\\" to \\"[]\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies handle bundleDependencies: true > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was auto-populated from \\"dependencies\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies handle bundleDependencies: true with no deps > must match snapshot 1`] = `
Array [
  "\\"bundleDependencies\\" was auto-populated from \\"dependencies\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up bundleDependencies handle bundledDependencies: true > must match snapshot 1`] = `
Array [
  "Deleted incorrect \\"bundledDependencies\\"",
  "\\"bundleDependencies\\" was auto-populated from \\"dependencies\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up scripts delete non-object scripts > must match snapshot 1`] = `
Array [
  "Removed invalid \\"scripts\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes clean up scripts delete non-string script targets > must match snapshot 1`] = `
Array [
  "Invalid scripts.\\"bar\\" was removed",
  "Invalid scripts.\\"baz\\" was removed",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes cleanup bins delete string bin when no name > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes cleanup bins handle string when a name is set > must match snapshot 1`] = `
Array [
  "\\"bin\\" was converted to an object",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes cleanup bins remove non-object bin > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes cleanup bins remove non-string bin values > must match snapshot 1`] = `
Array [
  "removed invalid \\"bin[y]\\"",
  "removed invalid \\"bin[z]\\"",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes convert funding string to object > must match snapshot 1`] = `
Array [
  "\\"funding\\" was changed to an object with a url attribute",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes dedupe optional deps out of regular deps choose optional deps in conflict, leaving populated dependencies > must match snapshot 1`] = `
Array [
  "optionalDependencies.\\"whowins\\" was removed",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes dedupe optional deps out of regular deps choose optional deps in conflict, removing empty dependencies > must match snapshot 1`] = `
Array [
  "optionalDependencies.\\"whowins\\" was removed",
  "Empty \\"optionalDependencies\\" was removed",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes dedupe optional deps out of regular deps do not create regular deps if only optional specified > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes directories.bin > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes normalize bin > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes set _id if name and version set > must match snapshot 1`] = `
Array [
  "\\"_id\\" was set to a@1.2.3",
]
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes skipping steps > must match snapshot 1`] = `
Array []
`

exports[`test/normalize.js TAP @npmcli/package-json - with changes strip _fields > must match snapshot 1`] = `
Array [
  "\\"_lodash\\" was removed",
  "\\"_id\\" was set to underscore@1.2.3",
]
`
