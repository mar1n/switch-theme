import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toogle from "./components/Toggle";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toogle theme={theme} toggleTheme={toggleTheme} />
        <h1>It's a {theme === "light" ? "light theme" : "dark theme"}!</h1>
        <footer></footer>
      </>
    </ThemeProvider>
  );
}

export default App;
