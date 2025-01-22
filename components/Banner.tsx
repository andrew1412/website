import { Star } from "preact-feather";

export default function Banner(
  props: { title: string; text: string },
) {
  const { title, text } = props;

  return (
    <div class="mb-4 min-w-full">
      <a 
      href="https://www.buymeacoffee.com/andrew1412"
      class="flex flex-wrap w-full mt-2"
      target="_blank"
      rel="noopener noreferrer"
     >
     <img 
      src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=andrew1412&button_colour=374052&font_colour=ffffff&font_family=Lato&outline_colour=ffffff&coffee_colour=89b5fa" 
      class="flex w-full"
     />
     </a>
    </div>
  );
}
