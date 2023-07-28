import { Post } from "../utils/posts.ts";

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
