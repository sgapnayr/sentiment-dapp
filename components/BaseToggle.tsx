"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export default function BaseToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    const targetTheme = theme === "dark" ? "light" : "dark";
    setTheme(targetTheme);
  };

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <div
      onClick={toggleTheme}
      className={`relative flex items-center dark:bg-light-background bg-gray-300 h-8 w-16 rounded-full drop-shadow-md drop-shadow-inner cursor-pointer`}
    >
      <div
        className={`${
          isDarkMode ? "right-1" : "left-1"
        } bg-sentiment-purple h-7 w-7 rounded-full absolute transition shadow-lg`}
      ></div>
    </div>
  );
}
