import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";
import Footer from "../../components/BlogFooter.tsx";

import jsonProfile from "../../profile/profile_blog.json" assert {
  type: "json",
};
import type Profile from "../../profile/type.ts";

import AvatarComponent from "../../components/Avatar.tsx";
import UsernameComponent from "../../components/Username.tsx";
import BioComponent from "../../components/Bio.tsx";
import LocationComponent from "../../components/Location.tsx";
import SocialLinksComponent from "../../components/SocialLinks.tsx";
import BannerComponent from "../../components/Banner.tsx";
import ReadmeButtonComponent from "../../components/ReadmeButton.tsx";
import Tags from "../../components/Tags.tsx";
import { FileText } from "preact-feather";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await getPosts();
    const tag = "religion";
    const filteredPosts = posts.filter((post) => post.tags?.includes(tag));
    return ctx.render(filteredPosts);
  },
};

export default function Blog(props: PageProps<Post[]>) {
  const profile: Profile = jsonProfile;
  const {
    avatar,
    username,
    bio,
    location,
    socialAccounts,
    banner,
    links,
    readme,
  } = profile;

  const posts = props.data;

  return (
    <>
      <Head>
        <title>Blog - Andrew 1412</title>
      </Head>
      <body class="bg-black">
        <main class="w-10/12 sm:w-96 mx-auto">
          <div class="flex flex-col w-full mt-12">
            <div class="flex flex-col items-center w-full w-full rounded-xl p-4">
              <AvatarComponent avatar={avatar} />
              <UsernameComponent username={username} />
              <BioComponent bio={bio} />
              {readme && <ReadmeButtonComponent />}
            </div>
            <div class="flex flex-col items-center w-full p-4 mt-4 text-sm">
              <div class="-m-4 flex flex-row flex-wrap text-gray font-bold">
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/analisis"
                >
                  #analisis
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/anime"
                >
                  #anime
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/cine"
                >
                  #cine
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/gaming"
                >
                  #gaming
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/manga"
                >
                  #manga
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/opinion"
                >
                  #opinión
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/politica"
                >
                  #política
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/reflexiones"
                >
                  #reflexiones
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline bg-metal rounded"
                  href="/blog"
                >
                  #religión
                </a>
                <a
                  class="m-2 py-1 px-2 hover:underline"
                  href="/blog/tecnologia"
                >
                  #tecnología
                </a>
              </div>
            </div>
            <div class="mt-8" style="color: #21262d">
              {posts.length > 0
                ? posts.map((post) => <PostCard post={post} />)
                : (
                  <div class="flex flex-col items-center space-y-1 py-8">
                    <FileText size={32} color="#cdc8c2" />
                    <h2 class="text-sm font-bold text-opaque leading-tight mb-1">
                      No hay publicaciones todavia.
                    </h2>
                  </div>
                )}
            </div>
          </div>
        </main>
        <Footer />
      </body>
    </>
  );
}

function PostCard(props: { post: Post }) {
  const { post } = props;
  return (
    <>
      <div class="py-8 border(t gray-200)">
        <div class="w-56">
          <p>
            <time class="text-opaque">
              {new Date(post.publishedAt).toLocaleDateString("es-es", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
          <p>
            <span class="text-plate">{post.author}</span>
          </p>
          <div class="flow-root mt-8 text-sm text-gray">
            <Tags tags={post.tags} />
          </div>
        </div>
        <a class="sm:col-span-2" href={`/${post.slug}`}>
          <h3 class="text(3xl white) font-bold">
            {post.title}
          </h3>
          <div class="mt-4 text-plate">
            {post.snippet}
          </div>
        </a>
      </div>
    </>
  );
}
