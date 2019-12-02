import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Forge";
import { ContentSectionProps } from "../ContentSectionProps";

const Intro: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <h1>
      Hi, I'm Anik. I'm designing and building robust, human-centered applications for the web.
    </h1>
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
  background: ${Colors.light};
`;

const StyledIntroSpacer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  background: none;
`;