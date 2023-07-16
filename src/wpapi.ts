/* eslint-disable no-use-before-define */
// an attempt at a new and modern WordPress REST API client
import got from 'got';

export interface WpJson {
  _links: Record<string, Link[]>;
  authentication: Record<string, Authentication>;
  description: string;
  gmt_offset: number;
  home: string;
  name: string;
  namespaces: string[];
  routes: Record<string, Route>; // key is "/" + endpoint... plus more?
  site_icon_url: string;
  site_icon: number;
  site_logo: number;
  timezone_string: string;
  url: string;
}

export interface Link {
  embeddable?: true;
  href: string;
  type?: string; // site_logo, site_icon
  name?: string;
  templated?: true;
}

export interface Authentication {
  endpoints: {
    authorization: string;
  };
}

export interface Route {
  namespace: keyof EndpointTypes;
  methods: EndpointMethod[];
  endpoints: {
    methods: EndpointMethod[];
    args: Record<string, ArgDesc>;
  }[];
  _links?: unknown;
}

export enum EndpointMethod {
  DELETE = 'DELETE',
  GET = 'GET',
  PATCH = 'PATCH',
  POST = 'POST',
  PUT = 'PUT',
  // missing: OPTIONS, HEAD, etc.
}

// export type Method = 'DELETE' | 'GET' | 'PATCH' | 'POST' | 'PUT';

// ArgTypes from empirical analysis
export interface ArgTypes {
  array: ArgArray & ArgBase;
  boolean: ArgBoolean & ArgBase;
  file: ArgFile & ArgBase;
  float: ArgInteger & ArgBase;
  int: ArgInteger & ArgBase;
  integer: ArgInteger & ArgBase;
  null: ArgNull & ArgBase;
  number: ArgInteger & ArgBase;
  object: ArgObject & ArgBase;
  string: ArgString & ArgBase;
  text: ArgString & ArgBase;
}

// There's also the case of "type: [...]" where an arg is typed as a *list* of
// types... the case of `[foo, null]` just means nullable, but some of the
// others will take some investigation, and some work to represent in
// Typescript.

export type ArgType = keyof ArgTypes;

// Arg properties from empirical analysis, to ensure they only apply to the
// appropriate ArgType.

// common to all args
export interface ArgBase {
  description: string;
  required?: boolean;
  // default is common, but needs to match the type!
}

export interface ArgArray {
  type: 'array';
  default?: unknown[]; // depends on item type?
  items?: Record<string, unknown>; // *should* be required, some don't use it
  maxItems?: number;
  minItems?: number;
  oneOf?: unknown[];
  uniqueItems?: boolean;
}

export interface ArgBoolean {
  type: 'boolean';
  default?: boolean;
}

export interface ArgFile {
  type: 'file';
}

// also used for 'float', 'int', and 'number'
export interface ArgInteger {
  type: 'integer' | 'float' | 'int' | 'number';
  default?: number;
  exclusiveMaximum?: boolean; // only in 1 case... questionable?
  exclusiveMinimum?: boolean; // only in 1 case... questionable?
  maximum?: number;
  minimum?: number;
  multipleOf?: number;
}

export interface ArgNull {
  type: 'null';
}

export interface ArgObject {
  type: 'object';
  default?: unknown;
  oneOf?: unknown[];
  properties: ObjectProperties; // *should* be required!
}

// also used for 'text'
export interface ArgString {
  type: 'string' | 'text';
  default?: string;
  enum?: string[];
  format?: string;
  minLength?: number;
  pattern?: string;
}

// The fields for an Arg depend on its type
export type ArgDesc = ArgTypes[ArgType];

// array item properties are similar to args themselves, but not quite (at
// least from what I've seen).  They have far fewer keys/values.
export interface ArrayItem {}

export type ObjectProperties = Record<string, ObjectProperty>;

// object properties are similar to args themselves, but not quite (at
// least from what I've seen).  They have far fewer keys/values.
export interface ObjectProperty {
  description: string;
  type: ObjectPropertyType | (ObjectPropertyType | 'null')[];
  format?: 'email';
  context: ('view' | 'edit')[];
  readonly?: boolean; // true?
}

export type ObjectPropertyType =
  | 'object'
  | 'string'
  | 'number'
  | 'boolean'
  | 'integer'
  | 'array';

// default endpoint-to-type mappings... for each endpoint, the "type" is a tuple
// of: [0]: response type for 'get' [1]: body type for 'post' [2]: response type
// for 'post'
//
// Note that endpoints are more-specific than namespaces... it's not obvious
// whether we need namespaces as a top-level concept... but a "namespace-client"
// might be a useful concept.
export interface EndpointTypes {
  '': [WpJson, never, never];
  'wp/v2': [string, number[], number];
}

export class Client {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  async get<
    E extends keyof EndpointTypes = keyof EndpointTypes,
    R extends EndpointTypes[E][0] = EndpointTypes[E][0],
  >(endpoint: E) {
    const url = `${this.host}/wp-json/${endpoint}`;
    console.log('calling GET', url);
    const resp = await got<R>(url, { responseType: 'json' });
    return resp;
  }

  async post<
    E extends keyof EndpointTypes = keyof EndpointTypes,
    B extends EndpointTypes[E][1] = EndpointTypes[E][1],
    R extends EndpointTypes[E][2] = EndpointTypes[E][2],
  >(endpoint: E, body: B) {
    const url = `${this.host}/wp-json/${endpoint}`;
    console.log('calling POST', url);
    const resp = await got<R>(url, { responseType: 'json', json: body });
    return resp;
  }
}
