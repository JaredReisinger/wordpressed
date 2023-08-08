// RESPONSE TYPES FILE -- PLEASE *DO* EDIT!

// This file is only created if it doesn't already exist. It is safe (and
// encouraged!) to edit this file to provide response types for the API calls.

// WordPress REST API "mailpoet/v1" responses

/**
 * Response for `/mailpoet/v1` route when calling GET method.
 */
export interface MailpoetV1GetResponse {}

/**
 * Response for `/mailpoet/v1/automation-templates` route when calling GET method.
 */
export interface MailpoetV1AutomationTemplatesGetResponse {}

/**
 * Response for `/mailpoet/v1/automation/analytics/orders` route when calling GET method.
 */
export interface MailpoetV1AutomationAnalyticsOrdersGetResponse {}

/**
 * Response for `/mailpoet/v1/automation/analytics/overview` route when calling GET method.
 */
export interface MailpoetV1AutomationAnalyticsOverviewGetResponse {}

/**
 * Response for `/mailpoet/v1/automations` route when calling GET method.
 */
export interface MailpoetV1AutomationsGetResponse {}

/**
 * Response for `/mailpoet/v1/automations/(?P<id>\d+)` route when calling PUT method.
 */
export interface MailpoetV1AutomationsPIdDPutResponse {}

/**
 * Response for `/mailpoet/v1/automations/(?P<id>\d+)` route when calling DELETE method.
 */
export interface MailpoetV1AutomationsPIdDDeleteResponse {}

/**
 * Response for `/mailpoet/v1/automations/(?P<id>\d+)/duplicate` route when calling POST method.
 */
export interface MailpoetV1AutomationsPIdDDuplicatePostResponse {}

/**
 * Response for `/mailpoet/v1/automations/create-from-template` route when calling POST method.
 */
export interface MailpoetV1AutomationsCreateFromTemplatePostResponse {}
