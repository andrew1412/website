import { extract } from "$std/encoding/front_matter.ts";
import { join } from "$std/path/posix.ts";
import * as ammonia from "ammonia";
import { marked } from "marked";

export interface About {
  title: string;
  content: string;
}

export async function getAbout(url: string): Promise<About | null> {
  const response = await fetch(url);
  const responseText = await response.text();

  const text = await Deno.readTextFile(join(responseText));

  const { attrs, body } = extract<
    {
      title: string;
    }
  >(text);
  return {
    title: attrs.title,
    content: body,
  };
}

const fetchMarkdown = async (url: string) => {
  const response = await fetch(url);
  const responseText = await response.text();

  await ammonia.init();
  const parsedMarkdown = ammonia.clean(
    marked.parse(responseText, { gfm: true }),
  );

  return parsedMarkdown;
};

export default fetchMarkdown;
