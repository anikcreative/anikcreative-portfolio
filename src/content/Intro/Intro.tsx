import React from "react";
import styled from "styled-components";
import { Section, Heading2 } from "../../components";


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

  @media screen and (max-width: 450px) {
    max-width: unset;
    margin-top: -48px;
  }

  @media screen and (min-width: 450px) and (max-width: 600px) {
    max-width: unset;

    @media (max-height: 300px) {
      & {
        margin-top: -20px;
      }
      & > h2 {
        font-size: 1.8rem;
      }
    }

    @media (min-height: 300px) and (max-height: 456px) {
      & {
        margin-top: -48px;
      }
      & > h2 {
        font-size: 2.0rem;
      }
    }

    @media (min-height: 456px) and (max-height: 548px) {
      & {
        margin-top: -64px;
      }
      & > h2 {
        font-size: 2.3rem;
      }
    }

    @media (min-height: 548px) {
      & {
        margin-top: -80px;
      }
      & > h2 {
        font-size: 2.6rem;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    max-width: 600px;

    @media (max-height: 300px) {
      & {
        margin-top: -48px;
      }
      & > h2 {
        font-size: 1.8rem;
      }
    }

    @media (min-height: 300px) and (max-height: 456px) {
      & {
        margin-top: -80px;
      }
      & > h2 {
        font-size: 2.4rem;
      }
    }

    @media (min-height: 456px) and (max-height: 548px) {
      & {
        margin-top: -108px;
      }
      & > h2 {
        font-size: 2.8rem;
      }
    }

    @media (min-height: 548px) {
      & {
        margin-top: -100px;
      }
      & > h2 {
        font-size: 3.2rem;
      }
    }
  }

  @media screen and (min-width: 800px) {
    max-width: 600px;

    @media (max-height: 300px) {
      & {
        margin-top: -36px;
      }
      & > h2 {
        font-size: 2.2rem;
      }
    }

    @media (min-height: 300px) and (max-height: 456px) {
      & {
        margin-top: -60px;
      }
      & > h2 {
        font-size: 2.8rem;
      }
    }

    @media (min-height: 456px) and (max-height: 548px) {
      & {
        margin-top: -100px;
      }
      & > h2 {
        font-size: 3.4rem;
      }
    }

    @media (min-height: 548px) {
      & {
        margin-top: -136px;
      }
      & > h2 {
        font-size: 4.0rem;
      }
    }
  }
`;

export const IntroSpacer = styled(Section)`
  min-height: 200vh;
`;

export const IntroMessage = styled(Heading2)`
  margin-top: 0;
`;