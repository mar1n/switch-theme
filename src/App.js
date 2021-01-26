import React from "react";
import Styled, { ThemeProvider } from "styled-components";
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
          <StyledApp>
            <StyledHeader>
              <TopNav />
            </StyledHeader>
            <GlobalStyles />
            <StyledMain>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/aboutme" component={AboutMe} />
                <Route component={NotFound} />
              </Switch>
            </StyledMain>
            <StyledFooter>
              <Footer />
            </StyledFooter>
          </StyledApp>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;

const StyledApp = Styled.div`
  display: flex;
  flex-flow: row wrap;
  text-align: center;
  > * {
    padding: 10px;
    margin: 10px;
    flex: 1 100%;
    border-radius: 10px;
  }
`;

const StyledHeader = Styled.header`
  background: tomato;
  height: 120px;
`;

const StyledFooter = Styled.footer`
  background: lightgreen;
  height: 80px;
`;

const StyledMain = Styled.article`
  text-align: left;
  background: deepskyblue;
  font-size: 24px;
`;
