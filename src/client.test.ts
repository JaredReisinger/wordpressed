import test from 'ava';
import sinon from 'sinon';

import { Client } from './client.js';

// super simple types for testing...
export interface TestRoutes {
  '/': Record<string, never>;
}

export interface TestMethodRoutes {
  Delete: TestRoutes;
  Get: TestRoutes;
  Patch: TestRoutes;
  Post: TestRoutes;
  Put: TestRoutes;
}

// There's really nothing to test, as it's all types... but at least there's an
// enum?
test('Client constructor returns something...', (t) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  const client = new Client<TestMethodRoutes>('http://example.org');
  t.truthy(client);
});

test('Client method wrappers leverage _call()', async (t) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  const client = new Client<TestMethodRoutes>('http://example.org');

  const fake = sinon.fake();
  sinon.replace(client, '_call', fake);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  await client.delete('/');
  t.true(fake.calledOnceWithExactly('DELETE', '/', undefined));
  fake.resetHistory();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  await client.get('/');
  t.true(fake.calledOnceWithExactly('GET', '/', undefined));
  fake.resetHistory();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  await client.patch('/');
  t.true(fake.calledOnceWithExactly('PATCH', '/', undefined));
  fake.resetHistory();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  await client.post('/');
  t.true(fake.calledOnceWithExactly('POST', '/', undefined));
  fake.resetHistory();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - need to figure out how to type Client correctly for this!
  await client.put('/');
  t.true(fake.calledOnceWithExactly('PUT', '/', undefined));
  fake.resetHistory();
});
