`# Type generation

## Context

It is important to understand what types (theoretically) exist within a WordPress REST API endpoint, and which of these can be programatically discovered, and thus generated.

- In the request:

  - [**Path variables**](https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/#path-variables): The route path itself may contain pattern-match expressions for things like the ID of the kind of thing being requested (“I want post ID _**`7`**_”, or “delete revision _**`23`**_ of page _**`14`**_).

  - [**Arguments**](https://developer.wordpress.org/rest-api/extending-the-rest-api/routes-and-endpoints/#arguments): Passed either as querystring values (_**`?color=red`**_, typical for GET or DELETE requests) or as the JSON body of the request (_**`{ "color": "red" }`**_, typical for any other HTTP methods).

- In the response:

  - [**Response body**](https://developer.wordpress.org/rest-api/key-concepts/#responses): The response itself is a structured JSON value whose schema depends on the route/endpoint requested.

Of these three values, only the request **path variables** and **arguments** are exposed for discovery from outside of the WordPress server (from calling the `GET /wp-json` REST API endpoint). The schema of the response is _**not**_ exposed at all. Further, while the **arguments** are strongly defined, the **path variables** only exist as pattern matches in the routes themselves, and therefore are only loosely typed.

> _NOTE: There are also some [*global parameters*](https://developer.wordpress.org/rest-api/using-the-rest-api/global-parameters/) that are defined to be available “on all resources”; these are assumed to exist and are not included in the schema for any known endpoint type. These are really just additional **arguments** that aren’t described in an endpoint’s argument list._

## Process

### From WordPress to Typescript...

The `GET /wp-json` endpoint is called, which results in a (potentially large) response that contains all of the routes, endpoints, and arguments defined on that server. We iterate the routes/endpoints, parsing the schema to build a Typescript-equivalent definition for each argument set. These are named for the route/endpoint they are associated with, so for example, the route `/wp/v2/posts/(?P<id>[\\d]+)` defines three endpoints, one for `DELETE`, one for `GET`, and one for the set of `POST`, `PUT`, and `PATCH`. We use a naive textification of the route (rather than attempting to be “smart” about the pattern matching), giving us a base of **`WpV2PostsPIdD`**, and then append the endopoint method(s) and **`Args`**, resulting in:

- **`WpV2PostsPIdDDeleteArgs`**
- **`WpV2PostsPIdDGetArgs`**
- **`WpV2PostsPIdDPostPutPatchArgs`**

Simply-typed arguments (strings, numbers) have easy mappings to Typescript equivalents, but more complex ones (arrays, objects) require us to further define those types as well. For example, the `content` member of `WpV2PostsPostArgs` (for the `POST /wp/v2/posts` endpoint) is itself an object with `raw`, `rendered`, `block_version` and `protected` properties. We thus define `WpV2PostsPostArgsContent` (appending the member name to the arg type name) and then refer to that within the arg type. WordPress does not constrain the depth that these complex types might have; fortunately, we can simply parse and process each new type as we see it.

### … and then get smart about it!

Having the argument types defined is a good start, but would still require a developer to “know” to indicate what argument type was needed on a request-by-request basis. There are certainly cases where this will still be the case, but clever use of generic types and `keyof` can make developer experience much, much more simple. If we know (i.e. Typescript knows) that we're making a `GET /wp/v2/posts` call, it can then infer that `WpV2PostsGetArgs` is the correct argument type to use.

We do this by defining a mapping interface for each HTTP method whose members (keys) are the route path, and whose type is the argument type, for example:

```ts
export interface WpV2GetRoutes {
  // ...
  '/wp/v2/posts': WpV2PostsGetArgs;
  // ...
}
```

These are then aggregated across all namespaces as **`KnownGetRoutes`**, **`KnownPostRoutes`**, and so on. With that, indexing by the route results in the matching argument type:

```ts
KnownGetRoute['/wp/v2/posts'];
```

has the type `WpV2PostsGetArgs`.

We can use this in the definition of the `get()` method of the client as follows:

```ts
export class Client {
  // ...
  async get<
    R extends keyof KnownGetRoutes = keyof KnownGetRoutes,
    A extends KnownGetRoutes[R] = KnownGetRoutes[R],
  >(route: R, args?: A) {
    return this._call(EndpointMethod.GET, route, args);
  }
  // ...
}
```

> _NOTE: The actual definition is slightly more complex, to add the type of the response. More on that later._

There are two type generics here, **`R`** for the route, and **`A`** for the args. The default value for `R` is “all the keys in `KnownGetRoutes`”, and the default for `A` is “the type that results from looking up the specific route in the mapping”. Given this, Typescript knows two things: first, that the route passed to `get()` _**should be**_ one of the known routes we’ve seen and parsed, and second, that for a given route path, the argument type can be found by looking up that route in the `KnownGetRoutes` mapping. This means that:

```ts
client.get('/wp/v2/posts', { ... });
```

does _**not**_ need any manual typing for Typescript to know that the `args` parameter has the type `WpV2PostsGetArgs`.

### But what about response types?

Missing from the discussion thus far is the type of the response from a given endpoint. Sadly, the WordPress REST API discovery mechanism does not seem to include the type/fields in the response. That said, we can stub these out as `unknown`, which is at least an accurate way to tell Typescript “we don’t know what this looks like”. We then make sure to provide a mechanism to allow the consumer of the client to provide their own type definition for the response; it’s the same mechanism that can be used to define routes/arguments that the client doesn’t already know about.

The actual definition of the `get()` method of the client is thus:

```ts
export class Client {
  // ...
  async get<
    T = unknown,
    R extends keyof KnownGetRoutes = keyof KnownGetRoutes,
    A extends KnownGetRoutes[R] = KnownGetRoutes[R],
  >(route: R, args?: A) {
    return this._call<T>(EndpointMethod.GET, route, args);
  }
  // ...
}
```

... where **`T`** has been added as the first generic type parameter (first, so that it's easy to provide _only_ that type if need be), and passed through to `this._call<T>(...)`, causing `_call()` and thus `get()` to return `Promise<T>`.

Left as an open question is whether the type generation should provide stubbed response types like `Record<string, unknown>`, or something roughly equivalent. In the near future I’m going to try doing something like this, and adding them into the route-to-type lookup process. I would probably have the stubbed response types placed into a separate file from the path variables and arguments, though, and _not_ clobber those files if they already exist. That way, they can be created/updated by hand, and the client library will eventually get better and better about also providing useful response types.

## Customizing

If you have a use-case that involves a plugin/namespace/routes/endpoints that aren't already a part of this library, you can use the `wordpressed` CLI to help you generate your own custom types, and then provide those to your client instance.

> _NOTE: This mechanism is still a work in progress, what follows is mostly thoughts about how it **ought** to work._

Assuming you have a project and `wordpressed` is one of your dependencies, you should also have the `wordpressed` CLI in your `node_modules/.bin` directory, and accessible via `npx wordpressed`. Running something like:

```shell
$ mkdir -p src/wordpressed-types
$ npx wordpressed --host https://myhost.example.org --out-dir src/wordpressed-types
```

will create in `src/wordpressed-types` a complete set of route/endpoint types specific to the server you are planning to use. (Or at the very least, some subset of the types you know you are going to need.) You can then seed your instance of the client with the outermost type, using _**your**_ generated `KnownRoutes` insead of the default `KnownRoutes` shipped with the library:

```ts
import { Client } from 'wordpressed';
import { KnownTypes } from './wordpresed-types';

const client = new Client<KnownTypes>('http://myhost.example.org');
```

This will supersede _**all**_ of the default types for every call into the client, giving you a client pre-typed for your particular use-case.

> _NOTE: If you use this option, please consider providing any new routes/endpoints/types back to this project; if you needed some as-yet untyped plugin, someone else probably needs it as well!_

If you just want to override one call, you can do that as well by providing the response, route, and argument type you want to use:

```ts
import { MyRoutes, MySpecificRouteArg, MySpecificRouteResponse } from './mine';

// ...

const response = await client.get<
  MySpecificResponse,
  MyRoutes,
  MySpecificRouteArg,
>(someRoute, { (...your args...) });
```

will require `someRoute` to be of type `MyRoutes`, the argument object of type `MySpecificRouteArg`, and the response will be typed as `MySpecificResponse`.
