import React from "react";
import styled from "styled-components";
import { ContentSectionProps } from "../ContentSectionProps";
import { Section, Heading2, LightEmphasisText, Button } from "../../Components";
import { Colors } from "../../theme/Theme";

const Intro: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  
  const doNothing = () => {}

  return (
    <StyledIntro>
      <Heading2 className="lead-in">
        Hey there, I'm Anik.
      </Heading2>

      <Heading2 className="second-line">
        I'm a UX Designer, Developer, and Media Producer based in Houston, Texas. 
        I'm crafting <LightEmphasisText>user-centered solutions</LightEmphasisText> for an interconnected world.
      </Heading2>

      <Button
        importance="secondary"
        margin="right"
        onClick={doNothing}
      >
        See my work
      </Button>
      
      <Button
        importance="primary"
        onClick={doNothing}
      >
        Get in touch
      </Button>

      <BottomSpacer />
    </StyledIntro>
  );
}
export default Intro;

const StyledIntro = styled(Section)`
  min-height: 100%;

  color: ${Colors.white};
  text-shadow: 6px -6px 2px #000000, 
    6px 6px 2px #000000, 
    -6px -6px 2px #000000, 
    -6px 6px 2px #000000;
  user-select: none;

  & > .lead-in {
    margin-top: 160px;
    margin-bottom: 0;
  }
  
  & > .second-line {
    margin-bottom: 48px;
  }

  & > .btn-secondary {
    background: #000000;
  }
`;

const BottomSpacer = styled.div`
  height: 100px;
`;