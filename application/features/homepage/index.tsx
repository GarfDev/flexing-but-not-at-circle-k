import React from "react";
import styled from "styled-components";
import Noise from "../../../public/noise.png";
import { Scrollbars } from "react-custom-scrollbars";

import NavigationBar from "./components/navigation-bar";
import VideoBackground from "./components/video-background";

const Homepage = (): JSX.Element => {
  return (
    <Scrollbars
      autoHide
      style={{ scrollBehavior: "smooth" }}
      autoHideTimeout={1000}
      autoHideDuration={200}
      thumbMinSize={30}
    >
      <Container>
        <NoiseLayer />
        <VideoBackground />
        <NavigationBar />
        <Content big>
          <Text>My Best Ability</Text>
          <Text>
            is building <Text className="highlighted">MERN</Text>
          </Text>
          <Text>Stack applications.</Text>
        </Content>

        <Content justify="flex-end">
          <Text>Familiar with</Text>
          <Text>
            <Text className="highlighted">apply / integrate</Text>
          </Text>
          <Text>
            new <Text className="highlighted">Technology</Text>
          </Text>
        </Content>
        <Content justify="center">
          <Text>
            <Text className="highlighted">Projects</Text>
          </Text>
        </Content>
        <FluidContent>
          <Content>
            <ProjectText
              as="a"
              href="https://github.com/thxprotocol/discord-bot"
              target="#blank"
            >
              <ProjectText className="highlighted">THX Discord Bot</ProjectText>
            </ProjectText>
            <ProjectDesc>A Discord Bot that Integrated directly</ProjectDesc>
            <ProjectDesc>to Blockchain. Aim to let community</ProjectDesc>
            <ProjectDesc>reward individual contribution.</ProjectDesc>
          </Content>

          <Content>
            <ProjectText
              as="a"
              href="https://github.com/GarfDev/Memorize"
              target="#blank"
            >
              <ProjectText className="highlighted">Memorize</ProjectText>
            </ProjectText>
            <ProjectDesc>A cute private wishlist integrated</ProjectDesc>
            <ProjectDesc>directly to online marketplaces.</ProjectDesc>
          </Content>
        </FluidContent>
      </Container>
    </Scrollbars>
  );
};

export default Homepage;

const NoiseLayer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  position: absolute;
  background: url(${Noise});
  opacity: 0.8;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Text = styled.h3`
  font-family: "Times new roman", serif;
  font-weight: 400;
  font-size: 5rem;
  opacity: 0.85;

  .highlighted {
    color: #f24d41;
    font-weight: 500;
    display: inline-block;
  }
`;

const Content = styled.div<{ justify?: string; big?: boolean }>`
  align-self: ${({ justify }) => justify || "start"};
  padding: 4% 10%;

  ${Text} {
    font-size: ${({ big }) => big && "7rem"};
  } ;
`;

const ProjectText = styled(Text)`
  font-size: 3rem;
`;

const ProjectDesc = styled(ProjectText)`
  font-size: 2rem;
`;

const FluidContent = styled(Content)`
  width: 100%;
  display: flex;
`;
