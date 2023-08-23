/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import { freshSEOPlugin } from "https://deno.land/x/fresh_seo@1.0.1/mod.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, {
  plugins: [
    twindPlugin(twindConfig),
    freshSEOPlugin(manifest),
  ],

  render: (ctx, render) => {
    ctx.lang = "es";
    render();
  },
});
