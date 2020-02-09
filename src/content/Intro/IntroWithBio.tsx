import React from "react";
import styled from "styled-components";
import { Section, Heading2 } from "../../components";
import { Colors } from "../../theme/Theme";
import { StyledIntro } from "./Intro";



const IntroWithBio: React.FunctionComponent = () => {
  return (
    <StyledIntro className="intro-text">
      <IntroInnerWrapper className="intro-text-inner-wrapper">
        <Heading2 className="lead-in">
          Hello, I'm Anik.<br/>
          I design and build<br/>
          things for the web.
        </Heading2>
        <br/>

        <BioSnippet className="bio-stanza-1">
          I'm a UX/UI designer and developer based in Houston, Texas. I help build 
          reliable, delightful web applications with human-centered design.
        </BioSnippet>
      </IntroInnerWrapper>
    </StyledIntro>
  );
}
export default IntroWithBio;

const IntroInnerWrapper = styled.div`
  color: ${Colors.textDefault};
  text-shadow: none;

  @media screen and (max-width: 600px) {
    max-width: 300px;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    max-width: 360px;
  }

  @media screen and (min-width: 801px) {
    max-width: 420px;
  }
`;

export const IntroSpacer = styled(Section)`
  min-height: calc(100% + 300px);
`;

const BioSnippet = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 1.8rem;
  }
`;