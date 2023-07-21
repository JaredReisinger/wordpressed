export interface KbMailerliteV1GetArgs {
}

export interface KbMailerliteV1GetGetArgsQueryargs {
}


export interface KbMailerliteV1GetGetArgs {
  /** The API Key for Mailerlite account. */
  apikey?: string;
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Actionable endpoint for api call. */
  endpoint?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Query Args for url. */
  queryargs?: KbMailerliteV1GetGetArgsQueryargs[];
  /** Limit results to those matching a string. */
  search?: string;
}


export interface KbMailerliteV1DeleteRoutes {
}

export interface KbMailerliteV1GetRoutes {
  '/kb-mailerlite/v1': KbMailerliteV1GetArgs;
  '/kb-mailerlite/v1/get': KbMailerliteV1GetGetArgs;
}

export interface KbMailerliteV1PatchRoutes {
}

export interface KbMailerliteV1PostRoutes {
}

export interface KbMailerliteV1PutRoutes {
}
