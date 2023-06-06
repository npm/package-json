# Changelog

## [3.1.1](https://github.com/npm/package-json/compare/v3.1.0...v3.1.1) (2023-06-06)

### Bug Fixes

* [`9e0859b`](https://github.com/npm/package-json/commit/9e0859beec914696166bf74b7e34596dcb267f2a) [#36](https://github.com/npm/package-json/pull/36) make `prepare` and `normalize` have feature parity with legacy packages (@lukekarrys)

### Dependencies

* [`7fcfa5a`](https://github.com/npm/package-json/commit/7fcfa5a8b3d56310e5afbac19e4e0524ebe885f0) [#36](https://github.com/npm/package-json/pull/36) `@npmcli/git@4.1.0`

## [3.1.0](https://github.com/npm/package-json/compare/v3.0.0...v3.1.0) (2023-05-15)

### Features

* [`f32c0d9`](https://github.com/npm/package-json/commit/f32c0d9283c9b1b6f1af91b05e0f7250ef500764) [#32](https://github.com/npm/package-json/pull/32) add prepare function (@wraithgar)
* [`fbbf401`](https://github.com/npm/package-json/commit/fbbf40173c858fdb9c44c6b7e4b0326dc7033428) [#32](https://github.com/npm/package-json/pull/32) add normalize function (@wraithgar)

### Dependencies

* [`278b65f`](https://github.com/npm/package-json/commit/278b65fb854e3696848d2b89156fdff978b4eaec) [#32](https://github.com/npm/package-json/pull/32) add new dependency `normalize-package-data@5.0.0`
* [`4588e3c`](https://github.com/npm/package-json/commit/4588e3c69eaf022c190cb8ddd895ce72e1436bb3) [#32](https://github.com/npm/package-json/pull/32) add new dependency `glob@10.2.2`
* [`2c5aaaa`](https://github.com/npm/package-json/commit/2c5aaaac80af9494f87925d074a487e79af0e979) [#32](https://github.com/npm/package-json/pull/32) add new dependency `npm-normalize-package-bin@3.0.1`

## [3.0.0](https://github.com/npm/package-json/compare/v2.0.0...v3.0.0) (2022-10-12)

### ⚠️ BREAKING CHANGES

* `@npmcli/package-json` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`7617680`](https://github.com/npm/package-json/commit/7617680e7495bc92bd9c0a34202c394b12c32bd2) [#10](https://github.com/npm/package-json/pull/10) postinstall for dependabot template-oss PR (@lukekarrys)

### Dependencies

* [`391bcb4`](https://github.com/npm/package-json/commit/391bcb4c11d00736ef0f283153531ab269e70be3) [#17](https://github.com/npm/package-json/pull/17) bump json-parse-even-better-errors from 2.3.1 to 3.0.0

## [2.0.0](https://github.com/npm/package-json/compare/v1.0.1...v2.0.0) (2022-04-05)


### ⚠ BREAKING CHANGES

* this drops support for node10 and non-LTS versions of node 12 and node 14

### Documentation

* fixed usage example ([d2c8734](https://github.com/npm/package-json/commit/d2c8734d1d7f3e68165bdf95b6099c1682bc5a37))


### Dependencies

* @npmcli/template-oss@3.2.2 ([a9676d9](https://github.com/npm/package-json/commit/a9676d922eecf677c624e4f30b20035f46aa9ebc))
