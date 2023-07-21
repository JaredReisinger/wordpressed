// import util from 'util';
import 'dotenv/config';

import { Client } from '../index.js';
import { WpJson } from '../util/wpapi.js';
import { dbg, err, out } from '../util/helpers.js';

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

  const wpjson = await client.get<WpJson>('/');

  dbg(0, 'wp-json headers', wpjson.headers);
  dbg(0, 'wp-json body - keys', Object.keys(wpjson.body));

  // console.log(util.inspect(wpjson.body, true, 2, true));

  // console.log(util.inspect(wpjson.body.routes['/wc/v3/orders'], true, 8, true));
  // console.log(util.inspect(wpjson.body.routes['/wp/v2'], true, 8, true));

  const wcv3 = await client.get('/wc/v3');
  dbg(0, '/wc/v3 headers', wcv3.headers);
  dbg(0, '/wc/v3 body', wcv3.body);

  const wcv3orders = await client.get('/wc/v3/orders');
  dbg(0, '/wc/v3/orders headers', wcv3orders.headers);
  dbg(0, '/wc/v3/orders body', wcv3orders.body);

  // image example!

  // const pages = await client.get('/wp/v2/pages', {
  //   bogus: 'This gets flagged!',
  //   // but auto-complete can help!
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // });

  // console.log(pages);
}
