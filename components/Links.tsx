import { Link } from "preact-feather";

export default function Links(
  props: { link: { url: string; title: string } },
) {
  const { link } = props;

  return (
    <li>
      <a
        class="flex justify-between bg-gray-100 rounded-lg px-6 py-3 w-full items-center"
        href={link.url}
        rel="noopener noreferrer"
      >
        <span>{link.title}</span>
        <Link size={18} />
      </a>
    </li>
  );
}
