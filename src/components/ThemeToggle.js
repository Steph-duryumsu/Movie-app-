import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-2xl bg-white dark:bg-gray-800 rounded-full shadow hover:scale-105 transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌚" : "🌞"}
    </button>
  );
};

export default ThemeToggle;
