import * as WpJson from './wp-json.js';
import * as ForminatorV1 from './forminator-v1.js';
import * as JetpackBoostV1 from './jetpack-boost-v1.js';
import * as JetpackV4 from './jetpack-v4.js';
import * as JetpackV4Blaze from './jetpack-v4-blaze.js';
import * as JetpackV4BlazeApp from './jetpack-v4-blaze-app.js';
import * as JetpackV4Import from './jetpack-v4-import.js';
import * as JetpackV4StatsApp from './jetpack-v4-stats-app.js';
import * as KbFluentcrmV1 from './kb-fluentcrm-v1.js';
import * as KbLottieanimationV1 from './kb-lottieanimation-v1.js';
import * as KbMailerliteV1 from './kb-mailerlite-v1.js';
import * as KbpV1 from './kbp-v1.js';
import * as LitespeedV1 from './litespeed-v1.js';
import * as MailpoetV1 from './mailpoet-v1.js';
import * as MyJetpackV1 from './my-jetpack-v1.js';
import * as Oembed10 from './oembed-1-0.js';
import * as PaypalV1 from './paypal-v1.js';
import * as RedirectionV1 from './redirection-v1.js';
import * as SpectraV1 from './spectra-v1.js';
import * as UagV1 from './uag-v1.js';
import * as WcAdmin from './wc-admin.js';
import * as WcAnalytics from './wc-analytics.js';
import * as WcPaypalV1 from './wc-paypal-v1.js';
import * as WcTelemetry from './wc-telemetry.js';
import * as WcStore from './wc-store.js';
import * as WcStoreV1 from './wc-store-v1.js';
import * as WcV1 from './wc-v1.js';
import * as WcV2 from './wc-v2.js';
import * as WcV3 from './wc-v3.js';
import * as WccomSiteV1 from './wccom-site-v1.js';
import * as WccomSiteV2 from './wccom-site-v2.js';
import * as WpBlockEditorV1 from './wp-block-editor-v1.js';
import * as WpSiteHealthV1 from './wp-site-health-v1.js';
import * as WpV2 from './wp-v2.js';
import * as WpcomV2 from './wpcom-v2.js';
import * as WpcomV3 from './wpcom-v3.js';
import * as WpgmzaV1 from './wpgmza-v1.js';

export type KnownDeleteRoutes =
  WpJson.WpJsonDeleteRoutes &
  ForminatorV1.ForminatorV1DeleteRoutes &
  JetpackBoostV1.JetpackBoostV1DeleteRoutes &
  JetpackV4.JetpackV4DeleteRoutes &
  JetpackV4Blaze.JetpackV4BlazeDeleteRoutes &
  JetpackV4BlazeApp.JetpackV4BlazeAppDeleteRoutes &
  JetpackV4Import.JetpackV4ImportDeleteRoutes &
  JetpackV4StatsApp.JetpackV4StatsAppDeleteRoutes &
  KbFluentcrmV1.KbFluentcrmV1DeleteRoutes &
  KbLottieanimationV1.KbLottieanimationV1DeleteRoutes &
  KbMailerliteV1.KbMailerliteV1DeleteRoutes &
  KbpV1.KbpV1DeleteRoutes &
  LitespeedV1.LitespeedV1DeleteRoutes &
  MailpoetV1.MailpoetV1DeleteRoutes &
  MyJetpackV1.MyJetpackV1DeleteRoutes &
  Oembed10.Oembed10DeleteRoutes &
  PaypalV1.PaypalV1DeleteRoutes &
  RedirectionV1.RedirectionV1DeleteRoutes &
  SpectraV1.SpectraV1DeleteRoutes &
  UagV1.UagV1DeleteRoutes &
  WcAdmin.WcAdminDeleteRoutes &
  WcAnalytics.WcAnalyticsDeleteRoutes &
  WcPaypalV1.WcPaypalV1DeleteRoutes &
  WcTelemetry.WcTelemetryDeleteRoutes &
  WcStore.WcStoreDeleteRoutes &
  WcStoreV1.WcStoreV1DeleteRoutes &
  WcV1.WcV1DeleteRoutes &
  WcV2.WcV2DeleteRoutes &
  WcV3.WcV3DeleteRoutes &
  WccomSiteV1.WccomSiteV1DeleteRoutes &
  WccomSiteV2.WccomSiteV2DeleteRoutes &
  WpBlockEditorV1.WpBlockEditorV1DeleteRoutes &
  WpSiteHealthV1.WpSiteHealthV1DeleteRoutes &
  WpV2.WpV2DeleteRoutes &
  WpcomV2.WpcomV2DeleteRoutes &
  WpcomV3.WpcomV3DeleteRoutes &
  WpgmzaV1.WpgmzaV1DeleteRoutes;

export type KnownGetRoutes =
  WpJson.WpJsonGetRoutes &
  ForminatorV1.ForminatorV1GetRoutes &
  JetpackBoostV1.JetpackBoostV1GetRoutes &
  JetpackV4.JetpackV4GetRoutes &
  JetpackV4Blaze.JetpackV4BlazeGetRoutes &
  JetpackV4BlazeApp.JetpackV4BlazeAppGetRoutes &
  JetpackV4Import.JetpackV4ImportGetRoutes &
  JetpackV4StatsApp.JetpackV4StatsAppGetRoutes &
  KbFluentcrmV1.KbFluentcrmV1GetRoutes &
  KbLottieanimationV1.KbLottieanimationV1GetRoutes &
  KbMailerliteV1.KbMailerliteV1GetRoutes &
  KbpV1.KbpV1GetRoutes &
  LitespeedV1.LitespeedV1GetRoutes &
  MailpoetV1.MailpoetV1GetRoutes &
  MyJetpackV1.MyJetpackV1GetRoutes &
  Oembed10.Oembed10GetRoutes &
  PaypalV1.PaypalV1GetRoutes &
  RedirectionV1.RedirectionV1GetRoutes &
  SpectraV1.SpectraV1GetRoutes &
  UagV1.UagV1GetRoutes &
  WcAdmin.WcAdminGetRoutes &
  WcAnalytics.WcAnalyticsGetRoutes &
  WcPaypalV1.WcPaypalV1GetRoutes &
  WcTelemetry.WcTelemetryGetRoutes &
  WcStore.WcStoreGetRoutes &
  WcStoreV1.WcStoreV1GetRoutes &
  WcV1.WcV1GetRoutes &
  WcV2.WcV2GetRoutes &
  WcV3.WcV3GetRoutes &
  WccomSiteV1.WccomSiteV1GetRoutes &
  WccomSiteV2.WccomSiteV2GetRoutes &
  WpBlockEditorV1.WpBlockEditorV1GetRoutes &
  WpSiteHealthV1.WpSiteHealthV1GetRoutes &
  WpV2.WpV2GetRoutes &
  WpcomV2.WpcomV2GetRoutes &
  WpcomV3.WpcomV3GetRoutes &
  WpgmzaV1.WpgmzaV1GetRoutes;

export type KnownPatchRoutes =
  WpJson.WpJsonPatchRoutes &
  ForminatorV1.ForminatorV1PatchRoutes &
  JetpackBoostV1.JetpackBoostV1PatchRoutes &
  JetpackV4.JetpackV4PatchRoutes &
  JetpackV4Blaze.JetpackV4BlazePatchRoutes &
  JetpackV4BlazeApp.JetpackV4BlazeAppPatchRoutes &
  JetpackV4Import.JetpackV4ImportPatchRoutes &
  JetpackV4StatsApp.JetpackV4StatsAppPatchRoutes &
  KbFluentcrmV1.KbFluentcrmV1PatchRoutes &
  KbLottieanimationV1.KbLottieanimationV1PatchRoutes &
  KbMailerliteV1.KbMailerliteV1PatchRoutes &
  KbpV1.KbpV1PatchRoutes &
  LitespeedV1.LitespeedV1PatchRoutes &
  MailpoetV1.MailpoetV1PatchRoutes &
  MyJetpackV1.MyJetpackV1PatchRoutes &
  Oembed10.Oembed10PatchRoutes &
  PaypalV1.PaypalV1PatchRoutes &
  RedirectionV1.RedirectionV1PatchRoutes &
  SpectraV1.SpectraV1PatchRoutes &
  UagV1.UagV1PatchRoutes &
  WcAdmin.WcAdminPatchRoutes &
  WcAnalytics.WcAnalyticsPatchRoutes &
  WcPaypalV1.WcPaypalV1PatchRoutes &
  WcTelemetry.WcTelemetryPatchRoutes &
  WcStore.WcStorePatchRoutes &
  WcStoreV1.WcStoreV1PatchRoutes &
  WcV1.WcV1PatchRoutes &
  WcV2.WcV2PatchRoutes &
  WcV3.WcV3PatchRoutes &
  WccomSiteV1.WccomSiteV1PatchRoutes &
  WccomSiteV2.WccomSiteV2PatchRoutes &
  WpBlockEditorV1.WpBlockEditorV1PatchRoutes &
  WpSiteHealthV1.WpSiteHealthV1PatchRoutes &
  WpV2.WpV2PatchRoutes &
  WpcomV2.WpcomV2PatchRoutes &
  WpcomV3.WpcomV3PatchRoutes &
  WpgmzaV1.WpgmzaV1PatchRoutes;

export type KnownPostRoutes =
  WpJson.WpJsonPostRoutes &
  ForminatorV1.ForminatorV1PostRoutes &
  JetpackBoostV1.JetpackBoostV1PostRoutes &
  JetpackV4.JetpackV4PostRoutes &
  JetpackV4Blaze.JetpackV4BlazePostRoutes &
  JetpackV4BlazeApp.JetpackV4BlazeAppPostRoutes &
  JetpackV4Import.JetpackV4ImportPostRoutes &
  JetpackV4StatsApp.JetpackV4StatsAppPostRoutes &
  KbFluentcrmV1.KbFluentcrmV1PostRoutes &
  KbLottieanimationV1.KbLottieanimationV1PostRoutes &
  KbMailerliteV1.KbMailerliteV1PostRoutes &
  KbpV1.KbpV1PostRoutes &
  LitespeedV1.LitespeedV1PostRoutes &
  MailpoetV1.MailpoetV1PostRoutes &
  MyJetpackV1.MyJetpackV1PostRoutes &
  Oembed10.Oembed10PostRoutes &
  PaypalV1.PaypalV1PostRoutes &
  RedirectionV1.RedirectionV1PostRoutes &
  SpectraV1.SpectraV1PostRoutes &
  UagV1.UagV1PostRoutes &
  WcAdmin.WcAdminPostRoutes &
  WcAnalytics.WcAnalyticsPostRoutes &
  WcPaypalV1.WcPaypalV1PostRoutes &
  WcTelemetry.WcTelemetryPostRoutes &
  WcStore.WcStorePostRoutes &
  WcStoreV1.WcStoreV1PostRoutes &
  WcV1.WcV1PostRoutes &
  WcV2.WcV2PostRoutes &
  WcV3.WcV3PostRoutes &
  WccomSiteV1.WccomSiteV1PostRoutes &
  WccomSiteV2.WccomSiteV2PostRoutes &
  WpBlockEditorV1.WpBlockEditorV1PostRoutes &
  WpSiteHealthV1.WpSiteHealthV1PostRoutes &
  WpV2.WpV2PostRoutes &
  WpcomV2.WpcomV2PostRoutes &
  WpcomV3.WpcomV3PostRoutes &
  WpgmzaV1.WpgmzaV1PostRoutes;

export type KnownPutRoutes =
  WpJson.WpJsonPutRoutes &
  ForminatorV1.ForminatorV1PutRoutes &
  JetpackBoostV1.JetpackBoostV1PutRoutes &
  JetpackV4.JetpackV4PutRoutes &
  JetpackV4Blaze.JetpackV4BlazePutRoutes &
  JetpackV4BlazeApp.JetpackV4BlazeAppPutRoutes &
  JetpackV4Import.JetpackV4ImportPutRoutes &
  JetpackV4StatsApp.JetpackV4StatsAppPutRoutes &
  KbFluentcrmV1.KbFluentcrmV1PutRoutes &
  KbLottieanimationV1.KbLottieanimationV1PutRoutes &
  KbMailerliteV1.KbMailerliteV1PutRoutes &
  KbpV1.KbpV1PutRoutes &
  LitespeedV1.LitespeedV1PutRoutes &
  MailpoetV1.MailpoetV1PutRoutes &
  MyJetpackV1.MyJetpackV1PutRoutes &
  Oembed10.Oembed10PutRoutes &
  PaypalV1.PaypalV1PutRoutes &
  RedirectionV1.RedirectionV1PutRoutes &
  SpectraV1.SpectraV1PutRoutes &
  UagV1.UagV1PutRoutes &
  WcAdmin.WcAdminPutRoutes &
  WcAnalytics.WcAnalyticsPutRoutes &
  WcPaypalV1.WcPaypalV1PutRoutes &
  WcTelemetry.WcTelemetryPutRoutes &
  WcStore.WcStorePutRoutes &
  WcStoreV1.WcStoreV1PutRoutes &
  WcV1.WcV1PutRoutes &
  WcV2.WcV2PutRoutes &
  WcV3.WcV3PutRoutes &
  WccomSiteV1.WccomSiteV1PutRoutes &
  WccomSiteV2.WccomSiteV2PutRoutes &
  WpBlockEditorV1.WpBlockEditorV1PutRoutes &
  WpSiteHealthV1.WpSiteHealthV1PutRoutes &
  WpV2.WpV2PutRoutes &
  WpcomV2.WpcomV2PutRoutes &
  WpcomV3.WpcomV3PutRoutes &
  WpgmzaV1.WpgmzaV1PutRoutes;
