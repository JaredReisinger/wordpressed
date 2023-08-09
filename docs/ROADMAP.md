## Roadmap / TODOs

> _moved from the main README to reduce noise_

- [ ] Generate route/endpoint argument types

  - [x] basic types (string, integer, etc.)

  - [ ] array items

  - [ ] objects

- [ ] Generate route path (regexp match) parameters

- [x] Generate response types for routes/endpoints _(It appears that the WordPress developers didn’t think reponses needed to be discoverable… I don’t believe there is **any** queryable/parseable response information at all, sadly.)_

- [x] Create route/endpoint-to-argument type safety

- [ ] Create all-purpose get/post/patch/etc. client calls

  - [x] very rough stubbed calls

  - [x] argument support

  - [ ] route parameter support

- [ ] Create streamlined “namespace-specific” client?

- [ ] Generate namespace-specific authentication? (WooCommerce has its own, but I don’t see that “magic” exposed in the discovery information.)

- [x] Increase test coverage

  - [x] main client code

  - [x] utility routines

  - [x] generation CLI
