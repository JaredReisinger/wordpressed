export interface SpectraV1GetArgs {}

export interface SpectraV1AllTaxonomyGetArgs {}

export interface SpectraV1DeleteRoutes {}

export interface SpectraV1GetRoutes {
  '/spectra/v1': SpectraV1GetArgs;
  '/spectra/v1/all_taxonomy': SpectraV1AllTaxonomyGetArgs;
}

export interface SpectraV1PatchRoutes {}

export interface SpectraV1PostRoutes {}

export interface SpectraV1PutRoutes {}

export interface SpectraV1Routes {
  Delete: SpectraV1DeleteRoutes;
  Get: SpectraV1GetRoutes;
  Patch: SpectraV1PatchRoutes;
  Post: SpectraV1PostRoutes;
  Put: SpectraV1PutRoutes;
}
