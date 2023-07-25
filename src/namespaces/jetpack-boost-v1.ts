export interface JetpackBoostV1GetArgs {}

export interface JetpackBoostV1SpeedScoresPostPutPatchArgs {}

export interface JetpackBoostV1SpeedScoresRefreshPostPutPatchArgs {}

export interface JetpackBoostV1DeleteRoutes {}

export interface JetpackBoostV1GetRoutes {
  '/jetpack-boost/v1': JetpackBoostV1GetArgs;
}

export interface JetpackBoostV1PatchRoutes {
  '/jetpack-boost/v1/speed-scores': JetpackBoostV1SpeedScoresPostPutPatchArgs;
  '/jetpack-boost/v1/speed-scores/refresh': JetpackBoostV1SpeedScoresRefreshPostPutPatchArgs;
}

export interface JetpackBoostV1PostRoutes {
  '/jetpack-boost/v1/speed-scores': JetpackBoostV1SpeedScoresPostPutPatchArgs;
  '/jetpack-boost/v1/speed-scores/refresh': JetpackBoostV1SpeedScoresRefreshPostPutPatchArgs;
}

export interface JetpackBoostV1PutRoutes {
  '/jetpack-boost/v1/speed-scores': JetpackBoostV1SpeedScoresPostPutPatchArgs;
  '/jetpack-boost/v1/speed-scores/refresh': JetpackBoostV1SpeedScoresRefreshPostPutPatchArgs;
}

export interface JetpackBoostV1Routes {
  Delete: JetpackBoostV1DeleteRoutes;
  Get: JetpackBoostV1GetRoutes;
  Patch: JetpackBoostV1PatchRoutes;
  Post: JetpackBoostV1PostRoutes;
  Put: JetpackBoostV1PutRoutes;
}
