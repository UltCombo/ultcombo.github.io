# Ult’s home ![Unicorn badge.](https://img.shields.io/badge/unicorn-%F0%9F%A6%84-green.svg?colorA=663399&colorB=ffffff) ![Bless Ramen badge.](https://img.shields.io/badge/bless-Ramen-green.svg)

Welcome to my homepage! 😎✌️

This is an offline capable, fully optimized Progressive Web App (PWA) showcasing my work.

## Guidelines

The application must be accessible, both to humans and machines. It must support all platforms, devices and assistive technologies.

The application must present content marked in accordance with [HTML](https://html.spec.whatwg.org/multipage/), [WAI-ARIA](https://www.w3.org/TR/wai-aria/) and [RDFa](https://www.w3.org/TR/html-rdfa/)/[Microdata](https://html.spec.whatwg.org/multipage/microdata.html) semantics.

The application must employ responsive design, progressive enhancement, favor functionality and user experience, and never hijack common user interactions and expectations.

Transitions and animations must be clear, simple, and coherent. They should ease state transitions and guide user focus. They should never feel slow, confusing or get in the way of the user. The [Material Motion](https://material.io/guidelines/motion/material-motion.html) guideline is a good reference.

Use [Lighthouse](https://developers.google.com/web/tools/lighthouse/) to audit the application’s performance, accessibility and whether it follows the best practices for modern web development. Periodically run audits to prevent regressions and strive to improve the results. It is recommended to use the Lighthouse [Chrome extension](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) or [command line tool](https://www.npmjs.com/package/lighthouse#using-the-node-cli), as the version bundled with Chrome DevTools is often outdated and missing newer tests and bugfixes.

The code style must be consistent. Note that the code is automatically formatted with [Prettier](https://prettier.io/) when committing changes, therefore developers should not have to worry about formatting code manually.

## Development

- Install Node.js 8+ and [Yarn](https://yarnpkg.com/).
- Clone the repository and install dependencies with `yarn install`.
- Run `yarn run dev` to start the development server with live reloading.
- The source code resides in the `src` directory; the root directory contains compiled resources deployed to the GitHub Pages site.
- The repository has a precommit hook to lint and compile resources optimized for production deployment.

## Scripts

- `yarn run dev`: starts development server with live reloading.
- `yarn run build`: generates a full build of the site for debugging purposes.
- `NODE_ENV=production yarn run build`: generates a full build of the site optimized for production deployment.
- `yarn run lint`: lints code for possible errors and code style issues.
- `yarn run lint --fix`: lints code for possible errors and code style issues, automatically fixing as many issues as possible.
- `yarn run lint-fonts`: utility to detect faux web fonts or mismatches. Must have development server running.
- `yarn run precommit`: lints staged files and builds the site for production deployment. This script is automatically run when commiting to the repository.
- `yarn run -s license-checker`: get licenses from all dependencies.

## Roadmap

- [x] Add offline and install capabilities through Service Workers with the [Workbox](https://developers.google.com/web/tools/workbox/) toolset.
- [x] Optimize, bundle and minify HTML, CSS and JavaScript resources through [Webpack](https://webpack.js.org/).
- [x] Enforce linting and [Prettier](https://prettier.io/) code style through [ESLint](https://eslint.org/).
- [x] Add `precommit` hook to automatically lint and build the site through [lint-staged](https://github.com/okonet/lint-staged) and [Husky](https://github.com/typicode/husky).
- [x] Polyfill missing browser features as needed through [Polyfill.io](https://polyfill.io/v2/docs/).
- [x] Preload critical resources and preconnect to external APIs.
- [x] [Defer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) loading scripts.
- [ ] Inline [critical](https://github.com/addyosmani/critical) CSS and defer non-critical styles.
- [x] Avoid render-blocking web fonts through the [`font-display` property](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display).
- [x] Optimize raster images for different displays (Retina).
- [x] Generate and optimize app icons for all platforms through [RealFaviconGenerator](https://realfavicongenerator.net/).
- [x] Add social meta tags ([Open Graph](http://ogp.me/), [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)).
- [x] Track user interaction with [Google Analytics](https://www.google.com/analytics/).
- [x] Lint HTML with the [Nu Html Checker (v.Nu)](https://validator.github.io/validator/).
- [ ] Enforce CSS code style (with [stylelint](https://stylelint.io/) or [Prettier](https://prettier.io/)?).
- [x] Lint web font usage to prevent browsers from synthesizing sub-par typefaces through [faux-pas](https://github.com/filamentgroup/faux-pas).
- [ ] Add API testing (with [AVA](https://github.com/avajs/ava)?).
- [ ] Create [Docker](https://www.docker.com/) image to ease development setup.
- [ ] Add CI to lint, run API tests and [Lighthouse](https://developers.google.com/web/tools/lighthouse/) audits on pull requests.
- [ ] Subset fonts through [glyphhanger](https://github.com/filamentgroup/glyphhanger). This is probably not worth doing for Google Fonts as they already have generic subsetting and clients would miss cache hits. Also, this is not working properly for variable fonts currently.
- [x] Document guidelines, development instructions, scripts and roadmap.

## License

The application is licensed under the [MIT License](LICENSE).

The application makes use of Assistive Technology (AT) supporting code from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate), licensed under the MIT License.

The application embeds the GradeGX font created by [Adam Twardoch](https://twitter.com/adamtwar), licensed under the SIL Open Font License (OFL).

The application embeds a modified version of the [Termynal](https://github.com/ines/termynal) library by [Ines Montani](https://twitter.com/_inesmontani), licensed under the MIT License.

<details>
  <summary>Dependencies’ licenses</summary>

```
├─ abbrev@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/abbrev-js
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ path: ./node_modules/fsevents/node_modules/abbrev
│  └─ licenseFile: ./node_modules/fsevents/node_modules/abbrev/LICENSE
├─ abbrev@1.1.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/abbrev-js
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ path: ./node_modules/abbrev
│  └─ licenseFile: ./node_modules/abbrev/LICENSE
├─ accepts@1.3.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/accepts
│  ├─ path: ./node_modules/engine.io/node_modules/accepts
│  └─ licenseFile: ./node_modules/engine.io/node_modules/accepts/LICENSE
├─ accepts@1.3.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/accepts
│  ├─ path: ./node_modules/accepts
│  └─ licenseFile: ./node_modules/accepts/LICENSE
├─ acorn-dynamic-import@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kesne/acorn-dynamic-import
│  ├─ publisher: Jordan Gensler
│  ├─ email: jordangens@gmail.com
│  ├─ path: ./node_modules/acorn-dynamic-import
│  └─ licenseFile: ./node_modules/acorn-dynamic-import/LICENSE
├─ acorn-jsx@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/RReverser/acorn-jsx
│  ├─ path: ./node_modules/acorn-jsx
│  └─ licenseFile: ./node_modules/acorn-jsx/LICENSE
├─ acorn@1.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/marijnh/acorn
│  ├─ path: ./node_modules/falafel/node_modules/acorn
│  └─ licenseFile: ./node_modules/falafel/node_modules/acorn/LICENSE
├─ acorn@3.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ternjs/acorn
│  ├─ path: ./node_modules/acorn-jsx/node_modules/acorn
│  └─ licenseFile: ./node_modules/acorn-jsx/node_modules/acorn/LICENSE
├─ acorn@4.0.13
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ternjs/acorn
│  ├─ path: ./node_modules/acorn-dynamic-import/node_modules/acorn
│  └─ licenseFile: ./node_modules/acorn-dynamic-import/node_modules/acorn/LICENSE
├─ acorn@5.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ternjs/acorn
│  ├─ path: ./node_modules/acorn
│  └─ licenseFile: ./node_modules/acorn/LICENSE
├─ after@0.8.1
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/Raynos/after
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/after
│  └─ licenseFile: ./node_modules/after/LICENCE
├─ ajv-keywords@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/ajv-keywords
│  ├─ publisher: Evgeny Poberezkin
│  ├─ path: ./node_modules/ajv-keywords
│  └─ licenseFile: ./node_modules/ajv-keywords/LICENSE
├─ ajv@4.11.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/ajv
│  ├─ publisher: Evgeny Poberezkin
│  ├─ path: ./node_modules/har-validator/node_modules/ajv
│  └─ licenseFile: ./node_modules/har-validator/node_modules/ajv/LICENSE
├─ ajv@5.5.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/ajv
│  ├─ publisher: Evgeny Poberezkin
│  ├─ path: ./node_modules/ajv
│  └─ licenseFile: ./node_modules/ajv/LICENSE
├─ align-text@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/align-text
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/align-text
│  └─ licenseFile: ./node_modules/align-text/LICENSE
├─ alphanum-sort@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/TrySound/alphanum-sort
│  ├─ publisher: Bogdan Chadkin
│  ├─ email: trysound@yandex.ru
│  ├─ path: ./node_modules/alphanum-sort
│  └─ licenseFile: ./node_modules/alphanum-sort/LICENSE
├─ amdefine@1.0.1
│  ├─ licenses: BSD-3-Clause OR MIT
│  ├─ repository: https://github.com/jrburke/amdefine
│  ├─ publisher: James Burke
│  ├─ email: jrburke@gmail.com
│  ├─ url: http://github.com/jrburke
│  ├─ path: ./node_modules/amdefine
│  └─ licenseFile: ./node_modules/amdefine/LICENSE
├─ ansi-align@2.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/nexdrew/ansi-align
│  ├─ publisher: nexdrew
│  ├─ path: ./node_modules/ansi-align
│  └─ licenseFile: ./node_modules/ansi-align/LICENSE
├─ ansi-escape-sequences@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/ansi-escape-sequences
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/ansi-escape-sequences
│  └─ licenseFile: ./node_modules/ansi-escape-sequences/LICENSE
├─ ansi-escapes@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ansi-escapes
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/log-update/node_modules/ansi-escapes
│  └─ licenseFile: ./node_modules/log-update/node_modules/ansi-escapes/license
├─ ansi-escapes@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ansi-escapes
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ansi-escapes
│  └─ licenseFile: ./node_modules/ansi-escapes/license
├─ ansi-regex@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ansi-regex
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/ansi-regex
│  └─ licenseFile: ./node_modules/ansi-regex/readme.md
├─ ansi-regex@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/ansi-regex
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/has-ansi/node_modules/ansi-regex
│  └─ licenseFile: ./node_modules/has-ansi/node_modules/ansi-regex/license
├─ ansi-regex@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/ansi-regex
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ansi-align/node_modules/ansi-regex
│  └─ licenseFile: ./node_modules/ansi-align/node_modules/ansi-regex/license
├─ ansi-styles@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ansi-styles
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/license-checker/node_modules/ansi-styles
│  └─ licenseFile: ./node_modules/license-checker/node_modules/ansi-styles/readme.md
├─ ansi-styles@2.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/ansi-styles
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/chalk/node_modules/ansi-styles
│  └─ licenseFile: ./node_modules/chalk/node_modules/ansi-styles/license
├─ ansi-styles@3.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/ansi-styles
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ansi-styles
│  └─ licenseFile: ./node_modules/ansi-styles/license
├─ any-observable@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/any-observable
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/any-observable
│  └─ licenseFile: ./node_modules/any-observable/license
├─ anymatch@1.3.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/es128/anymatch
│  ├─ publisher: Elan Shanker
│  ├─ url: http://github.com/es128
│  ├─ path: ./node_modules/anymatch
│  └─ licenseFile: ./node_modules/anymatch/LICENSE
├─ app-root-path@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/inxilpro/node-app-root-path
│  ├─ publisher: Chris Morrell
│  ├─ email: http://cmorrell.com
│  ├─ path: ./node_modules/app-root-path
│  └─ licenseFile: ./node_modules/app-root-path/LICENSE
├─ aproba@1.1.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/aproba
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ path: ./node_modules/fsevents/node_modules/aproba
│  └─ licenseFile: ./node_modules/fsevents/node_modules/aproba/LICENSE
├─ aproba@1.2.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/aproba
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ path: ./node_modules/aproba
│  └─ licenseFile: ./node_modules/aproba/LICENSE
├─ are-we-there-yet@1.1.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/are-we-there-yet
│  ├─ publisher: Rebecca Turner
│  ├─ url: http://re-becca.org
│  ├─ path: ./node_modules/are-we-there-yet
│  └─ licenseFile: ./node_modules/are-we-there-yet/LICENSE
├─ argparse@1.0.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodeca/argparse
│  ├─ path: ./node_modules/argparse
│  └─ licenseFile: ./node_modules/argparse/LICENSE
├─ arr-diff@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/arr-diff
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/arr-diff
│  └─ licenseFile: ./node_modules/arr-diff/LICENSE
├─ arr-flatten@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/arr-flatten
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/arr-flatten
│  └─ licenseFile: ./node_modules/arr-flatten/LICENSE
├─ array-back@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/array-back
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/find-replace/node_modules/array-back
│  └─ licenseFile: ./node_modules/find-replace/node_modules/array-back/LICENSE
├─ array-back@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/array-back
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/array-back
│  └─ licenseFile: ./node_modules/array-back/LICENSE
├─ array-find-index@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/array-find-index
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/array-find-index
│  └─ licenseFile: ./node_modules/array-find-index/license
├─ array-union@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/array-union
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/array-union
│  └─ licenseFile: ./node_modules/array-union/license
├─ array-uniq@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/array-uniq
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/array-uniq
│  └─ licenseFile: ./node_modules/array-uniq/license
├─ array-unique@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/array-unique
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/array-unique
│  └─ licenseFile: ./node_modules/array-unique/LICENSE
├─ arraybuffer.slice@0.0.6
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/rase-/arraybuffer.slice
│  ├─ path: ./node_modules/arraybuffer.slice
│  └─ licenseFile: ./node_modules/arraybuffer.slice/README.md
├─ arrify@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/arrify
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/arrify
│  └─ licenseFile: ./node_modules/arrify/license
├─ as-array@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/scottcorgan/as-array
│  ├─ publisher: Scott Corgan
│  ├─ path: ./node_modules/as-array
│  └─ licenseFile: ./node_modules/as-array/README.md
├─ asap@2.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kriskowal/asap
│  ├─ path: ./node_modules/asap
│  └─ licenseFile: ./node_modules/asap/LICENSE.md
├─ asn1.js@4.9.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/asn1.js
│  ├─ publisher: Fedor Indutny
│  ├─ path: ./node_modules/asn1.js
│  └─ licenseFile: ./node_modules/asn1.js/README.md
├─ asn1@0.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mcavage/node-asn1
│  ├─ publisher: Mark Cavage
│  ├─ email: mcavage@gmail.com
│  ├─ path: ./node_modules/asn1
│  └─ licenseFile: ./node_modules/asn1/LICENSE
├─ assert-plus@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mcavage/node-assert-plus
│  ├─ publisher: Mark Cavage
│  ├─ email: mcavage@gmail.com
│  ├─ path: ./node_modules/http-signature/node_modules/assert-plus
│  └─ licenseFile: ./node_modules/http-signature/node_modules/assert-plus/README.md
├─ assert-plus@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mcavage/node-assert-plus
│  ├─ publisher: Mark Cavage
│  ├─ email: mcavage@gmail.com
│  ├─ path: ./node_modules/assert-plus
│  └─ licenseFile: ./node_modules/assert-plus/README.md
├─ assert@1.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/defunctzombie/commonjs-assert
│  ├─ path: ./node_modules/assert
│  └─ licenseFile: ./node_modules/assert/LICENSE
├─ ast-types@0.8.15
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/benjamn/ast-types
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/unreachable-branch-transform/node_modules/ast-types
│  └─ licenseFile: ./node_modules/unreachable-branch-transform/node_modules/ast-types/LICENSE
├─ ast-types@0.9.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/benjamn/ast-types
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/ast-types
│  └─ licenseFile: ./node_modules/ast-types/LICENSE
├─ async-each-series@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jb55/async-each-series
│  ├─ publisher: jb55
│  ├─ path: ./node_modules/async-each-series
│  └─ licenseFile: ./node_modules/async-each-series/Readme.md
├─ async-each@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/paulmillr/async-each
│  ├─ publisher: Paul Miller
│  ├─ url: http://paulmillr.com/
│  ├─ path: ./node_modules/async-each
│  └─ licenseFile: ./node_modules/async-each/README.md
├─ async@0.2.10
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/caolan/async
│  ├─ publisher: Caolan McMahon
│  ├─ path: ./node_modules/string-replace-webpack-plugin/node_modules/async
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/node_modules/async/LICENSE
├─ async@1.5.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/caolan/async
│  ├─ publisher: Caolan McMahon
│  ├─ path: ./node_modules/portscanner/node_modules/async
│  └─ licenseFile: ./node_modules/portscanner/node_modules/async/LICENSE
├─ async@2.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/caolan/async
│  ├─ publisher: Caolan McMahon
│  ├─ path: ./node_modules/async
│  └─ licenseFile: ./node_modules/async/LICENSE
├─ asynckit@0.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/alexindigo/asynckit
│  ├─ publisher: Alex Indigo
│  ├─ email: iam@alexindigo.com
│  ├─ path: ./node_modules/asynckit
│  └─ licenseFile: ./node_modules/asynckit/LICENSE
├─ autoprefixer@6.7.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/autoprefixer
│  ├─ publisher: Andrey Sitnik
│  ├─ email: andrey@sitnik.ru
│  ├─ path: ./node_modules/autoprefixer
│  └─ licenseFile: ./node_modules/autoprefixer/LICENSE
├─ aws-sign2@0.6.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/mikeal/aws-sign
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ url: http://www.futurealoof.com
│  ├─ path: ./node_modules/aws-sign2
│  └─ licenseFile: ./node_modules/aws-sign2/LICENSE
├─ aws4@1.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mhart/aws4
│  ├─ publisher: Michael Hart
│  ├─ email: michael.hart.au@gmail.com
│  ├─ url: http://github.com/mhart
│  ├─ path: ./node_modules/aws4
│  └─ licenseFile: ./node_modules/aws4/LICENSE
├─ axe-core@2.2.0
│  ├─ licenses: MPL-2.0
│  ├─ repository: https://github.com/dequelabs/axe-core
│  ├─ path: ./node_modules/axe-core
│  └─ licenseFile: ./node_modules/axe-core/LICENSE
├─ babar@0.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/stephan83/babar
│  ├─ publisher: Stephan Florquin
│  ├─ path: ./node_modules/babar
│  └─ licenseFile: ./node_modules/babar/LICENSE
├─ babel-code-frame@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-code-frame
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-code-frame
│  └─ licenseFile: ./node_modules/babel-code-frame/README.md
├─ babel-core@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-core
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-core
│  └─ licenseFile: ./node_modules/babel-core/README.md
├─ babel-generator@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-generator
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-generator
│  └─ licenseFile: ./node_modules/babel-generator/README.md
├─ babel-helper-evaluate-path@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-evaluate-path
│  ├─ publisher: boopathi
│  ├─ path: ./node_modules/babel-helper-evaluate-path
│  └─ licenseFile: ./node_modules/babel-helper-evaluate-path/README.md
├─ babel-helper-flip-expressions@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-flip-expressions
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-helper-flip-expressions
│  └─ licenseFile: ./node_modules/babel-helper-flip-expressions/README.md
├─ babel-helper-is-nodes-equiv@0.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babili/tree/master/packages/babel-helper-is-nodes-equiv
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-helper-is-nodes-equiv
│  └─ licenseFile: ./node_modules/babel-helper-is-nodes-equiv/README.md
├─ babel-helper-is-void-0@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-is-void-0
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-helper-is-void-0
│  └─ licenseFile: ./node_modules/babel-helper-is-void-0/README.md
├─ babel-helper-mark-eval-scopes@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-mark-eval-scopes
│  ├─ publisher: boopathi
│  ├─ path: ./node_modules/babel-helper-mark-eval-scopes
│  └─ licenseFile: ./node_modules/babel-helper-mark-eval-scopes/README.md
├─ babel-helper-remove-or-void@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-remove-or-void
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-helper-remove-or-void
│  └─ licenseFile: ./node_modules/babel-helper-remove-or-void/README.md
├─ babel-helper-to-multiple-sequence-expressions@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-helper-to-multiple-sequence-expressions
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-helper-to-multiple-sequence-expressions
│  └─ licenseFile: ./node_modules/babel-helper-to-multiple-sequence-expressions/README.md
├─ babel-helpers@6.24.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-helpers
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-helpers
│  └─ licenseFile: ./node_modules/babel-helpers/README.md
├─ babel-messages@6.23.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-messages
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-messages
│  └─ licenseFile: ./node_modules/babel-messages/README.md
├─ babel-minify-webpack-plugin@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack-contrib/babel-minify-webpack-plugin
│  ├─ publisher: boopathi
│  ├─ path: ./node_modules/babel-minify-webpack-plugin
│  └─ licenseFile: ./node_modules/babel-minify-webpack-plugin/LICENSE
├─ babel-plugin-minify-builtins@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-builtins
│  ├─ publisher: Vignesh Shanmugam
│  ├─ email: vignesh.shanmugam22@gmail.com
│  ├─ url: https://vigneshh.in
│  ├─ path: ./node_modules/babel-plugin-minify-builtins
│  └─ licenseFile: ./node_modules/babel-plugin-minify-builtins/README.md
├─ babel-plugin-minify-constant-folding@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-constant-folding
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-constant-folding
│  └─ licenseFile: ./node_modules/babel-plugin-minify-constant-folding/README.md
├─ babel-plugin-minify-dead-code-elimination@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-dead-code-elimination
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-dead-code-elimination
│  └─ licenseFile: ./node_modules/babel-plugin-minify-dead-code-elimination/README.md
├─ babel-plugin-minify-flip-comparisons@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-flip-comparisons
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-flip-comparisons
│  └─ licenseFile: ./node_modules/babel-plugin-minify-flip-comparisons/README.md
├─ babel-plugin-minify-guarded-expressions@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-guarded-expressions
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-guarded-expressions
│  └─ licenseFile: ./node_modules/babel-plugin-minify-guarded-expressions/README.md
├─ babel-plugin-minify-infinity@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-infinity
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-infinity
│  └─ licenseFile: ./node_modules/babel-plugin-minify-infinity/README.md
├─ babel-plugin-minify-mangle-names@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-mangle-names
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-mangle-names
│  └─ licenseFile: ./node_modules/babel-plugin-minify-mangle-names/README.md
├─ babel-plugin-minify-numeric-literals@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-numeric-literals
│  ├─ publisher: kangax
│  ├─ path: ./node_modules/babel-plugin-minify-numeric-literals
│  └─ licenseFile: ./node_modules/babel-plugin-minify-numeric-literals/README.md
├─ babel-plugin-minify-replace@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-replace
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-replace
│  └─ licenseFile: ./node_modules/babel-plugin-minify-replace/README.md
├─ babel-plugin-minify-simplify@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-simplify
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-simplify
│  └─ licenseFile: ./node_modules/babel-plugin-minify-simplify/README.md
├─ babel-plugin-minify-type-constructors@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-minify-type-constructors
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-minify-type-constructors
│  └─ licenseFile: ./node_modules/babel-plugin-minify-type-constructors/README.md
├─ babel-plugin-transform-inline-consecutive-adds@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-inline-consecutive-adds
│  ├─ publisher: shinew
│  ├─ path: ./node_modules/babel-plugin-transform-inline-consecutive-adds
│  └─ licenseFile: ./node_modules/babel-plugin-transform-inline-consecutive-adds/README.md
├─ babel-plugin-transform-member-expression-literals@6.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-member-expression-literals
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-member-expression-literals
│  └─ licenseFile: ./node_modules/babel-plugin-transform-member-expression-literals/README.md
├─ babel-plugin-transform-merge-sibling-variables@6.8.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-merge-sibling-variables
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-merge-sibling-variables
│  └─ licenseFile: ./node_modules/babel-plugin-transform-merge-sibling-variables/README.md
├─ babel-plugin-transform-minify-booleans@6.8.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-minify-booleans
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-minify-booleans
│  └─ licenseFile: ./node_modules/babel-plugin-transform-minify-booleans/README.md
├─ babel-plugin-transform-property-literals@6.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-property-literals
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-property-literals
│  └─ licenseFile: ./node_modules/babel-plugin-transform-property-literals/README.md
├─ babel-plugin-transform-regexp-constructors@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-regexp-constructors
│  ├─ publisher: shinew
│  ├─ path: ./node_modules/babel-plugin-transform-regexp-constructors
│  └─ licenseFile: ./node_modules/babel-plugin-transform-regexp-constructors/README.md
├─ babel-plugin-transform-remove-console@6.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-remove-console
│  └─ licenseFile: ./node_modules/babel-plugin-transform-remove-console/README.md
├─ babel-plugin-transform-remove-debugger@6.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-debugger
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-remove-debugger
│  └─ licenseFile: ./node_modules/babel-plugin-transform-remove-debugger/README.md
├─ babel-plugin-transform-remove-undefined@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-undefined
│  ├─ publisher: shinew
│  ├─ path: ./node_modules/babel-plugin-transform-remove-undefined
│  └─ licenseFile: ./node_modules/babel-plugin-transform-remove-undefined/README.md
├─ babel-plugin-transform-simplify-comparison-operators@6.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-simplify-comparison-operators
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-simplify-comparison-operators
│  └─ licenseFile: ./node_modules/babel-plugin-transform-simplify-comparison-operators/README.md
├─ babel-plugin-transform-undefined-to-void@6.8.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-undefined-to-void
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-plugin-transform-undefined-to-void
│  └─ licenseFile: ./node_modules/babel-plugin-transform-undefined-to-void/README.md
├─ babel-preset-minify@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/minify/tree/master/packages/babel-preset-minify
│  ├─ publisher: amasad
│  ├─ path: ./node_modules/babel-preset-minify
│  └─ licenseFile: ./node_modules/babel-preset-minify/README.md
├─ babel-register@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-register
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-register
│  └─ licenseFile: ./node_modules/babel-register/README.md
├─ babel-runtime@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-runtime
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-runtime
│  └─ licenseFile: ./node_modules/babel-runtime/README.md
├─ babel-template@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-template
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-template
│  └─ licenseFile: ./node_modules/babel-template/README.md
├─ babel-traverse@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-traverse
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-traverse
│  └─ licenseFile: ./node_modules/babel-traverse/README.md
├─ babel-types@6.26.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babel/tree/master/packages/babel-types
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babel-types
│  └─ licenseFile: ./node_modules/babel-types/README.md
├─ babylon@6.18.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/babel/babylon
│  ├─ publisher: Sebastian McKenzie
│  ├─ email: sebmck@gmail.com
│  ├─ path: ./node_modules/babylon
│  └─ licenseFile: ./node_modules/babylon/LICENSE
├─ backo2@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mokesmokes/backo
│  ├─ path: ./node_modules/backo2
│  └─ licenseFile: ./node_modules/backo2/Readme.md
├─ balanced-match@0.4.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/balanced-match
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/balanced-match
│  └─ licenseFile: ./node_modules/balanced-match/LICENSE.md
├─ balanced-match@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/balanced-match
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/brace-expansion/node_modules/balanced-match
│  └─ licenseFile: ./node_modules/brace-expansion/node_modules/balanced-match/LICENSE.md
├─ base62@0.1.1
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/andrew/base62.js
│  ├─ publisher: Andrew Nesbitt
│  ├─ email: andrewnez@gmail.com
│  ├─ url: http://andrew-nesbitt.com/
│  ├─ path: ./node_modules/base62
│  └─ licenseFile: ./node_modules/base62/LICENSE
├─ base64-arraybuffer@0.1.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/niklasvh/base64-arraybuffer
│  ├─ publisher: Niklas von Hertzen
│  ├─ email: niklasvh@gmail.com
│  ├─ url: http://hertzen.com
│  ├─ path: ./node_modules/base64-arraybuffer
│  └─ licenseFile: ./node_modules/base64-arraybuffer/README.md
├─ base64-js@1.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/beatgammit/base64-js
│  ├─ publisher: T. Jameson Little
│  ├─ email: t.jameson.little@gmail.com
│  ├─ path: ./node_modules/base64-js
│  └─ licenseFile: ./node_modules/base64-js/LICENSE
├─ base64id@0.1.0
│  ├─ licenses: UNKNOWN
│  ├─ repository: https://github.com/faeldt/base64id
│  ├─ publisher: Kristian Faeldt
│  ├─ email: faeldt_kristian@cyberagent.co.jp
│  ├─ path: ./node_modules/base64id
│  └─ licenseFile: ./node_modules/base64id/README.md
├─ batch@0.5.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/batch
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/batch
│  └─ licenseFile: ./node_modules/batch/Readme.md
├─ bcrypt-pbkdf@1.0.1
│  ├─ licenses: BSD-3-Clause
│  ├─ path: ./node_modules/bcrypt-pbkdf
│  └─ licenseFile: ./node_modules/bcrypt-pbkdf/README.md
├─ better-assert@1.0.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/visionmedia/better-assert
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/better-assert
│  └─ licenseFile: ./node_modules/better-assert/Readme.md
├─ big.js@3.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/MikeMcl/big.js
│  ├─ publisher: Michael Mclaughlin
│  ├─ email: M8ch88l@gmail.com
│  ├─ path: ./node_modules/big.js
│  └─ licenseFile: ./node_modules/big.js/LICENCE
├─ binary-extensions@1.11.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/binary-extensions
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/binary-extensions
│  └─ licenseFile: ./node_modules/binary-extensions/license
├─ blob@0.0.4
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/rase-/blob
│  ├─ path: ./node_modules/blob
│  └─ licenseFile: ./node_modules/blob/README.md
├─ block-stream@0.0.9
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/block-stream
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/block-stream
│  └─ licenseFile: ./node_modules/block-stream/LICENSE
├─ bn.js@4.11.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/bn.js
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/bn.js
│  └─ licenseFile: ./node_modules/bn.js/README.md
├─ boom@2.10.1
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/hapijs/boom
│  ├─ path: ./node_modules/boom
│  └─ licenseFile: ./node_modules/boom/LICENSE
├─ boxen@1.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/boxen
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/boxen
│  └─ licenseFile: ./node_modules/boxen/license
├─ brace-expansion@1.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/brace-expansion
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/fsevents/node_modules/brace-expansion
│  └─ licenseFile: ./node_modules/fsevents/node_modules/brace-expansion/README.md
├─ brace-expansion@1.1.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/brace-expansion
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/brace-expansion
│  └─ licenseFile: ./node_modules/brace-expansion/README.md
├─ braces@1.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/braces
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/braces
│  └─ licenseFile: ./node_modules/braces/LICENSE
├─ brorand@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/brorand
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/brorand
│  └─ licenseFile: ./node_modules/brorand/README.md
├─ browser-sync-client@2.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shakyshane/browser-sync-client
│  ├─ publisher: Shane Osbourne
│  ├─ email: shane.osbourne8@gmail.com
│  ├─ path: ./node_modules/browser-sync-client
│  └─ licenseFile: ./node_modules/browser-sync-client/README.md
├─ browser-sync-ui@0.6.3
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/BrowserSync/UI
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/browser-sync-ui
│  └─ licenseFile: ./node_modules/browser-sync-ui/LICENSE
├─ browser-sync-webpack-plugin@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Va1/browser-sync-webpack-plugin
│  ├─ publisher: Valentyn Barmashyn
│  ├─ email: valpreacher@gmail.com
│  ├─ path: ./node_modules/browser-sync-webpack-plugin
│  └─ licenseFile: ./node_modules/browser-sync-webpack-plugin/LICENCE
├─ browser-sync@2.18.13
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/Browsersync/browser-sync
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/browser-sync
│  └─ licenseFile: ./node_modules/browser-sync/LICENSE
├─ browserify-aes@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/browserify-aes
│  ├─ path: ./node_modules/browserify-aes
│  └─ licenseFile: ./node_modules/browserify-aes/LICENSE
├─ browserify-cipher@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/browserify-cipher
│  ├─ publisher: Calvin Metcalf
│  ├─ email: calvin.metcalf@gmail.com
│  ├─ path: ./node_modules/browserify-cipher
│  └─ licenseFile: ./node_modules/browserify-cipher/readme.md
├─ browserify-des@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/browserify-des
│  ├─ publisher: Calvin Metcalf
│  ├─ email: calvin.metcalf@gmail.com
│  ├─ path: ./node_modules/browserify-des
│  └─ licenseFile: ./node_modules/browserify-des/readme.md
├─ browserify-rsa@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/browserify-rsa
│  ├─ path: ./node_modules/browserify-rsa
│  └─ licenseFile: ./node_modules/browserify-rsa/LICENSE
├─ browserify-sign@4.0.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/crypto-browserify/browserify-sign
│  ├─ path: ./node_modules/browserify-sign
│  └─ licenseFile: ./node_modules/browserify-sign/LICENSE
├─ browserify-zlib@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/devongovett/browserify-zlib
│  ├─ publisher: Devon Govett
│  ├─ email: devongovett@gmail.com
│  ├─ path: ./node_modules/browserify-zlib
│  └─ licenseFile: ./node_modules/browserify-zlib/LICENSE
├─ browserslist@1.7.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ai/browserslist
│  ├─ publisher: Andrey Sitnik
│  ├─ email: andrey@sitnik.ru
│  ├─ path: ./node_modules/browserslist
│  └─ licenseFile: ./node_modules/browserslist/LICENSE
├─ bs-recipes@1.3.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/BrowserSync/recipes
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/bs-recipes
│  └─ licenseFile: ./node_modules/bs-recipes/readme.md
├─ buffer-shims@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/calvinmetcalf/buffer-shims
│  ├─ path: ./node_modules/fsevents/node_modules/buffer-shims
│  └─ licenseFile: ./node_modules/fsevents/node_modules/buffer-shims/license.md
├─ buffer-xor@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/buffer-xor
│  ├─ publisher: Daniel Cousens
│  ├─ path: ./node_modules/buffer-xor
│  └─ licenseFile: ./node_modules/buffer-xor/LICENSE
├─ buffer@4.9.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/feross/buffer
│  ├─ publisher: Feross Aboukhadijeh
│  ├─ email: feross@feross.org
│  ├─ url: http://feross.org
│  ├─ path: ./node_modules/buffer
│  └─ licenseFile: ./node_modules/buffer/LICENSE
├─ builtin-modules@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/builtin-modules
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/builtin-modules
│  └─ licenseFile: ./node_modules/builtin-modules/license
├─ builtin-status-codes@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bendrucker/builtin-status-codes
│  ├─ publisher: Ben Drucker
│  ├─ email: bvdrucker@gmail.com
│  ├─ url: bendrucker.me
│  ├─ path: ./node_modules/builtin-status-codes
│  └─ licenseFile: ./node_modules/builtin-status-codes/license
├─ caller-path@0.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/caller-path
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/caller-path
│  └─ licenseFile: ./node_modules/caller-path/readme.md
├─ callsite@1.0.0
│  ├─ licenses: MIT*
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/callsite
│  └─ licenseFile: ./node_modules/callsite/Readme.md
├─ callsites@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/callsites
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/callsites
│  └─ licenseFile: ./node_modules/callsites/readme.md
├─ camel-case@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/camel-case
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/camel-case
│  └─ licenseFile: ./node_modules/camel-case/LICENSE
├─ camelcase-keys@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/camelcase-keys
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/camelcase-keys
│  └─ licenseFile: ./node_modules/camelcase-keys/license
├─ camelcase@1.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/camelcase
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/uglify-js/node_modules/camelcase
│  └─ licenseFile: ./node_modules/uglify-js/node_modules/camelcase/license
├─ camelcase@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/camelcase
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/camelcase-keys/node_modules/camelcase
│  └─ licenseFile: ./node_modules/camelcase-keys/node_modules/camelcase/license
├─ camelcase@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/camelcase
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/yargs/node_modules/camelcase
│  └─ licenseFile: ./node_modules/yargs/node_modules/camelcase/license
├─ camelcase@4.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/camelcase
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/camelcase
│  └─ licenseFile: ./node_modules/camelcase/license
├─ caniuse-api@1.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nyalab/caniuse-api
│  ├─ path: ./node_modules/caniuse-api
│  └─ licenseFile: ./node_modules/caniuse-api/LICENSE
├─ caniuse-db@1.0.30000783
│  ├─ licenses: CC-BY-4.0
│  ├─ repository: https://github.com/Fyrd/caniuse
│  ├─ publisher: Alexis Deveria
│  ├─ email: adeveria@gmail.com
│  ├─ path: ./node_modules/caniuse-db
│  └─ licenseFile: ./node_modules/caniuse-db/LICENSE
├─ capture-stack-trace@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/capture-stack-trace
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/capture-stack-trace
│  └─ licenseFile: ./node_modules/capture-stack-trace/readme.md
├─ caseless@0.12.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/mikeal/caseless
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ path: ./node_modules/caseless
│  └─ licenseFile: ./node_modules/caseless/LICENSE
├─ center-align@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/center-align
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/center-align
│  └─ licenseFile: ./node_modules/center-align/LICENSE
├─ chalk@0.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/chalk
│  ├─ path: ./node_modules/license-checker/node_modules/chalk
│  └─ licenseFile: ./node_modules/license-checker/node_modules/chalk/readme.md
├─ chalk@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/chalk
│  ├─ path: ./node_modules/chalk
│  └─ licenseFile: ./node_modules/chalk/license
├─ chalk@2.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/chalk
│  ├─ path: ./node_modules/icss-utils/node_modules/chalk
│  └─ licenseFile: ./node_modules/icss-utils/node_modules/chalk/license
├─ chardet@0.4.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/runk/node-chardet
│  ├─ publisher: Dmitry Shirokov
│  ├─ email: deadrunk@gmail.com
│  ├─ path: ./node_modules/chardet
│  └─ licenseFile: ./node_modules/chardet/LICENSE
├─ chokidar@1.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/paulmillr/chokidar
│  ├─ publisher: Paul Miller
│  ├─ url: http://paulmillr.com
│  ├─ path: ./node_modules/chokidar
│  └─ licenseFile: ./node_modules/chokidar/README.md
├─ chrome-devtools-frontend@1.0.401423
│  ├─ licenses: BSD*
│  ├─ repository: https://github.com/ChromeDevTools/devtools-frontend
│  ├─ publisher: Paul Irish
│  ├─ path: ./node_modules/devtools-timeline-model/node_modules/chrome-devtools-frontend
│  └─ licenseFile: ./node_modules/devtools-timeline-model/node_modules/chrome-devtools-frontend/LICENSE
├─ chrome-devtools-frontend@1.0.422034
│  ├─ licenses: BSD*
│  ├─ repository: https://github.com/ChromeDevTools/devtools-frontend
│  ├─ publisher: The Chromium Authors
│  ├─ path: ./node_modules/chrome-devtools-frontend
│  └─ licenseFile: ./node_modules/chrome-devtools-frontend/LICENSE
├─ chrome-remote-interface@0.23.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/cyrus-and/chrome-remote-interface
│  ├─ publisher: Andrea Cardaci
│  ├─ email: cyrus.and@gmail.com
│  ├─ path: ./node_modules/chrome-remote-interface
│  └─ licenseFile: ./node_modules/chrome-remote-interface/LICENSE
├─ ci-info@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/watson/ci-info
│  ├─ publisher: Thomas Watson Steen
│  ├─ email: w@tson.dk
│  ├─ url: https://twitter.com/wa7son
│  ├─ path: ./node_modules/ci-info
│  └─ licenseFile: ./node_modules/ci-info/LICENSE
├─ cipher-base@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/cipher-base
│  ├─ publisher: Calvin Metcalf
│  ├─ email: calvin.metcalf@gmail.com
│  ├─ path: ./node_modules/cipher-base
│  └─ licenseFile: ./node_modules/cipher-base/LICENSE
├─ circular-json@0.3.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/WebReflection/circular-json
│  ├─ publisher: Andrea Giammarchi
│  ├─ url: http://webreflection.blogspot.com/
│  ├─ path: ./node_modules/circular-json
│  └─ licenseFile: ./node_modules/circular-json/LICENSE.txt
├─ clap@1.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lahmatiy/clap
│  ├─ publisher: Roman Dvornov
│  ├─ email: rdvornov@gmail.com
│  ├─ path: ./node_modules/clap
│  └─ licenseFile: ./node_modules/clap/LICENSE
├─ clean-css@4.1.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jakubpawlowicz/clean-css
│  ├─ publisher: Jakub Pawlowicz
│  ├─ email: contact@jakubpawlowicz.com
│  ├─ url: http://twitter.com/jakubpawlowicz
│  ├─ path: ./node_modules/clean-css
│  └─ licenseFile: ./node_modules/clean-css/LICENSE
├─ cli-boxes@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/cli-boxes
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/cli-boxes
│  └─ licenseFile: ./node_modules/cli-boxes/license
├─ cli-cursor@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/cli-cursor
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/cli-cursor
│  └─ licenseFile: ./node_modules/cli-cursor/license
├─ cli-cursor@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/cli-cursor
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/inquirer/node_modules/cli-cursor
│  └─ licenseFile: ./node_modules/inquirer/node_modules/cli-cursor/license
├─ cli-spinners@0.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/cli-spinners
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/cli-spinners
│  └─ licenseFile: ./node_modules/cli-spinners/license
├─ cli-truncate@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/cli-truncate
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/cli-truncate
│  └─ licenseFile: ./node_modules/cli-truncate/license
├─ cli-width@2.2.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/knownasilya/cli-width
│  ├─ publisher: Ilya Radchenko
│  ├─ email: ilya@burstcreations.com
│  ├─ path: ./node_modules/cli-width
│  └─ licenseFile: ./node_modules/cli-width/LICENSE
├─ cliui@2.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/bcoe/cliui
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/uglify-js/node_modules/cliui
│  └─ licenseFile: ./node_modules/uglify-js/node_modules/cliui/LICENSE.txt
├─ cliui@3.2.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/cliui
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/cliui
│  └─ licenseFile: ./node_modules/cliui/LICENSE.txt
├─ clone@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pvorb/node-clone
│  ├─ publisher: Paul Vorbach
│  ├─ email: paul@vorba.ch
│  ├─ url: http://paul.vorba.ch/
│  ├─ path: ./node_modules/clone
│  └─ licenseFile: ./node_modules/clone/LICENSE
├─ co@4.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/tj/co
│  ├─ path: ./node_modules/co
│  └─ licenseFile: ./node_modules/co/LICENSE
├─ coa@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/veged/coa
│  ├─ publisher: Sergey Berezhnoy
│  ├─ email: veged@ya.ru
│  ├─ url: http://github.com/veged
│  ├─ path: ./node_modules/coa
│  └─ licenseFile: ./node_modules/coa/README.md
├─ code-point-at@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/code-point-at
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/code-point-at
│  └─ licenseFile: ./node_modules/code-point-at/license
├─ color-convert@1.9.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Qix-/color-convert
│  ├─ publisher: Heather Arthur
│  ├─ email: fayearthur@gmail.com
│  ├─ path: ./node_modules/color-convert
│  └─ licenseFile: ./node_modules/color-convert/LICENSE
├─ color-name@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/dfcreative/color-name
│  ├─ publisher: DY
│  ├─ email: dfcreative@gmail.com
│  ├─ path: ./node_modules/color-name
│  └─ licenseFile: ./node_modules/color-name/LICENSE
├─ color-string@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/harthur/color-string
│  ├─ publisher: Heather Arthur
│  ├─ email: fayearthur@gmail.com
│  ├─ path: ./node_modules/color-string
│  └─ licenseFile: ./node_modules/color-string/LICENSE
├─ color@0.11.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Qix-/color
│  ├─ path: ./node_modules/color
│  └─ licenseFile: ./node_modules/color/LICENSE
├─ colormin@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/colormin
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/colormin
│  └─ licenseFile: ./node_modules/colormin/README.md
├─ colors@0.6.2
│  ├─ licenses: Custom: http://i.imgur.com/goJdO.png
│  ├─ repository: https://github.com/Marak/colors.js
│  ├─ publisher: Marak Squires
│  ├─ path: ./node_modules/colors
│  └─ licenseFile: ./node_modules/colors/ReadMe.md
├─ colors@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Marak/colors.js
│  ├─ publisher: Marak Squires
│  ├─ path: ./node_modules/svgo/node_modules/colors
│  └─ licenseFile: ./node_modules/svgo/node_modules/colors/LICENSE
├─ combined-stream@1.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/felixge/node-combined-stream
│  ├─ publisher: Felix Geisendörfer
│  ├─ email: felix@debuggable.com
│  ├─ url: http://debuggable.com/
│  ├─ path: ./node_modules/combined-stream
│  └─ licenseFile: ./node_modules/combined-stream/License
├─ command-line-args@4.0.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/command-line-args
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/command-line-args
│  └─ licenseFile: ./node_modules/command-line-args/LICENSE
├─ command-line-usage@4.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/command-line-usage
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/command-line-usage
│  └─ licenseFile: ./node_modules/command-line-usage/LICENSE
├─ commander@2.1.0
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/visionmedia/commander.js
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/chrome-remote-interface/node_modules/commander
│  └─ licenseFile: ./node_modules/chrome-remote-interface/node_modules/commander/Readme.md
├─ commander@2.12.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/tj/commander.js
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/commander
│  └─ licenseFile: ./node_modules/commander/LICENSE
├─ component-bind@1.0.0
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/component/bind
│  ├─ path: ./node_modules/component-bind
│  └─ licenseFile: ./node_modules/component-bind/Readme.md
├─ component-emitter@1.1.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/component/emitter
│  ├─ path: ./node_modules/socket.io-parser/node_modules/component-emitter
│  └─ licenseFile: ./node_modules/socket.io-parser/node_modules/component-emitter/Readme.md
├─ component-emitter@1.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/component/emitter
│  ├─ path: ./node_modules/component-emitter
│  └─ licenseFile: ./node_modules/component-emitter/LICENSE
├─ component-inherit@0.0.3
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/component/inherit
│  ├─ path: ./node_modules/component-inherit
│  └─ licenseFile: ./node_modules/component-inherit/Readme.md
├─ concat-map@0.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-concat-map
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/concat-map
│  └─ licenseFile: ./node_modules/concat-map/LICENSE
├─ concat-stream@1.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/maxogden/concat-stream
│  ├─ publisher: Max Ogden
│  ├─ email: max@maxogden.com
│  ├─ path: ./node_modules/concat-stream
│  └─ licenseFile: ./node_modules/concat-stream/LICENSE
├─ configstore@3.1.1
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/yeoman/configstore
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/configstore
│  └─ licenseFile: ./node_modules/configstore/readme.md
├─ connect-history-api-fallback@1.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bripkens/connect-history-api-fallback
│  ├─ publisher: Ben Ripkens
│  ├─ email: bripkens.dev@gmail.com
│  ├─ url: http://bripkens.de
│  ├─ path: ./node_modules/connect-history-api-fallback
│  └─ licenseFile: ./node_modules/connect-history-api-fallback/LICENSE
├─ connect@1.9.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/senchalabs/connect
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/express/node_modules/connect
│  └─ licenseFile: ./node_modules/express/node_modules/connect/LICENSE
├─ connect@3.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/senchalabs/connect
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/connect
│  └─ licenseFile: ./node_modules/connect/LICENSE
├─ connect@3.6.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/senchalabs/connect
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/node-faux-pas/node_modules/connect
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/connect/LICENSE
├─ console-browserify@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Raynos/console-browserify
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/console-browserify
│  └─ licenseFile: ./node_modules/console-browserify/LICENCE
├─ console-control-strings@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/console-control-strings
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ url: http://re-becca.org/
│  ├─ path: ./node_modules/console-control-strings
│  └─ licenseFile: ./node_modules/console-control-strings/LICENSE
├─ constants-browserify@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/constants-browserify
│  ├─ publisher: Julian Gruber
│  ├─ email: julian@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/constants-browserify
│  └─ licenseFile: ./node_modules/constants-browserify/README.md
├─ convert-source-map@1.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/thlorenz/convert-source-map
│  ├─ publisher: Thorsten Lorenz
│  ├─ email: thlorenz@gmx.de
│  ├─ url: http://thlorenz.com
│  ├─ path: ./node_modules/convert-source-map
│  └─ licenseFile: ./node_modules/convert-source-map/LICENSE
├─ cookie@0.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/cookie
│  ├─ publisher: Roman Shtylman
│  ├─ email: shtylman@gmail.com
│  ├─ path: ./node_modules/cookie
│  └─ licenseFile: ./node_modules/cookie/LICENSE
├─ core-js@2.5.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zloirock/core-js
│  ├─ path: ./node_modules/core-js
│  └─ licenseFile: ./node_modules/core-js/LICENSE
├─ core-util-is@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/isaacs/core-util-is
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/core-util-is
│  └─ licenseFile: ./node_modules/core-util-is/LICENSE
├─ cosmiconfig@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/davidtheclark/cosmiconfig
│  ├─ publisher: David Clark
│  ├─ email: david.dave.clark@gmail.com
│  ├─ path: ./node_modules/cosmiconfig
│  └─ licenseFile: ./node_modules/cosmiconfig/LICENSE
├─ create-ecdh@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/createECDH
│  ├─ publisher: Calvin Metcalf
│  ├─ path: ./node_modules/create-ecdh
│  └─ licenseFile: ./node_modules/create-ecdh/readme.md
├─ create-error-class@3.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/create-error-class
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/create-error-class
│  └─ licenseFile: ./node_modules/create-error-class/license
├─ create-hash@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/createHash
│  ├─ path: ./node_modules/create-hash
│  └─ licenseFile: ./node_modules/create-hash/readme.md
├─ create-hmac@1.1.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/createHmac
│  ├─ path: ./node_modules/create-hmac
│  └─ licenseFile: ./node_modules/create-hmac/README.md
├─ cross-env@5.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kentcdodds/cross-env
│  ├─ publisher: Kent C. Dodds
│  ├─ email: kent@doddsfamily.us
│  ├─ url: http://kentcdodds.com/
│  ├─ path: ./node_modules/cross-env
│  └─ licenseFile: ./node_modules/cross-env/LICENSE
├─ cross-spawn@5.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/IndigoUnited/node-cross-spawn
│  ├─ publisher: IndigoUnited
│  ├─ email: hello@indigounited.com
│  ├─ url: http://indigounited.com
│  ├─ path: ./node_modules/cross-spawn
│  └─ licenseFile: ./node_modules/cross-spawn/LICENSE
├─ cryptiles@2.0.5
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/hapijs/cryptiles
│  ├─ path: ./node_modules/cryptiles
│  └─ licenseFile: ./node_modules/cryptiles/LICENSE
├─ crypto-browserify@3.12.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/crypto-browserify
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/crypto-browserify
│  └─ licenseFile: ./node_modules/crypto-browserify/LICENSE
├─ crypto-random-string@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/crypto-random-string
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/crypto-random-string
│  └─ licenseFile: ./node_modules/crypto-random-string/license
├─ css-color-names@0.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bahamas10/css-color-names
│  ├─ publisher: Dave Eddy
│  ├─ email: dave@daveeddy.com
│  ├─ url: http://www.daveeddy.com
│  ├─ path: ./node_modules/css-color-names
│  └─ licenseFile: ./node_modules/css-color-names/README.md
├─ css-loader@0.28.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/css-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/css-loader
│  └─ licenseFile: ./node_modules/css-loader/LICENSE
├─ css-loader@0.9.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/css-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/string-replace-webpack-plugin/node_modules/css-loader
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/node_modules/css-loader/README.md
├─ css-selector-tokenizer@0.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/css-modules/css-selector-tokenizer
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/css-selector-tokenizer
│  └─ licenseFile: ./node_modules/css-selector-tokenizer/README.md
├─ cssesc@0.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/cssesc
│  ├─ publisher: Mathias Bynens
│  ├─ url: http://mathiasbynens.be/
│  ├─ path: ./node_modules/cssesc
│  └─ licenseFile: ./node_modules/cssesc/README.md
├─ cssnano@3.10.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/cssnano
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/cssnano
│  └─ licenseFile: ./node_modules/cssnano/README.md
├─ csso@1.3.12
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/css/csso
│  ├─ publisher: Sergey Kryzhanovsky
│  ├─ email: skryzhanovsky@ya.ru
│  ├─ url: https://github.com/afelix
│  ├─ path: ./node_modules/csso
│  └─ licenseFile: ./node_modules/csso/README.md
├─ csso@2.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/css/csso
│  ├─ publisher: Sergey Kryzhanovsky
│  ├─ email: skryzhanovsky@ya.ru
│  ├─ url: https://github.com/afelix
│  ├─ path: ./node_modules/svgo/node_modules/csso
│  └─ licenseFile: ./node_modules/svgo/node_modules/csso/LICENSE
├─ currently-unhandled@0.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jamestalmage/currently-unhandled
│  ├─ publisher: James Talmage
│  ├─ email: james@talmage.io
│  ├─ url: github.com/jamestalmage
│  ├─ path: ./node_modules/currently-unhandled
│  └─ licenseFile: ./node_modules/currently-unhandled/license
├─ d@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/d
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/d
│  └─ licenseFile: ./node_modules/d/LICENSE
├─ dashdash@1.14.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/trentm/node-dashdash
│  ├─ publisher: Trent Mick
│  ├─ email: trentm@gmail.com
│  ├─ url: http://trentm.com
│  ├─ path: ./node_modules/dashdash
│  └─ licenseFile: ./node_modules/dashdash/LICENSE.txt
├─ date-fns@1.29.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/date-fns/date-fns
│  ├─ publisher: Sasha Koss
│  ├─ email: koss@nocorp.me
│  ├─ path: ./node_modules/date-fns
│  └─ licenseFile: ./node_modules/date-fns/LICENSE.md
├─ date-now@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Colingo/date-now
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/date-now
│  └─ licenseFile: ./node_modules/date-now/LICENCE
├─ debug@2.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/connect/node_modules/debug
│  └─ licenseFile: ./node_modules/connect/node_modules/debug/Readme.md
├─ debug@2.3.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/socket.io/node_modules/debug
│  └─ licenseFile: ./node_modules/socket.io/node_modules/debug/LICENSE
├─ debug@2.6.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/send/node_modules/debug
│  └─ licenseFile: ./node_modules/send/node_modules/debug/LICENSE
├─ debug@2.6.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/localtunnel/node_modules/debug
│  └─ licenseFile: ./node_modules/localtunnel/node_modules/debug/LICENSE
├─ debug@2.6.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/debug
│  └─ licenseFile: ./node_modules/debug/LICENSE
├─ debug@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/debug
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/eslint/node_modules/debug
│  └─ licenseFile: ./node_modules/eslint/node_modules/debug/LICENSE
├─ debuglog@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sam-github/node-debuglog
│  ├─ publisher: Sam Roberts
│  ├─ email: sam@strongloop.com
│  ├─ path: ./node_modules/debuglog
│  └─ licenseFile: ./node_modules/debuglog/LICENSE
├─ decamelize@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/decamelize
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/decamelize
│  └─ licenseFile: ./node_modules/decamelize/license
├─ dedent@0.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/dmnd/dedent
│  ├─ publisher: Desmond Brand
│  ├─ email: dmnd@desmondbrand.com
│  ├─ url: http://desmondbrand.com
│  ├─ path: ./node_modules/dedent
│  └─ licenseFile: ./node_modules/dedent/LICENSE
├─ deep-extend@0.4.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/unclechu/node-deep-extend
│  ├─ publisher: Viacheslav Lotsmanov
│  ├─ email: lotsmanov89@gmail.com
│  ├─ path: ./node_modules/rc/node_modules/deep-extend
│  └─ licenseFile: ./node_modules/rc/node_modules/deep-extend/LICENSE
├─ deep-extend@0.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/unclechu/node-deep-extend
│  ├─ publisher: Viacheslav Lotsmanov
│  ├─ email: lotsmanov89@gmail.com
│  ├─ path: ./node_modules/deep-extend
│  └─ licenseFile: ./node_modules/deep-extend/LICENSE
├─ deep-is@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/thlorenz/deep-is
│  ├─ publisher: Thorsten Lorenz
│  ├─ email: thlorenz@gmx.de
│  ├─ url: http://thlorenz.com
│  ├─ path: ./node_modules/deep-is
│  └─ licenseFile: ./node_modules/deep-is/LICENSE
├─ defined@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/defined
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/defined
│  └─ licenseFile: ./node_modules/defined/LICENSE
├─ del@2.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/del
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/del
│  └─ licenseFile: ./node_modules/del/license
├─ delayed-stream@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/felixge/node-delayed-stream
│  ├─ publisher: Felix Geisendörfer
│  ├─ email: felix@debuggable.com
│  ├─ url: http://debuggable.com/
│  ├─ path: ./node_modules/delayed-stream
│  └─ licenseFile: ./node_modules/delayed-stream/License
├─ delegates@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/node-delegates
│  ├─ path: ./node_modules/delegates
│  └─ licenseFile: ./node_modules/delegates/License
├─ depd@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/dougwilson/nodejs-depd
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/depd
│  └─ licenseFile: ./node_modules/depd/LICENSE
├─ des.js@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/des.js
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/des.js
│  └─ licenseFile: ./node_modules/des.js/README.md
├─ destroy@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/stream-utils/destroy
│  ├─ publisher: Jonathan Ong
│  ├─ email: me@jongleberry.com
│  ├─ url: http://jongleberry.com
│  ├─ path: ./node_modules/destroy
│  └─ licenseFile: ./node_modules/destroy/LICENSE
├─ detect-indent@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/detect-indent
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/detect-indent
│  └─ licenseFile: ./node_modules/detect-indent/license
├─ detect-libc@1.0.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/lovell/detect-libc
│  ├─ publisher: Lovell Fuller
│  ├─ email: npm@lovell.info
│  ├─ path: ./node_modules/fsevents/node_modules/detect-libc
│  └─ licenseFile: ./node_modules/fsevents/node_modules/detect-libc/LICENSE
├─ detect-libc@1.0.3
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/lovell/detect-libc
│  ├─ publisher: Lovell Fuller
│  ├─ email: npm@lovell.info
│  ├─ path: ./node_modules/detect-libc
│  └─ licenseFile: ./node_modules/detect-libc/LICENSE
├─ dev-ip@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shakyshane/dev-ip
│  ├─ publisher: Shane Osbourne
│  ├─ email: shane.osbourne8@gmail.com
│  ├─ path: ./node_modules/dev-ip
│  └─ licenseFile: ./node_modules/dev-ip/README.md
├─ devtools-timeline-model@1.1.6
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/paulirish/devtools-timeline-model
│  ├─ publisher: Paul Irish
│  ├─ url: github.com/paulirish
│  ├─ path: ./node_modules/devtools-timeline-model
│  └─ licenseFile: ./node_modules/devtools-timeline-model/license
├─ dezalgo@1.0.3
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/dezalgo
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/dezalgo
│  └─ licenseFile: ./node_modules/dezalgo/LICENSE
├─ diffie-hellman@5.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/diffie-hellman
│  ├─ publisher: Calvin Metcalf
│  ├─ path: ./node_modules/diffie-hellman
│  └─ licenseFile: ./node_modules/diffie-hellman/readme.md
├─ doctrine@2.0.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/eslint/doctrine
│  ├─ path: ./node_modules/doctrine
│  └─ licenseFile: ./node_modules/doctrine/LICENSE
├─ domain-browser@1.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bevry/domain-browser
│  ├─ publisher: 2013+ Bevry Pty Ltd
│  ├─ email: us@bevry.me
│  ├─ url: http://bevry.me
│  ├─ path: ./node_modules/domain-browser
│  └─ licenseFile: ./node_modules/domain-browser/LICENSE.md
├─ dot-prop@4.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/dot-prop
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/dot-prop
│  └─ licenseFile: ./node_modules/dot-prop/license
├─ duplexer3@0.1.4
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/floatdrop/duplexer3
│  ├─ publisher: Conrad Pankoff
│  ├─ email: deoxxa@fknsrs.biz
│  ├─ url: http://www.fknsrs.biz/
│  ├─ path: ./node_modules/duplexer3
│  └─ licenseFile: ./node_modules/duplexer3/LICENSE.md
├─ easy-extender@2.3.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/shakyshane/easy-extender
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/easy-extender
│  └─ licenseFile: ./node_modules/easy-extender/LICENSE
├─ eazy-logger@3.0.2
│  ├─ licenses: Apache 2.0
│  ├─ repository: https://github.com/shakyshane/easy-logger
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/eazy-logger
│  └─ licenseFile: ./node_modules/eazy-logger/LICENSE
├─ ecc-jsbn@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/quartzjer/ecc-jsbn
│  ├─ publisher: Jeremie Miller
│  ├─ email: jeremie@jabber.org
│  ├─ url: http://jeremie.com/
│  ├─ path: ./node_modules/ecc-jsbn
│  └─ licenseFile: ./node_modules/ecc-jsbn/LICENSE
├─ ee-first@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonathanong/ee-first
│  ├─ publisher: Jonathan Ong
│  ├─ email: me@jongleberry.com
│  ├─ url: http://jongleberry.com
│  ├─ path: ./node_modules/ee-first
│  └─ licenseFile: ./node_modules/ee-first/LICENSE
├─ electron-to-chromium@1.3.28
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/kilian/electron-to-chromium
│  ├─ publisher: Kilian Valkhof
│  ├─ path: ./node_modules/electron-to-chromium
│  └─ licenseFile: ./node_modules/electron-to-chromium/README.md
├─ elegant-spinner@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/elegant-spinner
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/elegant-spinner
│  └─ licenseFile: ./node_modules/elegant-spinner/license
├─ elliptic@6.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/elliptic
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/elliptic
│  └─ licenseFile: ./node_modules/elliptic/README.md
├─ emitter-steward@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shakyShane/emitter-steward
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/emitter-steward
│  └─ licenseFile: ./node_modules/emitter-steward/README.md
├─ emojis-list@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kikobeats/emojis-list
│  ├─ publisher: Kiko Beats
│  ├─ email: josefrancisco.verdu@gmail.com
│  ├─ url: https://github.com/Kikobeats
│  ├─ path: ./node_modules/emojis-list
│  └─ licenseFile: ./node_modules/emojis-list/LICENSE.md
├─ encodeurl@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/encodeurl
│  ├─ path: ./node_modules/encodeurl
│  └─ licenseFile: ./node_modules/encodeurl/LICENSE
├─ engine.io-client@1.8.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/socketio/engine.io-client
│  ├─ path: ./node_modules/engine.io-client
│  └─ licenseFile: ./node_modules/engine.io-client/LICENSE
├─ engine.io-parser@1.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/socketio/engine.io-parser
│  ├─ path: ./node_modules/engine.io-parser
│  └─ licenseFile: ./node_modules/engine.io-parser/LICENSE
├─ engine.io@1.8.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/socketio/engine.io
│  ├─ publisher: Guillermo Rauch
│  ├─ email: guillermo@learnboost.com
│  ├─ path: ./node_modules/engine.io
│  └─ licenseFile: ./node_modules/engine.io/LICENSE
├─ enhanced-resolve@3.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/enhanced-resolve
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/enhanced-resolve
│  └─ licenseFile: ./node_modules/enhanced-resolve/README.md
├─ errno@0.1.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/node-errno
│  ├─ path: ./node_modules/errno
│  └─ licenseFile: ./node_modules/errno/README.md
├─ error-ex@1.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/qix-/node-error-ex
│  ├─ path: ./node_modules/error-ex
│  └─ licenseFile: ./node_modules/error-ex/LICENSE
├─ es3ify@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/spicyj/es3ify
│  ├─ publisher: Ben Alpert
│  ├─ email: ben@benalpert.com
│  ├─ url: http://benalpert.com
│  ├─ path: ./node_modules/es3ify
│  └─ licenseFile: ./node_modules/es3ify/LICENSE
├─ es5-ext@0.10.37
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es5-ext
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es5-ext
│  └─ licenseFile: ./node_modules/es5-ext/LICENSE
├─ es6-iterator@2.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es6-iterator
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es6-iterator
│  └─ licenseFile: ./node_modules/es6-iterator/LICENSE
├─ es6-map@0.1.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es6-map
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es6-map
│  └─ licenseFile: ./node_modules/es6-map/LICENSE
├─ es6-set@0.1.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es6-set
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es6-set
│  └─ licenseFile: ./node_modules/es6-set/LICENSE
├─ es6-symbol@3.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es6-symbol
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es6-symbol
│  └─ licenseFile: ./node_modules/es6-symbol/LICENSE
├─ es6-templates@0.2.3
│  ├─ licenses: Apache*
│  ├─ repository: https://github.com/esnext/es6-templates
│  ├─ publisher: Square, Inc.
│  ├─ path: ./node_modules/es6-templates
│  └─ licenseFile: ./node_modules/es6-templates/LICENSE
├─ es6-weak-map@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/es6-weak-map
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/es6-weak-map
│  └─ licenseFile: ./node_modules/es6-weak-map/LICENSE
├─ escape-html@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/component/escape-html
│  ├─ path: ./node_modules/escape-html
│  └─ licenseFile: ./node_modules/escape-html/LICENSE
├─ escape-string-regexp@1.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/escape-string-regexp
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/escape-string-regexp
│  └─ licenseFile: ./node_modules/escape-string-regexp/license
├─ escope@3.6.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/estools/escope
│  ├─ path: ./node_modules/escope
│  └─ licenseFile: ./node_modules/escope/LICENSE.BSD
├─ eslint-config-prettier@2.9.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/prettier/eslint-config-prettier
│  ├─ publisher: Simon Lydell
│  ├─ path: ./node_modules/eslint-config-prettier
│  └─ licenseFile: ./node_modules/eslint-config-prettier/LICENSE
├─ eslint-plugin-prettier@2.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/prettier/eslint-plugin-prettier
│  ├─ publisher: Teddy Katz
│  ├─ path: ./node_modules/eslint-plugin-prettier
│  └─ licenseFile: ./node_modules/eslint-plugin-prettier/LICENSE.md
├─ eslint-scope@3.7.1
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/eslint/eslint-scope
│  ├─ path: ./node_modules/eslint-scope
│  └─ licenseFile: ./node_modules/eslint-scope/LICENSE
├─ eslint@4.13.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/eslint/eslint
│  ├─ publisher: Nicholas C. Zakas
│  ├─ email: nicholas+npm@nczconsulting.com
│  ├─ path: ./node_modules/eslint
│  └─ licenseFile: ./node_modules/eslint/LICENSE
├─ esmangle-evaluator@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zertosh/esmangle-evaluator
│  ├─ publisher: Andres Suarez
│  ├─ email: zertosh@gmail.com
│  ├─ path: ./node_modules/esmangle-evaluator
│  └─ licenseFile: ./node_modules/esmangle-evaluator/README.md
├─ espree@3.5.2
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/eslint/espree
│  ├─ publisher: Nicholas C. Zakas
│  ├─ email: nicholas+npm@nczconsulting.com
│  ├─ path: ./node_modules/espree
│  └─ licenseFile: ./node_modules/espree/LICENSE
├─ esprima-fb@15001.1001.0-dev-harmony-fb
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/facebook/esprima
│  ├─ publisher: Ariya Hidayat
│  ├─ email: ariya.hidayat@gmail.com
│  ├─ path: ./node_modules/unreachable-branch-transform/node_modules/esprima-fb
│  └─ licenseFile: ./node_modules/unreachable-branch-transform/node_modules/esprima-fb/README.md
├─ esprima-fb@3001.1.0-dev-harmony-fb
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/facebook/esprima
│  ├─ path: ./node_modules/esprima-fb
│  └─ licenseFile: ./node_modules/esprima-fb/LICENSE.BSD
├─ esprima@2.7.3
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/jquery/esprima
│  ├─ publisher: Ariya Hidayat
│  ├─ email: ariya.hidayat@gmail.com
│  ├─ path: ./node_modules/svgo/node_modules/esprima
│  └─ licenseFile: ./node_modules/svgo/node_modules/esprima/LICENSE.BSD
├─ esprima@3.1.3
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/jquery/esprima
│  ├─ publisher: Ariya Hidayat
│  ├─ email: ariya.hidayat@gmail.com
│  ├─ path: ./node_modules/recast/node_modules/esprima
│  └─ licenseFile: ./node_modules/recast/node_modules/esprima/LICENSE.BSD
├─ esprima@4.0.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/jquery/esprima
│  ├─ publisher: Ariya Hidayat
│  ├─ email: ariya.hidayat@gmail.com
│  ├─ path: ./node_modules/esprima
│  └─ licenseFile: ./node_modules/esprima/LICENSE.BSD
├─ esquery@1.0.0
│  ├─ licenses: BSD*
│  ├─ repository: https://github.com/jrfeenst/esquery
│  ├─ publisher: Joel Feenstra
│  ├─ email: jrfeenst+esquery@gmail.com
│  ├─ path: ./node_modules/esquery
│  └─ licenseFile: ./node_modules/esquery/license.txt
├─ esrecurse@4.2.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/estools/esrecurse
│  ├─ path: ./node_modules/esrecurse
│  └─ licenseFile: ./node_modules/esrecurse/README.md
├─ estraverse@4.2.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/estools/estraverse
│  ├─ path: ./node_modules/estraverse
│  └─ licenseFile: ./node_modules/estraverse/LICENSE.BSD
├─ esutils@2.0.2
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/estools/esutils
│  ├─ path: ./node_modules/esutils
│  └─ licenseFile: ./node_modules/esutils/LICENSE.BSD
├─ etag@1.8.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/etag
│  ├─ path: ./node_modules/etag
│  └─ licenseFile: ./node_modules/etag/LICENSE
├─ event-emitter@0.3.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/medikoo/event-emitter
│  ├─ publisher: Mariusz Nowak
│  ├─ email: medyk@medikoo.com
│  ├─ url: http://www.medikoo.com/
│  ├─ path: ./node_modules/event-emitter
│  └─ licenseFile: ./node_modules/event-emitter/LICENSE
├─ eventemitter3@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/primus/eventemitter3
│  ├─ publisher: Arnout Kazemier
│  ├─ path: ./node_modules/eventemitter3
│  └─ licenseFile: ./node_modules/eventemitter3/LICENSE
├─ events@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Gozala/events
│  ├─ publisher: Irakli Gozalishvili
│  ├─ email: rfobic@gmail.com
│  ├─ url: http://jeditoolkit.com
│  ├─ path: ./node_modules/events
│  └─ licenseFile: ./node_modules/events/LICENSE
├─ evp_bytestokey@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/EVP_BytesToKey
│  ├─ publisher: Calvin Metcalf
│  ├─ email: calvin.metcalf@gmail.com
│  ├─ path: ./node_modules/evp_bytestokey
│  └─ licenseFile: ./node_modules/evp_bytestokey/LICENSE
├─ execa@0.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/execa
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/execa
│  └─ licenseFile: ./node_modules/execa/license
├─ execa@0.8.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/execa
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/lint-staged/node_modules/execa
│  └─ licenseFile: ./node_modules/lint-staged/node_modules/execa/license
├─ exit-hook@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/exit-hook
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/exit-hook
│  └─ licenseFile: ./node_modules/exit-hook/readme.md
├─ expand-brackets@0.1.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/expand-brackets
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/expand-brackets
│  └─ licenseFile: ./node_modules/expand-brackets/LICENSE
├─ expand-range@1.8.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/expand-range
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/expand-range
│  └─ licenseFile: ./node_modules/expand-range/LICENSE
├─ express@2.5.11
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/visionmedia/express
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/express
│  └─ licenseFile: ./node_modules/express/LICENSE
├─ extend@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/justmoon/node-extend
│  ├─ publisher: Stefan Thomas
│  ├─ email: justmoon@members.fsf.org
│  ├─ url: http://www.justmoon.net
│  ├─ path: ./node_modules/extend
│  └─ licenseFile: ./node_modules/extend/LICENSE
├─ external-editor@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mrkmg/node-external-editor
│  ├─ publisher: Kevin Gravier
│  ├─ email: kevin@mrkmg.com
│  ├─ url: https://mrkmg.com
│  ├─ path: ./node_modules/external-editor
│  └─ licenseFile: ./node_modules/external-editor/LICENSE
├─ extglob@0.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/extglob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/extglob
│  └─ licenseFile: ./node_modules/extglob/LICENSE
├─ extract-loader@1.0.1
│  ├─ licenses: Unlicense
│  ├─ repository: https://github.com/peerigon/extract-loader
│  ├─ publisher: peerigon
│  ├─ email: developers@peerigon.com
│  ├─ path: ./node_modules/extract-loader
│  └─ licenseFile: ./node_modules/extract-loader/LICENSE
├─ extract-text-webpack-plugin@3.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack-contrib/extract-text-webpack-plugin
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/extract-text-webpack-plugin
│  └─ licenseFile: ./node_modules/extract-text-webpack-plugin/LICENSE
├─ extsprintf@1.0.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/davepacheco/node-extsprintf
│  ├─ path: ./node_modules/fsevents/node_modules/extsprintf
│  └─ licenseFile: ./node_modules/fsevents/node_modules/extsprintf/LICENSE
├─ extsprintf@1.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/davepacheco/node-extsprintf
│  ├─ path: ./node_modules/extsprintf
│  └─ licenseFile: ./node_modules/extsprintf/LICENSE
├─ extsprintf@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/davepacheco/node-extsprintf
│  ├─ path: ./node_modules/verror/node_modules/extsprintf
│  └─ licenseFile: ./node_modules/verror/node_modules/extsprintf/LICENSE
├─ falafel@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-falafel
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/falafel
│  └─ licenseFile: ./node_modules/falafel/readme.markdown
├─ fast-deep-equal@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/fast-deep-equal
│  ├─ publisher: Evgeny Poberezkin
│  ├─ path: ./node_modules/fast-deep-equal
│  └─ licenseFile: ./node_modules/fast-deep-equal/LICENSE
├─ fast-diff@1.1.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/jhchen/fast-diff
│  ├─ publisher: Jason Chen
│  ├─ email: jhchen7@gmail.com
│  ├─ path: ./node_modules/fast-diff
│  └─ licenseFile: ./node_modules/fast-diff/README.md
├─ fast-json-stable-stringify@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/fast-json-stable-stringify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/fast-json-stable-stringify
│  └─ licenseFile: ./node_modules/fast-json-stable-stringify/LICENSE
├─ fast-levenshtein@2.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/hiddentao/fast-levenshtein
│  ├─ publisher: Ramesh Nair
│  ├─ email: ram@hiddentao.com
│  ├─ url: http://www.hiddentao.com/
│  ├─ path: ./node_modules/fast-levenshtein
│  └─ licenseFile: ./node_modules/fast-levenshtein/LICENSE.md
├─ fastparse@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/fastparse
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/fastparse
│  └─ licenseFile: ./node_modules/fastparse/README.md
├─ fg-faux-pas@1.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/filamentgroup/faux-pas
│  ├─ publisher: zachleat
│  ├─ email: zachleatherman@gmail.com
│  ├─ url: http://zachleat.com/
│  ├─ path: ./node_modules/fg-faux-pas
│  └─ licenseFile: ./node_modules/fg-faux-pas/README.md
├─ figures@1.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/figures
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/figures
│  └─ licenseFile: ./node_modules/figures/license
├─ figures@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/figures
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/inquirer/node_modules/figures
│  └─ licenseFile: ./node_modules/inquirer/node_modules/figures/license
├─ file-entry-cache@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/royriojas/file-entry-cache
│  ├─ publisher: Roy Riojas
│  ├─ url: http://royriojas.com
│  ├─ path: ./node_modules/file-entry-cache
│  └─ licenseFile: ./node_modules/file-entry-cache/LICENSE
├─ file-loader@0.8.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/file-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/string-replace-webpack-plugin/node_modules/file-loader
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/node_modules/file-loader/README.md
├─ file-loader@1.1.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/file-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/file-loader
│  └─ licenseFile: ./node_modules/file-loader/LICENSE
├─ filename-regex@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/regexhq/filename-regex
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/filename-regex
│  └─ licenseFile: ./node_modules/filename-regex/LICENSE
├─ fill-range@2.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/fill-range
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/fill-range
│  └─ licenseFile: ./node_modules/fill-range/LICENSE
├─ finalhandler@0.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/finalhandler
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/finalhandler
│  └─ licenseFile: ./node_modules/finalhandler/LICENSE
├─ finalhandler@1.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/finalhandler
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/node-faux-pas/node_modules/finalhandler
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/finalhandler/LICENSE
├─ find-parent-dir@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/thlorenz/find-parent-dir
│  ├─ publisher: Thorsten Lorenz
│  ├─ email: thlorenz@gmx.de
│  ├─ url: http://thlorenz.com
│  ├─ path: ./node_modules/find-parent-dir
│  └─ licenseFile: ./node_modules/find-parent-dir/LICENSE
├─ find-replace@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/find-replace
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/find-replace
│  └─ licenseFile: ./node_modules/find-replace/LICENSE
├─ find-up@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/find-up
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/find-up
│  └─ licenseFile: ./node_modules/find-up/license
├─ find-up@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/find-up
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/find-up
│  └─ licenseFile: ./node_modules/webpack/node_modules/find-up/license
├─ flat-cache@1.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/royriojas/flat-cache
│  ├─ publisher: Roy Riojas
│  ├─ url: http://royriojas.com
│  ├─ path: ./node_modules/flat-cache
│  └─ licenseFile: ./node_modules/flat-cache/LICENSE
├─ flatten@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jesusabdullah/node-flatten
│  ├─ publisher: Joshua Holbrook
│  ├─ email: josh.holbrook@gmail.com
│  ├─ url: http://jesusabdullah.net
│  ├─ path: ./node_modules/flatten
│  └─ licenseFile: ./node_modules/flatten/LICENSE
├─ for-in@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/for-in
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/for-in
│  └─ licenseFile: ./node_modules/for-in/LICENSE
├─ for-own@0.1.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/for-own
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/for-own
│  └─ licenseFile: ./node_modules/for-own/LICENSE
├─ foreach@2.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/manuelstofer/foreach
│  ├─ publisher: Manuel Stofer
│  ├─ email: manuel@takimata.ch
│  ├─ path: ./node_modules/foreach
│  └─ licenseFile: ./node_modules/foreach/LICENSE
├─ forever-agent@0.6.1
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/mikeal/forever-agent
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ url: http://www.futurealoof.com
│  ├─ path: ./node_modules/forever-agent
│  └─ licenseFile: ./node_modules/forever-agent/LICENSE
├─ form-data@2.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/form-data/form-data
│  ├─ publisher: Felix Geisendörfer
│  ├─ email: felix@debuggable.com
│  ├─ url: http://debuggable.com/
│  ├─ path: ./node_modules/form-data
│  └─ licenseFile: ./node_modules/form-data/License
├─ formidable@1.0.17
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/felixge/node-formidable
│  ├─ path: ./node_modules/formidable
│  └─ licenseFile: ./node_modules/formidable/LICENSE
├─ fresh@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/fresh
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/fresh
│  └─ licenseFile: ./node_modules/fresh/LICENSE
├─ fresh@0.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/fresh
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/send/node_modules/fresh
│  └─ licenseFile: ./node_modules/send/node_modules/fresh/LICENSE
├─ fresh@0.5.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/fresh
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/node-faux-pas/node_modules/fresh
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/fresh/LICENSE
├─ fs-extra@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jprichardson/node-fs-extra
│  ├─ publisher: JP Richardson
│  ├─ email: jprichardson@gmail.com
│  ├─ path: ./node_modules/fs-extra
│  └─ licenseFile: ./node_modules/fs-extra/LICENSE
├─ fs.realpath@1.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/fs.realpath
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fs.realpath
│  └─ licenseFile: ./node_modules/fs.realpath/LICENSE
├─ fsevents@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/strongloop/fsevents
│  ├─ publisher: Philipp Dunkel
│  ├─ email: pip@pipobscure.com
│  ├─ path: ./node_modules/fsevents
│  └─ licenseFile: ./node_modules/fsevents/LICENSE
├─ fstream-ignore@1.0.5
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/fstream-ignore
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fstream-ignore
│  └─ licenseFile: ./node_modules/fstream-ignore/LICENSE
├─ fstream@1.0.11
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/fstream
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fstream
│  └─ licenseFile: ./node_modules/fstream/LICENSE
├─ function-bind@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Raynos/function-bind
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/function-bind
│  └─ licenseFile: ./node_modules/function-bind/LICENSE
├─ functional-red-black-tree@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mikolalysenko/functional-red-black-tree
│  ├─ publisher: Mikola Lysenko
│  ├─ path: ./node_modules/functional-red-black-tree
│  └─ licenseFile: ./node_modules/functional-red-black-tree/LICENSE
├─ gauge@2.7.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/gauge
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ path: ./node_modules/gauge
│  └─ licenseFile: ./node_modules/gauge/LICENSE
├─ get-caller-file@1.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/stefanpenner/get-caller-file
│  ├─ publisher: Stefan Penner
│  ├─ path: ./node_modules/get-caller-file
│  └─ licenseFile: ./node_modules/get-caller-file/README.md
├─ get-own-enumerable-property-symbols@2.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/mightyiam/get-own-enumerable-property-symbols
│  ├─ publisher: Shahar Or
│  ├─ email: mightyiampresence@gmail.com
│  ├─ url: mightyiam
│  ├─ path: ./node_modules/get-own-enumerable-property-symbols
│  └─ licenseFile: ./node_modules/get-own-enumerable-property-symbols/README.md
├─ get-stdin@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/get-stdin
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/redent/node_modules/get-stdin
│  └─ licenseFile: ./node_modules/redent/node_modules/get-stdin/readme.md
├─ get-stdin@5.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/get-stdin
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/get-stdin
│  └─ licenseFile: ./node_modules/get-stdin/license
├─ get-stream@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/get-stream
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/get-stream
│  └─ licenseFile: ./node_modules/get-stream/license
├─ getpass@0.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/arekinath/node-getpass
│  ├─ publisher: Alex Wilson
│  ├─ email: alex.wilson@joyent.com
│  ├─ path: ./node_modules/getpass
│  └─ licenseFile: ./node_modules/getpass/LICENSE
├─ gl-matrix@2.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/toji/gl-matrix
│  ├─ path: ./node_modules/gl-matrix
│  └─ licenseFile: ./node_modules/gl-matrix/LICENSE.md
├─ glob-base@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/glob-base
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/glob-base
│  └─ licenseFile: ./node_modules/glob-base/LICENSE
├─ glob-parent@2.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/es128/glob-parent
│  ├─ publisher: Elan Shanker
│  ├─ path: ./node_modules/glob-parent
│  └─ licenseFile: ./node_modules/glob-parent/LICENSE
├─ glob@7.1.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/node-glob
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/glob
│  └─ licenseFile: ./node_modules/glob/LICENSE
├─ global-dirs@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/global-dirs
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/global-dirs
│  └─ licenseFile: ./node_modules/global-dirs/license
├─ globals@11.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/globals
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/globals
│  └─ licenseFile: ./node_modules/globals/license
├─ globals@9.18.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/globals
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/babel-traverse/node_modules/globals
│  └─ licenseFile: ./node_modules/babel-traverse/node_modules/globals/license
├─ globby@5.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/globby
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/globby
│  └─ licenseFile: ./node_modules/globby/license
├─ got@6.7.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/got
│  ├─ path: ./node_modules/got
│  └─ licenseFile: ./node_modules/got/license
├─ graceful-fs@4.1.11
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/node-graceful-fs
│  ├─ path: ./node_modules/graceful-fs
│  └─ licenseFile: ./node_modules/graceful-fs/LICENSE
├─ handlebars@4.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/wycats/handlebars.js
│  ├─ publisher: Yehuda Katz
│  ├─ path: ./node_modules/handlebars
│  └─ licenseFile: ./node_modules/handlebars/LICENSE
├─ har-schema@1.0.5
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/ahmadnassri/har-schema
│  ├─ publisher: Ahmad Nassri
│  ├─ email: ahmad@ahmadnassri.com
│  ├─ url: https://www.ahmadnassri.com/
│  ├─ path: ./node_modules/har-schema
│  └─ licenseFile: ./node_modules/har-schema/LICENSE
├─ har-validator@4.2.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/ahmadnassri/har-validator
│  ├─ publisher: Ahmad Nassri
│  ├─ email: ahmad@ahmadnassri.com
│  ├─ url: https://www.ahmadnassri.com/
│  ├─ path: ./node_modules/har-validator
│  └─ licenseFile: ./node_modules/har-validator/LICENSE
├─ has-ansi@0.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/has-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/license-checker/node_modules/has-ansi
│  └─ licenseFile: ./node_modules/license-checker/node_modules/has-ansi/readme.md
├─ has-ansi@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/has-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/has-ansi
│  └─ licenseFile: ./node_modules/has-ansi/license
├─ has-binary@0.1.6
│  ├─ licenses: MIT
│  ├─ publisher: Kevin Roark
│  ├─ path: ./node_modules/engine.io-parser/node_modules/has-binary
│  └─ licenseFile: ./node_modules/engine.io-parser/node_modules/has-binary/LICENSE
├─ has-binary@0.1.7
│  ├─ licenses: MIT
│  ├─ publisher: Kevin Roark
│  ├─ path: ./node_modules/has-binary
│  └─ licenseFile: ./node_modules/has-binary/LICENSE
├─ has-cors@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/component/has-cors
│  ├─ publisher: Nathan Rajlich
│  ├─ email: nathan@tootallnate.net
│  ├─ url: http://n8.io/
│  ├─ path: ./node_modules/has-cors
│  └─ licenseFile: ./node_modules/has-cors/Readme.md
├─ has-flag@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/has-flag
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/postcss/node_modules/has-flag
│  └─ licenseFile: ./node_modules/postcss/node_modules/has-flag/license
├─ has-flag@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/has-flag
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/has-flag
│  └─ licenseFile: ./node_modules/has-flag/license
├─ has-unicode@2.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/has-unicode
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ path: ./node_modules/has-unicode
│  └─ licenseFile: ./node_modules/has-unicode/LICENSE
├─ has@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/tarruda/has
│  ├─ publisher: Thiago de Arruda
│  ├─ email: tpadilha84@gmail.com
│  ├─ path: ./node_modules/has
│  └─ licenseFile: ./node_modules/has/README.mkd
├─ hash-base@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/hash-base
│  ├─ publisher: Kirill Fomichev
│  ├─ email: fanatid@ya.ru
│  ├─ url: https://github.com/fanatid
│  ├─ path: ./node_modules/hash-base
│  └─ licenseFile: ./node_modules/hash-base/README.md
├─ hash-base@3.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/hash-base
│  ├─ publisher: Kirill Fomichev
│  ├─ email: fanatid@ya.ru
│  ├─ url: https://github.com/fanatid
│  ├─ path: ./node_modules/md5.js/node_modules/hash-base
│  └─ licenseFile: ./node_modules/md5.js/node_modules/hash-base/LICENSE
├─ hash.js@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/hash.js
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/hash.js
│  └─ licenseFile: ./node_modules/hash.js/README.md
├─ hawk@3.1.3
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/hueniverse/hawk
│  ├─ publisher: Eran Hammer
│  ├─ email: eran@hammer.io
│  ├─ url: http://hueniverse.com
│  ├─ path: ./node_modules/hawk
│  └─ licenseFile: ./node_modules/hawk/LICENSE
├─ he@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/he
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/he
│  └─ licenseFile: ./node_modules/he/README.md
├─ hmac-drbg@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/hmac-drbg
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/hmac-drbg
│  └─ licenseFile: ./node_modules/hmac-drbg/README.md
├─ hoek@2.16.3
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/hapijs/hoek
│  ├─ path: ./node_modules/hoek
│  └─ licenseFile: ./node_modules/hoek/LICENSE
├─ home-or-tmp@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/home-or-tmp
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/home-or-tmp
│  └─ licenseFile: ./node_modules/home-or-tmp/license
├─ hosted-git-info@2.5.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/hosted-git-info
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ url: http://re-becca.org
│  ├─ path: ./node_modules/hosted-git-info
│  └─ licenseFile: ./node_modules/hosted-git-info/LICENSE
├─ html-comment-regex@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/stevemao/html-comment-regex
│  ├─ publisher: Steve Mao
│  ├─ email: maochenyan@gmail.com
│  ├─ url: https://github.com/stevemao
│  ├─ path: ./node_modules/html-comment-regex
│  └─ licenseFile: ./node_modules/html-comment-regex/README.md
├─ html-loader@0.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/html-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/html-loader
│  └─ licenseFile: ./node_modules/html-loader/LICENSE
├─ html-minifier@3.5.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kangax/html-minifier
│  ├─ publisher: Juriy "kangax" Zaytsev
│  ├─ path: ./node_modules/html-minifier
│  └─ licenseFile: ./node_modules/html-minifier/LICENSE
├─ http-errors@1.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/http-errors
│  ├─ publisher: Jonathan Ong
│  ├─ email: me@jongleberry.com
│  ├─ url: http://jongleberry.com
│  ├─ path: ./node_modules/serve-index/node_modules/http-errors
│  └─ licenseFile: ./node_modules/serve-index/node_modules/http-errors/LICENSE
├─ http-errors@1.6.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/http-errors
│  ├─ publisher: Jonathan Ong
│  ├─ email: me@jongleberry.com
│  ├─ url: http://jongleberry.com
│  ├─ path: ./node_modules/http-errors
│  └─ licenseFile: ./node_modules/http-errors/LICENSE
├─ http-proxy@1.15.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodejitsu/node-http-proxy
│  ├─ publisher: Charlie Robbins
│  ├─ email: charlie.robbins@gmail.com
│  ├─ path: ./node_modules/http-proxy
│  └─ licenseFile: ./node_modules/http-proxy/LICENSE
├─ http-signature@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/joyent/node-http-signature
│  ├─ publisher: Joyent, Inc
│  ├─ path: ./node_modules/http-signature
│  └─ licenseFile: ./node_modules/http-signature/LICENSE
├─ https-browserify@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/https-browserify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/https-browserify
│  └─ licenseFile: ./node_modules/https-browserify/LICENSE
├─ husky@0.14.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/typicode/husky
│  ├─ publisher: Typicode
│  ├─ email: typicode@gmail.com
│  ├─ path: ./node_modules/husky
│  └─ licenseFile: ./node_modules/husky/LICENSE
├─ iconv-lite@0.4.19
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ashtuchkin/iconv-lite
│  ├─ publisher: Alexander Shtuchkin
│  ├─ email: ashtuchkin@gmail.com
│  ├─ path: ./node_modules/iconv-lite
│  └─ licenseFile: ./node_modules/iconv-lite/LICENSE
├─ icss-replace-symbols@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/css-modules/icss-replace-symbols
│  ├─ publisher: Glen Maddern
│  ├─ path: ./node_modules/icss-replace-symbols
│  └─ licenseFile: ./node_modules/icss-replace-symbols/README.md
├─ icss-utils@2.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/css-modules/icss-utils
│  ├─ publisher: Glen Maddern
│  ├─ path: ./node_modules/icss-utils
│  └─ licenseFile: ./node_modules/icss-utils/README.md
├─ ieee754@1.1.8
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/feross/ieee754
│  ├─ publisher: Feross Aboukhadijeh
│  ├─ email: feross@feross.org
│  ├─ url: http://feross.org
│  ├─ path: ./node_modules/ieee754
│  └─ licenseFile: ./node_modules/ieee754/LICENSE
├─ ignore@3.3.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kaelzhang/node-ignore
│  ├─ publisher: kael
│  ├─ path: ./node_modules/ignore
│  └─ licenseFile: ./node_modules/ignore/README.md
├─ image-ssim@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/darosh/image-ssim-js
│  ├─ publisher: Jan Forst
│  ├─ email: ensonador@gmail.com
│  ├─ url: https://github.com/darosh
│  ├─ path: ./node_modules/image-ssim
│  └─ licenseFile: ./node_modules/image-ssim/LICENSE
├─ immediate@3.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/calvinmetcalf/immediate
│  ├─ path: ./node_modules/immediate
│  └─ licenseFile: ./node_modules/immediate/LICENSE.txt
├─ immutable@3.8.1
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/facebook/immutable-js
│  ├─ publisher: Lee Byron
│  ├─ url: https://github.com/leebyron
│  ├─ path: ./node_modules/immutable
│  └─ licenseFile: ./node_modules/immutable/LICENSE
├─ immutable@3.8.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/immutable-js
│  ├─ publisher: Lee Byron
│  ├─ url: https://github.com/leebyron
│  ├─ path: ./node_modules/browser-sync-ui/node_modules/immutable
│  └─ licenseFile: ./node_modules/browser-sync-ui/node_modules/immutable/LICENSE
├─ import-lazy@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/import-lazy
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/import-lazy
│  └─ licenseFile: ./node_modules/import-lazy/license
├─ imurmurhash@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jensyt/imurmurhash-js
│  ├─ publisher: Jens Taylor
│  ├─ email: jensyt@gmail.com
│  ├─ url: https://github.com/homebrewing
│  ├─ path: ./node_modules/imurmurhash
│  └─ licenseFile: ./node_modules/imurmurhash/README.md
├─ indent-string@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/indent-string
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/indent-string
│  └─ licenseFile: ./node_modules/indent-string/license
├─ indent-string@3.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/indent-string
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/listr-update-renderer/node_modules/indent-string
│  └─ licenseFile: ./node_modules/listr-update-renderer/node_modules/indent-string/license
├─ indexes-of@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/dominictarr/indexes-of
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/indexes-of
│  └─ licenseFile: ./node_modules/indexes-of/LICENSE
├─ indexof@0.0.1
│  ├─ licenses: MIT*
│  ├─ path: ./node_modules/indexof
│  └─ licenseFile: ./node_modules/indexof/Readme.md
├─ inflight@1.0.6
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/inflight
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/inflight
│  └─ licenseFile: ./node_modules/inflight/LICENSE
├─ inherits@2.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/inherits
│  ├─ path: ./node_modules/util/node_modules/inherits
│  └─ licenseFile: ./node_modules/util/node_modules/inherits/LICENSE
├─ inherits@2.0.3
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/inherits
│  ├─ path: ./node_modules/inherits
│  └─ licenseFile: ./node_modules/inherits/LICENSE
├─ ini@1.3.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/ini
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fsevents/node_modules/ini
│  └─ licenseFile: ./node_modules/fsevents/node_modules/ini/LICENSE
├─ ini@1.3.5
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/ini
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/ini
│  └─ licenseFile: ./node_modules/ini/LICENSE
├─ inline-process-browser@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/calvinmetcalf/inline-process-browser
│  ├─ publisher: Calvin W. Metcalf
│  ├─ email: calvin.metcalf@gmail.com
│  ├─ path: ./node_modules/inline-process-browser
│  └─ licenseFile: ./node_modules/inline-process-browser/readme.md
├─ inquirer@3.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SBoudrias/Inquirer.js
│  ├─ publisher: Simon Boudrias
│  ├─ email: admin@simonboudrias.com
│  ├─ path: ./node_modules/inquirer
│  └─ licenseFile: ./node_modules/inquirer/README.md
├─ interpret@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/tkellen/node-interpret
│  ├─ publisher: Tyler Kellen
│  ├─ url: http://goingslowly.com/
│  ├─ path: ./node_modules/interpret
│  └─ licenseFile: ./node_modules/interpret/LICENSE
├─ invariant@2.2.2
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/zertosh/invariant
│  ├─ publisher: Andres Suarez
│  ├─ email: zertosh@gmail.com
│  ├─ path: ./node_modules/invariant
│  └─ licenseFile: ./node_modules/invariant/LICENSE
├─ invert-kv@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/invert-kv
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/invert-kv
│  └─ licenseFile: ./node_modules/invert-kv/readme.md
├─ is-absolute-url@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-absolute-url
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/is-absolute-url
│  └─ licenseFile: ./node_modules/is-absolute-url/license
├─ is-arrayish@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/qix-/node-is-arrayish
│  ├─ publisher: Qix
│  ├─ url: http://github.com/qix-
│  ├─ path: ./node_modules/is-arrayish
│  └─ licenseFile: ./node_modules/is-arrayish/LICENSE
├─ is-binary-path@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-binary-path
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-binary-path
│  └─ licenseFile: ./node_modules/is-binary-path/license
├─ is-buffer@1.1.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/feross/is-buffer
│  ├─ publisher: Feross Aboukhadijeh
│  ├─ email: feross@feross.org
│  ├─ url: http://feross.org/
│  ├─ path: ./node_modules/is-buffer
│  └─ licenseFile: ./node_modules/is-buffer/LICENSE
├─ is-builtin-module@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-builtin-module
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-builtin-module
│  └─ licenseFile: ./node_modules/is-builtin-module/license
├─ is-ci@1.0.10
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/watson/is-ci
│  ├─ publisher: Thomas Watson Steen
│  ├─ email: w@tson.dk
│  ├─ url: https://twitter.com/wa7son
│  ├─ path: ./node_modules/is-ci
│  └─ licenseFile: ./node_modules/is-ci/LICENSE
├─ is-directory@0.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-directory
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-directory
│  └─ licenseFile: ./node_modules/is-directory/LICENSE
├─ is-dotfile@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-dotfile
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-dotfile
│  └─ licenseFile: ./node_modules/is-dotfile/LICENSE
├─ is-equal-shallow@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-equal-shallow
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-equal-shallow
│  └─ licenseFile: ./node_modules/is-equal-shallow/LICENSE
├─ is-extendable@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-extendable
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-extendable
│  └─ licenseFile: ./node_modules/is-extendable/LICENSE
├─ is-extglob@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-extglob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-extglob
│  └─ licenseFile: ./node_modules/is-extglob/LICENSE
├─ is-extglob@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-extglob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/lint-staged/node_modules/is-extglob
│  └─ licenseFile: ./node_modules/lint-staged/node_modules/is-extglob/LICENSE
├─ is-finite@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-finite
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-finite
│  └─ licenseFile: ./node_modules/is-finite/license
├─ is-fullwidth-code-point@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-fullwidth-code-point
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/string-width/node_modules/is-fullwidth-code-point
│  └─ licenseFile: ./node_modules/string-width/node_modules/is-fullwidth-code-point/license
├─ is-fullwidth-code-point@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-fullwidth-code-point
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-fullwidth-code-point
│  └─ licenseFile: ./node_modules/is-fullwidth-code-point/license
├─ is-glob@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-glob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-glob
│  └─ licenseFile: ./node_modules/is-glob/LICENSE
├─ is-glob@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-glob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/lint-staged/node_modules/is-glob
│  └─ licenseFile: ./node_modules/lint-staged/node_modules/is-glob/LICENSE
├─ is-installed-globally@0.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-installed-globally
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-installed-globally
│  └─ licenseFile: ./node_modules/is-installed-globally/license
├─ is-npm@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-npm
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/is-npm
│  └─ licenseFile: ./node_modules/is-npm/readme.md
├─ is-number-like@1.0.8
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/vigour-io/is-number-like
│  ├─ publisher: Vigour.io
│  ├─ email: dev@vigour.io
│  ├─ path: ./node_modules/is-number-like
│  └─ licenseFile: ./node_modules/is-number-like/LICENSE
├─ is-number@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-number
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-number
│  └─ licenseFile: ./node_modules/is-number/LICENSE
├─ is-number@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-number
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/randomatic/node_modules/is-number
│  └─ licenseFile: ./node_modules/randomatic/node_modules/is-number/LICENSE
├─ is-obj@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-obj
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-obj
│  └─ licenseFile: ./node_modules/is-obj/license
├─ is-observable@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-observable
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-observable
│  └─ licenseFile: ./node_modules/is-observable/license
├─ is-path-cwd@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-path-cwd
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/is-path-cwd
│  └─ licenseFile: ./node_modules/is-path-cwd/readme.md
├─ is-path-in-cwd@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-path-in-cwd
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/is-path-in-cwd
│  └─ licenseFile: ./node_modules/is-path-in-cwd/readme.md
├─ is-path-inside@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-path-inside
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-path-inside
│  └─ licenseFile: ./node_modules/is-path-inside/license
├─ is-plain-obj@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-plain-obj
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-plain-obj
│  └─ licenseFile: ./node_modules/is-plain-obj/license
├─ is-posix-bracket@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-posix-bracket
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-posix-bracket
│  └─ licenseFile: ./node_modules/is-posix-bracket/LICENSE
├─ is-primitive@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-primitive
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-primitive
│  └─ licenseFile: ./node_modules/is-primitive/LICENSE
├─ is-promise@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/then/is-promise
│  ├─ publisher: ForbesLindesay
│  ├─ path: ./node_modules/is-promise
│  └─ licenseFile: ./node_modules/is-promise/LICENSE
├─ is-redirect@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-redirect
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-redirect
│  └─ licenseFile: ./node_modules/is-redirect/license
├─ is-regexp@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-regexp
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/is-regexp
│  └─ licenseFile: ./node_modules/is-regexp/readme.md
├─ is-resolvable@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shinnn/is-resolvable
│  ├─ publisher: Shinnosuke Watanabe
│  ├─ url: https://github.com/shinnn
│  ├─ path: ./node_modules/is-resolvable
│  └─ licenseFile: ./node_modules/is-resolvable/LICENSE
├─ is-retry-allowed@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/is-retry-allowed
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/is-retry-allowed
│  └─ licenseFile: ./node_modules/is-retry-allowed/license
├─ is-stream@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-stream
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-stream
│  └─ licenseFile: ./node_modules/is-stream/license
├─ is-svg@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/is-svg
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/is-svg
│  └─ licenseFile: ./node_modules/is-svg/license
├─ is-typedarray@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/hughsk/is-typedarray
│  ├─ publisher: Hugh Kennedy
│  ├─ email: hughskennedy@gmail.com
│  ├─ url: http://hughsk.io/
│  ├─ path: ./node_modules/is-typedarray
│  └─ licenseFile: ./node_modules/is-typedarray/LICENSE.md
├─ is-utf8@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/wayfind/is-utf8
│  ├─ publisher: wayfind
│  ├─ path: ./node_modules/is-utf8
│  └─ licenseFile: ./node_modules/is-utf8/LICENSE
├─ is-windows@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/is-windows
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/is-windows
│  └─ licenseFile: ./node_modules/is-windows/LICENSE
├─ isarray@0.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/isarray
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/isarray
│  └─ licenseFile: ./node_modules/isarray/README.md
├─ isarray@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/juliangruber/isarray
│  ├─ publisher: Julian Gruber
│  ├─ email: mail@juliangruber.com
│  ├─ url: http://juliangruber.com
│  ├─ path: ./node_modules/readable-stream/node_modules/isarray
│  └─ licenseFile: ./node_modules/readable-stream/node_modules/isarray/README.md
├─ isexe@2.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/isexe
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/isexe
│  └─ licenseFile: ./node_modules/isexe/LICENSE
├─ isobject@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/isobject
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/isobject
│  └─ licenseFile: ./node_modules/isobject/LICENSE
├─ isstream@0.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/isstream
│  ├─ publisher: Rod Vagg
│  ├─ email: rod@vagg.org
│  ├─ path: ./node_modules/isstream
│  └─ licenseFile: ./node_modules/isstream/LICENSE.md
├─ jest-docblock@21.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/jest
│  ├─ path: ./node_modules/jest-docblock
│  └─ licenseFile: ./node_modules/jest-docblock/README.md
├─ jest-get-type@21.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/jest
│  └─ path: ./node_modules/jest-get-type
├─ jest-validate@21.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/jest
│  ├─ path: ./node_modules/jest-validate
│  └─ licenseFile: ./node_modules/jest-validate/README.md
├─ jodid25519@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/meganz/jodid25519
│  ├─ publisher: Michele Bini, Ron Garret, Guy K. Kloss
│  ├─ path: ./node_modules/fsevents/node_modules/jodid25519
│  └─ licenseFile: ./node_modules/fsevents/node_modules/jodid25519/LICENSE
├─ join-path@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/scottcorgan/join-path
│  ├─ publisher: Scott Corgan
│  ├─ path: ./node_modules/join-path
│  └─ licenseFile: ./node_modules/join-path/LICENSE
├─ jpeg-js@0.1.2
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/eugeneware/jpeg-js
│  ├─ publisher: Eugene Ware
│  ├─ email: eugene@noblesamurai.com
│  ├─ path: ./node_modules/jpeg-js
│  └─ licenseFile: ./node_modules/jpeg-js/LICENSE
├─ js-base64@2.4.0
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/dankogai/js-base64
│  ├─ publisher: Dan Kogai
│  ├─ path: ./node_modules/js-base64
│  └─ licenseFile: ./node_modules/js-base64/LICENSE.md
├─ js-tokens@3.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lydell/js-tokens
│  ├─ publisher: Simon Lydell
│  ├─ path: ./node_modules/js-tokens
│  └─ licenseFile: ./node_modules/js-tokens/LICENSE
├─ js-yaml@3.10.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodeca/js-yaml
│  ├─ publisher: Vladimir Zapparov
│  ├─ email: dervus.grim@gmail.com
│  ├─ path: ./node_modules/js-yaml
│  └─ licenseFile: ./node_modules/js-yaml/LICENSE
├─ js-yaml@3.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodeca/js-yaml
│  ├─ publisher: Vladimir Zapparov
│  ├─ email: dervus.grim@gmail.com
│  ├─ path: ./node_modules/svgo/node_modules/js-yaml
│  └─ licenseFile: ./node_modules/svgo/node_modules/js-yaml/LICENSE
├─ jsbn@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/andyperlitch/jsbn
│  ├─ publisher: Tom Wu
│  ├─ path: ./node_modules/jsbn
│  └─ licenseFile: ./node_modules/jsbn/LICENSE
├─ jsesc@0.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/jsesc
│  ├─ publisher: Mathias Bynens
│  ├─ url: http://mathiasbynens.be/
│  ├─ path: ./node_modules/regjsparser/node_modules/jsesc
│  └─ licenseFile: ./node_modules/regjsparser/node_modules/jsesc/README.md
├─ jsesc@1.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/jsesc
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  └─ path: ./node_modules/jsesc
├─ json-loader@0.5.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/json-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/json-loader
│  └─ licenseFile: ./node_modules/json-loader/LICENSE
├─ json-parse-better-errors@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zkat/json-parse-better-errors
│  ├─ publisher: Kat Marchán
│  ├─ email: kzm@sykosomatic.org
│  ├─ path: ./node_modules/json-parse-better-errors
│  └─ licenseFile: ./node_modules/json-parse-better-errors/LICENSE.md
├─ json-schema-traverse@0.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/epoberezkin/json-schema-traverse
│  ├─ publisher: Evgeny Poberezkin
│  ├─ path: ./node_modules/json-schema-traverse
│  └─ licenseFile: ./node_modules/json-schema-traverse/LICENSE
├─ json-schema@0.2.3
│  ├─ licenses
│  │  ├─ 0: AFLv2.1
│  │  └─ 1: BSD
│  ├─ repository: https://github.com/kriszyp/json-schema
│  ├─ publisher: Kris Zyp
│  ├─ path: ./node_modules/json-schema
│  └─ licenseFile: ./node_modules/json-schema/README.md
├─ json-stable-stringify-without-jsonify@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/samn/json-stable-stringify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/json-stable-stringify-without-jsonify
│  └─ licenseFile: ./node_modules/json-stable-stringify-without-jsonify/LICENSE
├─ json-stable-stringify@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/json-stable-stringify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/json-stable-stringify
│  └─ licenseFile: ./node_modules/json-stable-stringify/LICENSE
├─ json-stringify-safe@5.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/json-stringify-safe
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me
│  ├─ path: ./node_modules/json-stringify-safe
│  └─ licenseFile: ./node_modules/json-stringify-safe/LICENSE
├─ json3@3.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bestiejs/json3
│  ├─ publisher: Kit Cambridge
│  ├─ email: github@kitcambridge.be
│  ├─ url: http://kitcambridge.be/
│  ├─ path: ./node_modules/json3
│  └─ licenseFile: ./node_modules/json3/LICENSE
├─ json5@0.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/aseemk/json5
│  ├─ publisher: Aseem Kishore
│  ├─ email: aseem.kishore@gmail.com
│  ├─ path: ./node_modules/json5
│  └─ licenseFile: ./node_modules/json5/LICENSE.md
├─ jsonfile@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jprichardson/node-jsonfile
│  ├─ publisher: JP Richardson
│  ├─ email: jprichardson@gmail.com
│  ├─ path: ./node_modules/jsonfile
│  └─ licenseFile: ./node_modules/jsonfile/LICENSE
├─ jsonify@0.0.0
│  ├─ licenses: Public Domain
│  ├─ repository: https://github.com/substack/jsonify
│  ├─ publisher: Douglas Crockford
│  ├─ url: http://crockford.com/
│  ├─ path: ./node_modules/jsonify
│  └─ licenseFile: ./node_modules/jsonify/README.markdown
├─ jsprim@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/joyent/node-jsprim
│  ├─ path: ./node_modules/fsevents/node_modules/jsprim
│  └─ licenseFile: ./node_modules/fsevents/node_modules/jsprim/LICENSE
├─ jsprim@1.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/joyent/node-jsprim
│  ├─ path: ./node_modules/jsprim
│  └─ licenseFile: ./node_modules/jsprim/LICENSE
├─ jstransform@3.0.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/facebook/jstransform
│  ├─ path: ./node_modules/jstransform
│  └─ licenseFile: ./node_modules/jstransform/LICENSE
├─ kind-of@3.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/kind-of
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/kind-of
│  └─ licenseFile: ./node_modules/kind-of/LICENSE
├─ kind-of@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/kind-of
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/randomatic/node_modules/kind-of
│  └─ licenseFile: ./node_modules/randomatic/node_modules/kind-of/LICENSE
├─ latest-version@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/latest-version
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/latest-version
│  └─ licenseFile: ./node_modules/latest-version/license
├─ lazy-cache@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/lazy-cache
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/lazy-cache
│  └─ licenseFile: ./node_modules/lazy-cache/LICENSE
├─ lcid@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/lcid
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/lcid
│  └─ licenseFile: ./node_modules/lcid/license
├─ leven@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/leven
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/leven
│  └─ licenseFile: ./node_modules/leven/license
├─ levn@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/gkz/levn
│  ├─ publisher: George Zahariev
│  ├─ email: z@georgezahariev.com
│  ├─ path: ./node_modules/levn
│  └─ licenseFile: ./node_modules/levn/LICENSE
├─ license-checker@15.0.0
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/davglass/license-checker
│  ├─ publisher: Dav Glass
│  ├─ email: davglass@gmail.com
│  ├─ path: ./node_modules/license-checker
│  └─ licenseFile: ./node_modules/license-checker/LICENSE
├─ lie@3.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/calvinmetcalf/lie
│  ├─ path: ./node_modules/lie
│  └─ licenseFile: ./node_modules/lie/license.md
├─ lighthouse@2.0.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/GoogleChrome/lighthouse
│  ├─ publisher: The Chromium Authors
│  ├─ path: ./node_modules/lighthouse
│  └─ licenseFile: ./node_modules/lighthouse/LICENSE
├─ limiter@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jhurliman/node-rate-limiter
│  ├─ publisher: John Hurliman
│  ├─ email: jhurliman@jhurliman.org
│  ├─ path: ./node_modules/limiter
│  └─ licenseFile: ./node_modules/limiter/LICENSE.txt
├─ lint-staged@6.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/okonet/lint-staged
│  ├─ publisher: Andrey Okonetchnikov
│  ├─ email: andrey@okonet.ru
│  ├─ path: ./node_modules/lint-staged
│  └─ licenseFile: ./node_modules/lint-staged/LICENSE
├─ listr-silent-renderer@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SamVerschueren/listr-silent-renderer
│  ├─ publisher: Sam Verschueren
│  ├─ email: sam.verschueren@gmail.com
│  ├─ url: github.com/SamVerschueren
│  ├─ path: ./node_modules/listr-silent-renderer
│  └─ licenseFile: ./node_modules/listr-silent-renderer/license
├─ listr-update-renderer@0.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SamVerschueren/listr-update-renderer
│  ├─ publisher: Sam Verschueren
│  ├─ email: sam.verschueren@gmail.com
│  ├─ url: github.com/SamVerschueren
│  ├─ path: ./node_modules/listr-update-renderer
│  └─ licenseFile: ./node_modules/listr-update-renderer/license
├─ listr-verbose-renderer@0.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SamVerschueren/listr-verbose-renderer
│  ├─ publisher: Sam Verschueren
│  ├─ email: sam.verschueren@gmail.com
│  ├─ url: github.com/SamVerschueren
│  ├─ path: ./node_modules/listr-verbose-renderer
│  └─ licenseFile: ./node_modules/listr-verbose-renderer/license
├─ listr@0.13.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SamVerschueren/listr
│  ├─ publisher: Sam Verschueren
│  ├─ email: sam.verschueren@gmail.com
│  ├─ url: github.com/SamVerschueren
│  ├─ path: ./node_modules/listr
│  └─ licenseFile: ./node_modules/listr/license
├─ load-json-file@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/load-json-file
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/load-json-file
│  └─ licenseFile: ./node_modules/load-json-file/license
├─ load-json-file@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/load-json-file
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/load-json-file
│  └─ licenseFile: ./node_modules/webpack/node_modules/load-json-file/license
├─ loader-runner@2.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/loader-runner
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/loader-runner
│  └─ licenseFile: ./node_modules/loader-runner/README.md
├─ loader-utils@0.2.17
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/loader-utils
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/string-replace-webpack-plugin/node_modules/loader-utils
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/node_modules/loader-utils/LICENSE
├─ loader-utils@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/loader-utils
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/loader-utils
│  └─ licenseFile: ./node_modules/loader-utils/LICENSE
├─ localforage@1.5.5
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/localForage/localForage
│  ├─ publisher: Mozilla
│  ├─ path: ./node_modules/localforage
│  └─ licenseFile: ./node_modules/localforage/LICENSE
├─ localtunnel@1.8.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/localtunnel/localtunnel
│  ├─ publisher: Roman Shtylman
│  ├─ email: shtylman@gmail.com
│  ├─ path: ./node_modules/localtunnel
│  └─ licenseFile: ./node_modules/localtunnel/README.md
├─ locate-path@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/locate-path
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/locate-path
│  └─ licenseFile: ./node_modules/locate-path/license
├─ lodash._reinterpolate@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash._reinterpolate
│  └─ licenseFile: ./node_modules/lodash._reinterpolate/LICENSE.txt
├─ lodash.camelcase@4.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.camelcase
│  └─ licenseFile: ./node_modules/lodash.camelcase/LICENSE
├─ lodash.isfinite@3.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.isfinite
│  └─ licenseFile: ./node_modules/lodash.isfinite/LICENSE
├─ lodash.isplainobject@4.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.isplainobject
│  └─ licenseFile: ./node_modules/lodash.isplainobject/LICENSE
├─ lodash.memoize@4.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.memoize
│  └─ licenseFile: ./node_modules/lodash.memoize/LICENSE
├─ lodash.padend@4.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.padend
│  └─ licenseFile: ./node_modules/lodash.padend/LICENSE
├─ lodash.some@4.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.some
│  └─ licenseFile: ./node_modules/lodash.some/LICENSE
├─ lodash.template@4.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.template
│  └─ licenseFile: ./node_modules/lodash.template/LICENSE
├─ lodash.templatesettings@4.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.templatesettings
│  └─ licenseFile: ./node_modules/lodash.templatesettings/LICENSE
├─ lodash.uniq@4.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash.uniq
│  └─ licenseFile: ./node_modules/lodash.uniq/LICENSE
├─ lodash@3.10.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/easy-extender/node_modules/lodash
│  └─ licenseFile: ./node_modules/easy-extender/node_modules/lodash/LICENSE
├─ lodash@4.17.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/lodash/lodash
│  ├─ publisher: John-David Dalton
│  ├─ email: john.david.dalton@gmail.com
│  ├─ url: http://allyoucanleet.com/
│  ├─ path: ./node_modules/lodash
│  └─ licenseFile: ./node_modules/lodash/LICENSE
├─ log-symbols@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/log-symbols
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/log-symbols
│  └─ licenseFile: ./node_modules/log-symbols/license
├─ log-symbols@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/log-symbols
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/lint-staged/node_modules/log-symbols
│  └─ licenseFile: ./node_modules/lint-staged/node_modules/log-symbols/license
├─ log-update@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/log-update
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/log-update
│  └─ licenseFile: ./node_modules/log-update/license
├─ longest@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/longest
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/longest
│  └─ licenseFile: ./node_modules/longest/LICENSE
├─ loose-envify@1.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zertosh/loose-envify
│  ├─ publisher: Andres Suarez
│  ├─ email: zertosh@gmail.com
│  ├─ path: ./node_modules/loose-envify
│  └─ licenseFile: ./node_modules/loose-envify/LICENSE
├─ loud-rejection@1.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/loud-rejection
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/loud-rejection
│  └─ licenseFile: ./node_modules/loud-rejection/license
├─ lower-case@1.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/lower-case
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/lower-case
│  └─ licenseFile: ./node_modules/lower-case/LICENSE
├─ lowercase-keys@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/lowercase-keys
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/lowercase-keys
│  └─ licenseFile: ./node_modules/lowercase-keys/readme.md
├─ lru-cache@4.1.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/node-lru-cache
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ path: ./node_modules/lru-cache
│  └─ licenseFile: ./node_modules/lru-cache/LICENSE
├─ macaddress@0.2.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/scravy/node-macaddress
│  ├─ publisher: Julian Fleischer
│  ├─ path: ./node_modules/macaddress
│  └─ licenseFile: ./node_modules/macaddress/README.md
├─ make-dir@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/make-dir
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/make-dir
│  └─ licenseFile: ./node_modules/make-dir/license
├─ map-obj@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/map-obj
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/map-obj
│  └─ licenseFile: ./node_modules/map-obj/license
├─ marked@0.3.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chjj/marked
│  ├─ publisher: Christopher Jeffrey
│  ├─ path: ./node_modules/marked
│  └─ licenseFile: ./node_modules/marked/LICENSE
├─ math-expression-evaluator@1.2.17
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/redhivesoftware/math-expression-evaluator.git#readme
│  ├─ publisher: Ankit
│  ├─ email: ankitbug94@gmail.com
│  ├─ path: ./node_modules/math-expression-evaluator
│  └─ licenseFile: ./node_modules/math-expression-evaluator/LICENSE
├─ md5.js@1.3.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/md5.js
│  ├─ publisher: Kirill Fomichev
│  ├─ email: fanatid@ya.ru
│  ├─ url: https://github.com/fanatid
│  ├─ path: ./node_modules/md5.js
│  └─ licenseFile: ./node_modules/md5.js/LICENSE
├─ mem@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/mem
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/mem
│  └─ licenseFile: ./node_modules/mem/license
├─ memory-fs@0.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/memory-fs
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/memory-fs
│  └─ licenseFile: ./node_modules/memory-fs/README.md
├─ meow@3.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/meow
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/meow
│  └─ licenseFile: ./node_modules/meow/license
├─ metaviewport-parser@0.0.1
│  ├─ licenses: MIT
│  ├─ path: ./node_modules/metaviewport-parser
│  └─ licenseFile: ./node_modules/metaviewport-parser/LICENSE
├─ micromatch@2.3.11
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/micromatch
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/micromatch
│  └─ licenseFile: ./node_modules/micromatch/LICENSE
├─ miller-rabin@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/miller-rabin
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/miller-rabin
│  └─ licenseFile: ./node_modules/miller-rabin/README.md
├─ mime-db@1.27.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/mime-db
│  ├─ path: ./node_modules/fsevents/node_modules/mime-db
│  └─ licenseFile: ./node_modules/fsevents/node_modules/mime-db/LICENSE
├─ mime-db@1.30.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/mime-db
│  ├─ path: ./node_modules/mime-db
│  └─ licenseFile: ./node_modules/mime-db/LICENSE
├─ mime-types@2.1.15
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/mime-types
│  ├─ path: ./node_modules/fsevents/node_modules/mime-types
│  └─ licenseFile: ./node_modules/fsevents/node_modules/mime-types/LICENSE
├─ mime-types@2.1.17
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/mime-types
│  ├─ path: ./node_modules/mime-types
│  └─ licenseFile: ./node_modules/mime-types/LICENSE
├─ mime@1.2.4
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/bentomas/node-mime
│  ├─ publisher: Robert Kieffer
│  ├─ email: robert@broofa.com
│  ├─ url: http://github.com/broofa
│  ├─ path: ./node_modules/express/node_modules/mime
│  └─ licenseFile: ./node_modules/express/node_modules/mime/LICENSE
├─ mime@1.3.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/broofa/node-mime
│  ├─ publisher: Robert Kieffer
│  ├─ email: robert@broofa.com
│  ├─ url: http://github.com/broofa
│  ├─ path: ./node_modules/mime
│  └─ licenseFile: ./node_modules/mime/LICENSE
├─ mime@1.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/broofa/node-mime
│  ├─ publisher: Robert Kieffer
│  ├─ email: robert@broofa.com
│  ├─ url: http://github.com/broofa
│  ├─ path: ./node_modules/node-faux-pas/node_modules/mime
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/mime/LICENSE
├─ mime@2.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/broofa/node-mime
│  ├─ publisher: Robert Kieffer
│  ├─ email: robert@broofa.com
│  ├─ url: http://github.com/broofa
│  ├─ path: ./node_modules/express/node_modules/connect/node_modules/mime
│  └─ licenseFile: ./node_modules/express/node_modules/connect/node_modules/mime/LICENSE
├─ mimic-fn@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/mimic-fn
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/mimic-fn
│  └─ licenseFile: ./node_modules/mimic-fn/license
├─ minimalistic-assert@1.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/calvinmetcalf/minimalistic-assert
│  ├─ path: ./node_modules/minimalistic-assert
│  └─ licenseFile: ./node_modules/minimalistic-assert/readme.md
├─ minimalistic-crypto-utils@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/indutny/minimalistic-crypto-utils
│  ├─ publisher: Fedor Indutny
│  ├─ email: fedor@indutny.com
│  ├─ path: ./node_modules/minimalistic-crypto-utils
│  └─ licenseFile: ./node_modules/minimalistic-crypto-utils/README.md
├─ minimatch@3.0.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/minimatch
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me
│  ├─ path: ./node_modules/minimatch
│  └─ licenseFile: ./node_modules/minimatch/LICENSE
├─ minimist@0.0.10
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/minimist
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/optimist/node_modules/minimist
│  └─ licenseFile: ./node_modules/optimist/node_modules/minimist/LICENSE
├─ minimist@0.0.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/minimist
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/mkdirp/node_modules/minimist
│  └─ licenseFile: ./node_modules/mkdirp/node_modules/minimist/LICENSE
├─ minimist@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/minimist
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/minimist
│  └─ licenseFile: ./node_modules/minimist/LICENSE
├─ mkdirp@0.3.0
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/substack/node-mkdirp
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/express/node_modules/mkdirp
│  └─ licenseFile: ./node_modules/express/node_modules/mkdirp/LICENSE
├─ mkdirp@0.3.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-mkdirp
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/license-checker/node_modules/mkdirp
│  └─ licenseFile: ./node_modules/license-checker/node_modules/mkdirp/LICENSE
├─ mkdirp@0.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-mkdirp
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/mkdirp
│  └─ licenseFile: ./node_modules/mkdirp/LICENSE
├─ ms@0.7.1
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/guille/ms.js
│  ├─ path: ./node_modules/connect/node_modules/ms
│  └─ licenseFile: ./node_modules/connect/node_modules/ms/LICENSE
├─ ms@0.7.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zeit/ms
│  ├─ path: ./node_modules/socket.io/node_modules/ms
│  └─ licenseFile: ./node_modules/socket.io/node_modules/ms/LICENSE.md
├─ ms@0.7.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zeit/ms
│  ├─ path: ./node_modules/send/node_modules/debug/node_modules/ms
│  └─ licenseFile: ./node_modules/send/node_modules/debug/node_modules/ms/license.md
├─ ms@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zeit/ms
│  ├─ path: ./node_modules/send/node_modules/ms
│  └─ licenseFile: ./node_modules/send/node_modules/ms/license.md
├─ ms@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zeit/ms
│  ├─ path: ./node_modules/ms
│  └─ licenseFile: ./node_modules/ms/license.md
├─ mute-stream@0.0.7
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/mute-stream
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/mute-stream
│  └─ licenseFile: ./node_modules/mute-stream/LICENSE
├─ nan@2.8.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodejs/nan
│  ├─ path: ./node_modules/nan
│  └─ licenseFile: ./node_modules/nan/LICENSE.md
├─ natural-compare@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/litejs/natural-compare-lite
│  ├─ publisher: Lauri Rooden
│  ├─ url: https://github.com/litejs/natural-compare-lite
│  ├─ path: ./node_modules/natural-compare
│  └─ licenseFile: ./node_modules/natural-compare/README.md
├─ ncname@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ncname
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/ncname
│  └─ licenseFile: ./node_modules/ncname/readme.md
├─ negotiator@0.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/negotiator
│  ├─ path: ./node_modules/negotiator
│  └─ licenseFile: ./node_modules/negotiator/LICENSE
├─ no-case@2.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/no-case
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/no-case
│  └─ licenseFile: ./node_modules/no-case/LICENSE
├─ node-faux-pas@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/filamentgroup/node-faux-pas
│  ├─ publisher: zachleat
│  ├─ email: zachleatherman@gmail.com
│  ├─ url: http://zachleat.com/
│  ├─ path: ./node_modules/node-faux-pas
│  └─ licenseFile: ./node_modules/node-faux-pas/LICENSE
├─ node-libs-browser@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/node-libs-browser
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/node-libs-browser
│  └─ licenseFile: ./node_modules/node-libs-browser/LICENSE
├─ node-pre-gyp@0.6.39
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/mapbox/node-pre-gyp
│  ├─ publisher: Dane Springmeyer
│  ├─ email: dane@mapbox.com
│  ├─ path: ./node_modules/node-pre-gyp
│  └─ licenseFile: ./node_modules/node-pre-gyp/LICENSE
├─ nopt@2.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/isaacs/nopt
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/nopt
│  └─ licenseFile: ./node_modules/nopt/LICENSE
├─ nopt@3.0.6
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/nopt
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/weinre/node_modules/nopt
│  └─ licenseFile: ./node_modules/weinre/node_modules/nopt/LICENSE
├─ nopt@4.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/nopt
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/node-pre-gyp/node_modules/nopt
│  └─ licenseFile: ./node_modules/node-pre-gyp/node_modules/nopt/LICENSE
├─ normalize-package-data@2.4.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/npm/normalize-package-data
│  ├─ publisher: Meryn Stol
│  ├─ email: merynstol@gmail.com
│  ├─ path: ./node_modules/normalize-package-data
│  └─ licenseFile: ./node_modules/normalize-package-data/LICENSE
├─ normalize-path@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/normalize-path
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/husky/node_modules/normalize-path
│  └─ licenseFile: ./node_modules/husky/node_modules/normalize-path/README.md
├─ normalize-path@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/normalize-path
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/normalize-path
│  └─ licenseFile: ./node_modules/normalize-path/LICENSE
├─ normalize-range@0.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jamestalmage/normalize-range
│  ├─ publisher: James Talmage
│  ├─ email: james@talmage.io
│  ├─ url: github.com/jamestalmage
│  ├─ path: ./node_modules/normalize-range
│  └─ licenseFile: ./node_modules/normalize-range/license
├─ normalize-url@1.9.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/normalize-url
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/normalize-url
│  └─ licenseFile: ./node_modules/normalize-url/license
├─ npm-path@2.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/timoxley/npm-path
│  ├─ publisher: Tim Oxley
│  ├─ path: ./node_modules/npm-path
│  └─ licenseFile: ./node_modules/npm-path/LICENSE
├─ npm-run-path@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/npm-run-path
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/npm-run-path
│  └─ licenseFile: ./node_modules/npm-run-path/license
├─ npm-which@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/timoxley/npm-which
│  ├─ publisher: Tim Oxley
│  ├─ path: ./node_modules/npm-which
│  └─ licenseFile: ./node_modules/npm-which/LICENSE
├─ npmlog@4.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/npmlog
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fsevents/node_modules/npmlog
│  └─ licenseFile: ./node_modules/fsevents/node_modules/npmlog/LICENSE
├─ npmlog@4.1.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/npmlog
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/npmlog
│  └─ licenseFile: ./node_modules/npmlog/LICENSE
├─ num2fraction@1.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/yisibl/num2fraction
│  ├─ publisher: yisi
│  ├─ email: yiorsi@gmail.com
│  ├─ url: http://iyunlu.com/view
│  ├─ path: ./node_modules/num2fraction
│  └─ licenseFile: ./node_modules/num2fraction/LICENSE
├─ number-is-nan@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/number-is-nan
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/number-is-nan
│  └─ licenseFile: ./node_modules/number-is-nan/license
├─ oauth-sign@0.8.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/mikeal/oauth-sign
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ url: http://www.futurealoof.com
│  ├─ path: ./node_modules/oauth-sign
│  └─ licenseFile: ./node_modules/oauth-sign/LICENSE
├─ object-assign@4.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/object-assign
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/socket.io/node_modules/object-assign
│  └─ licenseFile: ./node_modules/socket.io/node_modules/object-assign/license
├─ object-assign@4.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/object-assign
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/object-assign
│  └─ licenseFile: ./node_modules/object-assign/license
├─ object-component@0.0.3
│  ├─ licenses: MIT*
│  ├─ path: ./node_modules/object-component
│  └─ licenseFile: ./node_modules/object-component/Readme.md
├─ object-keys@1.0.11
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ljharb/object-keys
│  ├─ publisher: Jordan Harband
│  ├─ email: ljharb@gmail.com
│  ├─ url: http://ljharb.codes
│  ├─ path: ./node_modules/object-keys
│  └─ licenseFile: ./node_modules/object-keys/LICENSE
├─ object-path@0.9.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mariocasciaro/object-path
│  ├─ publisher: Mario Casciaro
│  ├─ path: ./node_modules/object-path
│  └─ licenseFile: ./node_modules/object-path/LICENSE
├─ object.omit@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/object.omit
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/object.omit
│  └─ licenseFile: ./node_modules/object.omit/LICENSE
├─ on-finished@2.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/on-finished
│  ├─ path: ./node_modules/on-finished
│  └─ licenseFile: ./node_modules/on-finished/LICENSE
├─ once@1.4.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/once
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/once
│  └─ licenseFile: ./node_modules/once/LICENSE
├─ onetime@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/onetime
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/onetime
│  └─ licenseFile: ./node_modules/onetime/license
├─ onetime@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/onetime
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/inquirer/node_modules/onetime
│  └─ licenseFile: ./node_modules/inquirer/node_modules/onetime/license
├─ openurl@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rauschma/openurl
│  ├─ publisher: Axel Rauschmayer
│  ├─ email: axe@rauschma.de
│  ├─ path: ./node_modules/openurl
│  └─ licenseFile: ./node_modules/openurl/README.md
├─ opn@4.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/opn
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/opn
│  └─ licenseFile: ./node_modules/opn/license
├─ optimist@0.6.1
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/substack/node-optimist
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/optimist
│  └─ licenseFile: ./node_modules/optimist/LICENSE
├─ optionator@0.8.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/gkz/optionator
│  ├─ publisher: George Zahariev
│  ├─ email: z@georgezahariev.com
│  ├─ path: ./node_modules/optionator
│  └─ licenseFile: ./node_modules/optionator/LICENSE
├─ options@0.0.6
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/einaros/options.js
│  ├─ publisher: Einar Otto Stangvik
│  ├─ email: einaros@gmail.com
│  ├─ url: http://2x.io
│  ├─ path: ./node_modules/options
│  └─ licenseFile: ./node_modules/options/README.md
├─ ora@0.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/ora
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ora
│  └─ licenseFile: ./node_modules/ora/license
├─ os-browserify@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/CoderPuppy/os-browserify
│  ├─ publisher: CoderPuppy
│  ├─ email: coderpup@gmail.com
│  ├─ path: ./node_modules/os-browserify
│  └─ licenseFile: ./node_modules/os-browserify/LICENSE
├─ os-homedir@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/os-homedir
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/os-homedir
│  └─ licenseFile: ./node_modules/os-homedir/license
├─ os-locale@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/os-locale
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/os-locale
│  └─ licenseFile: ./node_modules/os-locale/license
├─ os-locale@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/os-locale
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/os-locale
│  └─ licenseFile: ./node_modules/webpack/node_modules/os-locale/license
├─ os-tmpdir@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/os-tmpdir
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/os-tmpdir
│  └─ licenseFile: ./node_modules/os-tmpdir/license
├─ osenv@0.1.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/osenv
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/osenv
│  └─ licenseFile: ./node_modules/osenv/LICENSE
├─ p-finally@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/p-finally
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/p-finally
│  └─ licenseFile: ./node_modules/p-finally/license
├─ p-limit@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/p-limit
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/p-limit
│  └─ licenseFile: ./node_modules/p-limit/license
├─ p-locate@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/p-locate
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/p-locate
│  └─ licenseFile: ./node_modules/p-locate/license
├─ p-map@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/p-map
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/p-map
│  └─ licenseFile: ./node_modules/p-map/license
├─ package-json@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/package-json
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/package-json
│  └─ licenseFile: ./node_modules/package-json/license
├─ pako@1.0.6
│  ├─ licenses: (MIT AND Zlib)
│  ├─ repository: https://github.com/nodeca/pako
│  ├─ path: ./node_modules/pako
│  └─ licenseFile: ./node_modules/pako/LICENSE
├─ param-case@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/param-case
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/param-case
│  └─ licenseFile: ./node_modules/param-case/LICENSE
├─ parse-asn1@5.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/crypto-browserify/parse-asn1
│  ├─ path: ./node_modules/parse-asn1
│  └─ licenseFile: ./node_modules/parse-asn1/README.md
├─ parse-glob@3.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/parse-glob
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/parse-glob
│  └─ licenseFile: ./node_modules/parse-glob/LICENSE
├─ parse-json@2.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/parse-json
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/parse-json
│  └─ licenseFile: ./node_modules/parse-json/license
├─ parse-json@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/parse-json
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/cosmiconfig/node_modules/parse-json
│  └─ licenseFile: ./node_modules/cosmiconfig/node_modules/parse-json/license
├─ parsejson@0.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/get/parsejson
│  ├─ publisher: Gal Koren
│  ├─ path: ./node_modules/parsejson
│  └─ licenseFile: ./node_modules/parsejson/LICENSE
├─ parseqs@0.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/get/querystring
│  ├─ publisher: Gal Koren
│  ├─ path: ./node_modules/parseqs
│  └─ licenseFile: ./node_modules/parseqs/LICENSE
├─ parseuri@0.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/get/parseuri
│  ├─ path: ./node_modules/parseuri
│  └─ licenseFile: ./node_modules/parseuri/LICENSE
├─ parseurl@1.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/parseurl
│  ├─ path: ./node_modules/parseurl
│  └─ licenseFile: ./node_modules/parseurl/LICENSE
├─ path-browserify@0.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/path-browserify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/path-browserify
│  └─ licenseFile: ./node_modules/path-browserify/LICENSE
├─ path-exists@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-exists
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/path-exists
│  └─ licenseFile: ./node_modules/path-exists/license
├─ path-exists@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-exists
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/locate-path/node_modules/path-exists
│  └─ licenseFile: ./node_modules/locate-path/node_modules/path-exists/license
├─ path-is-absolute@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-is-absolute
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/path-is-absolute
│  └─ licenseFile: ./node_modules/path-is-absolute/license
├─ path-is-inside@1.0.2
│  ├─ licenses: (WTFPL OR MIT)
│  ├─ repository: https://github.com/domenic/path-is-inside
│  ├─ publisher: Domenic Denicola
│  ├─ email: d@domenic.me
│  ├─ url: https://domenic.me
│  ├─ path: ./node_modules/path-is-inside
│  └─ licenseFile: ./node_modules/path-is-inside/LICENSE.txt
├─ path-key@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-key
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/path-key
│  └─ licenseFile: ./node_modules/path-key/license
├─ path-type@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-type
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/path-type
│  └─ licenseFile: ./node_modules/path-type/license
├─ path-type@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/path-type
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/path-type
│  └─ licenseFile: ./node_modules/webpack/node_modules/path-type/license
├─ pbkdf2@3.0.14
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/pbkdf2
│  ├─ publisher: Daniel Cousens
│  ├─ path: ./node_modules/pbkdf2
│  └─ licenseFile: ./node_modules/pbkdf2/LICENSE
├─ performance-now@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/meryn/performance-now
│  ├─ publisher: Meryn Stol
│  ├─ email: merynstol@gmail.com
│  ├─ path: ./node_modules/performance-now
│  └─ licenseFile: ./node_modules/performance-now/license.txt
├─ pify@2.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/pify
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/pify
│  └─ licenseFile: ./node_modules/pify/license
├─ pify@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/pify
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/make-dir/node_modules/pify
│  └─ licenseFile: ./node_modules/make-dir/node_modules/pify/license
├─ pinkie-promise@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/pinkie-promise
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/pinkie-promise
│  └─ licenseFile: ./node_modules/pinkie-promise/license
├─ pinkie@2.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/pinkie
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/pinkie
│  └─ licenseFile: ./node_modules/pinkie/license
├─ pluralize@7.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/pluralize
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/pluralize
│  └─ licenseFile: ./node_modules/pluralize/LICENSE
├─ portscanner@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/baalexander/node-portscanner
│  ├─ path: ./node_modules/portscanner
│  └─ licenseFile: ./node_modules/portscanner/LICENSE
├─ postcss-calc@5.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/postcss-calc
│  ├─ publisher: Maxime Thirouin
│  ├─ path: ./node_modules/postcss-calc
│  └─ licenseFile: ./node_modules/postcss-calc/LICENSE
├─ postcss-colormin@2.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-colormin
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-colormin
│  └─ licenseFile: ./node_modules/postcss-colormin/README.md
├─ postcss-convert-values@2.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-convert-values
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-convert-values
│  └─ licenseFile: ./node_modules/postcss-convert-values/README.md
├─ postcss-discard-comments@2.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-discard-comments
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-discard-comments
│  └─ licenseFile: ./node_modules/postcss-discard-comments/README.md
├─ postcss-discard-duplicates@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-discard-duplicates
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-discard-duplicates
│  └─ licenseFile: ./node_modules/postcss-discard-duplicates/README.md
├─ postcss-discard-empty@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-discard-empty
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-discard-empty
│  └─ licenseFile: ./node_modules/postcss-discard-empty/README.md
├─ postcss-discard-overridden@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Justineo/postcss-discard-overridden
│  ├─ publisher: Justineo
│  ├─ email: justice360@gmail.com
│  ├─ path: ./node_modules/postcss-discard-overridden
│  └─ licenseFile: ./node_modules/postcss-discard-overridden/LICENSE
├─ postcss-discard-unused@2.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-discard-unused
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-discard-unused
│  └─ licenseFile: ./node_modules/postcss-discard-unused/README.md
├─ postcss-filter-plugins@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/postcss-filter-plugins
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-filter-plugins
│  └─ licenseFile: ./node_modules/postcss-filter-plugins/README.md
├─ postcss-merge-idents@2.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-merge-idents
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-merge-idents
│  └─ licenseFile: ./node_modules/postcss-merge-idents/README.md
├─ postcss-merge-longhand@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-merge-longhand
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-merge-longhand
│  └─ licenseFile: ./node_modules/postcss-merge-longhand/README.md
├─ postcss-merge-rules@2.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-merge-rules
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-merge-rules
│  └─ licenseFile: ./node_modules/postcss-merge-rules/README.md
├─ postcss-message-helpers@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/MoOx/postcss-message-helpers
│  ├─ publisher: Maxime Thirouin
│  ├─ path: ./node_modules/postcss-message-helpers
│  └─ licenseFile: ./node_modules/postcss-message-helpers/LICENSE
├─ postcss-minify-font-values@1.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/TrySound/postcss-minify-font-values
│  ├─ publisher: Bogdan Chadkin
│  ├─ email: trysound@yandex.ru
│  ├─ path: ./node_modules/postcss-minify-font-values
│  └─ licenseFile: ./node_modules/postcss-minify-font-values/LICENSE
├─ postcss-minify-gradients@1.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-minify-gradients
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-minify-gradients
│  └─ licenseFile: ./node_modules/postcss-minify-gradients/README.md
├─ postcss-minify-params@1.2.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-minify-params
│  ├─ publisher: Bogdan Chadkin
│  ├─ email: trysound@yandex.ru
│  ├─ path: ./node_modules/postcss-minify-params
│  └─ licenseFile: ./node_modules/postcss-minify-params/LICENSE
├─ postcss-minify-selectors@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-minify-selectors
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-minify-selectors
│  └─ licenseFile: ./node_modules/postcss-minify-selectors/README.md
├─ postcss-modules-extract-imports@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/css-modules/postcss-modules-extract-imports
│  ├─ publisher: Glen Maddern
│  ├─ path: ./node_modules/postcss-modules-extract-imports
│  └─ licenseFile: ./node_modules/postcss-modules-extract-imports/README.md
├─ postcss-modules-local-by-default@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/css-modules/postcss-modules-local-by-default
│  ├─ publisher: Mark Dalgleish
│  ├─ path: ./node_modules/postcss-modules-local-by-default
│  └─ licenseFile: ./node_modules/postcss-modules-local-by-default/LICENSE
├─ postcss-modules-scope@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/css-modules/postcss-modules-scope
│  ├─ publisher: Glen Maddern
│  ├─ path: ./node_modules/postcss-modules-scope
│  └─ licenseFile: ./node_modules/postcss-modules-scope/README.md
├─ postcss-modules-values@1.3.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/css-modules/postcss-modules-values
│  ├─ publisher: Glen Maddern
│  ├─ path: ./node_modules/postcss-modules-values
│  └─ licenseFile: ./node_modules/postcss-modules-values/README.md
├─ postcss-normalize-charset@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-charset
│  ├─ publisher: Bogdan Chadkin
│  ├─ email: trysound@yandex.ru
│  ├─ path: ./node_modules/postcss-normalize-charset
│  └─ licenseFile: ./node_modules/postcss-normalize-charset/LICENSE
├─ postcss-normalize-url@3.0.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-normalize-url
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-normalize-url
│  └─ licenseFile: ./node_modules/postcss-normalize-url/README.md
├─ postcss-ordered-values@2.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-ordered-values
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-ordered-values
│  └─ licenseFile: ./node_modules/postcss-ordered-values/README.md
├─ postcss-reduce-idents@2.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-reduce-idents
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-reduce-idents
│  └─ licenseFile: ./node_modules/postcss-reduce-idents/README.md
├─ postcss-reduce-initial@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-reduce-initial
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-reduce-initial
│  └─ licenseFile: ./node_modules/postcss-reduce-initial/README.md
├─ postcss-reduce-transforms@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-reduce-transforms
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-reduce-transforms
│  └─ licenseFile: ./node_modules/postcss-reduce-transforms/README.md
├─ postcss-selector-parser@2.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/postcss-selector-parser
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-selector-parser
│  └─ licenseFile: ./node_modules/postcss-selector-parser/README.md
├─ postcss-svgo@2.1.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-svgo
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-svgo
│  └─ licenseFile: ./node_modules/postcss-svgo/README.md
├─ postcss-unique-selectors@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-unique-selectors
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-unique-selectors
│  └─ licenseFile: ./node_modules/postcss-unique-selectors/README.md
├─ postcss-value-parser@3.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/TrySound/postcss-value-parser
│  ├─ publisher: Bogdan Chadkin
│  ├─ email: trysound@yandex.ru
│  ├─ path: ./node_modules/postcss-value-parser
│  └─ licenseFile: ./node_modules/postcss-value-parser/LICENSE
├─ postcss-zindex@2.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ben-eb/postcss-zindex
│  ├─ publisher: Ben Briggs
│  ├─ email: beneb.info@gmail.com
│  ├─ url: http://beneb.info
│  ├─ path: ./node_modules/postcss-zindex
│  └─ licenseFile: ./node_modules/postcss-zindex/README.md
├─ postcss@5.2.18
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/postcss
│  ├─ publisher: Andrey Sitnik
│  ├─ email: andrey@sitnik.ru
│  ├─ path: ./node_modules/postcss
│  └─ licenseFile: ./node_modules/postcss/LICENSE
├─ postcss@6.0.14
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/postcss/postcss
│  ├─ publisher: Andrey Sitnik
│  ├─ email: andrey@sitnik.ru
│  ├─ path: ./node_modules/icss-utils/node_modules/postcss
│  └─ licenseFile: ./node_modules/icss-utils/node_modules/postcss/LICENSE
├─ prelude-ls@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/gkz/prelude-ls
│  ├─ publisher: George Zahariev
│  ├─ email: z@georgezahariev.com
│  ├─ path: ./node_modules/prelude-ls
│  └─ licenseFile: ./node_modules/prelude-ls/LICENSE
├─ prepend-http@1.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/prepend-http
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/prepend-http
│  └─ licenseFile: ./node_modules/prepend-http/license
├─ preserve@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/preserve
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/preserve
│  └─ licenseFile: ./node_modules/preserve/LICENSE
├─ prettier@1.9.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/prettier/prettier
│  ├─ publisher: James Long
│  ├─ path: ./node_modules/prettier
│  └─ licenseFile: ./node_modules/prettier/README.md
├─ pretty-format@21.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/jest
│  ├─ publisher: James Kyle
│  ├─ email: me@thejameskyle.com
│  ├─ path: ./node_modules/pretty-format
│  └─ licenseFile: ./node_modules/pretty-format/README.md
├─ private@0.1.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/benjamn/private
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/private
│  └─ licenseFile: ./node_modules/private/LICENSE
├─ process-nextick-args@1.0.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/calvinmetcalf/process-nextick-args
│  ├─ path: ./node_modules/process-nextick-args
│  └─ licenseFile: ./node_modules/process-nextick-args/license.md
├─ process@0.11.10
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shtylman/node-process
│  ├─ publisher: Roman Shtylman
│  ├─ email: shtylman@gmail.com
│  ├─ path: ./node_modules/process
│  └─ licenseFile: ./node_modules/process/LICENSE
├─ progress@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/visionmedia/node-progress
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/progress
│  └─ licenseFile: ./node_modules/progress/LICENSE
├─ prr@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/prr
│  ├─ publisher: Rod Vagg
│  ├─ email: rod@vagg.org
│  ├─ url: https://github.com/rvagg
│  ├─ path: ./node_modules/prr
│  └─ licenseFile: ./node_modules/prr/LICENSE.md
├─ pseudomap@1.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/pseudomap
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/pseudomap
│  └─ licenseFile: ./node_modules/pseudomap/LICENSE
├─ public-encrypt@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/publicEncrypt
│  ├─ path: ./node_modules/public-encrypt
│  └─ licenseFile: ./node_modules/public-encrypt/readme.md
├─ punycode@1.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bestiejs/punycode.js
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/url/node_modules/punycode
│  └─ licenseFile: ./node_modules/url/node_modules/punycode/README.md
├─ punycode@1.4.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bestiejs/punycode.js
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/punycode
│  └─ licenseFile: ./node_modules/punycode/README.md
├─ q@1.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kriskowal/q
│  ├─ publisher: Kris Kowal
│  ├─ email: kris@cixar.com
│  ├─ url: https://github.com/kriskowal
│  ├─ path: ./node_modules/q
│  └─ licenseFile: ./node_modules/q/LICENSE
├─ qs@0.4.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/visionmedia/node-querystring
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/express/node_modules/qs
│  └─ licenseFile: ./node_modules/express/node_modules/qs/Readme.md
├─ qs@6.2.1
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/ljharb/qs
│  ├─ path: ./node_modules/qs
│  └─ licenseFile: ./node_modules/qs/LICENSE
├─ qs@6.4.0
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/ljharb/qs
│  ├─ path: ./node_modules/request/node_modules/qs
│  └─ licenseFile: ./node_modules/request/node_modules/qs/LICENSE
├─ qs@6.5.1
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/ljharb/qs
│  ├─ path: ./node_modules/express/node_modules/connect/node_modules/qs
│  └─ licenseFile: ./node_modules/express/node_modules/connect/node_modules/qs/LICENSE
├─ query-string@4.3.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/query-string
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/query-string
│  └─ licenseFile: ./node_modules/query-string/license
├─ querystring-es3@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mike-spainhower/querystring
│  ├─ publisher: Irakli Gozalishvili
│  ├─ email: rfobic@gmail.com
│  ├─ path: ./node_modules/querystring-es3
│  └─ licenseFile: ./node_modules/querystring-es3/License.md
├─ querystring@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Gozala/querystring
│  ├─ publisher: Irakli Gozalishvili
│  ├─ email: rfobic@gmail.com
│  ├─ path: ./node_modules/querystring
│  └─ licenseFile: ./node_modules/querystring/License.md
├─ randomatic@1.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/randomatic
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/randomatic
│  └─ licenseFile: ./node_modules/randomatic/LICENSE
├─ randombytes@2.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/randombytes
│  ├─ path: ./node_modules/randombytes
│  └─ licenseFile: ./node_modules/randombytes/LICENSE
├─ randomfill@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/randombytes
│  ├─ path: ./node_modules/randomfill
│  └─ licenseFile: ./node_modules/randomfill/LICENSE
├─ range-parser@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/range-parser
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ url: http://tjholowaychuk.com
│  ├─ path: ./node_modules/range-parser
│  └─ licenseFile: ./node_modules/range-parser/LICENSE
├─ rc@1.2.1
│  ├─ licenses: (BSD-2-Clause OR MIT OR Apache-2.0)
│  ├─ repository: https://github.com/dominictarr/rc
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/fsevents/node_modules/rc
│  └─ licenseFile: ./node_modules/fsevents/node_modules/rc/LICENSE.APACHE2
├─ rc@1.2.2
│  ├─ licenses: (BSD-2-Clause OR MIT OR Apache-2.0)
│  ├─ repository: https://github.com/dominictarr/rc
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/rc
│  └─ licenseFile: ./node_modules/rc/LICENSE.APACHE2
├─ read-installed@4.0.3
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/read-installed
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/read-installed
│  └─ licenseFile: ./node_modules/read-installed/LICENSE
├─ read-package-json@2.0.12
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/read-package-json
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/read-package-json
│  └─ licenseFile: ./node_modules/read-package-json/LICENSE
├─ read-pkg-up@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/read-pkg-up
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/read-pkg-up
│  └─ licenseFile: ./node_modules/read-pkg-up/license
├─ read-pkg-up@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/read-pkg-up
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/read-pkg-up
│  └─ licenseFile: ./node_modules/webpack/node_modules/read-pkg-up/license
├─ read-pkg@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/read-pkg
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/read-pkg
│  └─ licenseFile: ./node_modules/read-pkg/license
├─ read-pkg@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/read-pkg
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/read-pkg
│  └─ licenseFile: ./node_modules/webpack/node_modules/read-pkg/license
├─ readable-stream@1.0.34
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/isaacs/readable-stream
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/through2/node_modules/readable-stream
│  └─ licenseFile: ./node_modules/through2/node_modules/readable-stream/LICENSE
├─ readable-stream@2.2.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodejs/readable-stream
│  ├─ path: ./node_modules/fsevents/node_modules/readable-stream
│  └─ licenseFile: ./node_modules/fsevents/node_modules/readable-stream/LICENSE
├─ readable-stream@2.3.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/nodejs/readable-stream
│  ├─ path: ./node_modules/readable-stream
│  └─ licenseFile: ./node_modules/readable-stream/LICENSE
├─ readdir-scoped-modules@1.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/readdir-scoped-modules
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/readdir-scoped-modules
│  └─ licenseFile: ./node_modules/readdir-scoped-modules/LICENSE
├─ readdirp@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/thlorenz/readdirp
│  ├─ publisher: Thorsten Lorenz
│  ├─ email: thlorenz@gmx.de
│  ├─ url: thlorenz.com
│  ├─ path: ./node_modules/readdirp
│  └─ licenseFile: ./node_modules/readdirp/LICENSE
├─ recast@0.10.43
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/benjamn/recast
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/unreachable-branch-transform/node_modules/recast
│  └─ licenseFile: ./node_modules/unreachable-branch-transform/node_modules/recast/LICENSE
├─ recast@0.11.23
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/benjamn/recast
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/recast
│  └─ licenseFile: ./node_modules/recast/LICENSE
├─ redent@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/redent
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/redent
│  └─ licenseFile: ./node_modules/redent/license
├─ reduce-css-calc@1.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/MoOx/reduce-css-calc
│  ├─ publisher: Maxime Thirouin
│  ├─ path: ./node_modules/reduce-css-calc
│  └─ licenseFile: ./node_modules/reduce-css-calc/LICENSE
├─ reduce-flatten@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/reduce-flatten
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/reduce-flatten
│  └─ licenseFile: ./node_modules/reduce-flatten/LICENSE
├─ reduce-function-call@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/MoOx/reduce-function-call
│  ├─ publisher: MoOx
│  ├─ path: ./node_modules/reduce-function-call
│  └─ licenseFile: ./node_modules/reduce-function-call/LICENSE
├─ regenerate@1.3.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/regenerate
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/regenerate
│  └─ licenseFile: ./node_modules/regenerate/README.md
├─ regenerator-runtime@0.11.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/facebook/regenerator/tree/master/packages/regenerator-runtime
│  ├─ publisher: Ben Newman
│  ├─ email: bn@cs.stanford.edu
│  ├─ path: ./node_modules/regenerator-runtime
│  └─ licenseFile: ./node_modules/regenerator-runtime/README.md
├─ regex-cache@0.4.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/regex-cache
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/regex-cache
│  └─ licenseFile: ./node_modules/regex-cache/LICENSE
├─ regexpu-core@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/regexpu-core
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/regexpu-core
│  └─ licenseFile: ./node_modules/regexpu-core/README.md
├─ registry-auth-token@3.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rexxars/registry-auth-token
│  ├─ publisher: Espen Hovlandsdal
│  ├─ email: espen@hovlandsdal.com
│  ├─ path: ./node_modules/registry-auth-token
│  └─ licenseFile: ./node_modules/registry-auth-token/LICENSE
├─ registry-url@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/registry-url
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/registry-url
│  └─ licenseFile: ./node_modules/registry-url/license
├─ regjsgen@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/d10/regjsgen
│  ├─ publisher: Benjamin Tan
│  ├─ email: demoneaux@gmail.com
│  ├─ url: https://d10.github.io/
│  ├─ path: ./node_modules/regjsgen
│  └─ licenseFile: ./node_modules/regjsgen/LICENSE.txt
├─ regjsparser@0.1.5
│  ├─ licenses: BSD*
│  ├─ repository: https://github.com/jviereck/regjsparser
│  ├─ publisher: 'Julian Viereck'
│  ├─ email: julian.viereck@gmail.com
│  ├─ path: ./node_modules/regjsparser
│  └─ licenseFile: ./node_modules/regjsparser/LICENSE.BSD
├─ relateurl@0.2.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/stevenvachon/relateurl
│  ├─ publisher: Steven Vachon
│  ├─ email: contact@svachon.com
│  ├─ url: http://www.svachon.com/
│  ├─ path: ./node_modules/relateurl
│  └─ licenseFile: ./node_modules/relateurl/license
├─ remove-trailing-separator@1.1.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/darsain/remove-trailing-separator
│  ├─ publisher: darsain
│  ├─ path: ./node_modules/remove-trailing-separator
│  └─ licenseFile: ./node_modules/remove-trailing-separator/license
├─ repeat-element@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/repeat-element
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/repeat-element
│  └─ licenseFile: ./node_modules/repeat-element/LICENSE
├─ repeat-string@1.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/repeat-string
│  ├─ publisher: Jon Schlinkert
│  ├─ url: http://github.com/jonschlinkert
│  ├─ path: ./node_modules/repeat-string
│  └─ licenseFile: ./node_modules/repeat-string/LICENSE
├─ repeating@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/repeating
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/repeating
│  └─ licenseFile: ./node_modules/repeating/license
├─ request@2.81.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/request/request
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ path: ./node_modules/request
│  └─ licenseFile: ./node_modules/request/LICENSE
├─ require-directory@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/troygoode/node-require-directory
│  ├─ publisher: Troy Goode
│  ├─ email: troygoode@gmail.com
│  ├─ url: http://github.com/troygoode/
│  ├─ path: ./node_modules/require-directory
│  └─ licenseFile: ./node_modules/require-directory/LICENSE
├─ require-from-string@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/require-from-string
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ url: github.com/floatdrop
│  ├─ path: ./node_modules/require-from-string
│  └─ licenseFile: ./node_modules/require-from-string/license
├─ require-main-filename@1.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/require-main-filename
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/require-main-filename
│  └─ licenseFile: ./node_modules/require-main-filename/LICENSE.txt
├─ require-uncached@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/require-uncached
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/require-uncached
│  └─ licenseFile: ./node_modules/require-uncached/license
├─ requires-port@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/unshiftio/requires-port
│  ├─ publisher: Arnout Kazemier
│  ├─ path: ./node_modules/requires-port
│  └─ licenseFile: ./node_modules/requires-port/LICENSE
├─ resolve-from@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/resolve-from
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/resolve-from
│  └─ licenseFile: ./node_modules/resolve-from/license
├─ resolve@1.1.7
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-resolve
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/resolve
│  └─ licenseFile: ./node_modules/resolve/LICENSE
├─ resp-modifier@6.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shakyshane/resp-modifier
│  ├─ publisher: Shane Osbourne
│  ├─ email: shane.osbourne8@gmail.com
│  ├─ path: ./node_modules/resp-modifier
│  └─ licenseFile: ./node_modules/resp-modifier/README.md
├─ restore-cursor@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/restore-cursor
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/restore-cursor
│  └─ licenseFile: ./node_modules/restore-cursor/license
├─ restore-cursor@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/restore-cursor
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/inquirer/node_modules/restore-cursor
│  └─ licenseFile: ./node_modules/inquirer/node_modules/restore-cursor/license
├─ right-align@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/right-align
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/right-align
│  └─ licenseFile: ./node_modules/right-align/LICENSE
├─ rimraf@2.2.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/isaacs/rimraf
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/lighthouse/node_modules/rimraf
│  └─ licenseFile: ./node_modules/lighthouse/node_modules/rimraf/LICENSE
├─ rimraf@2.6.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/rimraf
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/fsevents/node_modules/rimraf
│  └─ licenseFile: ./node_modules/fsevents/node_modules/rimraf/LICENSE
├─ rimraf@2.6.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/rimraf
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/rimraf
│  └─ licenseFile: ./node_modules/rimraf/LICENSE
├─ ripemd160@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/ripemd160
│  ├─ path: ./node_modules/ripemd160
│  └─ licenseFile: ./node_modules/ripemd160/LICENSE.md
├─ run-async@2.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/SBoudrias/run-async
│  ├─ publisher: Simon Boudrias
│  ├─ email: admin@simonboudrias.com
│  ├─ path: ./node_modules/run-async
│  └─ licenseFile: ./node_modules/run-async/LICENSE
├─ rx-lite-aggregates@4.0.8
│  ├─ licenses: Apache License, Version 2.0
│  ├─ repository: https://github.com/Reactive-Extensions/RxJS
│  ├─ publisher: Cloud Programmability Team
│  ├─ url: https://github.com/Reactive-Extensions/RxJS/blob/master/authors.txt
│  ├─ path: ./node_modules/rx-lite-aggregates
│  └─ licenseFile: ./node_modules/rx-lite-aggregates/readme.md
├─ rx-lite@4.0.8
│  ├─ licenses: Apache License, Version 2.0
│  ├─ repository: https://github.com/Reactive-Extensions/RxJS
│  ├─ publisher: Cloud Programmability Team
│  ├─ url: https://github.com/Reactive-Extensions/RxJS/blob/master/authors.txt
│  ├─ path: ./node_modules/rx-lite
│  └─ licenseFile: ./node_modules/rx-lite/readme.md
├─ rx@4.1.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/Reactive-Extensions/RxJS
│  ├─ publisher: Cloud Programmability Team
│  ├─ url: https://github.com/Reactive-Extensions/RxJS/blob/master/authors.txt
│  ├─ path: ./node_modules/rx
│  └─ licenseFile: ./node_modules/rx/license.txt
├─ rxjs@5.5.5
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/ReactiveX/RxJS
│  ├─ publisher: Ben Lesh
│  ├─ email: ben@benlesh.com
│  ├─ path: ./node_modules/rxjs
│  └─ licenseFile: ./node_modules/rxjs/LICENSE.txt
├─ safe-buffer@5.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/feross/safe-buffer
│  ├─ publisher: Feross Aboukhadijeh
│  ├─ email: feross@feross.org
│  ├─ url: http://feross.org
│  ├─ path: ./node_modules/fsevents/node_modules/safe-buffer
│  └─ licenseFile: ./node_modules/fsevents/node_modules/safe-buffer/LICENSE
├─ safe-buffer@5.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/feross/safe-buffer
│  ├─ publisher: Feross Aboukhadijeh
│  ├─ email: feross@feross.org
│  ├─ url: http://feross.org
│  ├─ path: ./node_modules/safe-buffer
│  └─ licenseFile: ./node_modules/safe-buffer/LICENSE
├─ sax@1.2.4
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/sax-js
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/sax
│  └─ licenseFile: ./node_modules/sax/LICENSE
├─ schema-utils@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack-contrib/schema-utils
│  ├─ publisher: Webpack Contrib
│  ├─ url: https://github.com/webpack-contrib
│  ├─ path: ./node_modules/schema-utils
│  └─ licenseFile: ./node_modules/schema-utils/LICENSE
├─ semver-diff@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/semver-diff
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/semver-diff
│  └─ licenseFile: ./node_modules/semver-diff/license
├─ semver@5.3.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/node-semver
│  ├─ path: ./node_modules/lighthouse/node_modules/semver
│  └─ licenseFile: ./node_modules/lighthouse/node_modules/semver/LICENSE
├─ semver@5.4.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/node-semver
│  ├─ path: ./node_modules/semver
│  └─ licenseFile: ./node_modules/semver/LICENSE
├─ send@0.15.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/send
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/send
│  └─ licenseFile: ./node_modules/send/LICENSE
├─ send@0.16.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pillarjs/send
│  ├─ publisher: TJ Holowaychuk
│  ├─ email: tj@vision-media.ca
│  ├─ path: ./node_modules/node-faux-pas/node_modules/send
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/send/LICENSE
├─ serve-index@1.8.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/expressjs/serve-index
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/serve-index
│  └─ licenseFile: ./node_modules/serve-index/LICENSE
├─ serve-static@1.12.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/expressjs/serve-static
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/serve-static
│  └─ licenseFile: ./node_modules/serve-static/LICENSE
├─ serve-static@1.13.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/expressjs/serve-static
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/node-faux-pas/node_modules/serve-static
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/serve-static/LICENSE
├─ server-destroy@1.0.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/server-destroy
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me
│  ├─ path: ./node_modules/server-destroy
│  └─ licenseFile: ./node_modules/server-destroy/LICENSE
├─ set-blocking@2.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/set-blocking
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/set-blocking
│  └─ licenseFile: ./node_modules/set-blocking/LICENSE.txt
├─ set-immediate-shim@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/set-immediate-shim
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/set-immediate-shim
│  └─ licenseFile: ./node_modules/set-immediate-shim/readme.md
├─ setimmediate@1.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/YuzuJS/setImmediate
│  ├─ publisher: YuzuJS
│  ├─ path: ./node_modules/setimmediate
│  └─ licenseFile: ./node_modules/setimmediate/LICENSE.txt
├─ setprototypeof@1.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/wesleytodd/setprototypeof
│  ├─ publisher: Wes Todd
│  ├─ path: ./node_modules/serve-index/node_modules/setprototypeof
│  └─ licenseFile: ./node_modules/serve-index/node_modules/setprototypeof/LICENSE
├─ setprototypeof@1.0.3
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/wesleytodd/setprototypeof
│  ├─ publisher: Wes Todd
│  ├─ path: ./node_modules/setprototypeof
│  └─ licenseFile: ./node_modules/setprototypeof/LICENSE
├─ sha.js@2.4.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/crypto-browserify/sha.js
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/sha.js
│  └─ licenseFile: ./node_modules/sha.js/LICENSE
├─ shebang-command@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kevva/shebang-command
│  ├─ publisher: Kevin Martensson
│  ├─ email: kevinmartensson@gmail.com
│  ├─ url: github.com/kevva
│  ├─ path: ./node_modules/shebang-command
│  └─ licenseFile: ./node_modules/shebang-command/license
├─ shebang-regex@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/shebang-regex
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/shebang-regex
│  └─ licenseFile: ./node_modules/shebang-regex/license
├─ short-number@1.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/cfj/short-number
│  ├─ publisher: Jonathan Svärdén
│  ├─ email: jonathan.svarden@gmail.com
│  ├─ url: http://svarden.se
│  ├─ path: ./node_modules/short-number
│  └─ licenseFile: ./node_modules/short-number/LICENSE
├─ signal-exit@3.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/tapjs/signal-exit
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/signal-exit
│  └─ licenseFile: ./node_modules/signal-exit/LICENSE.txt
├─ slash@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/slash
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/slash
│  └─ licenseFile: ./node_modules/slash/readme.md
├─ slice-ansi@0.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/slice-ansi
│  ├─ publisher: David Caccavella
│  ├─ email: threedeecee@gmail.com
│  ├─ path: ./node_modules/cli-truncate/node_modules/slice-ansi
│  └─ licenseFile: ./node_modules/cli-truncate/node_modules/slice-ansi/license
├─ slice-ansi@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/slice-ansi
│  ├─ publisher: David Caccavella
│  ├─ email: threedeecee@gmail.com
│  ├─ path: ./node_modules/slice-ansi
│  └─ licenseFile: ./node_modules/slice-ansi/license
├─ slide@1.1.6
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/slide-flow-control
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/slide
│  └─ licenseFile: ./node_modules/slide/LICENSE
├─ sntp@1.0.9
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/hueniverse/sntp
│  ├─ publisher: Eran Hammer
│  ├─ email: eran@hammer.io
│  ├─ url: http://hueniverse.com
│  ├─ path: ./node_modules/sntp
│  └─ licenseFile: ./node_modules/sntp/LICENSE
├─ socket.io-adapter@0.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Automattic/socket.io-adapter
│  ├─ path: ./node_modules/socket.io-adapter
│  └─ licenseFile: ./node_modules/socket.io-adapter/LICENSE
├─ socket.io-client@1.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Automattic/socket.io-client
│  ├─ path: ./node_modules/socket.io-client
│  └─ licenseFile: ./node_modules/socket.io-client/LICENSE
├─ socket.io-parser@2.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Automattic/socket.io-parser
│  ├─ path: ./node_modules/socket.io-parser
│  └─ licenseFile: ./node_modules/socket.io-parser/LICENSE
├─ socket.io@1.6.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/socketio/socket.io
│  ├─ path: ./node_modules/socket.io
│  └─ licenseFile: ./node_modules/socket.io/LICENSE
├─ sort-keys@1.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/sort-keys
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/sort-keys
│  └─ licenseFile: ./node_modules/sort-keys/license
├─ source-list-map@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/source-list-map
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/source-list-map
│  └─ licenseFile: ./node_modules/source-list-map/README.md
├─ source-map-support@0.4.18
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/evanw/node-source-map-support
│  ├─ path: ./node_modules/source-map-support
│  └─ licenseFile: ./node_modules/source-map-support/LICENSE.md
├─ source-map@0.1.31
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/mozilla/source-map
│  ├─ publisher: Nick Fitzgerald
│  ├─ email: nfitzgerald@mozilla.com
│  ├─ path: ./node_modules/jstransform/node_modules/source-map
│  └─ licenseFile: ./node_modules/jstransform/node_modules/source-map/LICENSE
├─ source-map@0.1.43
│  ├─ licenses: BSD
│  ├─ repository: https://github.com/mozilla/source-map
│  ├─ publisher: Nick Fitzgerald
│  ├─ email: nfitzgerald@mozilla.com
│  ├─ path: ./node_modules/string-replace-webpack-plugin/node_modules/source-map
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/node_modules/source-map/LICENSE
├─ source-map@0.4.4
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/mozilla/source-map
│  ├─ publisher: Nick Fitzgerald
│  ├─ email: nfitzgerald@mozilla.com
│  ├─ path: ./node_modules/handlebars/node_modules/source-map
│  └─ licenseFile: ./node_modules/handlebars/node_modules/source-map/README.md
├─ source-map@0.5.7
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/mozilla/source-map
│  ├─ publisher: Nick Fitzgerald
│  ├─ email: nfitzgerald@mozilla.com
│  ├─ path: ./node_modules/source-map
│  └─ licenseFile: ./node_modules/source-map/LICENSE
├─ source-map@0.6.1
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/mozilla/source-map
│  ├─ publisher: Nick Fitzgerald
│  ├─ email: nfitzgerald@mozilla.com
│  ├─ path: ./node_modules/webpack-sources/node_modules/source-map
│  └─ licenseFile: ./node_modules/webpack-sources/node_modules/source-map/LICENSE
├─ spdx-compare@0.1.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kemitchell/spdx-compare.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: https://kemitchell.com
│  ├─ path: ./node_modules/spdx-compare
│  └─ licenseFile: ./node_modules/spdx-compare/LICENSE.md
├─ spdx-correct@1.0.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/kemitchell/spdx-correct.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: https://kemitchell.com
│  ├─ path: ./node_modules/validate-npm-package-license/node_modules/spdx-correct
│  └─ licenseFile: ./node_modules/validate-npm-package-license/node_modules/spdx-correct/LICENSE
├─ spdx-correct@2.0.4
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/jslicense/spdx-correct.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: https://kemitchell.com
│  ├─ path: ./node_modules/spdx-correct
│  └─ licenseFile: ./node_modules/spdx-correct/LICENSE
├─ spdx-exceptions@1.0.5
│  ├─ licenses: CC-BY-3.0
│  ├─ repository: https://github.com/kemitchell/spdx-exceptions.json
│  ├─ publisher: The Linux Foundation
│  ├─ path: ./node_modules/spdx-exceptions
│  └─ licenseFile: ./node_modules/spdx-exceptions/README.md
├─ spdx-exceptions@2.0.0
│  ├─ licenses: CC-BY-3.0
│  ├─ repository: https://github.com/kemitchell/spdx-exceptions.json
│  ├─ publisher: The Linux Foundation
│  ├─ path: ./node_modules/spdx-correct/node_modules/spdx-exceptions
│  └─ licenseFile: ./node_modules/spdx-correct/node_modules/spdx-exceptions/README.md
├─ spdx-expression-parse@1.0.4
│  ├─ licenses: (MIT AND CC-BY-3.0)
│  ├─ repository: https://github.com/kemitchell/spdx-expression-parse.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: http://kemitchell.com
│  ├─ path: ./node_modules/spdx-expression-parse
│  └─ licenseFile: ./node_modules/spdx-expression-parse/LICENSE
├─ spdx-expression-parse@2.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jslicense/spdx-expression-parse.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: http://kemitchell.com
│  ├─ path: ./node_modules/spdx-correct/node_modules/spdx-expression-parse
│  └─ licenseFile: ./node_modules/spdx-correct/node_modules/spdx-expression-parse/LICENSE
├─ spdx-license-ids@1.2.2
│  ├─ licenses: Unlicense
│  ├─ repository: https://github.com/shinnn/spdx-license-ids
│  ├─ publisher: Shinnosuke Watanabe
│  ├─ url: https://github.com/shinnn
│  ├─ path: ./node_modules/spdx-license-ids
│  └─ licenseFile: ./node_modules/spdx-license-ids/LICENSE
├─ spdx-license-ids@2.0.1
│  ├─ licenses: CC0-1.0
│  ├─ repository: https://github.com/shinnn/spdx-license-ids
│  ├─ publisher: Shinnosuke Watanabe
│  ├─ url: https://github.com/shinnn
│  ├─ path: ./node_modules/spdx-correct/node_modules/spdx-license-ids
│  └─ licenseFile: ./node_modules/spdx-correct/node_modules/spdx-license-ids/README.md
├─ spdx-ranges@1.0.1
│  ├─ licenses: CC-BY-3.0
│  ├─ repository: https://github.com/kemitchell/spdx-ranges.js
│  ├─ publisher: The Linux Foundation
│  ├─ path: ./node_modules/spdx-ranges
│  └─ licenseFile: ./node_modules/spdx-ranges/LICENSE.md
├─ spdx-satisfies@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kemitchell/spdx-satisfies.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: https://kemitchell.com
│  ├─ path: ./node_modules/spdx-satisfies
│  └─ licenseFile: ./node_modules/spdx-satisfies/LICENSE.md
├─ spdx@0.5.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kemitchell/spdx.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: http://kemitchell.com
│  ├─ path: ./node_modules/spdx
│  └─ licenseFile: ./node_modules/spdx/LICENSE
├─ speedline@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/pmdartus/speedline
│  ├─ publisher: Pierre-Marie Dartus
│  ├─ email: dartus.pierremarie@gmail.com
│  ├─ url: github.com/pmdartus
│  ├─ path: ./node_modules/speedline
│  └─ licenseFile: ./node_modules/speedline/license
├─ sprintf-js@1.0.3
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/alexei/sprintf.js
│  ├─ publisher: Alexandru Marasteanu
│  ├─ email: hello@alexei.ro
│  ├─ url: http://alexei.ro/
│  ├─ path: ./node_modules/sprintf-js
│  └─ licenseFile: ./node_modules/sprintf-js/LICENSE
├─ sshpk@1.13.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/arekinath/node-sshpk
│  ├─ publisher: Joyent, Inc
│  ├─ path: ./node_modules/fsevents/node_modules/sshpk
│  └─ licenseFile: ./node_modules/fsevents/node_modules/sshpk/LICENSE
├─ sshpk@1.13.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/arekinath/node-sshpk
│  ├─ publisher: Joyent, Inc
│  ├─ path: ./node_modules/sshpk
│  └─ licenseFile: ./node_modules/sshpk/LICENSE
├─ staged-git-files@0.0.4
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/mcwhittemore/staged-git-files
│  ├─ publisher: Matthew Chase Whittemore
│  ├─ email: mcwhittemore@gmail.com
│  ├─ path: ./node_modules/staged-git-files
│  └─ licenseFile: ./node_modules/staged-git-files/readme.md
├─ statuses@1.3.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/statuses
│  ├─ path: ./node_modules/statuses
│  └─ licenseFile: ./node_modules/statuses/LICENSE
├─ statuses@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jshttp/statuses
│  ├─ path: ./node_modules/http-errors/node_modules/statuses
│  └─ licenseFile: ./node_modules/http-errors/node_modules/statuses/LICENSE
├─ stream-browserify@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/stream-browserify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/stream-browserify
│  └─ licenseFile: ./node_modules/stream-browserify/LICENSE
├─ stream-http@2.7.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jhiesey/stream-http
│  ├─ publisher: John Hiesey
│  ├─ path: ./node_modules/stream-http
│  └─ licenseFile: ./node_modules/stream-http/LICENSE
├─ stream-throttle@0.1.3
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/tjgq/node-stream-throttle
│  ├─ publisher: Tiago Quelhas
│  ├─ email: tiagoq@gmail.com
│  ├─ path: ./node_modules/stream-throttle
│  └─ licenseFile: ./node_modules/stream-throttle/LICENSE
├─ stream-to-observable@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jamestalmage/stream-to-observable
│  ├─ publisher: James Talmage
│  ├─ email: james@talmage.io
│  ├─ url: github.com/jamestalmage
│  ├─ path: ./node_modules/stream-to-observable
│  └─ licenseFile: ./node_modules/stream-to-observable/license
├─ strict-uri-encode@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kevva/strict-uri-encode
│  ├─ publisher: Kevin Mårtensson
│  ├─ email: kevinmartensson@gmail.com
│  ├─ url: github.com/kevva
│  ├─ path: ./node_modules/strict-uri-encode
│  └─ licenseFile: ./node_modules/strict-uri-encode/license
├─ string-replace-webpack-plugin@0.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jamesandersen/string-replace-webpack-plugin
│  ├─ publisher: James Andersen @jandersen78
│  ├─ path: ./node_modules/string-replace-webpack-plugin
│  └─ licenseFile: ./node_modules/string-replace-webpack-plugin/README.md
├─ string-width@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/string-width
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/string-width
│  └─ licenseFile: ./node_modules/string-width/license
├─ string-width@2.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/string-width
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ansi-align/node_modules/string-width
│  └─ licenseFile: ./node_modules/ansi-align/node_modules/string-width/license
├─ string_decoder@0.10.31
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/string_decoder
│  ├─ path: ./node_modules/through2/node_modules/string_decoder
│  └─ licenseFile: ./node_modules/through2/node_modules/string_decoder/LICENSE
├─ string_decoder@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/string_decoder
│  ├─ path: ./node_modules/fsevents/node_modules/string_decoder
│  └─ licenseFile: ./node_modules/fsevents/node_modules/string_decoder/LICENSE
├─ string_decoder@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/string_decoder
│  ├─ path: ./node_modules/string_decoder
│  └─ licenseFile: ./node_modules/string_decoder/LICENSE
├─ stringify-object@3.2.1
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/yeoman/stringify-object
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/stringify-object
│  └─ licenseFile: ./node_modules/stringify-object/LICENSE
├─ stringstream@0.0.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mhart/StringStream
│  ├─ publisher: Michael Hart
│  ├─ email: michael.hart.au@gmail.com
│  ├─ url: http://github.com/mhart
│  ├─ path: ./node_modules/stringstream
│  └─ licenseFile: ./node_modules/stringstream/LICENSE.txt
├─ strip-ansi@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/license-checker/node_modules/strip-ansi
│  └─ licenseFile: ./node_modules/license-checker/node_modules/strip-ansi/readme.md
├─ strip-ansi@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/strip-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/strip-ansi
│  └─ licenseFile: ./node_modules/strip-ansi/license
├─ strip-ansi@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/strip-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/ansi-align/node_modules/strip-ansi
│  └─ licenseFile: ./node_modules/ansi-align/node_modules/strip-ansi/license
├─ strip-bom@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-bom
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/strip-bom
│  └─ licenseFile: ./node_modules/strip-bom/license
├─ strip-bom@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-bom
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/webpack/node_modules/strip-bom
│  └─ licenseFile: ./node_modules/webpack/node_modules/strip-bom/license
├─ strip-eof@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-eof
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/strip-eof
│  └─ licenseFile: ./node_modules/strip-eof/license
├─ strip-indent@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-indent
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/redent/node_modules/strip-indent
│  └─ licenseFile: ./node_modules/redent/node_modules/strip-indent/license
├─ strip-indent@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-indent
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/strip-indent
│  └─ licenseFile: ./node_modules/strip-indent/license
├─ strip-json-comments@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/strip-json-comments
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/strip-json-comments
│  └─ licenseFile: ./node_modules/strip-json-comments/license
├─ style-loader@0.8.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/style-loader
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/style-loader
│  └─ licenseFile: ./node_modules/style-loader/README.md
├─ supports-color@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/supports-color
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/license-checker/node_modules/supports-color
│  └─ licenseFile: ./node_modules/license-checker/node_modules/supports-color/readme.md
├─ supports-color@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/supports-color
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/chalk/node_modules/supports-color
│  └─ licenseFile: ./node_modules/chalk/node_modules/supports-color/license
├─ supports-color@3.2.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/supports-color
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/postcss/node_modules/supports-color
│  └─ licenseFile: ./node_modules/postcss/node_modules/supports-color/license
├─ supports-color@4.5.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/supports-color
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/supports-color
│  └─ licenseFile: ./node_modules/supports-color/license
├─ svgo@0.7.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/svg/svgo
│  ├─ publisher: Kir Belevich
│  ├─ email: kir@soulshine.in
│  ├─ url: https://github.com/deepsweet
│  ├─ path: ./node_modules/svgo
│  └─ licenseFile: ./node_modules/svgo/LICENSE
├─ symbol-observable@0.2.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blesh/symbol-observable
│  ├─ publisher: Ben Lesh
│  ├─ email: ben@benlesh.com
│  ├─ path: ./node_modules/is-observable/node_modules/symbol-observable
│  └─ licenseFile: ./node_modules/is-observable/node_modules/symbol-observable/license
├─ symbol-observable@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blesh/symbol-observable
│  ├─ publisher: Ben Lesh
│  ├─ email: ben@benlesh.com
│  ├─ path: ./node_modules/symbol-observable
│  └─ licenseFile: ./node_modules/symbol-observable/license
├─ table-layout@0.4.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/table-layout
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/table-layout
│  └─ licenseFile: ./node_modules/table-layout/LICENSE
├─ table@4.0.2
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/gajus/table
│  ├─ publisher: Gajus Kuizinas
│  ├─ email: gajus@gajus.com
│  ├─ url: http://gajus.com
│  ├─ path: ./node_modules/table
│  └─ licenseFile: ./node_modules/table/LICENSE
├─ tapable@0.2.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/tapable
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/tapable
│  └─ licenseFile: ./node_modules/tapable/README.md
├─ tar-pack@3.4.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/ForbesLindesay/tar-pack
│  ├─ path: ./node_modules/fsevents/node_modules/tar-pack
│  └─ licenseFile: ./node_modules/fsevents/node_modules/tar-pack/LICENSE
├─ tar-pack@3.4.1
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/ForbesLindesay/tar-pack
│  ├─ path: ./node_modules/tar-pack
│  └─ licenseFile: ./node_modules/tar-pack/LICENSE
├─ tar@2.2.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/node-tar
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/tar
│  └─ licenseFile: ./node_modules/tar/LICENSE
├─ term-size@1.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/term-size
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/term-size
│  └─ licenseFile: ./node_modules/term-size/license
├─ test-value@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/test-value
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/test-value
│  └─ licenseFile: ./node_modules/test-value/LICENSE
├─ text-table@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/text-table
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/text-table
│  └─ licenseFile: ./node_modules/text-table/LICENSE
├─ tfunk@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/shakyShane/tfunk
│  ├─ publisher: Shane Osbourne
│  ├─ path: ./node_modules/tfunk
│  └─ licenseFile: ./node_modules/tfunk/README.md
├─ through2@0.6.5
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/rvagg/through2
│  ├─ publisher: Rod Vagg
│  ├─ email: r@va.gg
│  ├─ url: https://github.com/rvagg
│  ├─ path: ./node_modules/through2
│  └─ licenseFile: ./node_modules/through2/LICENSE
├─ through@2.3.8
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/dominictarr/through
│  ├─ publisher: Dominic Tarr
│  ├─ email: dominic.tarr@gmail.com
│  ├─ url: dominictarr.com
│  ├─ path: ./node_modules/through
│  └─ licenseFile: ./node_modules/through/LICENSE.APACHE2
├─ timed-out@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/floatdrop/timed-out
│  ├─ publisher: Vsevolod Strukchinsky
│  ├─ email: floatdrop@gmail.com
│  ├─ path: ./node_modules/timed-out
│  └─ licenseFile: ./node_modules/timed-out/license
├─ timers-browserify@2.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jryans/timers-browserify
│  ├─ publisher: J. Ryan Stinnett
│  ├─ email: jryans@gmail.com
│  ├─ url: http://convolv.es/
│  ├─ path: ./node_modules/timers-browserify
│  └─ licenseFile: ./node_modules/timers-browserify/LICENSE.md
├─ tmp@0.0.33
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/raszi/node-tmp
│  ├─ publisher: KARASZI István
│  ├─ email: github@spam.raszi.hu
│  ├─ url: http://raszi.hu/
│  ├─ path: ./node_modules/tmp
│  └─ licenseFile: ./node_modules/tmp/LICENSE
├─ to-array@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Raynos/to-array
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/to-array
│  └─ licenseFile: ./node_modules/to-array/LICENCE
├─ to-arraybuffer@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jhiesey/to-arraybuffer
│  ├─ publisher: John Hiesey
│  ├─ path: ./node_modules/to-arraybuffer
│  └─ licenseFile: ./node_modules/to-arraybuffer/LICENSE
├─ to-fast-properties@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/to-fast-properties
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/to-fast-properties
│  └─ licenseFile: ./node_modules/to-fast-properties/license
├─ tough-cookie@2.3.2
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/salesforce/tough-cookie
│  ├─ publisher: Jeremy Stashewsky
│  ├─ email: jstashewsky@salesforce.com
│  ├─ path: ./node_modules/fsevents/node_modules/tough-cookie
│  └─ licenseFile: ./node_modules/fsevents/node_modules/tough-cookie/LICENSE
├─ tough-cookie@2.3.3
│  ├─ licenses: BSD-3-Clause
│  ├─ repository: https://github.com/salesforce/tough-cookie
│  ├─ publisher: Jeremy Stashewsky
│  ├─ email: jstashewsky@salesforce.com
│  ├─ path: ./node_modules/tough-cookie
│  └─ licenseFile: ./node_modules/tough-cookie/LICENSE
├─ tr46@0.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Sebmaster/tr46.js
│  ├─ publisher: Sebastian Mayr
│  ├─ email: npm@smayr.name
│  └─ path: ./node_modules/tr46
├─ treeify@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/notatestuser/treeify
│  ├─ publisher: Luke Plaster
│  ├─ email: notatestuser@gmail.com
│  ├─ path: ./node_modules/treeify
│  └─ licenseFile: ./node_modules/treeify/README.md
├─ trim-newlines@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/trim-newlines
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/trim-newlines
│  └─ licenseFile: ./node_modules/trim-newlines/license
├─ trim-right@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/trim-right
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/trim-right
│  └─ licenseFile: ./node_modules/trim-right/license
├─ tty-browserify@0.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/tty-browserify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/tty-browserify
│  └─ licenseFile: ./node_modules/tty-browserify/LICENSE
├─ tunnel-agent@0.6.0
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/mikeal/tunnel-agent
│  ├─ publisher: Mikeal Rogers
│  ├─ email: mikeal.rogers@gmail.com
│  ├─ url: http://www.futurealoof.com
│  ├─ path: ./node_modules/tunnel-agent
│  └─ licenseFile: ./node_modules/tunnel-agent/LICENSE
├─ tweetnacl@0.14.5
│  ├─ licenses: Unlicense
│  ├─ repository: https://github.com/dchest/tweetnacl-js
│  ├─ publisher: TweetNaCl-js contributors
│  ├─ path: ./node_modules/tweetnacl
│  └─ licenseFile: ./node_modules/tweetnacl/LICENSE
├─ type-check@0.3.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/gkz/type-check
│  ├─ publisher: George Zahariev
│  ├─ email: z@georgezahariev.com
│  ├─ path: ./node_modules/type-check
│  └─ licenseFile: ./node_modules/type-check/LICENSE
├─ typedarray@0.0.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/typedarray
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/typedarray
│  └─ licenseFile: ./node_modules/typedarray/LICENSE
├─ typical@2.6.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/typical
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/typical
│  └─ licenseFile: ./node_modules/typical/LICENSE
├─ ua-parser-js@0.7.12
│  ├─ licenses: (GPL-2.0 OR MIT)
│  ├─ repository: https://github.com/faisalman/ua-parser-js
│  ├─ publisher: Faisal Salman
│  ├─ email: fyzlman@gmail.com
│  ├─ url: http://faisalman.com
│  ├─ path: ./node_modules/ua-parser-js
│  └─ licenseFile: ./node_modules/ua-parser-js/readme.md
├─ uglify-js@2.8.29
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/mishoo/UglifyJS2
│  ├─ publisher: Mihai Bazon
│  ├─ email: mihai.bazon@gmail.com
│  ├─ url: http://lisperator.net/
│  ├─ path: ./node_modules/uglify-js
│  └─ licenseFile: ./node_modules/uglify-js/LICENSE
├─ uglify-js@3.2.2
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/mishoo/UglifyJS2
│  ├─ publisher: Mihai Bazon
│  ├─ email: mihai.bazon@gmail.com
│  ├─ url: http://lisperator.net/
│  ├─ path: ./node_modules/html-minifier/node_modules/uglify-js
│  └─ licenseFile: ./node_modules/html-minifier/node_modules/uglify-js/LICENSE
├─ uglify-to-browserify@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/ForbesLindesay/uglify-to-browserify
│  ├─ publisher: ForbesLindesay
│  ├─ path: ./node_modules/uglify-to-browserify
│  └─ licenseFile: ./node_modules/uglify-to-browserify/LICENSE
├─ uglifyjs-webpack-plugin@0.4.6
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack-contrib/uglifyjs-webpack-plugin
│  ├─ path: ./node_modules/uglifyjs-webpack-plugin
│  └─ licenseFile: ./node_modules/uglifyjs-webpack-plugin/LICENSE
├─ uid-number@0.0.6
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/uid-number
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/uid-number
│  └─ licenseFile: ./node_modules/uid-number/LICENSE
├─ ultcombo.github.io@2.0.0
│  ├─ licenses: UNLICENSED
│  ├─ private: true
│  ├─ repository: https://github.com/UltCombo/ultcombo.github.io
│  ├─ publisher: UltCombo
│  ├─ email: ultcombo@gmail.com
│  ├─ path: .
│  └─ licenseFile: ./LICENSE
├─ ultron@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/unshiftio/ultron
│  ├─ publisher: Arnout Kazemier
│  ├─ path: ./node_modules/ultron
│  └─ licenseFile: ./node_modules/ultron/LICENSE
├─ ultron@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/unshiftio/ultron
│  ├─ publisher: Arnout Kazemier
│  ├─ path: ./node_modules/chrome-remote-interface/node_modules/ultron
│  └─ licenseFile: ./node_modules/chrome-remote-interface/node_modules/ultron/LICENSE
├─ underscore@1.7.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jashkenas/underscore
│  ├─ publisher: Jeremy Ashkenas
│  ├─ email: jeremy@documentcloud.org
│  ├─ path: ./node_modules/underscore
│  └─ licenseFile: ./node_modules/underscore/LICENSE
├─ uniq@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mikolalysenko/uniq
│  ├─ publisher: Mikola Lysenko
│  ├─ path: ./node_modules/uniq
│  └─ licenseFile: ./node_modules/uniq/LICENSE
├─ uniqid@4.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/adamhalasz/uniqid
│  ├─ publisher: Halász Ádám
│  ├─ email: mail@adamhalasz.com
│  ├─ url: http://adamhalasz.com/
│  ├─ path: ./node_modules/uniqid
│  └─ licenseFile: ./node_modules/uniqid/Readme.md
├─ uniqs@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/fgnass/uniqs
│  ├─ publisher: Felix Gnass
│  ├─ email: fgnass@gmail.com
│  ├─ path: ./node_modules/uniqs
│  └─ licenseFile: ./node_modules/uniqs/README.md
├─ unique-string@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/unique-string
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/unique-string
│  └─ licenseFile: ./node_modules/unique-string/license
├─ universalify@0.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/RyanZim/universalify
│  ├─ publisher: Ryan Zimmerman
│  ├─ email: opensrc@ryanzim.com
│  ├─ path: ./node_modules/universalify
│  └─ licenseFile: ./node_modules/universalify/LICENSE
├─ unpipe@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/stream-utils/unpipe
│  ├─ publisher: Douglas Christopher Wilson
│  ├─ email: doug@somethingdoug.com
│  ├─ path: ./node_modules/unpipe
│  └─ licenseFile: ./node_modules/unpipe/LICENSE
├─ unreachable-branch-transform@0.3.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/zertosh/unreachable-branch-transform
│  ├─ publisher: Andres Suarez
│  ├─ email: zertosh@gmail.com
│  ├─ path: ./node_modules/unreachable-branch-transform
│  └─ licenseFile: ./node_modules/unreachable-branch-transform/LICENSE
├─ unzip-response@2.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/unzip-response
│  ├─ path: ./node_modules/unzip-response
│  └─ licenseFile: ./node_modules/unzip-response/license
├─ update-notifier@2.3.0
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/yeoman/update-notifier
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/update-notifier
│  └─ licenseFile: ./node_modules/update-notifier/readme.md
├─ upper-case@1.1.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/blakeembrey/upper-case
│  ├─ publisher: Blake Embrey
│  ├─ email: hello@blakeembrey.com
│  ├─ url: http://blakeembrey.me
│  ├─ path: ./node_modules/upper-case
│  └─ licenseFile: ./node_modules/upper-case/LICENSE
├─ url-join@0.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jfromaniello/url-join
│  ├─ publisher: José F. Romaniello
│  ├─ email: jfromaniello@gmail.com
│  ├─ url: http://joseoncode.com
│  ├─ path: ./node_modules/url-join
│  └─ licenseFile: ./node_modules/url-join/README.md
├─ url-parse-lax@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/url-parse-lax
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/url-parse-lax
│  └─ licenseFile: ./node_modules/url-parse-lax/license
├─ url@0.11.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/defunctzombie/node-url
│  ├─ path: ./node_modules/url
│  └─ licenseFile: ./node_modules/url/LICENSE
├─ util-deprecate@1.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/TooTallNate/util-deprecate
│  ├─ publisher: Nathan Rajlich
│  ├─ email: nathan@tootallnate.net
│  ├─ url: http://n8.io/
│  ├─ path: ./node_modules/util-deprecate
│  └─ licenseFile: ./node_modules/util-deprecate/LICENSE
├─ util-extend@1.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/isaacs/util-extend
│  ├─ path: ./node_modules/util-extend
│  └─ licenseFile: ./node_modules/util-extend/LICENSE
├─ util@0.10.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/defunctzombie/node-util
│  ├─ publisher: Joyent
│  ├─ url: http://www.joyent.com
│  ├─ path: ./node_modules/util
│  └─ licenseFile: ./node_modules/util/LICENSE
├─ utils-merge@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jaredhanson/utils-merge
│  ├─ publisher: Jared Hanson
│  ├─ email: jaredhanson@gmail.com
│  ├─ url: http://www.jaredhanson.net/
│  ├─ path: ./node_modules/utils-merge
│  └─ licenseFile: ./node_modules/utils-merge/LICENSE
├─ utils-merge@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jaredhanson/utils-merge
│  ├─ publisher: Jared Hanson
│  ├─ email: jaredhanson@gmail.com
│  ├─ url: http://www.jaredhanson.net/
│  ├─ path: ./node_modules/node-faux-pas/node_modules/utils-merge
│  └─ licenseFile: ./node_modules/node-faux-pas/node_modules/utils-merge/LICENSE
├─ uuid@3.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kelektiv/node-uuid
│  ├─ path: ./node_modules/fsevents/node_modules/uuid
│  └─ licenseFile: ./node_modules/fsevents/node_modules/uuid/LICENSE.md
├─ uuid@3.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/kelektiv/node-uuid
│  ├─ path: ./node_modules/uuid
│  └─ licenseFile: ./node_modules/uuid/LICENSE.md
├─ valid-url@1.0.9
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/ogt/valid-url
│  ├─ path: ./node_modules/valid-url
│  └─ licenseFile: ./node_modules/valid-url/LICENSE
├─ validate-npm-package-license@3.0.1
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/kemitchell/validate-npm-package-license.js
│  ├─ publisher: Kyle E. Mitchell
│  ├─ email: kyle@kemitchell.com
│  ├─ url: https://kemitchell.com
│  ├─ path: ./node_modules/validate-npm-package-license
│  └─ licenseFile: ./node_modules/validate-npm-package-license/LICENSE
├─ vendors@1.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/wooorm/vendors
│  ├─ publisher: Titus Wormer
│  ├─ email: tituswormer@gmail.com
│  ├─ url: http://wooorm.com
│  ├─ path: ./node_modules/vendors
│  └─ licenseFile: ./node_modules/vendors/LICENSE
├─ verror@1.10.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/davepacheco/node-verror
│  ├─ path: ./node_modules/verror
│  └─ licenseFile: ./node_modules/verror/LICENSE
├─ verror@1.3.6
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/davepacheco/node-verror
│  ├─ path: ./node_modules/fsevents/node_modules/verror
│  └─ licenseFile: ./node_modules/fsevents/node_modules/verror/LICENSE
├─ vm-browserify@0.0.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/vm-browserify
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/vm-browserify
│  └─ licenseFile: ./node_modules/vm-browserify/LICENSE
├─ watchpack@1.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/watchpack
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/watchpack
│  └─ licenseFile: ./node_modules/watchpack/LICENSE
├─ webidl-conversions@3.0.1
│  ├─ licenses: BSD-2-Clause
│  ├─ repository: https://github.com/jsdom/webidl-conversions
│  ├─ publisher: Domenic Denicola
│  ├─ email: d@domenic.me
│  ├─ url: https://domenic.me/
│  ├─ path: ./node_modules/webidl-conversions
│  └─ licenseFile: ./node_modules/webidl-conversions/LICENSE.md
├─ webpack-sources@1.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/webpack-sources
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/webpack-sources
│  └─ licenseFile: ./node_modules/webpack-sources/LICENSE
├─ webpack@3.10.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/webpack/webpack
│  ├─ publisher: Tobias Koppers @sokra
│  ├─ path: ./node_modules/webpack
│  └─ licenseFile: ./node_modules/webpack/LICENSE
├─ weinre@2.0.0-pre-I0Z7U9OV
│  ├─ licenses: Apache 2.0
│  ├─ repository: https://git-wip-us.apache.org/repos/asf/cordova-weinre
│  ├─ publisher: apache.org
│  ├─ path: ./node_modules/weinre
│  ├─ licenseFile: ./node_modules/weinre/LICENSE
│  └─ noticeFile: ./node_modules/weinre/NOTICE
├─ whatwg-url@4.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jsdom/whatwg-url
│  ├─ publisher: Sebastian Mayr
│  ├─ email: github@smayr.name
│  ├─ path: ./node_modules/whatwg-url
│  └─ licenseFile: ./node_modules/whatwg-url/LICENSE.txt
├─ whet.extend@0.9.9
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Meettya/whet.extend
│  ├─ publisher: Dmitrii Karpich
│  ├─ email: meettya@gmail.com
│  ├─ path: ./node_modules/whet.extend
│  └─ licenseFile: ./node_modules/whet.extend/LICENSE
├─ which-module@1.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/nexdrew/which-module
│  ├─ publisher: nexdrew
│  ├─ path: ./node_modules/which-module
│  └─ licenseFile: ./node_modules/which-module/LICENSE
├─ which-module@2.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/nexdrew/which-module
│  ├─ publisher: nexdrew
│  ├─ path: ./node_modules/webpack/node_modules/which-module
│  └─ licenseFile: ./node_modules/webpack/node_modules/which-module/LICENSE
├─ which@1.3.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/node-which
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me
│  ├─ path: ./node_modules/which
│  └─ licenseFile: ./node_modules/which/LICENSE
├─ wide-align@1.1.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/wide-align
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ url: http://re-becca.org/
│  ├─ path: ./node_modules/wide-align
│  └─ licenseFile: ./node_modules/wide-align/LICENSE
├─ widest-line@2.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/widest-line
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/widest-line
│  └─ licenseFile: ./node_modules/widest-line/license
├─ window-size@0.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/window-size
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/uglify-js/node_modules/window-size
│  └─ licenseFile: ./node_modules/uglify-js/node_modules/window-size/README.md
├─ window-size@0.1.4
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/window-size
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/window-size
│  └─ licenseFile: ./node_modules/window-size/LICENSE
├─ window-size@0.2.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/window-size
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/yargs/node_modules/window-size
│  └─ licenseFile: ./node_modules/yargs/node_modules/window-size/LICENSE
├─ wordwrap@0.0.2
│  ├─ licenses: MIT*
│  ├─ repository: https://github.com/substack/node-wordwrap
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/uglify-js/node_modules/wordwrap
│  └─ licenseFile: ./node_modules/uglify-js/node_modules/wordwrap/README.markdown
├─ wordwrap@0.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-wordwrap
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/optimist/node_modules/wordwrap
│  └─ licenseFile: ./node_modules/optimist/node_modules/wordwrap/LICENSE
├─ wordwrap@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/substack/node-wordwrap
│  ├─ publisher: James Halliday
│  ├─ email: mail@substack.net
│  ├─ url: http://substack.net
│  ├─ path: ./node_modules/wordwrap
│  └─ licenseFile: ./node_modules/wordwrap/LICENSE
├─ wordwrapjs@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/75lb/wordwrapjs
│  ├─ publisher: Lloyd Brookes
│  ├─ email: 75pound@gmail.com
│  ├─ path: ./node_modules/wordwrapjs
│  └─ licenseFile: ./node_modules/wordwrapjs/LICENSE
├─ workbox-build@2.1.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/googlechrome/sw-helpers
│  ├─ publisher: Google's Web DevRel Team
│  ├─ path: ./node_modules/workbox-build
│  └─ licenseFile: ./node_modules/workbox-build/LICENSE
├─ workbox-google-analytics@2.1.1
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/googlechrome/workbox
│  ├─ publisher: Jeff Posnick
│  ├─ email: jeffy@google.com
│  ├─ url: https://jeffy.info
│  ├─ path: ./node_modules/workbox-google-analytics
│  └─ licenseFile: ./node_modules/workbox-google-analytics/LICENSE
├─ workbox-sw@2.1.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/googlechrome/workbox
│  ├─ publisher: Google's Web DevRel Team
│  ├─ path: ./node_modules/workbox-sw
│  └─ licenseFile: ./node_modules/workbox-sw/LICENSE
├─ workbox-webpack-plugin@2.1.2
│  ├─ licenses: Apache-2.0
│  ├─ repository: https://github.com/googlechrome/sw-helpers
│  ├─ publisher: Google's Web DevRel Team
│  ├─ path: ./node_modules/workbox-webpack-plugin
│  └─ licenseFile: ./node_modules/workbox-webpack-plugin/LICENSE
├─ wrap-ansi@2.1.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/chalk/wrap-ansi
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/wrap-ansi
│  └─ licenseFile: ./node_modules/wrap-ansi/license
├─ wrappy@1.0.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/npm/wrappy
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/wrappy
│  └─ licenseFile: ./node_modules/wrappy/LICENSE
├─ write-file-atomic@2.3.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/iarna/write-file-atomic
│  ├─ publisher: Rebecca Turner
│  ├─ email: me@re-becca.org
│  ├─ url: http://re-becca.org
│  ├─ path: ./node_modules/write-file-atomic
│  └─ licenseFile: ./node_modules/write-file-atomic/LICENSE
├─ write@0.2.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/jonschlinkert/write
│  ├─ publisher: Jon Schlinkert
│  ├─ url: https://github.com/jonschlinkert
│  ├─ path: ./node_modules/write
│  └─ licenseFile: ./node_modules/write/LICENSE
├─ ws@1.1.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/websockets/ws
│  ├─ publisher: Einar Otto Stangvik
│  ├─ email: einaros@gmail.com
│  ├─ url: http://2x.io
│  ├─ path: ./node_modules/ws
│  └─ licenseFile: ./node_modules/ws/README.md
├─ ws@2.0.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/websockets/ws
│  ├─ publisher: Einar Otto Stangvik
│  ├─ email: einaros@gmail.com
│  ├─ url: http://2x.io
│  ├─ path: ./node_modules/chrome-remote-interface/node_modules/ws
│  └─ licenseFile: ./node_modules/chrome-remote-interface/node_modules/ws/LICENSE
├─ wtf-8@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mathiasbynens/wtf-8.js
│  ├─ publisher: Mathias Bynens
│  ├─ url: https://mathiasbynens.be/
│  ├─ path: ./node_modules/wtf-8
│  └─ licenseFile: ./node_modules/wtf-8/README.md
├─ xdg-basedir@3.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/xdg-basedir
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: sindresorhus.com
│  ├─ path: ./node_modules/xdg-basedir
│  └─ licenseFile: ./node_modules/xdg-basedir/license
├─ xml-char-classes@1.0.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/sindresorhus/xml-char-classes
│  ├─ publisher: Sindre Sorhus
│  ├─ email: sindresorhus@gmail.com
│  ├─ url: http://sindresorhus.com
│  ├─ path: ./node_modules/xml-char-classes
│  └─ licenseFile: ./node_modules/xml-char-classes/readme.md
├─ xmlhttprequest-ssl@1.5.3
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/mjwwit/node-XMLHttpRequest
│  ├─ publisher: Michael de Wit
│  ├─ path: ./node_modules/xmlhttprequest-ssl
│  └─ licenseFile: ./node_modules/xmlhttprequest-ssl/LICENSE
├─ xtend@4.0.1
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/Raynos/xtend
│  ├─ publisher: Raynos
│  ├─ email: raynos2@gmail.com
│  ├─ path: ./node_modules/xtend
│  └─ licenseFile: ./node_modules/xtend/LICENCE
├─ y18n@3.2.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/y18n
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/y18n
│  └─ licenseFile: ./node_modules/y18n/LICENSE
├─ yallist@2.1.2
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/isaacs/yallist
│  ├─ publisher: Isaac Z. Schlueter
│  ├─ email: i@izs.me
│  ├─ url: http://blog.izs.me/
│  ├─ path: ./node_modules/yallist
│  └─ licenseFile: ./node_modules/yallist/LICENSE
├─ yargs-parser@4.2.1
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/yargs-parser
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/yargs-parser
│  └─ licenseFile: ./node_modules/yargs-parser/LICENSE.txt
├─ yargs-parser@7.0.0
│  ├─ licenses: ISC
│  ├─ repository: https://github.com/yargs/yargs-parser
│  ├─ publisher: Ben Coe
│  ├─ email: ben@npmjs.com
│  ├─ path: ./node_modules/webpack/node_modules/yargs-parser
│  └─ licenseFile: ./node_modules/webpack/node_modules/yargs-parser/LICENSE.txt
├─ yargs@3.10.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bcoe/yargs
│  ├─ publisher: Alex Ford
│  ├─ email: Alex.Ford@CodeTunnel.com
│  ├─ url: http://CodeTunnel.com
│  ├─ path: ./node_modules/uglify-js/node_modules/yargs
│  └─ licenseFile: ./node_modules/uglify-js/node_modules/yargs/LICENSE
├─ yargs@3.29.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bcoe/yargs
│  ├─ publisher: Alex Ford
│  ├─ email: Alex.Ford@CodeTunnel.com
│  ├─ url: http://CodeTunnel.com
│  ├─ path: ./node_modules/localtunnel/node_modules/yargs
│  └─ licenseFile: ./node_modules/localtunnel/node_modules/yargs/LICENSE
├─ yargs@3.32.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/bcoe/yargs
│  ├─ publisher: Alex Ford
│  ├─ email: Alex.Ford@CodeTunnel.com
│  ├─ url: http://CodeTunnel.com
│  ├─ path: ./node_modules/lighthouse/node_modules/yargs
│  └─ licenseFile: ./node_modules/lighthouse/node_modules/yargs/LICENSE
├─ yargs@6.4.0
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/yargs/yargs
│  ├─ path: ./node_modules/yargs
│  └─ licenseFile: ./node_modules/yargs/LICENSE
├─ yargs@8.0.2
│  ├─ licenses: MIT
│  ├─ repository: https://github.com/yargs/yargs
│  ├─ path: ./node_modules/webpack/node_modules/yargs
│  └─ licenseFile: ./node_modules/webpack/node_modules/yargs/LICENSE
└─ yeast@0.1.2
   ├─ licenses: MIT
   ├─ repository: https://github.com/unshiftio/yeast
   ├─ publisher: Arnout Kazemier
   ├─ path: ./node_modules/yeast
   └─ licenseFile: ./node_modules/yeast/LICENSE
```
</details>
