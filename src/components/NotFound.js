import React from "react";
import Styled from "styled-components";

const NotFound = () => {
    return (
        <StyledNotFound>
            <h1>Not Found</h1>
        </StyledNotFound>
    )
}

export default NotFound;

const StyledNotFound = Styled.div`
    background-color: yellow;
`;