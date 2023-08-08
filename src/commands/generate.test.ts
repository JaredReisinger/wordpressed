import test from 'ava';
import os from 'os';
import * as fs from 'fs/promises';
import { Config, toStandardizedId } from '@oclif/core';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import inflection from 'inflection';

import {
  WpJson,
  WpJsonArgDesc,
  WpJsonEndpointMethod,
  WpJsonObjectProperties,
} from '../util/wpapi-types.js';
import path from 'path';

type Resolver = Parameters<typeof rest.get>[1];

async function runCommand(...args: string[]) {
  const [cmd, ...argv] = args;

  // replicate @oclif/test and fancy-test's command-running logic?
  const config = await Config.load(import.meta.url);
  const id = toStandardizedId(cmd, config);
  await config.runHook('init', { id, argv });
  return config.runCommand(id, argv);
}

const host = 'example.org';
const hostUrl = `http://${host}`;
const urlPath = '/wp-json/';
const url = `${hostUrl}${urlPath}`;

test('generate command has help', async (t) => {
  // weirdly, doing this as `generate --help` doesn't work... but `help
  // generate` does.
  const result = await t.notThrowsAsync(() => runCommand('help', 'generate'));
  t.is(result, undefined);
});

// test('generate --help should work', async (t) => {
//   // weirdly, doing this as `generate --help` doesn't work... but `help
//   // generate` does.
//   const result = await t.notThrowsAsync(() => runCommand('generate', '--help'));
//   t.is(result, undefined);
// });

test('generate needs --host (without --cache)', async (t) => {
  await t.throwsAsync(() => runCommand('generate'), {
    code: 'FLAG_MISSING',
  });
});

test('generate needs --out-dir (without --dry-run)', async (t) => {
  await t.throwsAsync(() => runCommand('generate', '--host', hostUrl), {
    code: 'FLAG_MISSING',
  });
});

// test.serial('generate --dry-run does not write files', async (t) => {
//   // weirdly, doing this as `generate --help` doesn't work... but `help
//   // generate` does.
//   const result = await t.notThrowsAsync(() =>
//     runCommand('generate', '--dry-run')
//   );
//   t.is(result, undefined);
// });

// TODO: use msw to seed a fake API, and check for specific file creation?

test.serial('empty wp-json data does not crash', async (t) => {
  // const args = { simple: 2 };

  const expectWpJson: Resolver = async (req, res, ctx) => {
    // t.log('MSW hander got', req.params, req.url, req.url.searchParams);
    // t.is(req.url.searchParams.get('simple'), args.simple.toString());

    t.is(req.url.host, host);
    t.is(req.url.pathname, urlPath);

    return res(
      ctx.json<WpJson>({
        _links: {},
        authentication: {},
        description: 'dummy host',
        gmt_offset: 0,
        home: '',
        name: 'dummy server',
        namespaces: [],
        routes: {},
        site_icon_url: '',
        site_icon: 0,
        site_logo: 0,
        timezone_string: 'utc',
        url: url,
      })
    );
  };

  const server = setupServer(rest.get(url, expectWpJson));

  try {
    server.listen();
    await t.notThrowsAsync(() =>
      runCommand('generate', '--host', 'http://example.org', '--dry-run')
    );
  } finally {
    server.close();
  }
});

test.serial('simple wp-json data does not crash', async (t) => {
  const host = 'example.org';
  const urlPath = '/wp-json/';
  const url = `http://${host}${urlPath}`;
  // const args = { simple: 2 };

  const expectWpJson: Resolver = async (req, res, ctx) => {
    // t.log('MSW hander got', req.params, req.url, req.url.searchParams);
    // t.is(req.url.searchParams.get('simple'), args.simple.toString());

    t.is(req.url.host, host);
    t.is(req.url.pathname, urlPath);

    return res(
      ctx.json<WpJson>({
        _links: {},
        authentication: {},
        description: 'dummy host',
        gmt_offset: 0,
        home: '',
        name: 'dummy server',
        namespaces: ['test'],
        routes: {
          '/test': {
            namespace: 'test',
            methods: [WpJsonEndpointMethod.GET],
            endpoints: [
              {
                methods: [WpJsonEndpointMethod.GET],
                args: {
                  someString: {
                    description: 'a string arg',
                    type: 'string',
                  },
                },
              },
            ],
          },
        },
        site_icon_url: '',
        site_icon: 0,
        site_logo: 0,
        timezone_string: 'utc',
        url: url,
      })
    );
  };

  const server = setupServer(rest.get(url, expectWpJson));

  try {
    server.listen();
    await t.notThrowsAsync(() =>
      runCommand('generate', '--host', 'http://example.org', '--dry-run')
    );
  } finally {
    server.close();
  }
});

test.serial('namespace "index" in wp-json is error', async (t) => {
  const host = 'example.org';
  const urlPath = '/wp-json/';
  const url = `http://${host}${urlPath}`;
  // const args = { simple: 2 };

  const expectWpJson: Resolver = async (req, res, ctx) => {
    // t.log('MSW hander got', req.params, req.url, req.url.searchParams);
    // t.is(req.url.searchParams.get('simple'), args.simple.toString());

    t.is(req.url.host, host);
    t.is(req.url.pathname, urlPath);

    return res(
      ctx.json<WpJson>({
        _links: {},
        authentication: {},
        description: 'dummy host',
        gmt_offset: 0,
        home: '',
        name: 'dummy server',
        namespaces: ['index'],
        routes: {
          '/index': {
            namespace: 'index',
            methods: [WpJsonEndpointMethod.GET],
            endpoints: [
              {
                methods: [WpJsonEndpointMethod.GET],
                args: {
                  someString: {
                    description: 'a string arg',
                    type: 'string',
                  },
                },
              },
            ],
          },
        },
        site_icon_url: '',
        site_icon: 0,
        site_logo: 0,
        timezone_string: 'utc',
        url: url,
      })
    );
  };

  const server = setupServer(rest.get(url, expectWpJson));

  try {
    server.listen();
    await t.throwsAsync(() =>
      runCommand('generate', '--host', 'http://example.org', '--dry-run')
    );
  } finally {
    server.close();
  }
});

test.serial('handles known argument types', async (t) => {
  const host = 'example.org';
  const urlPath = '/wp-json/';
  const url = `http://${host}${urlPath}`;
  // const args = { simple: 2 };

  const expectWpJson: Resolver = async (req, res, ctx) => {
    // t.log('MSW hander got', req.params, req.url, req.url.searchParams);
    // t.is(req.url.searchParams.get('simple'), args.simple.toString());

    t.is(req.url.host, host);
    t.is(req.url.pathname, urlPath);

    return res(
      ctx.json<WpJson>({
        _links: {},
        authentication: {},
        description: 'dummy host',
        gmt_offset: 0,
        home: '',
        name: 'dummy server',
        namespaces: ['test'],
        routes: {
          '/test': {
            namespace: 'test',
            methods: [WpJsonEndpointMethod.GET],
            endpoints: [
              {
                methods: [WpJsonEndpointMethod.GET],
                args: {
                  someArrayOfStrings: {
                    description: 'an array of strings arg',
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },

                  someArrayOfIntegers: {
                    description: 'an array of intergers arg',
                    type: 'array',
                    items: {
                      type: 'integer',
                    },
                  },

                  // bulk-generate the simple types...
                  ...(
                    [
                      'boolean',
                      'float',
                      'int',
                      'integer',
                      'number',
                      'null',
                      'string',
                      'text',
                    ] as const
                  ).reduce<Record<string, WpJsonArgDesc>>((memo, typeStr) => {
                    memo[`some${inflection.camelize(typeStr)}`] = {
                      description: `a(n) ${typeStr} arg`,
                      type: typeStr,
                    };
                    return memo;
                  }, {}),

                  someObject: {
                    description: 'an object arg',
                    type: 'object',
                    properties: {
                      // bulk-generate the simple types...
                      ...(
                        [
                          'boolean',
                          // 'float',
                          // 'int',
                          'integer',
                          'number',
                          // 'null',
                          'string',
                          // 'text',
                        ] as const
                      ).reduce<WpJsonObjectProperties>((memo, typeStr) => {
                        memo[`some${inflection.camelize(typeStr)}`] = {
                          description: `a(n) ${typeStr} arg`,
                          type: typeStr,
                          context: ['view'],
                        };
                        return memo;
                      }, {}),
                    },
                  },
                },
              },
            ],
          },
        },
        site_icon_url: '',
        site_icon: 0,
        site_logo: 0,
        timezone_string: 'utc',
        url: url,
      })
    );
  };

  const server = setupServer(rest.get(url, expectWpJson));

  // need a temporary directory for the output files?
  const tmpDir = await fs.mkdtemp(
    path.join(os.tmpdir(), 'wordpressed-generate-')
  );
  // t.log('tmpDir:', tmpDir);

  try {
    server.listen();
    await t.notThrowsAsync(() =>
      runCommand(
        'generate',
        '--host',
        'http://example.org',
        '--out-dir',
        tmpDir
      )
    );
    // check to see if the files exist and what they look like!
    const files = await fs.readdir(tmpDir);
    // the deepEqual is redundant with the snapshot testing, but helps make
    // the logic here easier to understand
    t.deepEqual(files, ['index.ts', 'test.ts']);

    // use snapshot testing to verify contents
    for (const file of files) {
      t.snapshot(file);
      const content = await fs.readFile(path.join(tmpDir, file), {
        encoding: 'utf8',
      });
      t.log('FILE CONTENTS', file, '\n----------\n' + content + '\n----------');
      t.snapshot(content);
    }
  } finally {
    server.close();
    // delete tmp files
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
});
