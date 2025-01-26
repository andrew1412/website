import { Star } from "preact-feather";

export default function Banner(
  props: { title: string; text: string },
) {
  const { title, text } = props;

  return (
    <div class="rounded-2xl px-4 py-4 mb-4 min-w-full bg-blue">
      <a 
      href="href="https://liberapay.com/Andrew1412/donate"
      class="flex flex-wrap w-full"
      target="_blank"
      rel="noopener noreferrer"
     >
     <img 
      src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=andrew1412&button_colour=374052&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=89b5fa" 
      class="flex w-full"
     />
     </a>
      <div class="flex space-x-4">
        <div>
          <Star size={20} color={"#89b5fa"} />
        </div>
        <div>
          <h2 class="font-bold leading-tight mb-1 text-white">
            {title}
          </h2>
          <p class="text-sm text-silver">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
