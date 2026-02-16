import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const { theme, themes } = useContext(ThemeContext);

  const currentTheme = themes[theme];

  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <h1>Context API Theme</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default App;
