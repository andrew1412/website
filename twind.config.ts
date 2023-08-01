import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  darkMode: "class",
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        gray: colors.blueGray,
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
} as Options;
