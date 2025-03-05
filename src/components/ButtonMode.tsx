import {
  setLightMode,
  setDarkMode,
  removeThemePreference,
} from "../utils/themeUtils";
import { useEffect, useState } from "react";

export default function ButtonMode() {
  // Track the current theme in local state
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  useEffect(() => {
    // Function to update the theme based on localStorage or OS preference
    const updateTheme = () => {
      const darkMode =
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList.toggle("dark", darkMode);
      setIsDarkMode(darkMode); // Update the state as well
    };

    // Initial theme update on component mount
    updateTheme();

    // Add event listener to update theme when OS preference changes
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateTheme);

    // Cleanup event listener on component unmount
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", updateTheme);
    };
  }, []);

  const handleThemeToggle = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
    setIsDarkMode(!isDarkMode); // Toggle the state
  };

  const handleResetTheme = () => {
    removeThemePreference();
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches); // Reset to system preference
  };

  return (
    <div className="flex">
      <div>
        {/*Button toggle between Light/Dark Mode*/}
        <button
          onClick={handleThemeToggle}
          className="mr-2 size-fit cursor-pointer rounded-xl bg-gray-200 p-2 transition-colors duration-900 focus:outline-2 focus:outline-offset-3 focus:outline-violet-500 active:bg-violet-700 dark:bg-gray-700"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* OS Preference */}
        <button
          onClick={handleResetTheme}
          className="mr-2 w-fit cursor-pointer rounded-xl bg-gray-300 p-2 dark:bg-gray-800 dark:text-neutral-200"
        >
          Reset Theme Preference
        </button>
      </div>

      {/* Dropdown Menu Mode */}
      <select
        onChange={(e) => {
          if (e.target.value === "light") {
            setLightMode();
            setIsDarkMode(false);
          } else if (e.target.value === "dark") {
            setDarkMode();
            setIsDarkMode(true);
          } else {
            handleResetTheme();
          }
        }}
        className="right-3 mr-2 w-15 cursor-pointer rounded-xl bg-gray-200 p-2 focus:to-blue-900 focus:outline-2 focus:outline-offset-4 focus:outline-violet-500 active:bg-violet-700 dark:bg-gray-700 dark:text-gray-200"
        value={isDarkMode ? "dark" : "light"}
      >
        <option value="light" className="w-fit">
          ☀️
        </option>
        <option value="dark" className="w-fit">
          🌙
        </option>
        <option value="system" className="w-fit">
          System Preference
        </option>
      </select>

      <select name="" id="">
        <option value="">A</option>
        <option value="">B</option>
        <option value="">C</option>
      </select>
    </div>
  );
}
