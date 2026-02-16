import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <>
      <button onClick={() => setTheme("male")}>
        Male User
      </button>

      <button onClick={() => setTheme("female")}>
        Female User
      </button>
    </>
  );
}

export default ThemeSwitcher;
