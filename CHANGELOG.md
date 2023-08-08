# Changelog

_All notable changes to this project will be documented in this file. See [Conventional Commits](https://www.conventionalcommits.org/) for commit guidelines._


## [1.0.0-alpha.1](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.7...v1.0.0-alpha.1) (2023-08-08)


### ⚠ BREAKING CHANGES

* endoint mapping types are no longer just the args,
but a richer `{ args, response }` aggregate type.

### Features

* **comments:** improve doc comments for types and members ([ae20620](https://github.com/JaredReisinger/wordpressed/commit/ae20620131495da8118fb48fb2285e5bcb07af8c))
* now supports (and generates) response types ([1e2d117](https://github.com/JaredReisinger/wordpressed/commit/1e2d117e608c5a3ba85b554c560ce8480a41520e))


### Code Refactoring

* new LineBuffer class to encapsulate buffered file writing ([b95bb86](https://github.com/JaredReisinger/wordpressed/commit/b95bb86490a323817d0325d141a0b47b31bae255))


### Miscellaneous Chores

* remove forensic logging in generate test ([6fd2c76](https://github.com/JaredReisinger/wordpressed/commit/6fd2c769bf8938d7a4b4ff647bab63eb82fbbf4a))

## [0.1.0-alpha.7](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.6...v0.1.0-alpha.7) (2023-08-06)


### Bug Fixes

* kick build/release (readme tweak) ([db14b45](https://github.com/JaredReisinger/wordpressed/commit/db14b4516c90a451aaf54bff6cfc5ef5b0a8e315))
* turn off node 20.x until ESM extensions get fixed ([f438702](https://github.com/JaredReisinger/wordpressed/commit/f4387020539a6b465a37856f9df0c2ef1a4b77ea))


### Documentation

* **changelog:** incldue *all* changes in changelog ([4926690](https://github.com/JaredReisinger/wordpressed/commit/4926690ef8e1094c466a27a225bc9c2e3fd4ab65))


### Tests

* test generation CLI ([8e3e44e](https://github.com/JaredReisinger/wordpressed/commit/8e3e44efa3519ed3eaf8942dd0865623f6ab85f7))


### Continuous Integration

* include all types in changelog/release ([066b03a](https://github.com/JaredReisinger/wordpressed/commit/066b03a040184e5429028f75e57d5e08b007942f))

## [0.1.0-alpha.6](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.5...v0.1.0-alpha.6) (2023-07-26)

### Features

- pass args in querystring or body ([afec556](https://github.com/JaredReisinger/wordpressed/commit/afec556bbb497681b372dc0a02681dab9e042b72))

### Tests

- **coverage:** increase coverage, stub more tests ([2049538](https://github.com/JaredReisinger/wordpressed/commit/2049538b279f8a645e7f4591d51d5ece1801cecd))
- **coverage:** test invalid patterns in routes ([50c1802](https://github.com/JaredReisinger/wordpressed/commit/50c18025fd5b91a0791aead03b4b56bea0b64d72))
- very basic Client test coverage ([4265db5](https://github.com/JaredReisinger/wordpressed/commit/4265db5bbf06842b1941b5d471fe556d0c5a5ee1))

### Miscellaneous Chores

- **release:** 0.1.0-alpha.6 [skip ci] ([fed62f5](https://github.com/JaredReisinger/wordpressed/commit/fed62f530b0c863481d1225bc723a94345901099))

## [0.1.0-alpha.5](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.4...v0.1.0-alpha.5) (2023-07-25)

### Features

- add all-method mapping for easier Client overrides ([17f5a91](https://github.com/JaredReisinger/wordpressed/commit/17f5a91e1a1896f07b83af3c55fccbf6b1c7cc0f))

### Documentation

- update CLI readme ([4e4bcd7](https://github.com/JaredReisinger/wordpressed/commit/4e4bcd7f61af8fdc9ca0ee0acfe9af554a5eb76a))

### Styles

- run prettier on generated files for consistency ([ed45821](https://github.com/JaredReisinger/wordpressed/commit/ed458219699aa2e203247b19ab2f1302a439e808))

### Tests

- **coverage:** exclude generated types from coverage calculation ([9155f5f](https://github.com/JaredReisinger/wordpressed/commit/9155f5f9bf5086ae53089fe49d204baae6f4b39c))

### Miscellaneous Chores

- **release:** 0.1.0-alpha.5 [skip ci] ([43dc94f](https://github.com/JaredReisinger/wordpressed/commit/43dc94fa8666c49a565d2b183ab2a7469af3ba86))

## [0.1.0-alpha.4](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.3...v0.1.0-alpha.4) (2023-07-21)

### Features

- **cli:** full-fleged CLI for generation ([8dd1cf5](https://github.com/JaredReisinger/wordpressed/commit/8dd1cf5b4c56056f2ad2ad86eadc52a8bc3a267a))

### Miscellaneous Chores

- **release:** 0.1.0-alpha.4 [skip ci] ([fba7f94](https://github.com/JaredReisinger/wordpressed/commit/fba7f9467a12774d965d963237b4ec000136dbe3))

## [0.1.0-alpha.3](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.2...v0.1.0-alpha.3) (2023-07-17)

### Bug Fixes

- add provenance, publish as latest? ([e5d59e6](https://github.com/JaredReisinger/wordpressed/commit/e5d59e67c55f76fccb1dffbe18ba4a941655e83a))
- screenshot for npm, publish as latest even though alpha ([1fe09bc](https://github.com/JaredReisinger/wordpressed/commit/1fe09bc3077fb752e2f855782ec363c88af11e02))

### Miscellaneous Chores

- **release:** 0.1.0-alpha.3 [skip ci] ([d16967c](https://github.com/JaredReisinger/wordpressed/commit/d16967c3ba71601939a7f6261ac526fb552a2708))

## [0.1.0-alpha.2](https://github.com/JaredReisinger/wordpressed/compare/v0.1.0-alpha.1...v0.1.0-alpha.2) (2023-07-17)

### Bug Fixes

- expand README ([efdf3d3](https://github.com/JaredReisinger/wordpressed/commit/efdf3d37d8f057b0cf860a39c5509c087dffc9dc))

### Miscellaneous Chores

- **release:** 0.1.0-alpha.2 [skip ci] ([e0b83e6](https://github.com/JaredReisinger/wordpressed/commit/e0b83e6033b72c4d53995c5b2fa7c9bd82d8cc2a))

## [0.1.0-alpha.1](https://github.com/JaredReisinger/wordpressed/compare/v0.0.0-alpha.0...v0.1.0-alpha.1) (2023-07-17)

### Features

- initial args generation ([d443033](https://github.com/JaredReisinger/wordpressed/commit/d443033bf776ebf811893e6795708af8614e1b7a))
- rough client stub for all methods ([c32ba96](https://github.com/JaredReisinger/wordpressed/commit/c32ba96a7389d8cdccd6ea12774a7ba6d7fdc0c8))

### Bug Fixes

- initial stubbed adhoc and commit process ([5305005](https://github.com/JaredReisinger/wordpressed/commit/5305005f105b3a65d60575f28d0900fbf9b4eed0))
- missed references from file moves ([1f2d693](https://github.com/JaredReisinger/wordpressed/commit/1f2d693b322b2abca1f95aa9447f98f0dfd4b606))

### Continuous Integration

- attempt to set up alpha builds/releases ([e9fff1b](https://github.com/JaredReisinger/wordpressed/commit/e9fff1bb1e629422715f4489fd1c4fa5e4c26a9d))
- enable release script ([bd59758](https://github.com/JaredReisinger/wordpressed/commit/bd59758ed374d5bc7fc07e63b80b7035a3ef2960))
- enable releases ([2b81e65](https://github.com/JaredReisinger/wordpressed/commit/2b81e650636aaf7fe8d4a4e3d9b070a3e2754ef4))

### Miscellaneous Chores

- fix gitignore for incremental build file ([34af2b2](https://github.com/JaredReisinger/wordpressed/commit/34af2b288614b35e2a5e3d0ceb680248dbf4a655))
- **release:** 0.1.0-alpha.1 [skip ci] ([fd1a038](https://github.com/JaredReisinger/wordpressed/commit/fd1a0380c894930b0bd3c9cf206c9249a41e1f36))

## [0.0.0-alpha.0](https://github.com/JaredReisinger/wordpressed/compare/v0.0.0...v0.0.0-alpha.0) (2023-07-13)

### Bug Fixes

- initial commit ([13218b5](https://github.com/JaredReisinger/wordpressed/commit/13218b5c2ac6d6deac852f9acbf8046a1448fb57))
