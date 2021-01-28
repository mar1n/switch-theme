import React from "react";
import Video from "./Video";
import bootcamp from "../img/bootcamp.jpg";
import Styled from "styled-components";

const Home = () => {
  return (
    <>
      <Video />

      <StyledImg>
        <StyledImgCorners>
          <img src={bootcamp} alt="Szymon" />
        </StyledImgCorners>
      </StyledImg>
    </>
  );
};

export default Home;

const StyledImg = Styled.div`
  border: 1px solid #b31d26;
  display: inline-table;
  position: relative;
  width: 49%;
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
    width: 100%;
    display: block;
    height: auto;
    border: 0;
    vertical-align: middle;
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
`;

const StyledTextOnImg = Styled.div`
  
`;
