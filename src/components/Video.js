import React from "react";
import Styled from "styled-components";
import VideoMp4 from "../video/Clouds.mp4";

const Video = () => {
  return (
    <StyledVideo>
      <h1>Video</h1>
      <video width="400" autoPlay muted loop>
        <source src={VideoMp4} type="video/mp4" />
        <source src={VideoMp4} type="video/ogg" />
        Your browser does not support HTML video.
      </video>
    </StyledVideo>
  );
};

export default Video;

const StyledVideo = Styled.div`
    background-color: orangered;
`;
