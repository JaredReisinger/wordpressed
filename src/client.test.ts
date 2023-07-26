import test from 'ava';
import sinon from 'sinon';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import { Client } from './client.js';

// super simple types for testing...
export interface TestRoutes {
  '/': Record<string, never>;
  '/simple-args': { simple: number };
}

export interface TestMethodRoutes {
  Delete: TestRoutes;
  Get: TestRoutes;
  Patch: TestRoutes;
  Post: TestRoutes;
  Put: TestRoutes;
}

test('Client constructor returns something...', (t) => {
  const client = new Client<TestMethodRoutes>('http://example.org');
  t.truthy(client);
});

test('Client method wrappers leverage _call()', async (t) => {
  const client = new Client<TestMethodRoutes>('http://example.org');

  const fake = sinon.fake();
  sinon.replace(client, '_call', fake);

  await client.delete('/');
  t.true(fake.calledOnceWithExactly('DELETE', '/', undefined));
  fake.resetHistory();

  await client.get('/');
  t.true(fake.calledOnceWithExactly('GET', '/', undefined));
  fake.resetHistory();

  await client.patch('/');
  t.true(fake.calledOnceWithExactly('PATCH', '/', undefined));
  fake.resetHistory();

  await client.post('/');
  t.true(fake.calledOnceWithExactly('POST', '/', undefined));
  fake.resetHistory();

  await client.put('/');
  t.true(fake.calledOnceWithExactly('PUT', '/', undefined));
  fake.resetHistory();
});

type Resolver = Parameters<typeof rest.get>[1];

test.serial(
  'args get passed in querystring or body depending on method',
  async (t) => {
    const url = 'http://example.org/wp-json/simple-args';
    const args = { simple: 2 };

    const expectQuerystring: Resolver = async (req, res, ctx) => {
      // t.log('MSW hander got', req.params, req.url.searchParams);
      t.is(req.url.searchParams.get('simple'), args.simple.toString());
      return res(ctx.json({ unused: true }));
    };

    const expectJsonBody: Resolver = async (req, res, ctx) => {
      const json = await req.json();
      // t.log('MSW hander got', req.params, req.url.searchParams, json);
      t.deepEqual(json, args);
      return res(ctx.json({ unused: true }));
    };

    const server = setupServer(
      ...[
        rest.delete(url, expectQuerystring),
        rest.get(url, expectQuerystring),
        rest.patch(url, expectJsonBody),
        rest.post(url, expectJsonBody),
        rest.put(url, expectJsonBody),
      ]
    );

    try {
      server.listen();
      const client = new Client<TestMethodRoutes>('http://example.org');
      await client.delete('/simple-args', args);
      await client.get('/simple-args', args);
      await client.patch('/simple-args', args);
      await client.post('/simple-args', args);
      await client.put('/simple-args', args);
    } finally {
      server.close();
    }
  }
);
