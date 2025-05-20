import jsonProfile from "../profile/profile_home.json" assert { type: "json" };
import type Profile from "../profile/type.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import fetchMarkdown from "@/utils/markdown.ts";
import { CSS, render } from "$gfm";

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
        <title>About me</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <a
        class="bg-metal px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/"
      >
        <ArrowLeft size={18} color="#c9d1d9" stroke-width={2.5} />
      </a>
      <body data-color-mode="dark" data-dark-theme="dark" class="bg-black">
        <article class="max-w-screen-md px-4 pt-8 pb-16 md:pt-16 mx-auto">
          <div
            class="mt-8 markdown-body"
            dangerouslySetInnerHTML={{ __html: render(readmeText) }}
          />
        </article>
      </body>
    </>
  );
}
