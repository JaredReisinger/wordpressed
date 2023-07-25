export interface PaypalV1GetArgs {
}

export interface PaypalV1IncomingPostArgs {
}


export interface PaypalV1DeleteRoutes {
}

export interface PaypalV1GetRoutes {
  '/paypal/v1': PaypalV1GetArgs;
}

export interface PaypalV1PatchRoutes {
}

export interface PaypalV1PostRoutes {
  '/paypal/v1/incoming': PaypalV1IncomingPostArgs;
}

export interface PaypalV1PutRoutes {
}

export interface PaypalV1Routes {
  Delete: PaypalV1DeleteRoutes;
  Get: PaypalV1GetRoutes;
  Patch: PaypalV1PatchRoutes;
  Post: PaypalV1PostRoutes;
  Put: PaypalV1PutRoutes;
}
