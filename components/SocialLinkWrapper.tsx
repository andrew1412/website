import { ComponentChildren } from "preact";

export default function SocialLinkWrapper(
  props: { href: string; children: ComponentChildren },
) {
  return (
    <a
      class="rounded-full p-3 bg-metal"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
