// the toggle settings are were done here  lucide-react icons
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react"; // or use react-icons if you prefer

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 bg-gray-200 dark:bg-gray-800 p-2 rounded-full shadow-lg transition duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-purple-800" />
      )}
    </button>
  );
};

export default ThemeToggle;

// import { useTheme } from "../context/ThemeContext";

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 text-2xl bg-white dark:bg-gray-800 rounded-full shadow hover:scale-105 transition"
//       aria-label="Toggle Theme"
//     >
//       {theme === "light" ? "🌚" : "🌞"}
//     </button>
//   );
// };

// export default ThemeToggle;
