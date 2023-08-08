// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc-paypal/v1" namespace

/**
 * Arguments for `/wc-paypal/v1` route when calling GET method.
 */
export interface WcPaypalV1GetArgs {}

/**
 * Arguments for `/wc-paypal/v1/onboarding/get-params` route when calling POST method.
 */
export interface WcPaypalV1OnboardingGetParamsPostArgs {}

/**
 * Arguments for `/wc-paypal/v1/onboarding/get-status` route when calling GET method.
 */
export interface WcPaypalV1OnboardingGetStatusGetArgs {}

/**
 * Arguments for `/wc-paypal/v1/onboarding/set-credentials` route when calling POST method.
 */
export interface WcPaypalV1OnboardingSetCredentialsPostArgs {}

/**
 * All "wc-paypal/v1" DELETE routes.
 */
export interface WcPaypalV1DeleteRoutes {}

/**
 * All "wc-paypal/v1" GET routes.
 */
export interface WcPaypalV1GetRoutes {
  '/wc-paypal/v1': WcPaypalV1GetArgs;
  '/wc-paypal/v1/onboarding/get-status': WcPaypalV1OnboardingGetStatusGetArgs;
}

/**
 * All "wc-paypal/v1" PATCH routes.
 */
export interface WcPaypalV1PatchRoutes {}

/**
 * All "wc-paypal/v1" POST routes.
 */
export interface WcPaypalV1PostRoutes {
  '/wc-paypal/v1/onboarding/get-params': WcPaypalV1OnboardingGetParamsPostArgs;
  '/wc-paypal/v1/onboarding/set-credentials': WcPaypalV1OnboardingSetCredentialsPostArgs;
}

/**
 * All "wc-paypal/v1" PUT routes.
 */
export interface WcPaypalV1PutRoutes {}

/**
 * All "wc-paypal/v1" WordPress REST API methods/routes.
 */
export interface WcPaypalV1Routes {
  Delete: WcPaypalV1DeleteRoutes;
  Get: WcPaypalV1GetRoutes;
  Patch: WcPaypalV1PatchRoutes;
  Post: WcPaypalV1PostRoutes;
  Put: WcPaypalV1PutRoutes;
}
