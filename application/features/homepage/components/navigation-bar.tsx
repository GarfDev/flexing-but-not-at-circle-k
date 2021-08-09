import React from "react";
import styled from "styled-components";

const NavigationBar = (): JSX.Element => {
  // Main return
  return (
    <Container>
      <Section>
        <Text>CONMEOCAM</Text>
      </Section>
      <Section flex="0 0 120px">
        <LogoContainer>
          <Text className="fas fa-cat"></Text>
        </LogoContainer>
      </Section>
      <Section>
        <Text className="have-space fab fa-github"></Text>
        <Text className="fab fa-linkedin-in"></Text>
      </Section>
    </Container>
  );
};

export default NavigationBar;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 170px;

  & > div:first-child {
    padding-left: 10%;
  }

  & > div:last-child {
    padding-right: 10%;
    justify-content: flex-end;
  }
`;

const Section = styled.div<{ flex?: React.ReactText }>`
  display: flex;
  align-items: center;
  flex: ${({ flex }) => flex || 1};
  padding: 20px 15px;

  .have-space {
    margin-right: 10px;
  }
`;

const Text = styled.h3`
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 5px;
`;

const LogoContainer = styled.div`
  height:  3.6rem;
  width:  3.6rem;
  border: 2px solid #f24d41;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
