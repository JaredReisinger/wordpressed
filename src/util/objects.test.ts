import test from 'ava';

import { byProperty, exists } from './objects.js';

test('exists()', (t) => {
  const cases = [
    [null, false],
    [undefined, false],
    [0, false], // is this what we want?
    ['', false], // is this what we want?
    [[], true],
    [{}, true],
  ] as const;

  cases.forEach(([input, expected]) => {
    const actual = exists(input);
    t.is(actual, expected);
  });
});

test('byProperty()', (t) => {
  const cases = [
    ['foo', { foo: 1 }, { foo: 2 }, -1],
    ['foo', { foo: 2 }, { foo: 1 }, 1],
    ['foo', { foo: 1 }, { foo: 1 }, 0],
    ['foo', { foo: 'a' }, { foo: 'b' }, -1],
    ['foo', { foo: 'b' }, { foo: 'a' }, 1],
    ['foo', { foo: 'a' }, { foo: 'a' }, 0],
  ] as const;

  cases.forEach(([name, a, b, expected]) => {
    const fn = byProperty(name);
    const actual = fn(a, b);
    t.is(actual, expected);
  });
});
