/* eslint-disable no-use-before-define */
// an attempt at a new and modern WordPress REST API client
import got from 'got';

import { dbg } from './helpers.js';

interface WpJson {
  _links: Record<string, Link[]>;
  authentication: Record<string, Authentication>;
  description: string;
  gmt_offset: number;
  home: string;
  name: string;
  namespaces: string[];
  routes: Record<string, unknown>;
  site_icon_url: unknown;
  site_icon: unknown;
  site_logo: unknown;
}

interface Link {
  embeddable?: true;
  href: string;
  type?: string; // site_logo, site_icon
  name?: string;
  templated?: true;
}

interface Authentication {
  endpoints: {
    authorization: string;
  };
}

export async function dummy() {
  const resp = await got<WpJson>(
    'https://nationalspecialty.basenji.org/wp-json',
    {
      responseType: 'json',
    }
  );

  dbg(0, 'headers', resp.headers);

  dbg(0, 'body - keys', Object.keys(resp.body));
  // dbg(0, 'body - namespaces', resp.body.namespaces);
  // dbg(0, 'body - route keys', Object.keys(resp.body.routes));
  // // eslint-disable-next-line no-underscore-dangle
  // dbg(0, 'body - _links keys', Object.keys(resp.body._links));
  // // eslint-disable-next-line no-underscore-dangle
  // dbg(0, 'body - _links', resp.body._links);
  dbg(0, 'body - authentication', resp.body.authentication);

  return true;
}
