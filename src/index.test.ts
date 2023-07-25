import test from 'ava';

import { Client } from './index.js';

// There's really nothing to test, as it's all types... but at least there's an
// enum?
test('Client constructor returns something...', (t) => {
  const client = new Client('http://example.org');
  t.truthy(client);
});
