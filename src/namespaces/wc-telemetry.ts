// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "wc-telemetry" namespace

/**
 * Arguments for `/wc-telemetry` route when calling GET method.
 */
export interface WcTelemetryGetArgs {}

/**
 * Arguments for `/wc-telemetry/tracker` route when calling POST method.
 */
export interface WcTelemetryTrackerPostArgs {
  /**
   * Platform to track.
   */
  platform: string;
  /**
   * Platform version to track.
   */
  version: string;
}

/**
 * All "wc-telemetry" DELETE routes.
 */
export interface WcTelemetryDeleteRoutes {}

/**
 * All "wc-telemetry" GET routes.
 */
export interface WcTelemetryGetRoutes {
  '/wc-telemetry': WcTelemetryGetArgs;
}

/**
 * All "wc-telemetry" PATCH routes.
 */
export interface WcTelemetryPatchRoutes {}

/**
 * All "wc-telemetry" POST routes.
 */
export interface WcTelemetryPostRoutes {
  '/wc-telemetry/tracker': WcTelemetryTrackerPostArgs;
}

/**
 * All "wc-telemetry" PUT routes.
 */
export interface WcTelemetryPutRoutes {}

/**
 * All "wc-telemetry" WordPress REST API methods/routes.
 */
export interface WcTelemetryRoutes {
  Delete: WcTelemetryDeleteRoutes;
  Get: WcTelemetryGetRoutes;
  Patch: WcTelemetryPatchRoutes;
  Post: WcTelemetryPostRoutes;
  Put: WcTelemetryPutRoutes;
}
