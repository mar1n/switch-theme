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
          <StyledTopHeader>
            <div className="item-top-header item-left">
              <Toogle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className="item-top-header item-center">
              <h1>Szymon Dawidowicz</h1>
            </div>
            <div className="item-top-header item-right">
                
            </div>
          </StyledTopHeader>
          <StyledApp>
            <TopNav />
            <GlobalStyles />
            <StyledMain>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/powerby" component={Powerby} />
                <Route component={NotFound} />
              </Switch>
            </StyledMain>
            <Footer />
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
    flex: 1 100%;
  }
`;

const StyledTopHeader = Styled.div`
  @font-face {
    font-family: BemboStd;
    src: url("../font/BemboStd.otf");
  }
  font-family: BemboStd;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  .item-left {
    flex: 33%;
  }
  .item-center {
    flex: 33%;
    text-align: center;
  }
  .item-right {
    flex: 33%;
  }
`;

const StyledMain = Styled.article`
  padding: 20px 0;
  text-align: left;
  font-size: 24px;
  border-top: 1px solid #e6e6e6;
`;
