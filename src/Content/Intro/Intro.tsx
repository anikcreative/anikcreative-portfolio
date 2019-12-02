import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Forge";
import { ContentSectionProps } from "../ContentSectionProps";

const Intro: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledIntro>
      <IntroMessage>
        <h1>Hi, I'm Anik.</h1>
        <h1>I make stuff for the web.</h1>
      </IntroMessage>
    </StyledIntro>
  );
}
export default Intro;

export const IntroSpacer: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledIntroSpacer
      ref={props.containerRef}
    />
  );
}

const StyledIntro = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  padding-left: calc(10% + 40px);
  background: ${Colors.light};
`;

const StyledIntroSpacer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  background: none;
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