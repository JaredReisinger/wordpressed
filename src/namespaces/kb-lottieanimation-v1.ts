export interface KbLottieanimationV1GetArgs {
}

export interface KbLottieanimationV1AnimationsPostArgs {
}

export interface KbLottieanimationV1AnimationsPIdAZaZ09GetArgs {
}


export interface KbLottieanimationV1DeleteRoutes {
}

export interface KbLottieanimationV1GetRoutes {
  '/kb-lottieanimation/v1': KbLottieanimationV1GetArgs;
  '/kb-lottieanimation/v1/animations/(?P<id>[\\a-zA-Z0-9]+)': KbLottieanimationV1AnimationsPIdAZaZ09GetArgs;
}

export interface KbLottieanimationV1PatchRoutes {
}

export interface KbLottieanimationV1PostRoutes {
  '/kb-lottieanimation/v1/animations': KbLottieanimationV1AnimationsPostArgs;
}

export interface KbLottieanimationV1PutRoutes {
}
