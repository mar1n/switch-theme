import React from "react";
import Styled, { ThemeProvider } from "styled-components";
import { useDarkMode } from "./useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import Toogle from "./components/Toggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import Skills from "./components/Skills";
import NotFound from "./components/NotFound";
import Powerby from "./components/PowerBy";
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
                <Route exact path="/powerby" component={Powerby} />
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
  position:-webkit-sticky; 
  position:sticky;
  bottom:0;
  height: 60px;
  padding: 0 1rem;

  background-color: #242526;
`;

const StyledMain = Styled.article`
  text-align: left;
  background: deepskyblue;
  font-size: 24px;
`;
