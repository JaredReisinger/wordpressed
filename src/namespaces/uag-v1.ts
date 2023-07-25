export interface UagV1GetArgs {}

export interface UagV1AdminCommonsettingsGetArgs {}

export interface UagV1DeleteRoutes {}

export interface UagV1GetRoutes {
  '/uag/v1': UagV1GetArgs;
  '/uag/v1/admin/commonsettings': UagV1AdminCommonsettingsGetArgs;
}

export interface UagV1PatchRoutes {}

export interface UagV1PostRoutes {}

export interface UagV1PutRoutes {}

export interface UagV1Routes {
  Delete: UagV1DeleteRoutes;
  Get: UagV1GetRoutes;
  Patch: UagV1PatchRoutes;
  Post: UagV1PostRoutes;
  Put: UagV1PutRoutes;
}
