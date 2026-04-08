import { useState, useEffect } from "react";

export const useTheme = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme !== null) {
      return savedTheme === "dark" ? true : false;
    }

    return preference;
  });

  const toggleTheme = () => {
    return !darkMode ? setDarkMode(true) : setDarkMode(false);
  };

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return { darkMode, toggleTheme };
};
