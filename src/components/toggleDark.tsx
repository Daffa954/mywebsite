import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg font-semibold 
                 bg-gray-200 text-gray-800 
                 dark:bg-gray-800 dark:text-white
                 border border-gray-400/30
                 transition-all duration-200 hover:scale-105"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
