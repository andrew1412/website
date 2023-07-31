import jsonProfile from "../profile/profile_home.json" assert { type: "json" };
import type Profile from "../profile/type.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import fetchMarkdown from "@/utils/markdown.ts";
import { CSS, render } from "$gfm";
import { css, theme, tw } from "twind/css";

import { ArrowLeft } from "preact-feather";

type HandlerProps = {
  readmeText: string;
};

export const handler: Handlers<HandlerProps> = {
  async GET(_, ctx) {
    const profile: Profile = jsonProfile;
    const { readme } = profile;

    if (readme) {
      const readmeText = await fetchMarkdown(readme);
      return ctx.render({
        readmeText,
      });
    } else {
      return new Response("", {
        status: 307,
        headers: { Location: "/" },
      });
    }
  },
};

export default function AboutPage({ data }: PageProps<HandlerProps>) {
  const { readmeText } = data;
  return (
    <>
      <Head>
        <title>Sobre mi</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <a
        class="bg-gray-100 px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/"
      >
        <ArrowLeft size={18} color="#1f2937" stroke-width={2.5} />
      </a>
      <main
        dangerouslySetInnerHTML={{ __html: readmeText }}
        class={`prose prose-sm sm:prose lg:prose-lg mx-auto pt-20 pb-12 px-6 ${
          tw(css({
            code: {
              "&::before": { content: "none" },
              "&::after": { content: "none" },
              background: theme("colors.gray.200"),
              padding: "3px 5px",
              borderRadius: "6px",
            },
            a: {
              color: theme("colors.blue.600"),
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            },
            ul: {
              listStyle: "disc",
              paddingInlineStart: "40px",
              li: {
                paddingLeft: "8px",
              },
            },
          }))
        }`}
      />
    </>
  );
}
