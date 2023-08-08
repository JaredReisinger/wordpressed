// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "redirection/v1" namespace

/**
 * Arguments for `/redirection/v1` route when calling GET method.
 */
export interface RedirectionV1GetArgs {}

/**
 * Arguments for `/redirection/v1/404` route when calling GET method.
 */
export interface RedirectionV1404GetArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Field to order results by
   */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

export interface RedirectionV1Bulk404PBulkDeletePatchPostPutArgsItems {}

/**
 * Arguments for `/redirection/v1/bulk/404/(?P<bulk>delete)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1Bulk404PBulkDeletePatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Comma separated list of item IDs to perform action on
   */
  items?: RedirectionV1Bulk404PBulkDeletePatchPostPutArgsItems[];
  /**
   * Field to order results by
   */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgsItems {}

/**
 * Arguments for `/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Comma separated list of item IDs to perform action on
   */
  items?: RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgsItems[];
  /**
   * Field to order results by
   */
  orderby?: 'name' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

export interface RedirectionV1BulkLogPBulkDeletePatchPostPutArgsItems {}

/**
 * Arguments for `/redirection/v1/bulk/log/(?P<bulk>delete)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1BulkLogPBulkDeletePatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Comma separated list of item IDs to perform action on
   */
  items?: RedirectionV1BulkLogPBulkDeletePatchPostPutArgsItems[];
  /**
   * Field to order results by
   */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgsItems {}

/**
 * Arguments for `/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Apply bulk action globally, as per filters
   */
  global?: boolean;
  /**
   * Array of IDs to perform action on
   */
  items?: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgsItems[];
  /**
   * Field to order results by
   */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/export/(?P<module>1|2|3|all)/(?P<format>csv|apache|nginx|json)` route when calling GET method.
 */
export interface RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs {}

/**
 * Arguments for `/redirection/v1/group` route when calling GET method.
 */
export interface RedirectionV1GroupGetArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Field to order results by
   */
  orderby?: 'name' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/group` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1GroupPatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Module ID Constraints: minimum = 0, maximum = 3.
   */
  moduleId: number;
  /**
   * Group name
   */
  name: string;
  /**
   * Field to order results by
   */
  orderby?: 'name' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/group/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1GroupPIdDPatchPostPutArgs {
  /**
   * Module ID Constraints: minimum = 0, maximum = 3.
   */
  moduleId: number;
  /**
   * Group name
   */
  name: string;
}

/**
 * Arguments for `/redirection/v1/import/file/(?P<group_id>\d+)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1ImportFilePGroupIdDPatchPostPutArgs {}

/**
 * Arguments for `/redirection/v1/import/plugin` route when calling GET method.
 */
export interface RedirectionV1ImportPluginGetArgs {}

/**
 * Arguments for `/redirection/v1/import/plugin` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1ImportPluginPatchPostPutArgs {}

/**
 * Arguments for `/redirection/v1/log` route when calling GET method.
 */
export interface RedirectionV1LogGetArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Field to order results by
   */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/plugin` route when calling GET method.
 */
export interface RedirectionV1PluginGetArgs {}

/**
 * Arguments for `/redirection/v1/plugin` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1PluginPatchPostPutArgs {
  /**
   * Name
   */
  name?: string;
  /**
   * Value
   */
  value?: string;
}

/**
 * Arguments for `/redirection/v1/plugin/data` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1PluginDataPatchPostPutArgs {
  /**
   * Upgrade parameter
   */
  upgrade?: 'stop' | 'skip' | 'retry';
}

/**
 * Arguments for `/redirection/v1/plugin/delete` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1PluginDeletePatchPostPutArgs {}

/**
 * Arguments for `/redirection/v1/plugin/test` route when calling DELETE, GET, PATCH, POST, and PUT methods.
 */
export interface RedirectionV1PluginTestDeleteGetPatchPostPutArgs {}

/**
 * Arguments for `/redirection/v1/redirect` route when calling GET method.
 */
export interface RedirectionV1RedirectGetArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Field to order results by
   */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/redirect` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1RedirectPatchPostPutArgs {
  /**
   * Direction of ordered results
   * @default "desc"
   */
  direction?: 'asc' | 'desc';
  /**
   * Field to order results by
   */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /**
   * Page offset Constraints: minimum = 0.
   * @default 0
   */
  page?: number;
  /**
   * Number of results per page Constraints: minimum = 5, maximum = 200.
   * @default 25
   */
  per_page?: number;
}

/**
 * Arguments for `/redirection/v1/redirect/(?P<id>[\d]+)` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1RedirectPIdDPatchPostPutArgs {}

/**
 * Arguments for `/redirection/v1/redirect/post` route when calling GET method.
 */
export interface RedirectionV1RedirectPostGetArgs {
  /**
   * Text to match
   */
  text: string;
}

/**
 * Arguments for `/redirection/v1/setting` route when calling GET method.
 */
export interface RedirectionV1SettingGetArgs {}

/**
 * Arguments for `/redirection/v1/setting` route when calling PATCH, POST, and PUT methods.
 */
export interface RedirectionV1SettingPatchPostPutArgs {}

/**
 * All "redirection/v1" DELETE routes.
 */
export interface RedirectionV1DeleteRoutes {
  '/redirection/v1/plugin/test': RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
}

/**
 * All "redirection/v1" GET routes.
 */
export interface RedirectionV1GetRoutes {
  '/redirection/v1': RedirectionV1GetArgs;
  '/redirection/v1/404': RedirectionV1404GetArgs;
  '/redirection/v1/export/(?P<module>1|2|3|all)/(?P<format>csv|apache|nginx|json)': RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs;
  '/redirection/v1/group': RedirectionV1GroupGetArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginGetArgs;
  '/redirection/v1/log': RedirectionV1LogGetArgs;
  '/redirection/v1/plugin': RedirectionV1PluginGetArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectGetArgs;
  '/redirection/v1/redirect/post': RedirectionV1RedirectPostGetArgs;
  '/redirection/v1/setting': RedirectionV1SettingGetArgs;
}

/**
 * All "redirection/v1" PATCH routes.
 */
export interface RedirectionV1PatchRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
  '/redirection/v1/group': RedirectionV1GroupPatchPostPutArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPatchPostPutArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPatchPostPutArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPatchPostPutArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPatchPostPutArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePatchPostPutArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPatchPostPutArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPatchPostPutArgs;
  '/redirection/v1/setting': RedirectionV1SettingPatchPostPutArgs;
}

/**
 * All "redirection/v1" POST routes.
 */
export interface RedirectionV1PostRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
  '/redirection/v1/group': RedirectionV1GroupPatchPostPutArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPatchPostPutArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPatchPostPutArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPatchPostPutArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPatchPostPutArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePatchPostPutArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPatchPostPutArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPatchPostPutArgs;
  '/redirection/v1/setting': RedirectionV1SettingPatchPostPutArgs;
}

/**
 * All "redirection/v1" PUT routes.
 */
export interface RedirectionV1PutRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
  '/redirection/v1/group': RedirectionV1GroupPatchPostPutArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPatchPostPutArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPatchPostPutArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPatchPostPutArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPatchPostPutArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePatchPostPutArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPatchPostPutArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPatchPostPutArgs;
  '/redirection/v1/setting': RedirectionV1SettingPatchPostPutArgs;
}

/**
 * All "redirection/v1" WordPress REST API methods/routes.
 */
export interface RedirectionV1Routes {
  Delete: RedirectionV1DeleteRoutes;
  Get: RedirectionV1GetRoutes;
  Patch: RedirectionV1PatchRoutes;
  Post: RedirectionV1PostRoutes;
  Put: RedirectionV1PutRoutes;
}
