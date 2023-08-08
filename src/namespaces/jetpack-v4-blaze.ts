// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack/v4/blaze" namespace

/**
 * Arguments for `/jetpack/v4/blaze` route when calling GET method.
 */
export interface JetpackV4BlazeGetArgs {}

/**
 * Arguments for `/jetpack/v4/blaze/dashboard` route when calling GET method.
 */
export interface JetpackV4BlazeDashboardGetArgs {}

/**
 * Arguments for `/jetpack/v4/blaze/eligibility` route when calling GET method.
 */
export interface JetpackV4BlazeEligibilityGetArgs {}

/**
 * All "jetpack/v4/blaze" DELETE routes.
 */
export interface JetpackV4BlazeDeleteRoutes {}

/**
 * All "jetpack/v4/blaze" GET routes.
 */
export interface JetpackV4BlazeGetRoutes {
  '/jetpack/v4/blaze': JetpackV4BlazeGetArgs;
  '/jetpack/v4/blaze/dashboard': JetpackV4BlazeDashboardGetArgs;
  '/jetpack/v4/blaze/eligibility': JetpackV4BlazeEligibilityGetArgs;
}

/**
 * All "jetpack/v4/blaze" PATCH routes.
 */
export interface JetpackV4BlazePatchRoutes {}

/**
 * All "jetpack/v4/blaze" POST routes.
 */
export interface JetpackV4BlazePostRoutes {}

/**
 * All "jetpack/v4/blaze" PUT routes.
 */
export interface JetpackV4BlazePutRoutes {}

/**
 * All "jetpack/v4/blaze" WordPress REST API methods/routes.
 */
export interface JetpackV4BlazeRoutes {
  Delete: JetpackV4BlazeDeleteRoutes;
  Get: JetpackV4BlazeGetRoutes;
  Patch: JetpackV4BlazePatchRoutes;
  Post: JetpackV4BlazePostRoutes;
  Put: JetpackV4BlazePutRoutes;
}
