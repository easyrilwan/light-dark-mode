import { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext"; // Import the ThemeContext

export default function ButtonMode() {
  // Use the context to get the current theme and the toggle function
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null; // or handle the null case appropriately
  }

  const { isDarkMode, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme} // Toggle theme when the button is clicked
      className="focus:out-of-range: mr-2 w-full cursor-pointer rounded-xl bg-gray-200 p-2 focus:outline-2 focus:outline-offset-4 focus:outline-lime-500 active:bg-lime-200 dark:bg-gray-700 dark:text-neutral-200 dark:active:bg-lime-700"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
