import { black, white } from "https://deno.land/std@0.193.0/fmt/colors.ts";
import { ExternalLink } from "preact-feather";

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function Feed(
  props: {
    entry: {
      title: string;
      date: Date;
      url: string;
    };
  },
) {
  const { entry } = props;

  return (
    <a
      href={entry.url}
      target="_blank"
      rel="noopener noreferrer"
      class="block"
    >
      <div class="relative bg-metal rounded-2xl px-4 py-4">
        <h2 class="text-lg font-bold text-plate leading-snug mb-1 pr-5">
          {entry.title}
        </h2>
        <h4 class="text-xs font-semibold text-cream">
          {(new Date(entry.date)).toLocaleDateString(
            "es-ES",
            options,
          )}
        </h4>
        <span class="block absolute top-0 right-0 p-3" style="color: white">
          <ExternalLink size={22} />
        </span>
      </div>
    </a>
  );
}
