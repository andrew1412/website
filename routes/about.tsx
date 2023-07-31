import jsonProfile from "../profile/profile_home.json" assert { type: "json" };
import type Profile from "../profile/type.ts";

import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { About, getAbout } from "@/utils/markdown.ts";
import { CSS, render } from "$gfm";

import { ArrowLeft } from "preact-feather";

export const handler: Handlers<About> = {
  async GET(_req, ctx) {
    const profile: Profile = jsonProfile;
    const { readme } = profile;

    if (readme) {
      const about = await getAbout(readme);
      return ctx.render(about as About);
    } else {
      return new Response("", {
        status: 307,
        headers: { Location: "/" },
      });
    }
  },
};

export default function AboutPage(props: PageProps<About>) {
  const about = props.data;
  return (
    <>
      <Head>
        <title>{about.title}</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <a
        class="bg-gray-100 px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/"
      >
        <ArrowLeft size={18} color="#1f2937" stroke-width={2.5} />
      </a>
      <article class="max-w-screen-md px-4 pt-8 pb-16 md:pt-16 mx-auto">
        <h1 class="mt-6 text-5xl font-bold">{about.title}</h1>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(about.content) }}
        />
      </article>
    </>
  );
}
