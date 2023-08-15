# Changelog

## [5.0.0](https://github.com/npm/package-json/compare/v4.0.1...v5.0.0) (2023-08-15)

### ⚠️ BREAKING CHANGES

* support for node 14 has been removed

### Bug Fixes

* [`6345d76`](https://github.com/npm/package-json/commit/6345d761461edb9f52e6bb2739909f8dac92d8cf) [#53](https://github.com/npm/package-json/pull/53) drop node14 support (@lukekarrys)

### Dependencies

* [`f08b79e`](https://github.com/npm/package-json/commit/f08b79eceefe4e513ae01b79aae59418e7789348) [#55](https://github.com/npm/package-json/pull/55) bump normalize-package-data from 5.0.0 to 6.0.0
* [`5c4de21`](https://github.com/npm/package-json/commit/5c4de2145727548b13f0e025f740c37f1253ac74) [#52](https://github.com/npm/package-json/pull/52) bump hosted-git-info from 6.1.1 to 7.0.0
* [`02e0ef2`](https://github.com/npm/package-json/commit/02e0ef2382a09fd9e0543b6babaff22bcd7dab13) [#51](https://github.com/npm/package-json/pull/51) bump @npmcli/git from 4.1.0 to 5.0.0

## [4.0.1](https://github.com/npm/package-json/compare/v4.0.0...v4.0.1) (2023-07-17)

### Bug Fixes

* [`04bc9cf`](https://github.com/npm/package-json/commit/04bc9cf4934a4eedb26aa90b376ac7be5878c502) [#49](https://github.com/npm/package-json/pull/49) don't report node_modules/.bin fix unless it happened (@wraithgar)
* [`3c1cb66`](https://github.com/npm/package-json/commit/3c1cb6610b4452872d35b8d3ed23e08400057649) [#49](https://github.com/npm/package-json/pull/49) inline bin normalization code (@wraithgar)
* [`e97e423`](https://github.com/npm/package-json/commit/e97e423f814edb803872076731b680dad84f184e) [#48](https://github.com/npm/package-json/pull/48) properly parse strict flag on version check (#48) (@wraithgar)
* [`3bcf2fd`](https://github.com/npm/package-json/commit/3bcf2fd7c831636e0ed493efee7a94a30c6ad9d8) [#47](https://github.com/npm/package-json/pull/47) only report bundleDependencies change if it was changed (@wraithgar)
* [`09d8573`](https://github.com/npm/package-json/commit/09d85733fd7c0f9a3b60f87a346acb3e2ba0a9f0) [#47](https://github.com/npm/package-json/pull/47) pull in fix logic from normalize-package-data (@wraithgar)
* [`60a09da`](https://github.com/npm/package-json/commit/60a09da079d8b0838c2e2b3efe140936db00bfac) [#44](https://github.com/npm/package-json/pull/44) check for changes array during author step (#44) (@wraithgar)

### Dependencies

* [`afb6ece`](https://github.com/npm/package-json/commit/afb6eceaf1f3b166310068864a67195bfe494a78) [#49](https://github.com/npm/package-json/pull/49) remove npm-normalize-package-bin
* [`ee84e3a`](https://github.com/npm/package-json/commit/ee84e3ac56837e581a165ee71ec4c4772dc68dbb) [#47](https://github.com/npm/package-json/pull/47) add `hosted-git-info@6.1.1`
* [`ef45a1a`](https://github.com/npm/package-json/commit/ef45a1ab40b48108fe6e775c67547cb466db87fa) [#47](https://github.com/npm/package-json/pull/47) add `semver@7.5.3`

## [4.0.0](https://github.com/npm/package-json/compare/v3.1.1...v4.0.0) (2023-07-05)

### ⚠️ BREAKING CHANGES

* the `path` parameter is now tied to `load` and not the class constructor.

### Features

* [`e2bc4f3`](https://github.com/npm/package-json/commit/e2bc4f3a0d93f8271b6186f5babcaf2196955e36) [#43](https://github.com/npm/package-json/pull/43) add fix method (@wraithgar)
* [`7ddb1d1`](https://github.com/npm/package-json/commit/7ddb1d1b39d35cc078703c3813f4b1d5a077bdca) [#41](https://github.com/npm/package-json/pull/41) add changes array to normalize functions (#41) (@wraithgar)
* [`4775bf3`](https://github.com/npm/package-json/commit/4775bf352caaaabc6b2ce252a758e61f3adeb143) add create functionality (@wraithgar)

### Bug Fixes

* [`ed68a28`](https://github.com/npm/package-json/commit/ed68a28d76e45490dc05467f04115efd312fd1d9) [#43](https://github.com/npm/package-json/pull/43) typo in changes message (@wraithgar)
* [`c3d11c2`](https://github.com/npm/package-json/commit/c3d11c2a91d7191386a0975e9770cd3c2486a9e5) move path parameter to `load` (@wraithgar)

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
