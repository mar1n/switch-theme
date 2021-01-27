import React from "react";
import Styled from "styled-components";

const Video = () => {
  return (
    <StyledVideo>
      <h1>Video</h1>
      <video width="400" autoPlay muted loop>
        <source
          src="//www-static.cdn-one.com/images/onecom/pages/frontpage/FrontpageHeader-preview.mp4"
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
    </StyledVideo>
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
