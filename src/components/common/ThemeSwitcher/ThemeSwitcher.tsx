"use client";
import { cn } from "@/utils/tailwindUtils";
import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeSwitcher = ({
  className,
  isNotFixed = false,
}: {
  className?: string;
  isNotFixed?: boolean;
}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      className={cn(
        `w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all bg-white dark:bg-slate-800 `,
        !isNotFixed ? "fixed bottom-5 right-5 z-10" : "",
        className,
      )}
      onClick={toggleDarkMode}
    >
      {darkMode ? <BsMoon fill="white" /> : <BsSun />}
    </button>
  );
};

export default ThemeSwitcher;
