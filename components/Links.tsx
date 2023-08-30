import { ChevronRight, Link } from "preact-feather";

export default function Links(
  props: { link: { url: string; title: string } },
) {
  const { link } = props;

  return (
    <li>
      <a
        class="flex justify-between bg-metal rounded-lg px-6 py-3 w-full items-center text-white"
        href={link.url}
        rel="noopener noreferrer"
      >
        <span>{link.title}</span>
        <ChevronRight size={18} style="color: #c9d1d9" />
      </a>
    </li>
  );
}
