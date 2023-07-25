import test from 'ava';

import { WpJsonEndpointMethod } from './wpapi-types.js';

// There's really nothing to test, as it's all types... but at least there's an
// enum?
test('WpJsonEndpointMethod', (t) => {
  t.is(WpJsonEndpointMethod.DELETE as string, 'DELETE');
  t.is(WpJsonEndpointMethod.GET as string, 'GET');
  t.is(WpJsonEndpointMethod.PATCH as string, 'PATCH');
  t.is(WpJsonEndpointMethod.POST as string, 'POST');
  t.is(WpJsonEndpointMethod.PUT as string, 'PUT');
});
