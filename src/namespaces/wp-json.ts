export interface WpJsonGetArgs {}

export interface WpJsonBatchV1PostArgsRequests {}

export interface WpJsonBatchV1PostArgs {
  requests: WpJsonBatchV1PostArgsRequests[];
  validation?: 'require-all-validate' | 'normal';
}

export interface WpJsonDeleteRoutes {}

export interface WpJsonGetRoutes {
  '/': WpJsonGetArgs;
}

export interface WpJsonPatchRoutes {}

export interface WpJsonPostRoutes {
  '/batch/v1': WpJsonBatchV1PostArgs;
}

export interface WpJsonPutRoutes {}
