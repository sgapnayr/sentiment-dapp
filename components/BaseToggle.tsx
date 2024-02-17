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
      className={`relative flex items-center dark:bg-light-background bg-gray-300 h-5 w-10 rounded-full drop-shadow-md drop-shadow-inner cursor-pointer`}
    >
      <div
        className={`${
          isDarkMode ? "right-1" : "left-1"
        } bg-sentiment-purple h-4 w-4 rounded-full absolute transition shadow-2xl`}
      ></div>
    </div>
  );
}
