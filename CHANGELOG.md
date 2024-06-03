# Changelog

## [5.2.0](https://github.com/npm/package-json/compare/v5.1.1...v5.2.0) (2024-06-03)

### Features

* [`62e585a`](https://github.com/npm/package-json/commit/62e585a02250c8a6197fc49a0dad3da3bcb8f56f) [#106](https://github.com/npm/package-json/pull/106) add readPackage helper (#106) (@wraithgar)

## [5.1.1](https://github.com/npm/package-json/compare/v5.1.0...v5.1.1) (2024-05-28)

### Bug Fixes

* [`54756d2`](https://github.com/npm/package-json/commit/54756d2d3186275b3928753134ab4973df188515) [#105](https://github.com/npm/package-json/pull/105) apply `securePath` to package bin (#105) (@antongolub)
* [`46c563b`](https://github.com/npm/package-json/commit/46c563b367e9dfc8f6b4ca50852a1fa978f35e6a) add `normalizePackageMan` helper (#100) (@antongolub)
* [`a974274`](https://github.com/npm/package-json/commit/a974274402d2b75268451212a274fd81f4b62c8e) prevent `directory.man` referencing outside the package root (#104) (@antongolub)
* [`191b521`](https://github.com/npm/package-json/commit/191b521a2760679e39f590729dccb8b9c1d1163a) [#102](https://github.com/npm/package-json/pull/102) invalid scripts warning fixed for undefined scripts (#102) (@milaninfy)

### Chores

* [`45a2937`](https://github.com/npm/package-json/commit/45a2937360748fa4b5398ee4c4d8ad6cdb22ea90) [#98](https://github.com/npm/package-json/pull/98) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`90863c1`](https://github.com/npm/package-json/commit/90863c176e3065501902a8229bc2d9d956f59533) [#98](https://github.com/npm/package-json/pull/98) postinstall for dependabot template-oss PR (@lukekarrys)

## [5.1.0](https://github.com/npm/package-json/compare/v5.0.3...v5.1.0) (2024-04-22)

### Features

* [`17788d0`](https://github.com/npm/package-json/commit/17788d06aff54a4222ef61a35db8f113fc16de54) [#96](https://github.com/npm/package-json/pull/96) add fromContent method to set contents directly (#96) (@lukekarrys)

### Chores

* [`9597b84`](https://github.com/npm/package-json/commit/9597b8465c303081af34d49e25e6c3dbe6b8c524) [#94](https://github.com/npm/package-json/pull/94) postinstall for dependabot template-oss PR (@lukekarrys)
* [`5e20e64`](https://github.com/npm/package-json/commit/5e20e64a7ce0a0ef1fe799751d02720bb69587b3) [#94](https://github.com/npm/package-json/pull/94) bump @npmcli/template-oss from 4.21.3 to 4.21.4 (@dependabot[bot])

## [5.0.3](https://github.com/npm/package-json/compare/v5.0.2...v5.0.3) (2024-04-12)

### Dependencies

* [`28f09ed`](https://github.com/npm/package-json/commit/28f09ed50fdfa338cab7113cf294f91d1398f02f) [#92](https://github.com/npm/package-json/pull/92) `proc-log@4.0.0` (#92)

## [5.0.2](https://github.com/npm/package-json/compare/v5.0.1...v5.0.2) (2024-04-10)

### Bug Fixes

* [`a67317b`](https://github.com/npm/package-json/commit/a67317bf88ca983425c98505dbe01dbd30d7ca6d) [#90](https://github.com/npm/package-json/pull/90) perf: lazy load hosted git info on normalize (#90) (@H4ad)
* [`06df698`](https://github.com/npm/package-json/commit/06df698635c1ee7bd18d68e868a673d2de773864) [#89](https://github.com/npm/package-json/pull/89) perf: lazy load glob on normalize.js (#89) (@H4ad)

## [5.0.1](https://github.com/npm/package-json/compare/v5.0.0...v5.0.1) (2024-04-07)

### Bug Fixes

* [`fda5722`](https://github.com/npm/package-json/commit/fda5722eff835f4898d52ec11be768e3ea270691) [#87](https://github.com/npm/package-json/pull/87) perf: lazy load un-common dependencies for npm run (#87) (@H4ad)
* [`71f09d6`](https://github.com/npm/package-json/commit/71f09d6fdd8881a832153a08705582366cd3878b) [#88](https://github.com/npm/package-json/pull/88) perf: only import necessary functions from semver (#88) (@H4ad)

### Documentation

* [`6ebb3c9`](https://github.com/npm/package-json/commit/6ebb3c92e24f012417e69b14b1e1a8fa0f4dd1f0) [#85](https://github.com/npm/package-json/pull/85) readme: fix broken badge URL (#85) (@10xLaCroixDrinker)

### Chores

* [`66e0c23`](https://github.com/npm/package-json/commit/66e0c23fa0ee4c24b7bdb184c0959f5d92c0fe90) [#80](https://github.com/npm/package-json/pull/80) postinstall for dependabot template-oss PR (@lukekarrys)
* [`00e4bbb`](https://github.com/npm/package-json/commit/00e4bbbf52dc82b3609d36922a35f2f3e3881c6d) [#80](https://github.com/npm/package-json/pull/80) bump @npmcli/template-oss from 4.21.1 to 4.21.3 (@dependabot[bot])
* [`d784aa8`](https://github.com/npm/package-json/commit/d784aa8a2083f0e2998d488704acdab770a4515b) [#77](https://github.com/npm/package-json/pull/77) postinstall for dependabot template-oss PR (@lukekarrys)
* [`efeee22`](https://github.com/npm/package-json/commit/efeee2289d51085f1b5087c21ebf3332eafdd9b8) [#77](https://github.com/npm/package-json/pull/77) bump @npmcli/template-oss from 4.19.0 to 4.21.1 (@dependabot[bot])
* [`a4df4cf`](https://github.com/npm/package-json/commit/a4df4cfed032c6f6e793affa6b2c4225a8dd89dc) [#56](https://github.com/npm/package-json/pull/56) bump read-package-json from 6.0.4 to 7.0.0 (@dependabot[bot])
* [`f7c048a`](https://github.com/npm/package-json/commit/f7c048a36dedefa6dbd505db56113e46fe58963a) [#58](https://github.com/npm/package-json/pull/58) postinstall for dependabot template-oss PR (@lukekarrys)
* [`6240313`](https://github.com/npm/package-json/commit/62403130b9f8c0014df0d6f2a490d2f4edf30f3a) [#58](https://github.com/npm/package-json/pull/58) bump @npmcli/template-oss from 4.18.1 to 4.19.0 (@dependabot[bot])
* [`5ab117c`](https://github.com/npm/package-json/commit/5ab117c3068968f480ac24da8e385eef70b33532) [#57](https://github.com/npm/package-json/pull/57) postinstall for dependabot template-oss PR (@lukekarrys)
* [`f56390e`](https://github.com/npm/package-json/commit/f56390eeafafd0c9e80e4c5ad311c619db7ea52a) [#57](https://github.com/npm/package-json/pull/57) bump @npmcli/template-oss from 4.18.0 to 4.18.1 (@dependabot[bot])

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
