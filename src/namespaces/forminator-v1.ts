// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "forminator/v1" namespace

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
  '/forminator/v1': ForminatorV1GetArgs;
  '/forminator/v1/preview/forms': ForminatorV1PreviewFormsGetArgs;
  '/forminator/v1/preview/polls': ForminatorV1PreviewPollsGetArgs;
  '/forminator/v1/preview/quizzes': ForminatorV1PreviewQuizzesGetArgs;
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
