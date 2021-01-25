import React from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toogle from "./components/Toggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./Home";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router>
      <ThemeProvider theme={themeMode}>
        <>
          <Toogle theme={theme} toggleTheme={toggleTheme} />
          <TopNav />
          <GlobalStyles />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/aboutme" component={AboutMe} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
