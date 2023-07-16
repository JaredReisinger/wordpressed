# wordpressed

A modern, Typescript+ESM client for the WordPress REST API. _(Rhymes with “wordpREST”!)_

[![npm version](https://img.shields.io/npm/v/wordpressed.svg?logo=npm)](https://www.npmjs.com/package/wordpressed)
[![build status](https://img.shields.io/github/actions/workflow/status/JaredReisinger/wordpressed/build.yml?branch=main&logo=github)](https://github.com/JaredReisinger/wordpressed/actions?query=workflow%3Abuild+branch%3Amain)
[![code coverage](https://img.shields.io/codecov/c/github/JaredReisinger/wordpressed.svg?logo=codecov)](https://codecov.io/github/JaredReisinger/wordpressed)
[![snyk vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/JaredReisinger/wordpressed.svg?logo=snyk)](https://snyk.io/test/github/JaredReisinger/wordpressed)

## _Why?_

The existing _WooCommerce_ API client wrappers are somewhat frustrating to use, and their Typescript typings are either nonexistent or incorrect. The _de facto_ standard WP API client library hasn’t been updated for years, and doesn’t follow modern design patterns.

Further, the WordPress REST API is designed in such a way that most, if not all, API calls follow the same pattern. All that really differs is the shape of the data going in, and the shape coming out… exactly the thing for which Typescript excels!

On top of that, I have [a particular use-case](https://www.npmjs.com/package/order-fetcher) for which a modern client would be incredibly beneficial.
