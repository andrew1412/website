import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  darkMode: "class",
  selfURL: import.meta.url,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
  },
} as Options;
