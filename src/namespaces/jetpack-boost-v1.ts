// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "jetpack-boost/v1" namespace

import {
  JetpackBoostV1GetResponse,
  JetpackBoostV1SpeedScoresPatchResponse,
  JetpackBoostV1SpeedScoresPostResponse,
  JetpackBoostV1SpeedScoresPutResponse,
  JetpackBoostV1SpeedScoresRefreshPatchResponse,
  JetpackBoostV1SpeedScoresRefreshPostResponse,
  JetpackBoostV1SpeedScoresRefreshPutResponse,
} from './jetpack-boost-v1-responses.js';

/**
 * Arguments for `/jetpack-boost/v1` route when calling GET method.
 */
export interface JetpackBoostV1GetArgs {}

/**
 * Arguments for `/jetpack-boost/v1/speed-scores` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackBoostV1SpeedScoresPatchPostPutArgs {}

/**
 * Arguments for `/jetpack-boost/v1/speed-scores/refresh` route when calling PATCH, POST, and PUT methods.
 */
export interface JetpackBoostV1SpeedScoresRefreshPatchPostPutArgs {}

/**
 * All "jetpack-boost/v1" DELETE routes.
 */
export interface JetpackBoostV1DeleteRoutes {}

/**
 * All "jetpack-boost/v1" GET routes.
 */
export interface JetpackBoostV1GetRoutes {
  '/jetpack-boost/v1': {
    args: JetpackBoostV1GetArgs;
    response: JetpackBoostV1GetResponse;
  };
}

/**
 * All "jetpack-boost/v1" PATCH routes.
 */
export interface JetpackBoostV1PatchRoutes {
  '/jetpack-boost/v1/speed-scores': {
    args: JetpackBoostV1SpeedScoresPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresPatchResponse;
  };
  '/jetpack-boost/v1/speed-scores/refresh': {
    args: JetpackBoostV1SpeedScoresRefreshPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresRefreshPatchResponse;
  };
}

/**
 * All "jetpack-boost/v1" POST routes.
 */
export interface JetpackBoostV1PostRoutes {
  '/jetpack-boost/v1/speed-scores': {
    args: JetpackBoostV1SpeedScoresPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresPostResponse;
  };
  '/jetpack-boost/v1/speed-scores/refresh': {
    args: JetpackBoostV1SpeedScoresRefreshPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresRefreshPostResponse;
  };
}

/**
 * All "jetpack-boost/v1" PUT routes.
 */
export interface JetpackBoostV1PutRoutes {
  '/jetpack-boost/v1/speed-scores': {
    args: JetpackBoostV1SpeedScoresPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresPutResponse;
  };
  '/jetpack-boost/v1/speed-scores/refresh': {
    args: JetpackBoostV1SpeedScoresRefreshPatchPostPutArgs;
    response: JetpackBoostV1SpeedScoresRefreshPutResponse;
  };
}

/**
 * All "jetpack-boost/v1" WordPress REST API methods/routes.
 */
export interface JetpackBoostV1Routes {
  Delete: JetpackBoostV1DeleteRoutes;
  Get: JetpackBoostV1GetRoutes;
  Patch: JetpackBoostV1PatchRoutes;
  Post: JetpackBoostV1PostRoutes;
  Put: JetpackBoostV1PutRoutes;
}
