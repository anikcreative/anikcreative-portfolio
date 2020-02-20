import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";

interface IntroButtonsProps {
  visible: boolean;
  containerRef?: React.RefObject<HTMLDivElement>;
}
const IntroButtons: React.FC<IntroButtonsProps> = (props: IntroButtonsProps) => {
  const handleViewWorkRequested = () => {
    // Go to works section
  }

  const handleContactRequested = () => {
    // go to contact section
  }

  return (
    <IntroButtonsContainer
      className="intro-buttons-container"
      ref={props.containerRef}
      zIndex={props.visible ? 4 : 1}
      opacity={props.visible ? 1 : 0}
    >
      <PrimaryIntroButton
       className="intro-button intro-button-see-work"
       onClick={handleViewWorkRequested}
       title="See my work"
      >
        See My Work
      </PrimaryIntroButton>

      <SecondaryIntroButton
        className="intro-button intro-button-contact"
        onClick={handleContactRequested}
        title="Get in touch"
      >
        Get In Touch
      </SecondaryIntroButton>
    </IntroButtonsContainer>
  );
}
export default IntroButtons;

interface IntroButtonsContainerProps {
  zIndex: number;
  opacity: number;
}
const IntroButtonsContainer = styled.div<IntroButtonsContainerProps>`
  position: absolute;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  transition: opacity 0.4s, font-size 0.4s;

  @media screen and (max-width: 450px) {
    top: calc(50% + 48px);
    left: 20px;

    font-size: 1.3rem;
  }

  @media screen and (min-width: 450px) and (max-width: 600px) {
    left: 20px;
    font-size: 1.3rem;

    @media (max-height: 300px) {
      top: calc(50% + 24px);
      font-size: 1.3rem;
    }

    @media (min-height: 300px) and (max-height: 456px) {
      top: calc(50% + 24px);
      font-size: 1.4rem;
    }

    @media (min-height: 456px) and (max-height: 548px) {
      top: calc(50% + 40px);
      font-size: 1.5rem;
    }

    @media (min-height: 548px) {
      top: calc(50% + 32px);
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    left: 40px;

    @media (max-height: 300px) {
      top: calc(50% + 16px);
      font-size: 1.3rem;
    }

    @media (min-height: 300px) and (max-height: 456px) {
      top: calc(50% + 32px);
      font-size: 1.4rem;
    }

    @media (min-height: 456px) and (max-height: 548px) {
      top: calc(50% + 40px);
      font-size: 1.5rem;
    }

    @media (min-height: 548px) {
      top: calc(50% + 60px);
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 800px) and (max-width: 1064px) {
    left: 40px;

    @media (max-height: 300px) {
      top: calc(50% + 10px);
      font-size: 1.3rem;
    }

    @media (min-height: 300px) and (max-height: 456px) {
      top: calc(50% + 32px);
      font-size: 1.4rem;
    }

    @media (min-height: 456px) and (max-height: 548px) {
      top: calc(50% + 48px);
      font-size: 1.5rem;
    }

    @media (min-height: 548px) {
      top: calc(50% + 48px);
      font-size: 1.6rem;
    }
  }

  @media screen and (min-width: 1064px) {
    left: calc(50% - 512px);
    
    @media (max-height: 300px) {
      top: calc(50% + 10px);
      font-size: 1.3rem;
    }

    @media (min-height: 300px) and (max-height: 456px) {
      top: calc(50% + 32px);
      font-size: 1.4rem;
    }

    @media (min-height: 456px) and (max-height: 548px) {
      top: calc(50% + 48px);
      font-size: 1.5rem;
    }

    @media (min-height: 548px) {
      top: calc(50% + 48px);
      font-size: 1.6rem;
    }
  }
`;

const IntroButton = styled.button`
  display: inline-block;

  border: 0;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  transition: 0.2s;
  cursor: pointer;
  
  @media screen and (max-width: 400px) {
    padding: 10px 14px;

    &:not(:last-child) {
      margin: 0 16px 16px 0;
    }
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
    padding: 12px 18px;

    &:not(:last-child) {
      margin: 0 16px 16px 0;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    padding: 16px 20px;

    &:not(:last-child) {
      margin: 0 16px 16px 0;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 18px 32px;

    &:not(:last-child) {
      margin: 0 16px 16px 0;
    }
  }
`;

const PrimaryIntroButton = styled(IntroButton)`
  background: hsla(356, 60%, 55%, 0.8);
  border: 1px solid ${Colors.accent};
  box-shadow: 0 0 0 0 hsla(356, 60%, 55%, 0.3);

  color: ${Colors.white};

  &:hover,
  &:active {
    background: hsla(356, 60%, 55%, 1.0);
    box-shadow: 0 0 0 4px hsla(356, 60%, 55%, 0.3);
    text-shadow: 0 0 2px hsla(0, 0%, 100%, 0.25);
  }
`;

const SecondaryIntroButton = styled(IntroButton)`
  background: hsla(0, 0%, 100%, 0.9);
  border: 1px solid ${Colors.accent};
  box-shadow: 0 0 0 0 hsla(37, 90%, 100%, 0.2);

  color: ${Colors.accent};

  &:hover,
  &:active {
    background: hsla(0, 0%, 100%, 1.0);
    box-shadow: 0 0 0 4px hsla(356, 60%, 55%, 0.3);
    text-shadow: 0 0 2px hsla(356, 60%, 55%, 0.2);
  }
`;