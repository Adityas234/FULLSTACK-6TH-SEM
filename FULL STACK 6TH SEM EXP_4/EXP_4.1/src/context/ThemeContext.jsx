import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("male");

  const themes = {
    male: {
      background: "#0d1b2a",
      color: "white",
    },
    female: {
      background: "#ffccd5",
      color: "#590d22",
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};
