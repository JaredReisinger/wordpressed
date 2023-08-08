// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "kb-lottieanimation/v1" namespace

import {
  KbLottieanimationV1GetResponse,
  KbLottieanimationV1AnimationsPostResponse,
  KbLottieanimationV1AnimationsPIdAZaZ09GetResponse,
} from './kb-lottieanimation-v1-responses.js';

/**
 * Arguments for `/kb-lottieanimation/v1` route when calling GET method.
 */
export interface KbLottieanimationV1GetArgs {}

/**
 * Arguments for `/kb-lottieanimation/v1/animations` route when calling POST method.
 */
export interface KbLottieanimationV1AnimationsPostArgs {}

/**
 * Arguments for `/kb-lottieanimation/v1/animations/(?P<id>[\a-zA-Z0-9]+)` route when calling GET method.
 */
export interface KbLottieanimationV1AnimationsPIdAZaZ09GetArgs {}

/**
 * All "kb-lottieanimation/v1" DELETE routes.
 */
export interface KbLottieanimationV1DeleteRoutes {}

/**
 * All "kb-lottieanimation/v1" GET routes.
 */
export interface KbLottieanimationV1GetRoutes {
  '/kb-lottieanimation/v1': {
    args: KbLottieanimationV1GetArgs;
    response: KbLottieanimationV1GetResponse;
  };
  '/kb-lottieanimation/v1/animations/(?P<id>[\\a-zA-Z0-9]+)': {
    args: KbLottieanimationV1AnimationsPIdAZaZ09GetArgs;
    response: KbLottieanimationV1AnimationsPIdAZaZ09GetResponse;
  };
}

/**
 * All "kb-lottieanimation/v1" PATCH routes.
 */
export interface KbLottieanimationV1PatchRoutes {}

/**
 * All "kb-lottieanimation/v1" POST routes.
 */
export interface KbLottieanimationV1PostRoutes {
  '/kb-lottieanimation/v1/animations': {
    args: KbLottieanimationV1AnimationsPostArgs;
    response: KbLottieanimationV1AnimationsPostResponse;
  };
}

/**
 * All "kb-lottieanimation/v1" PUT routes.
 */
export interface KbLottieanimationV1PutRoutes {}

/**
 * All "kb-lottieanimation/v1" WordPress REST API methods/routes.
 */
export interface KbLottieanimationV1Routes {
  Delete: KbLottieanimationV1DeleteRoutes;
  Get: KbLottieanimationV1GetRoutes;
  Patch: KbLottieanimationV1PatchRoutes;
  Post: KbLottieanimationV1PostRoutes;
  Put: KbLottieanimationV1PutRoutes;
}
