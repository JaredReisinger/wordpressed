export interface RedirectionV1GetArgs {}

export interface RedirectionV1404GetArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1Bulk404PBulkDeletePostPutPatchArgsItems {}

export interface RedirectionV1Bulk404PBulkDeletePostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1Bulk404PBulkDeletePostPutPatchArgsItems[];
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgsItems {}

export interface RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgsItems[];
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1BulkLogPBulkDeletePostPutPatchArgsItems {}

export interface RedirectionV1BulkLogPBulkDeletePostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Comma separated list of item IDs to perform action on */
  items?: RedirectionV1BulkLogPBulkDeletePostPutPatchArgsItems[];
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgsItems {}

export interface RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Apply bulk action globally, as per filters */
  global?: boolean;
  /** Array of IDs to perform action on */
  items?: RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgsItems[];
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs {}

export interface RedirectionV1GroupGetArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1GroupPostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Module ID */
  moduleId: number;
  /** Group name */
  name: string;
  /** Field to order results by */
  orderby?: 'name' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1GroupPIdDPostPutPatchArgs {
  /** Module ID */
  moduleId: number;
  /** Group name */
  name: string;
}

export interface RedirectionV1ImportFilePGroupIdDPostPutPatchArgs {}

export interface RedirectionV1ImportPluginGetArgs {}

export interface RedirectionV1ImportPluginPostPutPatchArgs {}

export interface RedirectionV1LogGetArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Field to order results by */
  orderby?: 'url' | 'ip' | 'total' | 'count' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1PluginGetArgs {}

export interface RedirectionV1PluginPostPutPatchArgs {
  /** Name */
  name?: string;
  /** Value */
  value?: string;
}

export interface RedirectionV1PluginDataPostPutPatchArgs {
  /** Upgrade parameter */
  upgrade?: 'stop' | 'skip' | 'retry';
}

export interface RedirectionV1PluginDeletePostPutPatchArgs {}

export interface RedirectionV1PluginTestGetPostPutPatchDeleteArgs {}

export interface RedirectionV1RedirectGetArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1RedirectPostPutPatchArgs {
  /** Direction of ordered results */
  direction?: 'asc' | 'desc';
  /** Field to order results by */
  orderby?: 'source' | 'last_count' | 'last_access' | 'position' | 'id' | '';
  /** Page offset */
  page?: number;
  /** Number of results per page */
  per_page?: number;
}

export interface RedirectionV1RedirectPIdDPostPutPatchArgs {}

export interface RedirectionV1RedirectPostGetArgs {
  /** Text to match */
  text: string;
}

export interface RedirectionV1SettingGetArgs {}

export interface RedirectionV1SettingPostPutPatchArgs {}

export interface RedirectionV1DeleteRoutes {
  '/redirection/v1/plugin/test': RedirectionV1PluginTestGetPostPutPatchDeleteArgs;
}

export interface RedirectionV1GetRoutes {
  '/redirection/v1': RedirectionV1GetArgs;
  '/redirection/v1/404': RedirectionV1404GetArgs;
  '/redirection/v1/export/(?P<module>1|2|3|all)/(?P<format>csv|apache|nginx|json)': RedirectionV1ExportPModule123AllPFormatCsvApacheNginxJsonGetArgs;
  '/redirection/v1/group': RedirectionV1GroupGetArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginGetArgs;
  '/redirection/v1/log': RedirectionV1LogGetArgs;
  '/redirection/v1/plugin': RedirectionV1PluginGetArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestGetPostPutPatchDeleteArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectGetArgs;
  '/redirection/v1/redirect/post': RedirectionV1RedirectPostGetArgs;
  '/redirection/v1/setting': RedirectionV1SettingGetArgs;
}

export interface RedirectionV1PatchRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgs;
  '/redirection/v1/group': RedirectionV1GroupPostPutPatchArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPostPutPatchArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPostPutPatchArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPostPutPatchArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPostPutPatchArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPostPutPatchArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePostPutPatchArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestGetPostPutPatchDeleteArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPostPutPatchArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPostPutPatchArgs;
  '/redirection/v1/setting': RedirectionV1SettingPostPutPatchArgs;
}

export interface RedirectionV1PostRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgs;
  '/redirection/v1/group': RedirectionV1GroupPostPutPatchArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPostPutPatchArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPostPutPatchArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPostPutPatchArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPostPutPatchArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPostPutPatchArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePostPutPatchArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestGetPostPutPatchDeleteArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPostPutPatchArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPostPutPatchArgs;
  '/redirection/v1/setting': RedirectionV1SettingPostPutPatchArgs;
}

export interface RedirectionV1PutRoutes {
  '/redirection/v1/bulk/404/(?P<bulk>delete)': RedirectionV1Bulk404PBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/group/(?P<bulk>delete|enable|disable)': RedirectionV1BulkGroupPBulkDeleteEnableDisablePostPutPatchArgs;
  '/redirection/v1/bulk/log/(?P<bulk>delete)': RedirectionV1BulkLogPBulkDeletePostPutPatchArgs;
  '/redirection/v1/bulk/redirect/(?P<bulk>delete|enable|disable|reset)': RedirectionV1BulkRedirectPBulkDeleteEnableDisableResetPostPutPatchArgs;
  '/redirection/v1/group': RedirectionV1GroupPostPutPatchArgs;
  '/redirection/v1/group/(?P<id>[\\d]+)': RedirectionV1GroupPIdDPostPutPatchArgs;
  '/redirection/v1/import/file/(?P<group_id>\\d+)': RedirectionV1ImportFilePGroupIdDPostPutPatchArgs;
  '/redirection/v1/import/plugin': RedirectionV1ImportPluginPostPutPatchArgs;
  '/redirection/v1/plugin': RedirectionV1PluginPostPutPatchArgs;
  '/redirection/v1/plugin/data': RedirectionV1PluginDataPostPutPatchArgs;
  '/redirection/v1/plugin/delete': RedirectionV1PluginDeletePostPutPatchArgs;
  '/redirection/v1/plugin/test': RedirectionV1PluginTestGetPostPutPatchDeleteArgs;
  '/redirection/v1/redirect': RedirectionV1RedirectPostPutPatchArgs;
  '/redirection/v1/redirect/(?P<id>[\\d]+)': RedirectionV1RedirectPIdDPostPutPatchArgs;
  '/redirection/v1/setting': RedirectionV1SettingPostPutPatchArgs;
}

export interface RedirectionV1Routes {
  Delete: RedirectionV1DeleteRoutes;
  Get: RedirectionV1GetRoutes;
  Patch: RedirectionV1PatchRoutes;
  Post: RedirectionV1PostRoutes;
  Put: RedirectionV1PutRoutes;
}
