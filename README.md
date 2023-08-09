# wordpressed

A modern, Typescript+ESM client for the WordPress REST API. _(Rhymes with “wordpREST”!)_

[![npm version](https://img.shields.io/npm/v/wordpressed.svg?logo=npm)](https://www.npmjs.com/package/wordpressed)
[![build status](https://img.shields.io/github/actions/workflow/status/JaredReisinger/wordpressed/build.yml?branch=alpha&logo=github)](https://github.com/JaredReisinger/wordpressed/actions?query=workflow%3Abuild+branch%3Aalpha)
[![code coverage](https://codecov.io/github/JaredReisinger/wordpressed/branch/alpha/graph/badge.svg?token=E3A3UAPD25)](https://codecov.io/github/JaredReisinger/wordpressed)
[![known vulnerabilities](https://snyk.io/test/github/JaredReisinger/wordpressed/alpha/badge.svg)](https://snyk.io/test/github/JaredReisinger/wordpressed/alpha)

> **WARNING:** This is _**very much**_ an early work-in-progress. It is being published so that early feedback on design decisions can be made. There _**will**_ be changes to the way that calls/requests are made.

## Usage

Just construct the client with the URL to your WordPress host, and start making REST API calls with the `get()`, `post()`, `delete()`, etc. method-specific functions:

```ts
import { Client } from 'wordpressed';

const client = new Client('http://myhost.example.org');

const response = await client.get('/wp/v2/pages', {
  after: '2023-08-01T00:00:00Z',
  per_page: 100,
});

response.body.forEach((page => { ... })
```

Note that you get Typescript type checking and intellisense completion (if your editor supports it) on the routes, the arguments specific to that route, and for the response body:

![example usage](https://github.com/JaredReisinger/wordpressed/blob/alpha/docs/wordpressed-example.png?raw=true)

## What to do if your routes aren’t included

If you have a use-case that involves a plugin/namespace/routes/endpoints that aren’t already a part of this library, you can use the included [`wordpressed` CLI](https://github.com/JaredReisinger/wordpressed/blob/alpha/docs/cli/README.md) to generate your own custom types, and then provide those to your client instance.

See the [_Customizing_ section of the type-generation docs](https://github.com/JaredReisinger/wordpressed/blob/alpha/docs/type-generation.md#customizing) for all the details.

## It’s _much_ smaller than it looks!

As of 2023–08–09, `npm pack --dry-run` on my machine reports about 850kB in file size, which matches the “unpacked size” reported on npmjs.com. But 775kB (_**91%!**_) of that is the `namespace` directory, which is entirely Typescript types that only exist at edit/build time. If you are including this library and running any kind of bundler/transpiler, you will likely end up with _at most_ 32kB (3.8% of the package) of `.js` files included from this library in your final build.

So yes, it’s a relatively sizeable package for the runtime functionality. But the whole point of this is that 91% set of types that drastically improves the edit-time experience. As time goes on and more types come in, that proportion is likely to grow… but the actual run-time impact of the package will remain unchanged.
