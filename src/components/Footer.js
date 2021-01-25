import React from "react";
import Styled from "styled-components";

const Footer = () => {
  return (
    <>
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
    </>
  );
};

export default Footer;

const StyledFooter = Styled.div`
    background-color: purple;
`