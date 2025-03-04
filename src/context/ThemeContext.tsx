import { createContext, useState, useEffect } from "react";

// Create the ThemeContext with default value
export const ThemeContext = createContext();

// ThemeProvider to wrap around the app and provide the context
export const ThemeProvider = ({ children }) => {
  // Check initial theme preference from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  useEffect(() => {
    // Apply theme change based on the current state
    document.documentElement.classList.toggle("dark", isDarkMode);
    // Save preference to localStorage
    if (isDarkMode) {
      localStorage.theme = "dark";
    } else {
      localStorage.theme = "light";
    }
  }, [isDarkMode]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
