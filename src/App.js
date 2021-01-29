import React from "react";
import "./App.css";
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
    font-size: 2.5rem;
  }
  .item-right {
    flex: 33%;
  }
  @media (max-width: 480px) {
    .item-center {
      font-size: 1.5rem;
      flex: 60%;
    }
  }
`;

const StyledMain = Styled.article`
  padding: 25px;
  text-align: left;
  font-size: 24px;
  border-top: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media (max-width: 480px) {
    > * {
      margin: 0 0 20px 0px;
    }
  }
`;
