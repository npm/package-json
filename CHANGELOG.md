# Changelog

## [7.0.3](https://github.com/npm/package-json/compare/v7.0.2...v7.0.3) (2025-11-18)
### Bug Fixes
* [`57952b8`](https://github.com/npm/package-json/commit/57952b808317d8495750f195158c6bb7f4704a63) [#164](https://github.com/npm/package-json/pull/164) prevent crash when expanding directories.bin without filesystem path (#164) (@MaxBlack-dev, Max Black)
### Dependencies
* [`ba5c736`](https://github.com/npm/package-json/commit/ba5c736cf42683cff25adf40e2cf0a1612b97997) [#165](https://github.com/npm/package-json/pull/165) bump glob from 11.1.0 to 12.0.0 (#165) (@dependabot[bot])

## [7.0.2](https://github.com/npm/package-json/compare/v7.0.1...v7.0.2) (2025-10-30)
### Bug Fixes
* [`7f3afb6`](https://github.com/npm/package-json/commit/7f3afb66e20be1d6acca710aa2f76126bf5a1854) [#156](https://github.com/npm/package-json/pull/156) comment typo (#156) (@Clozent)
### Dependencies
* [`0393243`](https://github.com/npm/package-json/commit/0393243ef4c4112bebef905eb981ea0f4ea88cc4) [#160](https://github.com/npm/package-json/pull/160) bump proc-log from 5.0.0 to 6.0.0 (#160) (@dependabot[bot])
* [`f3c7926`](https://github.com/npm/package-json/commit/f3c7926041c78265c1e4a818fa9a2bcefbd4d0f3) [#161](https://github.com/npm/package-json/pull/161) bump json-parse-even-better-errors from 4.0.0 to 5.0.0 (#161) (@dependabot[bot])
### Chores
* [`4a80b15`](https://github.com/npm/package-json/commit/4a80b158f8846d2f22093d7a95f733840c349832) [#162](https://github.com/npm/package-json/pull/162) bump @npmcli/eslint-config from 5.1.0 to 6.0.0 (#162) (@dependabot[bot])
* [`e093242`](https://github.com/npm/package-json/commit/e093242430a2407d06bb6310a64e6e499d013a81) [#163](https://github.com/npm/package-json/pull/163) bump @npmcli/template-oss from 4.27.1 to 4.28.0 (#163) (@dependabot[bot], @npm-cli-bot)

## [7.0.1](https://github.com/npm/package-json/compare/v7.0.0...v7.0.1) (2025-09-17)
### Dependencies
* [`1364087`](https://github.com/npm/package-json/commit/13640879793db90d4e330fb03146c2d4061688a1) [#153](https://github.com/npm/package-json/pull/153) `@npmcli/git@7.0.0` (#153)

## [7.0.0](https://github.com/npm/package-json/compare/v6.2.0...v7.0.0) (2025-07-25)
### ⚠️ BREAKING CHANGES
* `package-json` now supports node `^20.17.0 || >=22.9.0`
### Features
* [`9dd0eb5`](https://github.com/npm/package-json/commit/9dd0eb52ab851f5c89f2d12b569fcc4a395b4e05) [#144](https://github.com/npm/package-json/pull/144) add syncNormalize (@wraithgar)
* [`08eae47`](https://github.com/npm/package-json/commit/08eae4767be22343453984bce953d767643d47a8) [#144](https://github.com/npm/package-json/pull/144) add binDir step to normalize function (@wraithgar)
### Bug Fixes
* [`a5e4ac3`](https://github.com/npm/package-json/commit/a5e4ac3ab364b83afd86517d83f451e4762ed1f8) [#152](https://github.com/npm/package-json/pull/152) align to npm 11 node engine range (@owlstronaut)
* [`4695e87`](https://github.com/npm/package-json/commit/4695e876df8a8488862eb158f235dbe7608cb1e9) [#150](https://github.com/npm/package-json/pull/150) use `URL.canParse` instead of runtime deprecated `url.parse` api (#150) (@SuperchupuDev)
* [`dbc9ef1`](https://github.com/npm/package-json/commit/dbc9ef12c5f0a73b8f734ebe27f325bf289b1a69) [#144](https://github.com/npm/package-json/pull/144) require an object in fromContent() (@wraithgar)
* [`f06eb18`](https://github.com/npm/package-json/commit/f06eb1879e988813baba80896f99cf778c89199f) [#144](https://github.com/npm/package-json/pull/144) remove unused bundleDependenciesFalse (@wraithgar)
* [`a8b1cc9`](https://github.com/npm/package-json/commit/a8b1cc9d7339c1c84d379545d9996b953858a6bb) [#144](https://github.com/npm/package-json/pull/144) secure and unixify paths discovered via directories.bin (@wraithgar)
* [`23c29a9`](https://github.com/npm/package-json/commit/23c29a9f66707b91d9401d104bd33bbe59ddc715) [#144](https://github.com/npm/package-json/pull/144) remove erroneous bundledDependencies log (@wraithgar)
### Documentation
* [`14f8141`](https://github.com/npm/package-json/commit/14f8141fec4a865cb4586937e0659390238edb71) [#147](https://github.com/npm/package-json/pull/147) adding sort option docs to README (#147) (@idhard)
### Dependencies
* [`a0dcfde`](https://github.com/npm/package-json/commit/a0dcfde4b10ecbb826cb41bae61d60d261bd9a24) [#152](https://github.com/npm/package-json/pull/152) `hosted-git-info@9.0.0`
* [`41128c1`](https://github.com/npm/package-json/commit/41128c1ca85b882dab4db5f1af1688fadd935904) [#152](https://github.com/npm/package-json/pull/152) `glob@11.0.3`
### Chores
* [`a179a87`](https://github.com/npm/package-json/commit/a179a8796a55948865e9b308c750c54fbc2270ce) [#144](https://github.com/npm/package-json/pull/144) fix tests to await async normalize (@wraithgar)
* [`203fec8`](https://github.com/npm/package-json/commit/203fec813379bf479d8deb4f68526b2373f0d6c6) [#144](https://github.com/npm/package-json/pull/144) remove read-package-json (@wraithgar)
* [`7bde184`](https://github.com/npm/package-json/commit/7bde18448299c0ec904df573125e524eed566b98) [#144](https://github.com/npm/package-json/pull/144) remove read-package-json-fast (@wraithgar)
* [`394192d`](https://github.com/npm/package-json/commit/394192d632511bdcbc92cd9b562a7642e8fb06be) [#144](https://github.com/npm/package-json/pull/144) remove backward compatiblity tests (@wraithgar)
* [`6e89e39`](https://github.com/npm/package-json/commit/6e89e3960c8c16c2797eeaba70e4062ab15c3267) [#148](https://github.com/npm/package-json/pull/148) bump @npmcli/template-oss from 4.23.6 to 4.25.0 (#148) (@dependabot[bot], @owlstronaut)

## [6.2.0](https://github.com/npm/package-json/compare/v6.1.1...v6.2.0) (2025-05-21)
### Features
* [`228539f`](https://github.com/npm/package-json/commit/228539fe73402e28d1f5b875f34cd5aeb0474d2e) [#145](https://github.com/npm/package-json/pull/145) adds fixName step for publishing (#145) (@owlstronaut)

## [6.1.1](https://github.com/npm/package-json/compare/v6.1.0...v6.1.1) (2025-01-21)
### Bug Fixes
* [`526473b`](https://github.com/npm/package-json/commit/526473bf1f2fcb8b1b3c3af68f890df203ebe33d) [#139](https://github.com/npm/package-json/pull/139) remove max-len linting bypasses (@wraithgar)
* [`2a7bbe5`](https://github.com/npm/package-json/commit/2a7bbe5bc797f1bdba7c183b417e1a2bbfc33973) [#139](https://github.com/npm/package-json/pull/139) inline normalize-package-data logic (@wraithgar)
* [`2d320bc`](https://github.com/npm/package-json/commit/2d320bc4e4b8609037b19d31420464dd3c67b9d5) [#140](https://github.com/npm/package-json/pull/140) save when reverting content (@wraithgar)
### Dependencies
* [`6ea3a9d`](https://github.com/npm/package-json/commit/6ea3a9d336b42b613474b04dfe4eb44b65d95612) [#139](https://github.com/npm/package-json/pull/139) add `validate-npm-package-license@3.0.4`
* [`35152b6`](https://github.com/npm/package-json/commit/35152b6a647f0c6ff1caa4342ad5cec43b7881cd) [#139](https://github.com/npm/package-json/pull/139) remove normalize-package-data
### Chores
* [`0930f4e`](https://github.com/npm/package-json/commit/0930f4e5c8b02e6d8935f37ca7f46b492c3d1ef7) [#139](https://github.com/npm/package-json/pull/139) `@npmcli/eslint-config@5.1.0` (@wraithgar)
* [`1464adc`](https://github.com/npm/package-json/commit/1464adc74d7a8702b11b179f815d48eab10ec1cf) [#140](https://github.com/npm/package-json/pull/140) scope test fixture package names (@wraithgar)
* [`d722a1f`](https://github.com/npm/package-json/commit/d722a1f3ea30fffbc0ddc1fe01e02599f240f381) [#137](https://github.com/npm/package-json/pull/137) bump @npmcli/template-oss from 4.23.5 to 4.23.6 (#137) (@dependabot[bot], @npm-cli-bot)

## [6.1.0](https://github.com/npm/package-json/compare/v6.0.1...v6.1.0) (2024-11-27)
### Features
* [`4c22738`](https://github.com/npm/package-json/commit/4c22738d919e29a32ae20472f48837b65181c309) [#133](https://github.com/npm/package-json/pull/133) adds ability to sort package.json on save (#133) (@reggi, @wraithgar)
### Chores
* [`6fef3a2`](https://github.com/npm/package-json/commit/6fef3a215378695bcf495b119c4fd5cccc576f44) [#135](https://github.com/npm/package-json/pull/135) bump @npmcli/template-oss from 4.23.3 to 4.23.5 (#135) (@dependabot[bot], @npm-cli-bot)

## [6.0.1](https://github.com/npm/package-json/compare/v6.0.0...v6.0.1) (2024-10-02)
### Dependencies
* [`25e2a76`](https://github.com/npm/package-json/commit/25e2a766e8af0a7ba45218ae8025616632ae5ee2) [#129](https://github.com/npm/package-json/pull/129) bump `@npmcli/git@6.0.0`

## [6.0.0](https://github.com/npm/package-json/compare/v5.2.1...v6.0.0) (2024-09-26)
### ⚠️ BREAKING CHANGES
* `@npmcli/package-json` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`8196f27`](https://github.com/npm/package-json/commit/8196f270055b8160d9372f1053f9ae108a332506) [#126](https://github.com/npm/package-json/pull/126) align to npm 10 node engine range (@reggi)
### Dependencies
* [`5bdf533`](https://github.com/npm/package-json/commit/5bdf533d82015e317dc84de096088da010a59729) [#126](https://github.com/npm/package-json/pull/126) `proc-log@5.0.0`
* [`136ba6e`](https://github.com/npm/package-json/commit/136ba6e0ea9107f4f7c70052f17a192a598888d4) [#126](https://github.com/npm/package-json/pull/126) `normalize-package-data@7.0.0`
* [`12318c0`](https://github.com/npm/package-json/commit/12318c08424e5278c27c3257392d47c39321421d) [#126](https://github.com/npm/package-json/pull/126) `json-parse-even-better-errors@4.0.0`
* [`324d7ba`](https://github.com/npm/package-json/commit/324d7bab6669a9bd247ef766be857026a33fae15) [#126](https://github.com/npm/package-json/pull/126) `hosted-git-info@8.0.0`
### Chores
* [`855676d`](https://github.com/npm/package-json/commit/855676dd83b966505d7c30045d35a875ec1a0ea6) [#117](https://github.com/npm/package-json/pull/117) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (#117) (@dependabot[bot])
* [`c421ce9`](https://github.com/npm/package-json/commit/c421ce9524b37eab0d56b2a7283c2dfc0be0c59d) [#125](https://github.com/npm/package-json/pull/125) bump read-package-json-fast from 3.0.2 to 4.0.0 (#125) (@dependabot[bot])
* [`1f182e6`](https://github.com/npm/package-json/commit/1f182e6d70a33a9e69acd73a042c0cb6cf04a5f2) [#126](https://github.com/npm/package-json/pull/126) run template-oss-apply (@reggi)

## [5.2.1](https://github.com/npm/package-json/compare/v5.2.0...v5.2.1) (2024-09-17)
### Bug Fixes
* [`962b9e1`](https://github.com/npm/package-json/commit/962b9e10f4bea86431ff051b8c05c9c22e1053d9) [#119](https://github.com/npm/package-json/pull/119) hidden dir path clean up corrected (#119) (@milaninfy)
### Chores
* [`e26e236`](https://github.com/npm/package-json/commit/e26e2367ddbf5bacdddce476c75bf3611c549657) [#118](https://github.com/npm/package-json/pull/118) postinstall for dependabot template-oss PR (@hashtagchris)
* [`8a7714b`](https://github.com/npm/package-json/commit/8a7714b9903eb13bc0ae937beec16f67e9d5bed2) [#118](https://github.com/npm/package-json/pull/118) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

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
