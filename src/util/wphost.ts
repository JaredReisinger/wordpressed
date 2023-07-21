// fetches the base wp-json info from a host or a cached file
import fs from 'fs/promises';
import 'dotenv/config';

import { Client, WpJson } from './wpapi.js';
// import { dbg, err, out } from './helpers.js';

const cacheFile = './.temp/wpjson.json';
const fileOptions = { encoding: 'utf8' } as const;

export async function getWpJson(
  host: URL | string | undefined = process.env.WP_HOST,
  useCachedFile = false
) {
  let wpjson: WpJson;

  if (!useCachedFile) {
    const client = new Client(host ?? 'BROKEN');
    const resp = await client.get('');
    // const { headers, body: wpjson } = resp;
    // dbg(1, 'headers', headers);
    wpjson = resp.body;

    // write cache file!
    await fs.writeFile(cacheFile, JSON.stringify(wpjson), fileOptions);
  } else {
    const json = await fs.readFile(cacheFile, fileOptions);
    wpjson = JSON.parse(json);
  }

  return wpjson;
}
