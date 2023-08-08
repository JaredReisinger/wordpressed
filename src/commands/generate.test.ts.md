# Snapshot report for `src/commands/generate.test.ts`

The actual snapshot is saved in `generate.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## handles known argument types

> Snapshot 1

    'index.ts'

> Snapshot 2

    `// GENERATED FILE -- DO NOT EDIT␊
    // WordPress REST API types␊
    ␊
    import * as Test from './test.js';␊
    ␊
    /**␊
     * All known DELETE routes for WordPress REST API.␊
     */␊
    export type KnownDeleteRoutes =␊
      Test.TestDeleteRoutes;␊
    ␊
    /**␊
     * All known GET routes for WordPress REST API.␊
     */␊
    export type KnownGetRoutes =␊
      Test.TestGetRoutes;␊
    ␊
    /**␊
     * All known PATCH routes for WordPress REST API.␊
     */␊
    export type KnownPatchRoutes =␊
      Test.TestPatchRoutes;␊
    ␊
    /**␊
     * All known POST routes for WordPress REST API.␊
     */␊
    export type KnownPostRoutes =␊
      Test.TestPostRoutes;␊
    ␊
    /**␊
     * All known PUT routes for WordPress REST API.␊
     */␊
    export type KnownPutRoutes =␊
      Test.TestPutRoutes;␊
    ␊
    /**␊
     * All known WordPress REST API methods/routes.␊
     */␊
    export interface KnownRoutes {␊
      Delete: KnownDeleteRoutes;␊
      Get: KnownGetRoutes;␊
      Patch: KnownPatchRoutes;␊
      Post: KnownPostRoutes;␊
      Put: KnownPutRoutes;␊
    }␊
    `

> Snapshot 3

    'test.ts'

> Snapshot 4

    `// GENERATED FILE -- DO NOT EDIT␊
    // WordPress REST API "test" namespace␊
    ␊
    export interface TestGetArgsSomeObject {␊
    }␊
    ␊
    /**␊
     * Arguments for \`/test\` route when calling GET method.␊
     */␊
    export interface TestGetArgs {␊
      /**␊
       * an array of intergers arg␊
       */␊
      someArrayOfIntegers?: number[];␊
      /**␊
       * an array of strings arg␊
       */␊
      someArrayOfStrings?: number[];␊
      /**␊
       * a(n) boolean arg␊
       */␊
      someBoolean?: boolean;␊
      /**␊
       * a(n) float arg␊
       */␊
      someFloat?: number;␊
      /**␊
       * a(n) int arg␊
       */␊
      someInt?: number;␊
      /**␊
       * a(n) integer arg␊
       */␊
      someInteger?: number;␊
      /**␊
       * a(n) null arg␊
       */␊
      someNull?: never;␊
      /**␊
       * a(n) number arg␊
       */␊
      someNumber?: number;␊
      /**␊
       * an object arg␊
       */␊
      someObject?: TestGetArgsSomeObject;␊
      /**␊
       * a(n) string arg␊
       */␊
      someString?: string;␊
      /**␊
       * a(n) text arg␊
       */␊
      someText?: string;␊
    }␊
    ␊
    /**␊
     * All "test" DELETE routes.␊
     */␊
    export interface TestDeleteRoutes {␊
    }␊
    ␊
    /**␊
     * All "test" GET routes.␊
     */␊
    export interface TestGetRoutes {␊
      '/test': TestGetArgs;␊
    }␊
    ␊
    /**␊
     * All "test" PATCH routes.␊
     */␊
    export interface TestPatchRoutes {␊
    }␊
    ␊
    /**␊
     * All "test" POST routes.␊
     */␊
    export interface TestPostRoutes {␊
    }␊
    ␊
    /**␊
     * All "test" PUT routes.␊
     */␊
    export interface TestPutRoutes {␊
    }␊
    ␊
    /**␊
     * All "test" WordPress REST API methods/routes.␊
     */␊
    export interface TestRoutes {␊
      Delete: TestDeleteRoutes;␊
      Get: TestGetRoutes;␊
      Patch: TestPatchRoutes;␊
      Post: TestPostRoutes;␊
      Put: TestPutRoutes;␊
    }␊
    `