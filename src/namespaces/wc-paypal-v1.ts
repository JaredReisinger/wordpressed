export interface WcPaypalV1GetArgs {
}

export interface WcPaypalV1OnboardingGetParamsPostArgs {
}

export interface WcPaypalV1OnboardingGetStatusGetArgs {
}

export interface WcPaypalV1OnboardingSetCredentialsPostArgs {
}


export interface WcPaypalV1DeleteRoutes {
}

export interface WcPaypalV1GetRoutes {
  '/wc-paypal/v1': WcPaypalV1GetArgs;
  '/wc-paypal/v1/onboarding/get-status': WcPaypalV1OnboardingGetStatusGetArgs;
}

export interface WcPaypalV1PatchRoutes {
}

export interface WcPaypalV1PostRoutes {
  '/wc-paypal/v1/onboarding/get-params': WcPaypalV1OnboardingGetParamsPostArgs;
  '/wc-paypal/v1/onboarding/set-credentials': WcPaypalV1OnboardingSetCredentialsPostArgs;
}

export interface WcPaypalV1PutRoutes {
}
