export interface ForminatorV1GetArgs {
}

export interface ForminatorV1PreviewFormsGetArgs {
  /** Module ID */
  module_id: number;
}

export interface ForminatorV1PreviewPollsGetArgs {
  /** Module ID */
  module_id: number;
}

export interface ForminatorV1PreviewQuizzesGetArgs {
  /** Module ID */
  module_id: number;
}


export interface ForminatorV1DeleteRoutes {
}

export interface ForminatorV1GetRoutes {
  '/forminator/v1': ForminatorV1GetArgs;
  '/forminator/v1/preview/forms': ForminatorV1PreviewFormsGetArgs;
  '/forminator/v1/preview/polls': ForminatorV1PreviewPollsGetArgs;
  '/forminator/v1/preview/quizzes': ForminatorV1PreviewQuizzesGetArgs;
}

export interface ForminatorV1PatchRoutes {
}

export interface ForminatorV1PostRoutes {
}

export interface ForminatorV1PutRoutes {
}

export interface ForminatorV1Routes {
  Delete: ForminatorV1DeleteRoutes;
  Get: ForminatorV1GetRoutes;
  Patch: ForminatorV1PatchRoutes;
  Post: ForminatorV1PostRoutes;
  Put: ForminatorV1PutRoutes;
}
