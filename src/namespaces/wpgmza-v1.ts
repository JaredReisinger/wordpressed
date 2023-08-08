// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wpgmza/v1" namespace

import {
  WpgmzaV1GetResponse,
  WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetResponse,
  WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetResponse,
  WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeleteResponse,
  WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDPostResponse,
  WpgmzaV1DatatablesGetResponse,
  WpgmzaV1DatatablesPostResponse,
  WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetResponse,
  WpgmzaV1DecompressGetResponse,
  WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetResponse,
  WpgmzaV1GeocodeCacheGetResponse,
  WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetResponse,
  WpgmzaV1MapsDGetResponse,
  WpgmzaV1MarkersGetResponse,
  WpgmzaV1MarkersDDeleteResponse,
  WpgmzaV1MarkersDPostResponse,
  WpgmzaV1MarkersDGetResponse,
  WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetResponse,
} from './wpgmza-v1-responses.js';

/**
 * Arguments for `/wpgmza/v1` route when calling GET method.
 */
export interface WpgmzaV1GetArgs {}

/**
 * Arguments for `/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\/\d+)?` route when calling GET method.
 */
export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetArgs {}

/**
 * Arguments for `/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\/\d+)?/base64[A-Za-z0-9+\- ]+(={0,3})?(\/[A-Za-z0-9+\- ]+(={0,3})?)?` route when calling GET method.
 */
export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetArgs {}

/**
 * Arguments for `/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\/\d+)?` route when calling DELETE and POST methods.
 */
export interface WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs {}

/**
 * Arguments for `/wpgmza/v1/datatables` route when calling GET method.
 */
export interface WpgmzaV1DatatablesGetArgs {}

/**
 * Arguments for `/wpgmza/v1/datatables` route when calling POST method.
 */
export interface WpgmzaV1DatatablesPostArgs {}

/**
 * Arguments for `/wpgmza/v1/datatables/base64[A-Za-z0-9+\- ]+(={0,3})?(\/[A-Za-z0-9+\- ]+(={0,3})?)?` route when calling GET method.
 */
export interface WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetArgs {}

/**
 * Arguments for `/wpgmza/v1/decompress` route when calling GET method.
 */
export interface WpgmzaV1DecompressGetArgs {}

/**
 * Arguments for `/wpgmza/v1/decompress/base64[A-Za-z0-9+\- ]+(={0,3})?(\/[A-Za-z0-9+\- ]+(={0,3})?)?` route when calling GET method.
 */
export interface WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetArgs {}

/**
 * Arguments for `/wpgmza/v1/geocode-cache` route when calling GET method.
 */
export interface WpgmzaV1GeocodeCacheGetArgs {}

/**
 * Arguments for `/wpgmza/v1/geocode-cache/base64[A-Za-z0-9+\- ]+(={0,3})?(\/[A-Za-z0-9+\- ]+(={0,3})?)?` route when calling GET method.
 */
export interface WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetArgs {}

/**
 * Arguments for `/wpgmza/v1/maps(\/\d+)?` route when calling GET method.
 */
export interface WpgmzaV1MapsDGetArgs {}

/**
 * Arguments for `/wpgmza/v1/markers` route when calling GET method.
 */
export interface WpgmzaV1MarkersGetArgs {}

/**
 * Arguments for `/wpgmza/v1/markers(\/\d+)?` route when calling DELETE and POST methods.
 */
export interface WpgmzaV1MarkersDDeletePostArgs {}

/**
 * Arguments for `/wpgmza/v1/markers/\d+` route when calling GET method.
 */
export interface WpgmzaV1MarkersDGetArgs {}

/**
 * Arguments for `/wpgmza/v1/markers/base64[A-Za-z0-9+\- ]+(={0,3})?(\/[A-Za-z0-9+\- ]+(={0,3})?)?` route when calling GET method.
 */
export interface WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetArgs {}

/**
 * All "wpgmza/v1" DELETE routes.
 */
export interface WpgmzaV1DeleteRoutes {
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': {
    args: WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
    response: WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeleteResponse;
  };
  '/wpgmza/v1/markers(\\/\\d+)?': {
    args: WpgmzaV1MarkersDDeletePostArgs;
    response: WpgmzaV1MarkersDDeleteResponse;
  };
}

/**
 * All "wpgmza/v1" GET routes.
 */
export interface WpgmzaV1GetRoutes {
  '/wpgmza/v1': {
    args: WpgmzaV1GetArgs;
    response: WpgmzaV1GetResponse;
  };
  '/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': {
    args: WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetArgs;
    response: WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetResponse;
  };
  '/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': {
    args: WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetArgs;
    response: WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetResponse;
  };
  '/wpgmza/v1/datatables': {
    args: WpgmzaV1DatatablesGetArgs;
    response: WpgmzaV1DatatablesGetResponse;
  };
  '/wpgmza/v1/datatables/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': {
    args: WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetArgs;
    response: WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetResponse;
  };
  '/wpgmza/v1/decompress': {
    args: WpgmzaV1DecompressGetArgs;
    response: WpgmzaV1DecompressGetResponse;
  };
  '/wpgmza/v1/decompress/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': {
    args: WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetArgs;
    response: WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetResponse;
  };
  '/wpgmza/v1/geocode-cache': {
    args: WpgmzaV1GeocodeCacheGetArgs;
    response: WpgmzaV1GeocodeCacheGetResponse;
  };
  '/wpgmza/v1/geocode-cache/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': {
    args: WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetArgs;
    response: WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetResponse;
  };
  '/wpgmza/v1/maps(\\/\\d+)?': {
    args: WpgmzaV1MapsDGetArgs;
    response: WpgmzaV1MapsDGetResponse;
  };
  '/wpgmza/v1/markers': {
    args: WpgmzaV1MarkersGetArgs;
    response: WpgmzaV1MarkersGetResponse;
  };
  '/wpgmza/v1/markers/\\d+': {
    args: WpgmzaV1MarkersDGetArgs;
    response: WpgmzaV1MarkersDGetResponse;
  };
  '/wpgmza/v1/markers/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': {
    args: WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetArgs;
    response: WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetResponse;
  };
}

/**
 * All "wpgmza/v1" PATCH routes.
 */
export interface WpgmzaV1PatchRoutes {}

/**
 * All "wpgmza/v1" POST routes.
 */
export interface WpgmzaV1PostRoutes {
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': {
    args: WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
    response: WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDPostResponse;
  };
  '/wpgmza/v1/datatables': {
    args: WpgmzaV1DatatablesPostArgs;
    response: WpgmzaV1DatatablesPostResponse;
  };
  '/wpgmza/v1/markers(\\/\\d+)?': {
    args: WpgmzaV1MarkersDDeletePostArgs;
    response: WpgmzaV1MarkersDPostResponse;
  };
}

/**
 * All "wpgmza/v1" PUT routes.
 */
export interface WpgmzaV1PutRoutes {}

/**
 * All "wpgmza/v1" WordPress REST API methods/routes.
 */
export interface WpgmzaV1Routes {
  Delete: WpgmzaV1DeleteRoutes;
  Get: WpgmzaV1GetRoutes;
  Patch: WpgmzaV1PatchRoutes;
  Post: WpgmzaV1PostRoutes;
  Put: WpgmzaV1PutRoutes;
}
