import { Star } from "preact-feather";
import { SiPaypal } from "react-icons/si";

export default function Banner(
  props: { title: string; text: string },
) {
  const { title, text } = props;

  return (
    <div class="rounded-2xl px-4 py-4 mb-4 min-w-full bg-blue">
      <a href="https://streamelements.com/andrew1412/tip" target="_blank" rel="noopener noreferrer">
       <div class="flex space-x-4">
         <div>
           <SiPaypal size={20} color={"#89b5fa"} />
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
      </a>
    </div>
  );
}
