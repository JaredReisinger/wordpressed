export interface WpgmzaV1GetArgs {}

export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDGetArgs {}

export interface WpgmzaV1FeaturesPolygonsPolylinesCirclesRectanglesPointlabelsDBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs {}

export interface WpgmzaV1DatatablesGetArgs {}

export interface WpgmzaV1DatatablesPostArgs {}

export interface WpgmzaV1DatatablesBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1DecompressGetArgs {}

export interface WpgmzaV1DecompressBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1GeocodeCacheGetArgs {}

export interface WpgmzaV1GeocodeCacheBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1MapsDGetArgs {}

export interface WpgmzaV1MarkersGetArgs {}

export interface WpgmzaV1MarkersDDeletePostArgs {}

export interface WpgmzaV1MarkersDGetArgs {}

export interface WpgmzaV1MarkersBase64AZaZ0903AZaZ0903GetArgs {}

export interface WpgmzaV1DeleteRoutes {
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
  '/wpgmza/v1/markers(\\/\\d+)?': WpgmzaV1MarkersDDeletePostArgs;
}

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

export interface WpgmzaV1PatchRoutes {}

export interface WpgmzaV1PostRoutes {
  '/wpgmza/v1/(polygons|polylines|circles|rectangles|pointlabels)(\\/\\d+)?': WpgmzaV1PolygonsPolylinesCirclesRectanglesPointlabelsDDeletePostArgs;
  '/wpgmza/v1/datatables': WpgmzaV1DatatablesPostArgs;
  '/wpgmza/v1/markers(\\/\\d+)?': WpgmzaV1MarkersDDeletePostArgs;
}

export interface WpgmzaV1PutRoutes {}
