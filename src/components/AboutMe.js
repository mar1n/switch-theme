import React from "react";
import Styled from "styled-components";

const AboutMe = () => {
    return(
        <StyledAboutMe>
            <h1>About Me</h1>
        </StyledAboutMe>
    )
}

export default AboutMe;

const StyledAboutMe = Styled.div`
    background-color: tomato;
`;