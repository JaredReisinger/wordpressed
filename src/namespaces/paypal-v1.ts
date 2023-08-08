// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "paypal/v1" namespace

/**
 * Arguments for `/paypal/v1` route when calling GET method.
 */
export interface PaypalV1GetArgs {}

/**
 * Arguments for `/paypal/v1/incoming` route when calling POST method.
 */
export interface PaypalV1IncomingPostArgs {}

/**
 * All "paypal/v1" DELETE routes.
 */
export interface PaypalV1DeleteRoutes {}

/**
 * All "paypal/v1" GET routes.
 */
export interface PaypalV1GetRoutes {
  '/paypal/v1': PaypalV1GetArgs;
}

/**
 * All "paypal/v1" PATCH routes.
 */
export interface PaypalV1PatchRoutes {}

/**
 * All "paypal/v1" POST routes.
 */
export interface PaypalV1PostRoutes {
  '/paypal/v1/incoming': PaypalV1IncomingPostArgs;
}

/**
 * All "paypal/v1" PUT routes.
 */
export interface PaypalV1PutRoutes {}

/**
 * All "paypal/v1" WordPress REST API methods/routes.
 */
export interface PaypalV1Routes {
  Delete: PaypalV1DeleteRoutes;
  Get: PaypalV1GetRoutes;
  Patch: PaypalV1PatchRoutes;
  Post: PaypalV1PostRoutes;
  Put: PaypalV1PutRoutes;
}
