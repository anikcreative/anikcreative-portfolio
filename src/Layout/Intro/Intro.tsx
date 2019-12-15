import React from "react";
import styled from "styled-components";
import { ContentSectionProps } from "../ContentSectionProps";
import { Section, Heading1 } from "../../Components";

const Intro: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledIntro>
      <Heading1>
        Hi there! I'm Anik.
      </Heading1>
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

const StyledIntro = styled(Section)`
`;

const StyledIntroSpacer = styled(Section)`
  height: 280px;
`;