// An example use-case for the wordpressed client
import 'dotenv/config';

import { Client, Options } from '../index.js';

await main();

// Note that there's no nice CLI for this example; it's *just* the logic for
// calling a WordPress host via the client library. It is assumed that the host
// URL is available in the `WP_HOST` environment variable (or .env file).
async function main() {
  const client = new Client(process.env.WP_HOST!, {
    // @ts-expect-error -- complains about missing properties, but we *don't*
    // need all of the hooks.  (The types for this are overly strict.) We need
    // the beforeRequest hook to graft on WooCommerce's authentication bits.
    hooks: { beforeRequest: [graftWCAuth] },
  });

  // WooCommerce (v3) "get me all orders between July 15th and August 1st, 2023"
  // request.
  const response = await client.get('/wc/v3/orders', {
    after: '2023-07-15T00:00:00Z',
    before: '2023-08-01T00:00:00Z',
    per_page: 100, // maximum size (need to add 'get all' to client?)
  });

  const orders = response.body;

  // The order.total is a string, because you *could* have a different currency,
  // etc.for each order, *and* floating-point numbers aren't accurate enough for
  // financial transactions in general.  In our case, we know these are
  // 2-decimal-place US$ orders, so we'll blindy parse them as floats.
  const grandTotal = orders.reduce(
    (acc, order) => acc + parseFloat(order.total),
    0
  );

  // In my particular example call, this results in:
  //   got 61 orders, totaling $3418.00
  console.log(
    `got ${orders.length} orders, totaling $${grandTotal.toFixed(2)}`
  );
}

/**
 * Graft WooCommerce authentication (the simple version) onto the request.
 * @param options `got` request options
 */
async function graftWCAuth(options: Options) {
  // WooCommerce (this example's one API call) allows the key/secret to be
  // passed as basic authentcation username/password if the server is using
  // HTTPS... only insecure HTTP needs the one-legged OAuth solution. Since my
  // example server happens to use HTTPS, I can omit the more-complicated OAuth
  // mess and just set the username and password.
  options.username = process.env.WC_KEY!;
  options.password = process.env.WC_SECRET!;
}
