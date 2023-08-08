// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack/v4/blaze" namespace

import {
  JetpackV4BlazeGetResponse,
  JetpackV4BlazeDashboardGetResponse,
  JetpackV4BlazeEligibilityGetResponse,
} from './jetpack-v4-blaze-responses.js';

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
  '/jetpack/v4/blaze': {
    args: JetpackV4BlazeGetArgs;
    response: JetpackV4BlazeGetResponse;
  };
  '/jetpack/v4/blaze/dashboard': {
    args: JetpackV4BlazeDashboardGetArgs;
    response: JetpackV4BlazeDashboardGetResponse;
  };
  '/jetpack/v4/blaze/eligibility': {
    args: JetpackV4BlazeEligibilityGetArgs;
    response: JetpackV4BlazeEligibilityGetResponse;
  };
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
