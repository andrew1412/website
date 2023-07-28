import { extract } from "$std/encoding/front_matter.ts";
import { join } from "$std/path/posix.ts";

const DIRECTORY = "./posts";

export interface Post {
  slug: string;
  coverHtml?: string;
  title: string;
  publishedAt: Date;
  author?: string;
  tags?: string[];
  snippet: string;
  content: string;
}

export default function filterPosts(
  posts: Map<string, Post>,
  searchParams: URLSearchParams,
) {
  const tag = searchParams.get("tag");
  if (!tag) {
    return posts;
  }
  return new Map(
    Array.from(posts.entries()).filter(([, p]) => p.tags?.includes(tag)),
  );
}

export async function getTests(tag: string): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  let posts = await Promise.all(promises) as Post[];
  if (tag) {
    posts = posts.filter((p) => p.tags?.includes(tag));
  }
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

// Get posts (card).
export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir(DIRECTORY);
  const promises = [];
  for await (const file of files) {
    const slug = file.name.replace(".md", "");
    promises.push(getPost(slug));
  }
  const posts = await Promise.all(promises) as Post[];
  posts.sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  return posts;
}

// Get post (page).
export async function getPost(slug: string): Promise<Post | null> {
  const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
  const { attrs, body } = extract<
    {
      title: string;
      published_at: string;
      snippet: string;
      coverHtml: string;
      author: string;
      tags: string[];
    }
  >(text);
  return {
    slug,
    coverHtml: attrs.coverHtml,
    title: attrs.title,
    publishedAt: new Date(attrs.published_at),
    author: attrs.author,
    tags: attrs.tags,
    snippet: attrs.snippet,
    content: body,
  };
}
