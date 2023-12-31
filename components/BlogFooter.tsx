import { Rss } from "preact-feather";

export default function Footer(props: { author?: string }) {
  return (
    <footer class="w-10/12 sm:w-96 mx-auto flex flex-col items-center mt-8 mb-4">
      <p class="flex items-center gap-2.5 text-white text-sm">
        <a
          href="/feed"
          class="inline-flex items-center gap-1"
          title="Atom Feed"
        >
          <IconRssFeed /> RSS
        </a>
      </p>
    </footer>
  );
}

function IconRssFeed() {
  return (
    <svg
      class="inline-block w-4 h-4"
      viewBox="0 0 20 20"
      fill="#c9d1d9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
      <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
  );
}
