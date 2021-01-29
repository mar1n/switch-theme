import React from "react";
import Styled from "styled-components";
import reactLogo from "../img/react.png";
import css3Logo from "../img/css3.png";
import html5Logo from "../img/html5.png";
import jsLogo from "../img/javascript.png";
import reactRouterLogo from "../img/reactRouter.png";
import styledCompLogo from "../img/styledcomponents.png";
import visiualLogo from "../img/visualStudio.png";
import npmLogo from "../img/npm.png";
import amazonLogo from "../img/amazonEC2.png";

const PowerBy = () => {
  return (
    <StyledPowerBy>
      <StyledPowerItem>
        <StyledImgCorners>
        <img src={reactLogo} alt="reactLogo" />
        </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={css3Logo} alt="css3Logo" />
        </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={html5Logo} alt="html5Logo" />
    </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={jsLogo} alt="jsLogo" />
    </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={reactRouterLogo} alt="reactRouterLogo" />
    </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={styledCompLogo} alt="styledCompLogo" />
        </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={visiualLogo} alt="visiualLogo" />
        </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={npmLogo} alt="npmLogo" />
        </StyledImgCorners>
      </StyledPowerItem>
      <StyledPowerItem>
      <StyledImgCorners>
        <img src={amazonLogo} alt="amazonLogo" />
        </StyledImgCorners>
      </StyledPowerItem>
    </StyledPowerBy>
  );
};

export default PowerBy;

const StyledPowerBy = Styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        grid-gap: 10px;
    }
`;

const StyledPowerItem = Styled.div`
    border: 1px solid #b31d26;
    position: relative;
    ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #b31d26;
    z-index: 1;
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 0 solid transparent;
    border-top: 10px solid #b31d26;
    z-index: 1;
  }
    img {
        width: 248px;
        height: 248px;
    }
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const StyledImgCorners = Styled.div`
    position: relative;
  padding: 6px;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 0 solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #b31d26;
    z-index: 1;
  }
  ::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 10px solid #b31d26;
    z-index: 1;
  }
`