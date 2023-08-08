// GENERATED FILE -- DO NOT EDIT
// WordPress REST API "mailpoet/v1" namespace

import {
  MailpoetV1GetResponse,
  MailpoetV1AutomationTemplatesGetResponse,
  MailpoetV1AutomationAnalyticsOrdersGetResponse,
  MailpoetV1AutomationAnalyticsOverviewGetResponse,
  MailpoetV1AutomationsGetResponse,
  MailpoetV1AutomationsPIdDPutResponse,
  MailpoetV1AutomationsPIdDDeleteResponse,
  MailpoetV1AutomationsPIdDDuplicatePostResponse,
  MailpoetV1AutomationsCreateFromTemplatePostResponse,
} from './mailpoet-v1-responses.js';

/**
 * Arguments for `/mailpoet/v1` route when calling GET method.
 */
export interface MailpoetV1GetArgs {}

/**
 * Arguments for `/mailpoet/v1/automation-templates` route when calling GET method.
 */
export interface MailpoetV1AutomationTemplatesGetArgs {
  category?: string;
}

export interface MailpoetV1AutomationAnalyticsOrdersGetArgsQuery {}

/**
 * Arguments for `/mailpoet/v1/automation/analytics/orders` route when calling GET method.
 */
export interface MailpoetV1AutomationAnalyticsOrdersGetArgs {
  id: number;
  query?: MailpoetV1AutomationAnalyticsOrdersGetArgsQuery;
}

export interface MailpoetV1AutomationAnalyticsOverviewGetArgsQuery {}

/**
 * Arguments for `/mailpoet/v1/automation/analytics/overview` route when calling GET method.
 */
export interface MailpoetV1AutomationAnalyticsOverviewGetArgs {
  id: number;
  query?: MailpoetV1AutomationAnalyticsOverviewGetArgsQuery;
}

/**
 * Arguments for `/mailpoet/v1/automations` route when calling GET method.
 */
export interface MailpoetV1AutomationsGetArgs {
  status?: number[];
}

export interface MailpoetV1AutomationsPIdDPutArgsMeta {}

export interface MailpoetV1AutomationsPIdDPutArgsSteps {}

/**
 * Arguments for `/mailpoet/v1/automations/(?P<id>\d+)` route when calling PUT method.
 */
export interface MailpoetV1AutomationsPIdDPutArgs {
  id: number;
  meta?: MailpoetV1AutomationsPIdDPutArgsMeta;
  name?: string;
  status?: string;
  steps?: MailpoetV1AutomationsPIdDPutArgsSteps;
}

/**
 * Arguments for `/mailpoet/v1/automations/(?P<id>\d+)` route when calling DELETE method.
 */
export interface MailpoetV1AutomationsPIdDDeleteArgs {
  id: number;
}

/**
 * Arguments for `/mailpoet/v1/automations/(?P<id>\d+)/duplicate` route when calling POST method.
 */
export interface MailpoetV1AutomationsPIdDDuplicatePostArgs {
  id: number;
}

/**
 * Arguments for `/mailpoet/v1/automations/create-from-template` route when calling POST method.
 */
export interface MailpoetV1AutomationsCreateFromTemplatePostArgs {
  slug: string;
}

/**
 * All "mailpoet/v1" DELETE routes.
 */
export interface MailpoetV1DeleteRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)': {
    args: MailpoetV1AutomationsPIdDDeleteArgs;
    response: MailpoetV1AutomationsPIdDDeleteResponse;
  };
}

/**
 * All "mailpoet/v1" GET routes.
 */
export interface MailpoetV1GetRoutes {
  '/mailpoet/v1': {
    args: MailpoetV1GetArgs;
    response: MailpoetV1GetResponse;
  };
  '/mailpoet/v1/automation-templates': {
    args: MailpoetV1AutomationTemplatesGetArgs;
    response: MailpoetV1AutomationTemplatesGetResponse;
  };
  '/mailpoet/v1/automation/analytics/orders': {
    args: MailpoetV1AutomationAnalyticsOrdersGetArgs;
    response: MailpoetV1AutomationAnalyticsOrdersGetResponse;
  };
  '/mailpoet/v1/automation/analytics/overview': {
    args: MailpoetV1AutomationAnalyticsOverviewGetArgs;
    response: MailpoetV1AutomationAnalyticsOverviewGetResponse;
  };
  '/mailpoet/v1/automations': {
    args: MailpoetV1AutomationsGetArgs;
    response: MailpoetV1AutomationsGetResponse;
  };
}

/**
 * All "mailpoet/v1" PATCH routes.
 */
export interface MailpoetV1PatchRoutes {}

/**
 * All "mailpoet/v1" POST routes.
 */
export interface MailpoetV1PostRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)/duplicate': {
    args: MailpoetV1AutomationsPIdDDuplicatePostArgs;
    response: MailpoetV1AutomationsPIdDDuplicatePostResponse;
  };
  '/mailpoet/v1/automations/create-from-template': {
    args: MailpoetV1AutomationsCreateFromTemplatePostArgs;
    response: MailpoetV1AutomationsCreateFromTemplatePostResponse;
  };
}

/**
 * All "mailpoet/v1" PUT routes.
 */
export interface MailpoetV1PutRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)': {
    args: MailpoetV1AutomationsPIdDPutArgs;
    response: MailpoetV1AutomationsPIdDPutResponse;
  };
}

/**
 * All "mailpoet/v1" WordPress REST API methods/routes.
 */
export interface MailpoetV1Routes {
  Delete: MailpoetV1DeleteRoutes;
  Get: MailpoetV1GetRoutes;
  Patch: MailpoetV1PatchRoutes;
  Post: MailpoetV1PostRoutes;
  Put: MailpoetV1PutRoutes;
}
