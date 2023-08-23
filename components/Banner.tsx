import { Star } from "preact-feather";

export default function Banner(
  props: { title: string; text: string },
) {
  const { title, text } = props;

  return (
    <div class="rounded-2xl px-4 py-4 mb-4 min-w-full bg-blue">
      <div class="flex space-x-4">
        <div>
          <Star size={20} color={"#89b5fa"} />
        </div>
        <div>
          <h2 class="font-bold leading-tight mb-1" style="color: #d6d3cd;">
            {title}
          </h2>
          <p class="text-sm" style="color: #b1aaa0;">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
