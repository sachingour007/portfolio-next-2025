"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState("light"); // default value

  useEffect(() => {
    // Runs only on client
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;

    html.classList.remove(isDark === "light" ? "dark" : "light");
    html.classList.add(isDark);

    localStorage.setItem("theme", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
