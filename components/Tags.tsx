export default function Tags({ tags }: { tags?: string[] }) {
  return tags && tags.length > 0
    ? (
      <section class="flex gap-x-2 flex-wrap">
        {tags?.map((tag) => (
          <a
            class="text-bluegray-500 font-bold hover:underline"
            href={`/blog/${tag}`}
          >
            #{tag}
          </a>
        ))}
      </section>
    )
    : null;
}
