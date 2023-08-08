// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wp-block-editor/v1" namespace

/**
 * Arguments for `/wp-block-editor/v1` route when calling GET method.
 */
export interface WpBlockEditorV1GetArgs {}

/**
 * Arguments for `/wp-block-editor/v1/export` route when calling GET method.
 */
export interface WpBlockEditorV1ExportGetArgs {}

/**
 * Arguments for `/wp-block-editor/v1/url-details` route when calling GET method.
 */
export interface WpBlockEditorV1UrlDetailsGetArgs {
  /**
   * The URL to process. Constraints: format = uri.
   */
  url: string;
}

/**
 * All "wp-block-editor/v1" DELETE routes.
 */
export interface WpBlockEditorV1DeleteRoutes {}

/**
 * All "wp-block-editor/v1" GET routes.
 */
export interface WpBlockEditorV1GetRoutes {
  '/wp-block-editor/v1': WpBlockEditorV1GetArgs;
  '/wp-block-editor/v1/export': WpBlockEditorV1ExportGetArgs;
  '/wp-block-editor/v1/url-details': WpBlockEditorV1UrlDetailsGetArgs;
}

/**
 * All "wp-block-editor/v1" PATCH routes.
 */
export interface WpBlockEditorV1PatchRoutes {}

/**
 * All "wp-block-editor/v1" POST routes.
 */
export interface WpBlockEditorV1PostRoutes {}

/**
 * All "wp-block-editor/v1" PUT routes.
 */
export interface WpBlockEditorV1PutRoutes {}

/**
 * All "wp-block-editor/v1" WordPress REST API methods/routes.
 */
export interface WpBlockEditorV1Routes {
  Delete: WpBlockEditorV1DeleteRoutes;
  Get: WpBlockEditorV1GetRoutes;
  Patch: WpBlockEditorV1PatchRoutes;
  Post: WpBlockEditorV1PostRoutes;
  Put: WpBlockEditorV1PutRoutes;
}
