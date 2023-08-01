import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getPost, Post } from "@/utils/posts.ts";
import { CSS, render } from "$gfm";
import Tags from "../components/Tags.tsx";

import { ArrowLeft } from "preact-feather";
import Changer from "../islands/ToggleTheme.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const post = await getPost(ctx.params.slug);
      return ctx.render(post as Post);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

export default function PostPage(props: PageProps<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>
      <a
        class="bg-gray-100 px-2 py-2 rounded-lg fixed top-4 left-4"
        href="/blog"
      >
        <ArrowLeft size={18} color="#1f2937" stroke-width={2.5} />
      </a>
      <article class="max-w-screen-md px-4 pt-8 pb-16 md:pt-16 mx-auto">
        <div class="mx-auto max-w-screen-sm max-w-lg w-full mt-4 sm:mt-0">
          {post.coverHtml && <img src={post.coverHtml} alt={post.title} />}
        </div>
        <h1 class="mt-6 text-5xl font-bold">{post.title}</h1>
        <div class="mt-8">
          <p>
            <time class="text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("es-es", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <p>
            <span class="">{post.author}</span>
          </p>
          <div class="flow-root mt-8 text-sm text-gray-600">
            <p class="-m-2 flex flex-row">
              <Tags tags={post.tags} />
            </p>
          </div>
        </div>
        <div
          class="mt-8 markdown-body"
          dangerouslySetInnerHTML={{ __html: render(post.content) }}
        />
      </article>
    </>
  );
}
