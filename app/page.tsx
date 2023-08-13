'use client'
import React, { createContext, useState } from "react";
import Themechange from "./component/themechange";
type Theme = "light" | "dark";

const ThemeContext = createContext<Theme | undefined>(undefined);
const ThemeDispatchContext = createContext<React.Dispatch<React.SetStateAction<Theme>> | undefined>(undefined);

export default function Home() {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeDispatchContext.Provider value={setTheme}>
        <Themechange />
      </ThemeDispatchContext.Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeDispatchContext }