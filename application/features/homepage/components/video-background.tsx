import React from "react";
import styled from "styled-components";

const VideoBackground = (): JSX.Element => {
  // Main return
  return (
    <Container>
      <Video
        loop
        muted
        playsInline
        autoPlay
        poster="https://meesverberne.com/wp-content/uploads/2020/01/background-poster.jpg.webp"
      >
        <source
          type="video/mp4"
          src="https://player.vimeo.com/external/448461168.hd.mp4?s=48a46848be0173299f8669fbd62833a057fad45d&amp;profile_id=175"
        />
      </Video>
    </Container>
  );
};

export default VideoBackground;

const Container = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;

`;
