import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Forge";

const Intro: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledIntro>
      <IntroMessage>
        <h1>Hi, I'm Anik.</h1>
        <h1>I make stuff for the web.</h1>
      </IntroMessage>
    </StyledIntro>
  );
}
export default Intro

const StyledIntro = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: calc(10% + 40px);

  background: ${Colors.light};
`;

const IntroMessage = styled.div`
  display: inline-block;
  position: absolute;
  top: calc(10% + 80px);
  width: 50%;
  max-width: 400px;

  color: ${Colors.textDefault};

  & > h1 {
    font-size: 3.2rem;
    font-weight: 800;
    margin: 4px 0;
  }
`;