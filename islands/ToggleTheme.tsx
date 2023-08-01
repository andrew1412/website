import { Moon, Sun } from "preact-feather";
import { useEffect, useState } from "preact/hooks";

function Changer1() {
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

export default function Changer() {
  const [isDark, setIsDark] = useState(() => {
    // Get the current theme from localStorage or default to 'light'
    const savedTheme = window.localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  // Use useEffect to update localStorage whenever the theme changes
  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(isDark));
    // Also update the theme class on the body
    document.body.className = isDark ? "dark" : "";
  }, [isDark]);

  useEffect(() => {
    // Fetch the CSS file content
    fetch("../utils/style.css")
      .then((response) => response.text())
      .then((css) => {
        // Create a new style element
        const style = document.createElement("style");
        style.textContent = css;
        // Append the style element to the head
        document.head.append(style);
      });
  }, []);

  return (
    <button onClick={() => setIsDark(!isDark)}>
      Toggle theme
    </button>
  );
}

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme: string | null;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >
    </button>
  );
};

//export default DarkMode;
