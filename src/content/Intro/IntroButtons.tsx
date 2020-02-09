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
  color: red;
  z-index: ${props => props.zIndex};
  opacity: ${props => props.opacity};
  transition: 0.4s;

  @media screen and (max-width: 370px) {
    top: 390px;
    left: 40px;

    font-size: 1.4rem;
  }

  @media screen and (min-width: 370px) and (max-width: 600px) {
    top: 340px;
    left: 40px;

    font-size: 1.4rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    top: 352px;
    left: 40px;

    font-size: 1.5rem;
  }

  @media screen and (min-width: 801px) and (max-width: 1064px) {
    top: 120px;
    left: 480px;

    font-size: 1.6rem;
  }

  @media screen and (min-width: 1064px) {
    top: 120px;
    left: calc(50% - 60px);

    font-size: 1.6rem;
  }
`;

const IntroButton = styled.button`
  border: 0;

  font-weight: 600;
  text-align: center;
  text-transform: uppercase;

  transition: 0.2s;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: inline-block;
    padding: 16px 20px;

    &:not(:last-child) {
      margin: 0 16px 16px 0;
    }
  }

  @media screen and (min-width: 801px) {
    display: block;
    width: 240px;
    height: 56px;

    &:not(:last-child) {
      margin-bottom: 20px;
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
  background: ${Colors.white};
  border: 1px solid ${Colors.accent};
  box-shadow: 0 0 0 0 hsla(37, 90%, 100%, 0.2);

  color: ${Colors.accent};

  &:hover,
  &:active {
    box-shadow: 0 0 0 4px hsla(356, 60%, 55%, 0.3);
    text-shadow: 0 0 2px hsla(356, 60%, 55%, 0.2);

    color: ${Colors.accent};
  }
`;