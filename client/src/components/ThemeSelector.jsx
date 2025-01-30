import { useEffect, useState } from "react";
import { FaPalette } from "react-icons/fa";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const ThemeSelector = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-sm flex items-center gap-2"
      >
        <FaPalette size={18} />
        <span className="hidden sm:inline">
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </span>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-50 p-2 shadow bg-base-100 rounded-box w-40 max-h-60 overflow-y-auto"
      >
        {themes.map((t) => (
          <li key={t}>
            <button
              className={`flex items-center gap-2 p-2 w-full text-left rounded-md 
                ${theme === t ? "bg-primary text-white" : "hover:bg-base-200"}`}
              onClick={() => setTheme(t)}
            >
              <div
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: `var(--fallback-${t})` }}
              ></div>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSelector;
