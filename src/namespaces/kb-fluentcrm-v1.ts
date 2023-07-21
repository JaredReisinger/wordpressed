export interface KbFluentcrmV1GetArgs {
}

export interface KbFluentcrmV1GetGetArgs {
  /** Scope under which the request is made; determines fields present in response. */
  context?: string;
  /** Actionable endpoint for api call. */
  endpoint?: string;
  /** Current page of the collection. */
  page?: number;
  /** Maximum number of items to be returned in result set. */
  per_page?: number;
  /** Limit results to those matching a string. */
  search?: string;
}


export interface KbFluentcrmV1DeleteRoutes {
}

export interface KbFluentcrmV1GetRoutes {
  '/kb-fluentcrm/v1': KbFluentcrmV1GetArgs;
  '/kb-fluentcrm/v1/get': KbFluentcrmV1GetGetArgs;
}

export interface KbFluentcrmV1PatchRoutes {
}

export interface KbFluentcrmV1PostRoutes {
}

export interface KbFluentcrmV1PutRoutes {
}
