// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "forminator/v1" namespace

import {
  ForminatorV1GetResponse,
  ForminatorV1PreviewFormsGetResponse,
  ForminatorV1PreviewPollsGetResponse,
  ForminatorV1PreviewQuizzesGetResponse,
} from './forminator-v1-responses.js';

/**
 * Arguments for `/forminator/v1` route when calling GET method.
 */
export interface ForminatorV1GetArgs {}

/**
 * Arguments for `/forminator/v1/preview/forms` route when calling GET method.
 */
export interface ForminatorV1PreviewFormsGetArgs {
  /**
   * Module ID
   */
  module_id: number;
}

/**
 * Arguments for `/forminator/v1/preview/polls` route when calling GET method.
 */
export interface ForminatorV1PreviewPollsGetArgs {
  /**
   * Module ID
   */
  module_id: number;
}

/**
 * Arguments for `/forminator/v1/preview/quizzes` route when calling GET method.
 */
export interface ForminatorV1PreviewQuizzesGetArgs {
  /**
   * Module ID
   */
  module_id: number;
}

/**
 * All "forminator/v1" DELETE routes.
 */
export interface ForminatorV1DeleteRoutes {}

/**
 * All "forminator/v1" GET routes.
 */
export interface ForminatorV1GetRoutes {
  '/forminator/v1': {
    args: ForminatorV1GetArgs;
    response: ForminatorV1GetResponse;
  };
  '/forminator/v1/preview/forms': {
    args: ForminatorV1PreviewFormsGetArgs;
    response: ForminatorV1PreviewFormsGetResponse;
  };
  '/forminator/v1/preview/polls': {
    args: ForminatorV1PreviewPollsGetArgs;
    response: ForminatorV1PreviewPollsGetResponse;
  };
  '/forminator/v1/preview/quizzes': {
    args: ForminatorV1PreviewQuizzesGetArgs;
    response: ForminatorV1PreviewQuizzesGetResponse;
  };
}

/**
 * All "forminator/v1" PATCH routes.
 */
export interface ForminatorV1PatchRoutes {}

/**
 * All "forminator/v1" POST routes.
 */
export interface ForminatorV1PostRoutes {}

/**
 * All "forminator/v1" PUT routes.
 */
export interface ForminatorV1PutRoutes {}

/**
 * All "forminator/v1" WordPress REST API methods/routes.
 */
export interface ForminatorV1Routes {
  Delete: ForminatorV1DeleteRoutes;
  Get: ForminatorV1GetRoutes;
  Patch: ForminatorV1PatchRoutes;
  Post: ForminatorV1PostRoutes;
  Put: ForminatorV1PutRoutes;
}
