import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext"; // Import the ThemeContext

export default function ButtonMode() {
  // Use the context to get the current theme and the toggle function
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme} // Toggle theme when the button is clicked
      className="mr-2 w-full cursor-pointer rounded-xl bg-gray-200 p-2 dark:bg-gray-700 dark:text-neutral-200"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
