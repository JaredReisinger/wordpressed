// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "spectra/v1" namespace

import {
  SpectraV1GetResponse,
  SpectraV1AllTaxonomyGetResponse,
} from './spectra-v1-responses.js';

/**
 * Arguments for `/spectra/v1` route when calling GET method.
 */
export interface SpectraV1GetArgs {}

/**
 * Arguments for `/spectra/v1/all_taxonomy` route when calling GET method.
 */
export interface SpectraV1AllTaxonomyGetArgs {}

/**
 * All "spectra/v1" DELETE routes.
 */
export interface SpectraV1DeleteRoutes {}

/**
 * All "spectra/v1" GET routes.
 */
export interface SpectraV1GetRoutes {
  '/spectra/v1': {
    args: SpectraV1GetArgs;
    response: SpectraV1GetResponse;
  };
  '/spectra/v1/all_taxonomy': {
    args: SpectraV1AllTaxonomyGetArgs;
    response: SpectraV1AllTaxonomyGetResponse;
  };
}

/**
 * All "spectra/v1" PATCH routes.
 */
export interface SpectraV1PatchRoutes {}

/**
 * All "spectra/v1" POST routes.
 */
export interface SpectraV1PostRoutes {}

/**
 * All "spectra/v1" PUT routes.
 */
export interface SpectraV1PutRoutes {}

/**
 * All "spectra/v1" WordPress REST API methods/routes.
 */
export interface SpectraV1Routes {
  Delete: SpectraV1DeleteRoutes;
  Get: SpectraV1GetRoutes;
  Patch: SpectraV1PatchRoutes;
  Post: SpectraV1PostRoutes;
  Put: SpectraV1PutRoutes;
}
