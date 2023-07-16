// fetches the base wp-json info from a host or a cached file
import fs from 'fs/promises';
import 'dotenv/config';

import { Client, WpJson } from '../../index.js';
// import { dbg, err, out } from './helpers.js';

const fetchWpJson = false; // true; // fetch live vs. use cached file...
const cacheFile = './.temp/wpjson.json';
const fileOptions = { encoding: 'utf8' } as const;

export async function getWpJson() {
  let wpjson: WpJson;

  if (fetchWpJson) {
    const client = new Client(process.env.WP_HOST!);
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
