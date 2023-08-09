# Type generation

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

> ### But first, a caveat:
>
> The namespace/route/endpoint generation is currently dependent on a WordPress instance that **_I_** can reach. It does not have all possible plugins/namespaces available. I am attempting to structure this type information in a way that it will be easy to take contributions to this library. It is also relatively easy to create your own custom routes/type mappings for _**your**_ specific WordPress server, [see _Customizing_, below](#customizing).

### From WordPress to Typescript...

The `GET /wp-json` endpoint is called, which results in a (potentially large) response that contains all of the routes, endpoints, and arguments defined on that server. We iterate the routes/endpoints, parsing the schema to build a Typescript-equivalent definition for each argument set. These are named for the route/endpoint they are associated with, so for example, the route `/wp/v2/posts/(?P<id>[\\d]+)` defines three endpoints, one for `DELETE`, one for `GET`, and one for the set of `PATCH`, `POST`, and `PUT`. We use a naive textification of the route (rather than attempting to be “smart” about the pattern matching), giving us a base of **`WpV2PostsPIdD`**, and then append the endopoint method(s) and **`Args`**, resulting in:

- **`WpV2PostsPIdDDeleteArgs`**
- **`WpV2PostsPIdDGetArgs`**
- **`WpV2PostsPIdDPatchPostPutArgs`**

Simply-typed arguments (strings, numbers) have easy mappings to Typescript equivalents, but more complex ones (arrays, objects) require us to further define those types as well. For example, the `content` member of `WpV2PostsPostArgs` (for the `POST /wp/v2/posts` endpoint) is itself an object with `raw`, `rendered`, `block_version` and `protected` properties. We thus define `WpV2PostsPostArgsContent` (appending the member name to the arg type name) and then refer to that within the arg type. WordPress does not constrain the depth that these complex types might have; fortunately, we can simply parse and process each new type as we see it.

#### But what about response types?

Missing from the discussion thus far is the type of the response from a given endpoint. Sadly, the WordPress REST API discovery mechanism does not seem to include the type/fields in the response. That said, we can stub these out as empty placeholder interfaces. We could use `unknown`, but using an empty interface subtly encourages submissions/updates to fix the types in the library.

Also, whereas more than one HTTP method might use the same arguments description, we _**cannot**_ know whether the response types for those methods will be the same. Therefore, we assume that they are all distinct, and write separate per-method response types. For the same `/wp/v2/posts/(?P<id>[\\d]+)` example from before, this results in:

- **`WpV2PostsPIdDDeleteResponse`**
- **`WpV2PostsPIdDGetResponse`**
- **`WpV2PostsPIdDPatchResponse`**
- **`WpV2PostsPIdDPostResponse`**
- **`WpV2PostsPIdDPutResponse`**

### … and then get smart about it!

Having the argument types defined is a good start, but would still require a developer to “know” to indicate what argument type was needed on a request-by-request basis. There are certainly cases where this will still be the case, but clever use of generic types and `keyof` can make developer experience much, much more simple. If we know (i.e. Typescript knows) that we're making a `GET /wp/v2/posts` call, it can then infer that `WpV2PostsGetArgs` is the correct argument type to use, and that `WpV2PostsGetResponse` is the response body type.

We do this by defining a mapping interface for each HTTP method whose members (keys) are the route path, and whose type is an object of the argument type and the response type, for example:

```ts
export interface WpV2GetRoutes {
  // ...
  '/wp/v2/posts': { args: WpV2PostsGetArgs; response: WpV2PostsGetResponse };
  // ...
}
```

These are then aggregated across all namespaces as **`KnownGetRoutes`**, **`KnownPostRoutes`**, and so on. These per-method aggregates are then combined into a singe type, as **`KnownRoutes`**. With that, indexing by the route results in the args/response type specific to that route, such that:

```ts
KnownRoutes['Get']['/wp/v2/posts']['args']; // for the argument type
KnownRoutes['Get']['/wp/v2/posts']['response']; // for the response type
```

gives us back the types `WpV2PostsGetArgs` and `WpV2PostsGetResponse`.

We can use this in the definition of the `get()` method of the client as follows:

```ts
export class Client<ROUTES extends Methodable = KnownRoutes> {
  // ...
  async get<
    R extends keyof ROUTES['Get'] = keyof ROUTES['Get'],
    E extends ROUTES['Get'][R] & ArgResponse = ROUTES['Get'][R],
    A extends E['args'] = E['args'],
    T extends E['response'] = E['response'],
  >(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.GET, route, args);
  }
  // ...
}
```

That’s a lot of generic specifiers, but in the typical case, you should never have to provide any of them yourself. **`R`** is the route/endpoint path, which can be any of the keys in the `ROUTES[‘Get’]` (aka `KnownGetRoutes`) mapping. Next is **`E`**, which is that route’s `{args; response;}` endpoint type, which we reach by indexing into the known get routes by the `R` value that is actually passed in the call. `E` isn’t used in the call directly, but is needed so we can get to the `args` and `repsonse` types in the next two generic types. The third is **`A`**, the argument type, which comes from getting the type of the `args` member of `E`. And finally comes **`T`** for the response type (“R” was already taken!), which comes from the `response` member of `E`.

With all of those generic types defined, we can now see:

```ts
  async get<...>(route: R, args?: A) {
    return this._call<T, R, A>(EndpointMethod.GET, route, args);
  }
```

…where the `route` passed to `get()` is one of the known route strings, and `args` _**must**_ match type `A`, which is the `{args;}` member associated with that specific route. Up until now, `T` hasn’t been used; it’s simply passed as a generic type to `_call()`, which uses it to define the type of the JSON response body, causing `get()` to have a return type of `Promise<Response<T>>`.

All in all, this means that as soon as Typescript sees:

```ts
const response = await client.get('/wp/v2/posts', ...
```

... it knows that the arguments to the call must be `WpV2PostsGetArgs`, and the type of `reponse` is `Response<WpV2PostsGetResponse>`, and `response.body` is `WpV2PostsGetResponse`.

## Customizing

If you have a use-case that involves a plugin/namespace/routes/endpoints that aren't already a part of this library, you can use the [`wordpressed` CLI](./cli/README.md) to help you generate your own custom types, and then provide those to your client instance.

> _NOTE: This mechanism is still a work in progress, what follows is mostly thoughts about how it **ought** to work._

Assuming you have a project and `wordpressed` is one of your dependencies, you should also have the `wordpressed` CLI in your `node_modules/.bin` directory, and accessible via `npx wordpressed`. Running something like:

```shell
$ mkdir -p src/wordpressed-types
$ npx wordpressed --host https://myhost.example.org --out-dir src/wordpressed-types
```

will create in `src/wordpressed-types` a complete set of route/endpoint types specific to the server you are planning to use. (Or at the very least, some subset of the types you know you are going to need.) These will be structured _**exactly**_ the same way as the types bundled with the wordpressed client, which makes them very easy to substitute in. Just import the main `KnownRoutes` from your custom-generated types, and pass it as the generic type parameter to the `Client` constructor (you don’t really need to rename the imported route type, I’ve only done it here to emphasize that they are custom):

```ts
import { Client } from 'wordpressed';
import { KnownRoutes as MyCustomRoutes } from './wordpresed-types';

const client = new Client<MyCustomRoutes>('http://myhost.example.org');
```

This will replace _**all**_ of the default types for every call into the client, giving you a client pre-typed for your particular use-case.

> _NOTE: If you use this option, please consider providing any new routes/endpoints/types back to this project; if you needed some as-yet untyped plugin, someone else probably needs it as well!_
