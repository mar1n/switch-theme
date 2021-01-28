import React from "react";
import Styled from "styled-components";

const Video = () => {
  return (
    <StyledVideoBox>
      <StyledVideo>
        <video width="400" autoPlay muted loop>
          <source
            src="//www-static.cdn-one.com/images/onecom/pages/frontpage/FrontpageHeader-preview.mp4"
            type="video/mp4"
          />
          Your browser does not support HTML video.
        </video>
      </StyledVideo>
    </StyledVideoBox>
  );
};

export default Video;

const StyledVideo = Styled.div`
    background-color: orangered;
    video {
      width: 100%;
      height: auto;
    }
`;

const StyledVideoBox = Styled.div`
  padding: 20px;
  background-color: hotpink;
`;
