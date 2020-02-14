import React from "react";
import styled from "styled-components";
import Backdrop, { BackdropInstanceProps } from "./Backdrop";
import { Intro, IntroMessage } from "../";
import { Colors } from "../../theme/Theme";


export const IntroPart3: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  return (
    <Backdrop
      className="intro-part-3"
      zIndex={props.order}
      backgroundColor={Colors.light}
    >
      <Intro
        textColor={Colors.accent}
      >
        <IntroMessage className="intro-3-message">
          I'm currently focusing on human-centered design for enterprise web applications. Keep scrolling to see some of my recent work.
        </IntroMessage>
      </Intro>
      <LeftMarginDecoration />
      <RightMarginDecoration />
    </Backdrop>
  );
}
export default IntroPart3;


const MarginDecorationBase = styled.div`
  position: absolute;
  top: 0;
  height: 100%;

  background: url('images/red_dot.png');
  background-repeat: repeat;
  opacity: 0.5;

  transition: opacity 0.3s;
  z-index: 6;

  @media screen and (max-width: 1044px) {
    display: none;
    width: 0;
  }

  @media screen and (min-width: 1044px) {
    display: block;
  }
`;

const LeftMarginDecoration = styled(MarginDecorationBase)`
  left: 0;
  @media screen and (min-width: 1044px) {
    width: calc(50% - 442px);
  }
`;
const RightMarginDecoration = styled(MarginDecorationBase)`
  right: 0;
  @media screen and (min-width: 1044px) {
    width: calc(50% - 400px);
  }
`;
