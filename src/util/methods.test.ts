import test from 'ava';
import { WpJsonEndpointMethod } from './wpapi-types.js';

import { humanizeMethodList, normalizeMethodList } from './methods.js';

const DELETE = WpJsonEndpointMethod.DELETE;
const GET = WpJsonEndpointMethod.GET;
const PATCH = WpJsonEndpointMethod.PATCH;
const POST = WpJsonEndpointMethod.POST;
// const PUT = WpJsonEndpointMethod.PUT;

test('normalizeMethodList() dedupes methods', (t) => {
  const actual = normalizeMethodList([GET, GET]);

  t.deepEqual(actual, [GET]);
});

test('normalizeMethodList() canonicalizes order', (t) => {
  const actual = normalizeMethodList([GET, DELETE]);

  t.deepEqual(actual, [DELETE, GET]);
});

test('humanizeMethodList() creates a human-style list', (t) => {
  type Case = [Parameters<typeof humanizeMethodList>, string];

  const cases: Case[] = [
    [[[], undefined, undefined], '(none)'],
    [[[GET], undefined, undefined], 'GET'],
    [[[GET, POST], undefined, undefined], 'GET and POST'],
    [[[GET, PATCH, POST], undefined, undefined], 'GET, PATCH, and POST'],
    [[[], true, undefined], '(none) methods'],
    [[[GET], true, undefined], 'GET method'],
    [[[GET, POST], true, undefined], 'GET and POST methods'],
    [[[GET, PATCH, POST], true, undefined], 'GET, PATCH, and POST methods'],
    [[[], undefined, 'or'], '(none)'],
    [[[GET], undefined, 'or'], 'GET'],
    [[[GET, POST], undefined, 'or'], 'GET or POST'],
    [[[GET, PATCH, POST], undefined, 'or'], 'GET, PATCH, or POST'],
    [[[], true, 'or'], '(none) methods'],
    [[[GET], true, 'or'], 'GET method'],
    [[[GET, POST], true, 'or'], 'GET or POST methods'],
    [[[GET, PATCH, POST], true, 'or'], 'GET, PATCH, or POST methods'],
  ];

  cases.forEach(([input, expected]) => {
    const actual = humanizeMethodList(...input);
    t.is(actual, expected);
  });
});
