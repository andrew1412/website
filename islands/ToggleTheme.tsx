import { Moon, Sun } from "preact-feather";
import { useEffect, useState } from "preact/hooks";

export default function Changer() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <>
      <span
        className="cursor-pointer"
        onClick={() => setIsDark(!isDark)}
      >
        {isDark
          ? (
            <Moon
              size={18}
              color="#1f2937"
              stroke-width={2.5}
              class="w-5 h-5 text-gray-500"
            />
          )
          : (
            <Sun
              size={18}
              color="#1f2937"
              stroke-width={2.5}
              class="w-5 h-5 text-gray-500"
            />
          )}
        <a class="bg-gray-100 px-2 py-2 rounded-lg fixed top-4 right-4">
          <Changer />
        </a>
      </span>
    </>
  );
}
