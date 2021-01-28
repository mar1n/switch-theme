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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 90px 10px 90px;
    border: 1px solid #b31d26;
    ::before {
      content: '';
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
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 0px solid transparent;
      border-bottom: 10px solid #b31d26;
      z-index: 1;
    }
    video {
      width: 100%;
      height: auto;
    }
    @media (max-width: 480px) {
      padding: 10px 20px 10px 20px;
    }
`;

const StyledVideoBox = Styled.div`
    ::before {
      content: '';
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
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 0px solid transparent;
      border-top: 10px solid #b31d26;
      z-index: 1;
    }
    position: relative;
`;
