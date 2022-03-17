import useDarkMode from "../other/useDarkMode";

import LampSvg from "../svg/lamp.svg";
import MoonSvg from "../svg/moon.svg";

export default function ThemeToggle() {
  const [colorTheme, setTheme] = useDarkMode();

  const IconComponent = colorTheme === "light" ? MoonSvg : LampSvg;
  const theme = colorTheme !== "light" ? "dark" : "light";

  return (
    <span className="inline-flex rounded-md shadow-sm">
      <button
        className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all"
        onClick={() => {
          console.log("ttt");
          setTheme(theme);
        }}
      >
        <IconComponent className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      </button>
    </span>
  );
}
