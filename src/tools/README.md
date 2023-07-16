# Tools

I expect that the vast majority of the value of this library will be driven by the types associated with the various WordPress `wp-json` endpoints. Rather than create these by hand, WordPress’s discovery mechanism can be used to gather the endpoint metadata, and that data can be used to generate the corresponding Typescript types.

In order to keep the library distribution size small, these tools are _**not**_ included in the distribution. To make use of them, you’ll need to clone the repo.
