import { Moon, Sun } from "preact-feather";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

const modes = ["dark", "light"] as const;

export default function ColorMode() {
  const state = useSignal<(typeof modes)[number]>("dark");

  function detectMode() {
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      state.value = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      state.value = "light";
    }
  }

  function toggle() {
    state.value = modes[(modes.indexOf(state.value) + 1) % modes.length];
    if (state.value === "light") {
      localStorage.removeItem("colorMode");
    } else {
      localStorage.colorMode = state.value;
    }
    if (
      localStorage.colorMode === "dark" ||
      (!("colorMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  useEffect(detectMode, []);

  return (
    <div
      class="relative cursor-pointer"
      onClick={toggle}
    >
      {(state.value === "dark")
        ? (
          <Sun
            size={18}
            color="#1f2937"
            stroke-width={2.5}
            class="w-5 h-5 text-gray-500"
          />
        )
        : (
          <Moon
            size={18}
            color="#1f2937"
            stroke-width={2.5}
            class="w-5 h-5 text-gray-500"
          />
        )}
    </div>
  );
}
