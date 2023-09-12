/// <reference lib="deno.unstable" />

import { HandlerContext } from "$fresh/server.ts";
import satori, { SatoriOptions } from "https://esm.sh/satori@0.10.4";

const kv = await Deno.openKv();

const maxDigits = 12;
const width = 16 * 18.75;
const height = 16 * 4;
const options: SatoriOptions = {
  width,
  height,
  fonts: [
    {
      name: "JetBrainsMono",
      data: await Deno.readFile("static/JetBrainsMono-Medium.ttf"),
      weight: 500,
      style: "medium",
    },
  ],
};

export const handler = async (
  req: Request,
  _ctx: HandlerContext,
): Promise<Response> => {
  const referer = req.headers.get("referer");
  let total = 0;

  if (referer) {
    const url = new URL(referer);
    const key = ["url", url.origin + url.pathname];

    const result = await kv.get<number>(key);
    total = (result.value ?? 0) + 1;
    await kv.set(key, total);
  }

  const pad = "0".repeat(maxDigits - total.toString().length);
  const svg = await satori(
    <div
      style={{
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: `${width}px`,
        height: `${height}px`,
        border: "3px solid #25262b",
        borderRadius: `${height / 6}px`,
        color: "#f1f3f5",
        background: "#101113",
        fontSize: `${16 * 2.25}px`,
      }}
    >
      <span
        style={{
          color: "#2c2e33",
        }}
      >
        {pad}
      </span>
      {total}
    </div>,
    options,
  );

  const headers = new Headers({
    "Content-Type": "image/svg+xml",
    "Cache-Control": "no-store",
  });

  return new Response(svg, {
    status: 200,
    headers,
  });
};
