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
      <StyledText>
        <p>Creative, collaborative and hard working Software Engineer looking for
          JavaScript/React/Node position in a strong tech culture environment.</p>
        <p>I
          started my tech journey in 2010 freelancing locally in Poland and
          remotely with a New York media company doing Wordpress/Joomla
          development.</p>
        <p>I moved to London in 2015 to full fill my ambitions and
          worked temporarily as a chef for 5 years.</p>
        <p>In 2020 I decided to get
          formal training with a 2 month coding boot camp in
          ReactJS/MongoDB/Node.</p>
          <p>Since the boot camp I have completed 7 open
          source projects on Github with increasing level of complexity.</p>
          <p>I am
          now ready to do a permanent career change into tech. Since September
          2020 I have been working with a private coding coach to refine and
          improve my existing coding skills.</p>
      </StyledText>
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
  @media (max-width: 480px) {
      width: 90%;
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

const StyledText = Styled.div`
  @font-face {
    font-family: BemboStd;
    src: url("../font/BemboStd.otf");
  }
  font-family: BemboStd;
  font-size: .875rem;
  line-height: 1.5625rem;
  p {
    text-align: center;
  }
`;
