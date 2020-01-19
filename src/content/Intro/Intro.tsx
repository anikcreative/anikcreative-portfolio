import React from "react";
import styled from "styled-components";
import { ContentSectionProps } from "../ContentSectionProps";
import { Section, Heading2, LightEmphasisText, Button } from "../../components";
import { Colors } from "../../theme/Theme";

interface IntroProps extends ContentSectionProps {
  textTransparency: number;
}
const Intro: React.FunctionComponent<IntroProps> = 
  (props: IntroProps): JSX.Element => {

  return (
    <StyledIntro>
      <StyledInnerWrapper 
        className="inner-wrapper"
      >
        <Heading2 className="lead-in">
          <TranslucentText transparency={props.textTransparency}>
            Hello, I'm Anik.
          </TranslucentText>
        </Heading2>
        <Heading2 className="second-line">
          I build things for the web&nbsp;
          <TranslucentText transparency={props.textTransparency}>
            and I'm passionate about <LightEmphasisText>user-centered design.</LightEmphasisText>
          </TranslucentText>
        </Heading2>
      </StyledInnerWrapper>
    </StyledIntro>
  );
}
export default Intro;

const StyledIntro = styled(Section)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center; 

  height: 100%;
  max-height: 480px;

  color: ${Colors.white};
  text-shadow: 6px -6px 2px #000000, 
    6px 6px 2px #000000, 
    -6px -6px 2px #000000, 
    -6px 6px 2px #000000;
  user-select: none;

  z-index: 10;
`;

const StyledInnerWrapper = styled.div`
  max-width: 800px;

  & > .lead-in {
    margin-bottom: 0;
  }

  & > .second-line {
    margin-bottom: 48px;
  }
`;

export const IntroSpacer = styled(Section)`
  min-height: calc(100% + 300px);
`;

interface TranslucentTextProps {
  transparency: number;
}
const TranslucentText = styled.span<TranslucentTextProps>`
  opacity: ${props => props.transparency};
`;