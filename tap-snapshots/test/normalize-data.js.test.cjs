/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/normalize-data.js TAP fixBugsField bugsTypos > must match snapshot 1`] = `
Array [
  "bugs['web'] should probably be bugs['url'].",
]
`

exports[`test/normalize-data.js TAP fixBugsField no bugs with repository with url > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBugsField non string > must match snapshot 1`] = `
Array [
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField object email > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBugsField object invalid url other > must match snapshot 1`] = `
Array [
  "bugs.url field must be a string url. Deleted.",
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField object invalid url string > must match snapshot 1`] = `
Array [
  "bugs.url field must be a string url. Deleted.",
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField object non email > must match snapshot 1`] = `
Array [
  "bugs.email field must be a string email. Deleted.",
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField object non-string email > must match snapshot 1`] = `
Array [
  "bugs.email field must be a string email. Deleted.",
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField object valid url > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBugsField repository w/ no bugs template > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBugsField string email > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBugsField string other > must match snapshot 1`] = `
Array [
  "Bug string field must be url, email, or {email,url}",
  "Normalized value of bugs field is an empty object. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixBugsField string url > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBundleDependenciesField bundledDependencies > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixBundleDependenciesField filters non strings > must match snapshot 1`] = `
Array [
  "Invalid bundleDependencies member: 100",
]
`

exports[`test/normalize-data.js TAP fixBundleDependenciesField non array > must match snapshot 1`] = `
Array [
  "Invalid 'bundleDependencies' list. Must be array of package names",
]
`

exports[`test/normalize-data.js TAP fixBundleDependenciesField non-dependency > must match snapshot 1`] = `
Array [
  "Non-dependency in bundleDependencies: @npm/test",
]
`

exports[`test/normalize-data.js TAP fixDescriptionField no description and no readme > must match snapshot 1`] = `
Array [
  "No description",
  "No README data",
]
`

exports[`test/normalize-data.js TAP fixDescriptionField non string > must match snapshot 1`] = `
Array [
  "'description' field should be a string",
]
`

exports[`test/normalize-data.js TAP fixDescriptionField summarizes readme > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixFilesField invalid entry > must match snapshot 1`] = `
Array [
  "Invalid filename in 'files' list: null",
  "Invalid filename in 'files' list: true",
]
`

exports[`test/normalize-data.js TAP fixFilesField non array > must match snapshot 1`] = `
Array [
  "Invalid 'files' member",
]
`

exports[`test/normalize-data.js TAP fixHomepageField no homepage with repository with url > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixHomepageField no protocol > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixHomepageField non hosted repository > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixHomepageField non string > must match snapshot 1`] = `
Array [
  "homepage field must be a string url. Deleted.",
]
`

exports[`test/normalize-data.js TAP fixHomepageField repository w/ no docs template > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixKeywordsField filters non strings > must match snapshot 1`] = `
Array [
  "keywords should be an array of strings",
]
`

exports[`test/normalize-data.js TAP fixKeywordsField non array > must match snapshot 1`] = `
Array [
  "keywords should be an array of strings",
]
`

exports[`test/normalize-data.js TAP fixKeywordsField splits string > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixLicenseField invalid > must match snapshot 1`] = `
Array [
  "license should be a valid SPDX license expression",
]
`

exports[`test/normalize-data.js TAP fixLicenseField missing > must match snapshot 1`] = `
Array [
  "No license field.",
]
`

exports[`test/normalize-data.js TAP fixLicenseField non string > must match snapshot 1`] = `
Array [
  "license should be a valid SPDX license expression",
]
`

exports[`test/normalize-data.js TAP fixManfield string > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixModulesField > must match snapshot 1`] = `
Array [
  "modules field is deprecated",
]
`

exports[`test/normalize-data.js TAP fixPeople author name url and email > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople author no name > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople author only name > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople author string > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople author web and mail > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople contributors > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixPeople maintainers > must match snapshot 1`] = `
Array []
`

exports[`test/normalize-data.js TAP fixReadmeField no readme > must match snapshot 1`] = `
Array [
  "No README data",
]
`

exports[`test/normalize-data.js TAP fixTypos top level > must match snapshot 1`] = `
Array [
  "script should probably be scripts.",
]
`
