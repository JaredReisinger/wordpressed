export interface WcTelemetryGetArgs {}

export interface WcTelemetryTrackerPostArgs {
  /** Platform to track. */
  platform: string;
  /** Platform version to track. */
  version: string;
}

export interface WcTelemetryDeleteRoutes {}

export interface WcTelemetryGetRoutes {
  '/wc-telemetry': WcTelemetryGetArgs;
}

export interface WcTelemetryPatchRoutes {}

export interface WcTelemetryPostRoutes {
  '/wc-telemetry/tracker': WcTelemetryTrackerPostArgs;
}

export interface WcTelemetryPutRoutes {}
