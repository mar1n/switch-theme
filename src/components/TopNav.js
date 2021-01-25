import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const TopNav = () => {
  return (
    <>
      <nav>
            <StyledMenu>
                <Link to="/">Home</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/aboutme">About Me</Link>
            </StyledMenu>
      </nav>
    </>
  );
};

export default TopNav;

const StyledMenu = Styled.div`
    background-color: orangered;
`