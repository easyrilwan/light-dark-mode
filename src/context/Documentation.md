Explanation:

ThemeContext.tsx:
We create a ThemeContext using createContext() and define a ThemeProvider component.
The ThemeProvider keeps track of whether dark mode is active with the isDarkMode state.
It also provides a toggleTheme function that toggles the isDarkMode state and updates the theme accordingly in localStorage.
The useEffect hook ensures the theme is applied to the document.documentElement (the <html> element) whenever isDarkMode changes.

App.tsx:
We wrap the entire application in the ThemeProvider to make the theme context available globally.

ButtonContextMode.tsx:
We use useContext(ThemeContext) to access the current theme (isDarkMode) and the function (toggleTheme) to toggle the theme.
The button text and the theme toggle functionality are controlled by the context.

Additional Notes:
localStorage: We save the user's theme preference in localStorage so that it persists across page reloads.
System Preference: If no theme is set by the user in localStorage, the app will default to the system’s preference using window.matchMedia("(prefers-color-scheme: dark)").matches.

Bonus: You Can Easily Add More Theme-Related Features

You can also extend this pattern to add features like:
Auto-dark mode based on system preferences: The app could automatically switch to dark mode if the system preference changes.
Theme Reset: You could implement a reset button that clears the localStorage.theme value and reverts the theme to the system default.

Final Thoughts:
Using Context API in this scenario helps you centralize the theme state and makes it easily accessible throughout your entire app. If your app grows and more components need to access the theme, this approach will save you from prop-drilling and provide a more scalable solution.

Let me know if you need any further improvements or have additional questions!
