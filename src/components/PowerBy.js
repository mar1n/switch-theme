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

const AboutMe = () => {
    return(
        <StyledAboutMe>
            <h1>Power by</h1>
            <img src={reactLogo} alt="reactLogo" />
            <img src={css3Logo} alt="css3Logo" />
            <img src={html5Logo} alt="html5Logo" />
            <img src={jsLogo} alt="jsLogo" />
            <img src={reactRouterLogo} alt="reactRouterLogo" />
            <img src={styledCompLogo} alt="styledCompLogo" />
            <img src={visiualLogo} alt="visiualLogo" />
            <img src={npmLogo} alt="npmLogo" />
            <img src={amazonLogo} alt="amazonLogo" />
        </StyledAboutMe>
    )
}

export default AboutMe;

const StyledAboutMe = Styled.div`
    background-color: tomato;
`;