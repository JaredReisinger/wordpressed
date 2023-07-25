export interface MailpoetV1GetArgs {}

export interface MailpoetV1AutomationTemplatesGetArgs {
  category?: string;
}

export interface MailpoetV1AutomationAnalyticsOrdersGetArgsQuery {}

export interface MailpoetV1AutomationAnalyticsOrdersGetArgs {
  id: number;
  query?: MailpoetV1AutomationAnalyticsOrdersGetArgsQuery;
}

export interface MailpoetV1AutomationAnalyticsOverviewGetArgsQuery {}

export interface MailpoetV1AutomationAnalyticsOverviewGetArgs {
  id: number;
  query?: MailpoetV1AutomationAnalyticsOverviewGetArgsQuery;
}

export interface MailpoetV1AutomationsGetArgs {
  status?: number[];
}

export interface MailpoetV1AutomationsPIdDPutArgsMeta {}

export interface MailpoetV1AutomationsPIdDPutArgsSteps {}

export interface MailpoetV1AutomationsPIdDPutArgs {
  id: number;
  meta?: MailpoetV1AutomationsPIdDPutArgsMeta;
  name?: string;
  status?: string;
  steps?: MailpoetV1AutomationsPIdDPutArgsSteps;
}

export interface MailpoetV1AutomationsPIdDDeleteArgs {
  id: number;
}

export interface MailpoetV1AutomationsPIdDDuplicatePostArgs {
  id: number;
}

export interface MailpoetV1AutomationsCreateFromTemplatePostArgs {
  slug: string;
}

export interface MailpoetV1DeleteRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)': MailpoetV1AutomationsPIdDDeleteArgs;
}

export interface MailpoetV1GetRoutes {
  '/mailpoet/v1': MailpoetV1GetArgs;
  '/mailpoet/v1/automation-templates': MailpoetV1AutomationTemplatesGetArgs;
  '/mailpoet/v1/automation/analytics/orders': MailpoetV1AutomationAnalyticsOrdersGetArgs;
  '/mailpoet/v1/automation/analytics/overview': MailpoetV1AutomationAnalyticsOverviewGetArgs;
  '/mailpoet/v1/automations': MailpoetV1AutomationsGetArgs;
}

export interface MailpoetV1PatchRoutes {}

export interface MailpoetV1PostRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)/duplicate': MailpoetV1AutomationsPIdDDuplicatePostArgs;
  '/mailpoet/v1/automations/create-from-template': MailpoetV1AutomationsCreateFromTemplatePostArgs;
}

export interface MailpoetV1PutRoutes {
  '/mailpoet/v1/automations/(?P<id>\\d+)': MailpoetV1AutomationsPIdDPutArgs;
}

export interface MailpoetV1Routes {
  Delete: MailpoetV1DeleteRoutes;
  Get: MailpoetV1GetRoutes;
  Patch: MailpoetV1PatchRoutes;
  Post: MailpoetV1PostRoutes;
  Put: MailpoetV1PutRoutes;
}
