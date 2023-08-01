import { Moon, Sun } from "preact-feather";
import { useEffect, useState } from "preact/hooks";

export default function Changer() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <span
        data-toggle-theme="dark, light"
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
      </span>
    </>
  );
}

function Changer1() {
  const [isDark, setIsDark] = useState(() => {
    // Get the current theme from localStorage or default to 'light'
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Use useEffect to update localStorage whenever the theme changes
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <span className="cursor-pointer" onClick={() => setIsDark(!isDark)}>
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
    </span>
  );
}
