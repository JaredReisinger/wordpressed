export interface WpBlockEditorV1GetArgs {
}

export interface WpBlockEditorV1ExportGetArgs {
}

export interface WpBlockEditorV1UrlDetailsGetArgs {
  /** The URL to process. */
  url: string;
}


export interface WpBlockEditorV1DeleteRoutes {
}

export interface WpBlockEditorV1GetRoutes {
  '/wp-block-editor/v1': WpBlockEditorV1GetArgs;
  '/wp-block-editor/v1/export': WpBlockEditorV1ExportGetArgs;
  '/wp-block-editor/v1/url-details': WpBlockEditorV1UrlDetailsGetArgs;
}

export interface WpBlockEditorV1PatchRoutes {
}

export interface WpBlockEditorV1PostRoutes {
}

export interface WpBlockEditorV1PutRoutes {
}

export interface WpBlockEditorV1Routes {
  Delete: WpBlockEditorV1DeleteRoutes;
  Get: WpBlockEditorV1GetRoutes;
  Patch: WpBlockEditorV1PatchRoutes;
  Post: WpBlockEditorV1PostRoutes;
  Put: WpBlockEditorV1PutRoutes;
}
