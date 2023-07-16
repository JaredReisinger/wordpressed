import util from 'util';
import 'dotenv/config';

import { Client } from '../index.js';
import { dbg, err, out } from './util/helpers.js';

try {
  await adhoc();
} catch (e) {
  if (e instanceof Error) {
    err(e);
  } else {
    err(`unknown error: ${e}`);
  }
  process.exit(1);
}

// adhoc().catch((e) => {
//   err(e);
//   process.exit(1);
// });

async function adhoc() {
  out('beginning adhoc...');
  const client = new Client(process.env.WP_HOST!);
  // await client.dummy();

  const wpjson = await client.get('');

  dbg(0, 'headers', wpjson.headers);
  dbg(0, 'body - keys', Object.keys(wpjson.body));

  // console.log(util.inspect(wpjson.body, true, 2, true));

  console.log(util.inspect(wpjson.body.routes['/wc/v3/orders'], true, 8, true));
  console.log(util.inspect(wpjson.body.routes['/wp/v2'], true, 8, true));
}
