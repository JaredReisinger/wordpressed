// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "redirection/v1" namespace

import {
  RedirectionV1GetResponse,
  RedirectionV1404GetResponse,
  RedirectionV1Bulk404PBulkDeletePatchResponse,
  RedirectionV1Bulk404PBulkDeletePostResponse,
  RedirectionV1Bulk404PBulkDeletePutResponse,
  RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchResponse,
  RedirectionV1BulkGroupPBulkDeleteEnableDisablePostResponse,
  RedirectionV1BulkGroupPBulkDeleteEnableDisablePutResponse,
  RedirectionV1BulkLogPBulkDeletePatchResponse,
  RedirectionV1BulkLogPBulkDeletePostResponse,
  RedirectionV1BulkLogPBulkDeletePutResponse,
  RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchResponse,
  RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostResponse,
  RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPutResponse,
  RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetResponse,
  RedirectionV1GroupGetResponse,
  RedirectionV1GroupPatchResponse,
  RedirectionV1GroupPostResponse,
  RedirectionV1GroupPutResponse,
  RedirectionV1GroupPIdDPatchResponse,
  RedirectionV1GroupPIdDPostResponse,
  RedirectionV1GroupPIdDPutResponse,
  RedirectionV1ImportFilePGroupIdDPatchResponse,
  RedirectionV1ImportFilePGroupIdDPostResponse,
  RedirectionV1ImportFilePGroupIdDPutResponse,
  RedirectionV1ImportPluginGetResponse,
  RedirectionV1ImportPluginPatchResponse,
  RedirectionV1ImportPluginPostResponse,
  RedirectionV1ImportPluginPutResponse,
  RedirectionV1LogGetResponse,
  RedirectionV1PluginGetResponse,
  RedirectionV1PluginPatchResponse,
  RedirectionV1PluginPostResponse,
  RedirectionV1PluginPutResponse,
  RedirectionV1PluginDataPatchResponse,
  RedirectionV1PluginDataPostResponse,
  RedirectionV1PluginDataPutResponse,
  RedirectionV1PluginDeletePatchResponse,
  RedirectionV1PluginDeletePostResponse,
  RedirectionV1PluginDeletePutResponse,
  RedirectionV1PluginTestDeleteResponse,
  RedirectionV1PluginTestGetResponse,
  RedirectionV1PluginTestPatchResponse,
  RedirectionV1PluginTestPostResponse,
  RedirectionV1PluginTestPutResponse,
  RedirectionV1RedirectGetResponse,
  RedirectionV1RedirectPatchResponse,
  RedirectionV1RedirectPostResponse,
  RedirectionV1RedirectPutResponse,
  RedirectionV1RedirectPIdDPatchResponse,
  RedirectionV1RedirectPIdDPostResponse,
  RedirectionV1RedirectPIdDPutResponse,
  RedirectionV1RedirectPostGetResponse,
  RedirectionV1SettingGetResponse,
  RedirectionV1SettingPatchResponse,
  RedirectionV1SettingPostResponse,
  RedirectionV1SettingPutResponse,
} from './redirection-v1-responses.js';

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
  '/redirection/v1/plugin/test': {
    args: RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
    response: RedirectionV1PluginTestDeleteResponse;
  };
}

/**
 * All "redirection/v1" GET routes.
 */
export interface RedirectionV1GetRoutes {
  '/redirection/v1': {
    args: RedirectionV1GetArgs;
    response: RedirectionV1GetResponse;
  };
  '/redirection/v1/404': {
    args: RedirectionV1404GetArgs;
    response: RedirectionV1404GetResponse;
  };
  '/redirection/v1/export/(?P<module>1|2|3|all)/(?P<format>csv|apache|nginx|json)': {
    args: RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs;
    response: RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetResponse;
  };
  '/redirection/v1/group': {
    args: RedirectionV1GroupGetArgs;
    response: RedirectionV1GroupGetResponse;
  };
  '/redirection/v1/import/plugin': {
    args: RedirectionV1ImportPluginGetArgs;
    response: RedirectionV1ImportPluginGetResponse;
  };
  '/redirection/v1/log': {
    args: RedirectionV1LogGetArgs;
    response: RedirectionV1LogGetResponse;
  };
  '/redirection/v1/plugin': {
    args: RedirectionV1PluginGetArgs;
    response: RedirectionV1PluginGetResponse;
  };
  '/redirection/v1/plugin/test': {
    args: RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
    response: RedirectionV1PluginTestGetResponse;
  };
  '/redirection/v1/redirect': {
    args: RedirectionV1RedirectGetArgs;
    response: RedirectionV1RedirectGetResponse;
  };
  '/redirection/v1/redirect/post': {
    args: RedirectionV1RedirectPostGetArgs;
    response: RedirectionV1RedirectPostGetResponse;
  };
  '/redirection/v1/setting': {
    args: RedirectionV1SettingGetArgs;
    response: RedirectionV1SettingGetResponse;
  };
}

/**
 * All "redirection/v1" PATCH routes.
 */
export interface RedirectionV1PatchRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': {
    args: RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
    response: RedirectionV1Bulk404PBulkDeletePatchResponse;
  };
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': {
    args: RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
    response: RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchResponse;
  };
  '/redirection/v1/bulk/log/(?P<bulk>delete)': {
    args: RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
    response: RedirectionV1BulkLogPBulkDeletePatchResponse;
  };
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': {
    args: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
    response: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchResponse;
  };
  '/redirection/v1/group': {
    args: RedirectionV1GroupPatchPostPutArgs;
    response: RedirectionV1GroupPatchResponse;
  };
  '/redirection/v1/group/(?P<id>[\\d]+)': {
    args: RedirectionV1GroupPIdDPatchPostPutArgs;
    response: RedirectionV1GroupPIdDPatchResponse;
  };
  '/redirection/v1/import/file/(?P<group_id>\\d+)': {
    args: RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
    response: RedirectionV1ImportFilePGroupIdDPatchResponse;
  };
  '/redirection/v1/import/plugin': {
    args: RedirectionV1ImportPluginPatchPostPutArgs;
    response: RedirectionV1ImportPluginPatchResponse;
  };
  '/redirection/v1/plugin': {
    args: RedirectionV1PluginPatchPostPutArgs;
    response: RedirectionV1PluginPatchResponse;
  };
  '/redirection/v1/plugin/data': {
    args: RedirectionV1PluginDataPatchPostPutArgs;
    response: RedirectionV1PluginDataPatchResponse;
  };
  '/redirection/v1/plugin/delete': {
    args: RedirectionV1PluginDeletePatchPostPutArgs;
    response: RedirectionV1PluginDeletePatchResponse;
  };
  '/redirection/v1/plugin/test': {
    args: RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
    response: RedirectionV1PluginTestPatchResponse;
  };
  '/redirection/v1/redirect': {
    args: RedirectionV1RedirectPatchPostPutArgs;
    response: RedirectionV1RedirectPatchResponse;
  };
  '/redirection/v1/redirect/(?P<id>[\\d]+)': {
    args: RedirectionV1RedirectPIdDPatchPostPutArgs;
    response: RedirectionV1RedirectPIdDPatchResponse;
  };
  '/redirection/v1/setting': {
    args: RedirectionV1SettingPatchPostPutArgs;
    response: RedirectionV1SettingPatchResponse;
  };
}

/**
 * All "redirection/v1" POST routes.
 */
export interface RedirectionV1PostRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': {
    args: RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
    response: RedirectionV1Bulk404PBulkDeletePostResponse;
  };
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': {
    args: RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
    response: RedirectionV1BulkGroupPBulkDeleteEnableDisablePostResponse;
  };
  '/redirection/v1/bulk/log/(?P<bulk>delete)': {
    args: RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
    response: RedirectionV1BulkLogPBulkDeletePostResponse;
  };
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': {
    args: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
    response: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostResponse;
  };
  '/redirection/v1/group': {
    args: RedirectionV1GroupPatchPostPutArgs;
    response: RedirectionV1GroupPostResponse;
  };
  '/redirection/v1/group/(?P<id>[\\d]+)': {
    args: RedirectionV1GroupPIdDPatchPostPutArgs;
    response: RedirectionV1GroupPIdDPostResponse;
  };
  '/redirection/v1/import/file/(?P<group_id>\\d+)': {
    args: RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
    response: RedirectionV1ImportFilePGroupIdDPostResponse;
  };
  '/redirection/v1/import/plugin': {
    args: RedirectionV1ImportPluginPatchPostPutArgs;
    response: RedirectionV1ImportPluginPostResponse;
  };
  '/redirection/v1/plugin': {
    args: RedirectionV1PluginPatchPostPutArgs;
    response: RedirectionV1PluginPostResponse;
  };
  '/redirection/v1/plugin/data': {
    args: RedirectionV1PluginDataPatchPostPutArgs;
    response: RedirectionV1PluginDataPostResponse;
  };
  '/redirection/v1/plugin/delete': {
    args: RedirectionV1PluginDeletePatchPostPutArgs;
    response: RedirectionV1PluginDeletePostResponse;
  };
  '/redirection/v1/plugin/test': {
    args: RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
    response: RedirectionV1PluginTestPostResponse;
  };
  '/redirection/v1/redirect': {
    args: RedirectionV1RedirectPatchPostPutArgs;
    response: RedirectionV1RedirectPostResponse;
  };
  '/redirection/v1/redirect/(?P<id>[\\d]+)': {
    args: RedirectionV1RedirectPIdDPatchPostPutArgs;
    response: RedirectionV1RedirectPIdDPostResponse;
  };
  '/redirection/v1/setting': {
    args: RedirectionV1SettingPatchPostPutArgs;
    response: RedirectionV1SettingPostResponse;
  };
}

/**
 * All "redirection/v1" PUT routes.
 */
export interface RedirectionV1PutRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': {
    args: RedirectionV1Bulk404PBulkDeletePatchPostPutArgs;
    response: RedirectionV1Bulk404PBulkDeletePutResponse;
  };
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': {
    args: RedirectionV1BulkGroupPBulkDeleteEnableDisablePatchPostPutArgs;
    response: RedirectionV1BulkGroupPBulkDeleteEnableDisablePutResponse;
  };
  '/redirection/v1/bulk/log/(?P<bulk>delete)': {
    args: RedirectionV1BulkLogPBulkDeletePatchPostPutArgs;
    response: RedirectionV1BulkLogPBulkDeletePutResponse;
  };
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': {
    args: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPatchPostPutArgs;
    response: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPutResponse;
  };
  '/redirection/v1/group': {
    args: RedirectionV1GroupPatchPostPutArgs;
    response: RedirectionV1GroupPutResponse;
  };
  '/redirection/v1/group/(?P<id>[\\d]+)': {
    args: RedirectionV1GroupPIdDPatchPostPutArgs;
    response: RedirectionV1GroupPIdDPutResponse;
  };
  '/redirection/v1/import/file/(?P<group_id>\\d+)': {
    args: RedirectionV1ImportFilePGroupIdDPatchPostPutArgs;
    response: RedirectionV1ImportFilePGroupIdDPutResponse;
  };
  '/redirection/v1/import/plugin': {
    args: RedirectionV1ImportPluginPatchPostPutArgs;
    response: RedirectionV1ImportPluginPutResponse;
  };
  '/redirection/v1/plugin': {
    args: RedirectionV1PluginPatchPostPutArgs;
    response: RedirectionV1PluginPutResponse;
  };
  '/redirection/v1/plugin/data': {
    args: RedirectionV1PluginDataPatchPostPutArgs;
    response: RedirectionV1PluginDataPutResponse;
  };
  '/redirection/v1/plugin/delete': {
    args: RedirectionV1PluginDeletePatchPostPutArgs;
    response: RedirectionV1PluginDeletePutResponse;
  };
  '/redirection/v1/plugin/test': {
    args: RedirectionV1PluginTestDeleteGetPatchPostPutArgs;
    response: RedirectionV1PluginTestPutResponse;
  };
  '/redirection/v1/redirect': {
    args: RedirectionV1RedirectPatchPostPutArgs;
    response: RedirectionV1RedirectPutResponse;
  };
  '/redirection/v1/redirect/(?P<id>[\\d]+)': {
    args: RedirectionV1RedirectPIdDPatchPostPutArgs;
    response: RedirectionV1RedirectPIdDPutResponse;
  };
  '/redirection/v1/setting': {
    args: RedirectionV1SettingPatchPostPutArgs;
    response: RedirectionV1SettingPutResponse;
  };
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
