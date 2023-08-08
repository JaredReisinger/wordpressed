// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wpgmza/v1" namespace

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
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
  '/wpgmza/v1/markers(\\/\\d+)?': WpgmzaV1MarkersDDeletePostArgs;
}

/**
 * All "wpgmza/v1" GET routes.
 */
export interface WpgmzaV1GetRoutes {
  '/wpgmza/v1': WpgmzaV1GetArgs;
  '/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetArgs;
  '/wpgmza/v1/(features|polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetArgs;
  '/wpgmza/v1/datatables': WpgmzaV1DatatablesGetArgs;
  '/wpgmza/v1/datatables/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetArgs;
  '/wpgmza/v1/decompress': WpgmzaV1DecompressGetArgs;
  '/wpgmza/v1/decompress/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetArgs;
  '/wpgmza/v1/geocode-cache': WpgmzaV1GeocodeCacheGetArgs;
  '/wpgmza/v1/geocode-cache/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetArgs;
  '/wpgmza/v1/maps(\\/\\d+)?': WpgmzaV1MapsDGetArgs;
  '/wpgmza/v1/markers': WpgmzaV1MarkersGetArgs;
  '/wpgmza/v1/markers/\\d+': WpgmzaV1MarkersDGetArgs;
  '/wpgmza/v1/markers/base64[A-Za-z0-9+\\- ]+(={0,3})?(\\/[A-Za-z0-9+\\- ]+(={0,3})?)?': WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetArgs;
}

/**
 * All "wpgmza/v1" PATCH routes.
 */
export interface WpgmzaV1PatchRoutes {}

/**
 * All "wpgmza/v1" POST routes.
 */
export interface WpgmzaV1PostRoutes {
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
  '/wpgmza/v1/datatables': WpgmzaV1DatatablesPostArgs;
  '/wpgmza/v1/markers(\\/\\d+)?': WpgmzaV1MarkersDDeletePostArgs;
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
