import React from "react";
import styled from "styled-components";
import { Section, Heading5 } from "../../components";
import IntroHeadline from "./IntroHeadline";


interface IntroProps {
  children?: React.ReactNode | React.ReactNodeArray;
  textColor?: string;
  textShadow?: string;
}
const Intro: React.FunctionComponent<IntroProps> = (props: IntroProps) => {
  return (
    <StyledIntro className="intro-text">
      <IntroInnerWrapper
        className="intro-text-inner-wrapper"
        textColor={props.textColor || "black"}
        textShadow={props.textShadow || "none"}
      >
        <IntroHeadline />
        {props.children}
      </IntroInnerWrapper>
    </StyledIntro>
  );
}
export default Intro;

export const StyledIntro = styled(Section)`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start; 

  position: absolute;
  top: calc(50vh - 40px);

  @media screen and (max-width: 600px) {
    top: calc(50vh - 40px);
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    top: calc(50vh - 20px);
  }

  @media screen and (min-width: 800px) {
    top: calc(50vh - 40px);
  }

  z-index: 10;
`;

interface IntroInnerWrapperProps {
  textColor: string;
  textShadow: string;
}
const IntroInnerWrapper = styled.div<IntroInnerWrapperProps>`
  color: ${props => props.textColor};
  text-shadow: ${props => props.textShadow};
  user-select: none;

  @media screen and (max-width: 600px) {
    max-width: unset;
    margin-top: -80px;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    max-width: 600px;
    margin-top: -100px;
  }

  @media screen and (min-width: 800px) {
    max-width: 480px;
    margin-top: -60px;
  }
`;

export const IntroSpacer = styled(Section)`
  min-height: 300vh;
`;

export const IntroMessage = styled(Heading5)`
  margin-top: 24px;
`;