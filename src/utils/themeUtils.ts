export const setLightMode = () => {
  localStorage.theme = "light";
  document.documentElement.classList.remove("dark");
};

export const setDarkMode = () => {
  localStorage.theme = "dark";
  document.documentElement.classList.add("dark");
};

export const removeThemePreference = () => {
  localStorage.removeItem("theme");
  document.documentElement.classList.toggle(
    "dark",
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
};
