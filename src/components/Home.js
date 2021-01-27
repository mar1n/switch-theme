import React from "react";
import Video from "./Video";
import bootcamp from "../img/bootcamp.jpg";
import Styled from "styled-components";

const Home = () => {
  return (
    <>
      <Video />
      <p>
        Creative, collaborative and hard working Software Engineer looking for
        JavaScript/React/Node position in a strong tech culture environment. I
        started my tech journey in 2010 freelancing locally in Poland and
        remotely with a New York media company doing Wordpress/Joomla
        development. I moved to London in 2015 to full fill my ambitions and
        worked temporarily as a chef for 5 years. In 2020 I decided to get
        formal training with a 2 month coding boot camp in ReactJS/MongoDB/Node.
        Since the boot camp I have completed 7 open source projects on Github
        with increasing level of complexity. I am now ready to do a permanent
        career change into tech. Since September 2020 I have been working with a
        private coding coach to refine and improve my existing coding skills.
      </p>

      <StyledImg>
        <img src={bootcamp} alt="Szymon" width="600" height="400" />
      </StyledImg>
    </>
  );
};

export default Home;

const StyledImg = Styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
