import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop, { BackdropInstanceProps } from "./Backdrop";
import { AppContext } from "../../contexts/AppContext";
import { IntroWithBio } from "../../content";
import { Colors } from "../../theme/Theme";


export const IntroBackdropInverted: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  const appContext = useContext(AppContext);
  const [showMarginDecoration, setShowMarginDecoration] = useState<boolean>(false);

  const determineMarginDecorationVisibility = (scrollTop: number) => {
    const threshold: number = window.innerHeight - 4;
    if (scrollTop > threshold) setShowMarginDecoration(true);
    else setShowMarginDecoration(false);
  }

  const handleScroll = () => {
    const scrollTop: number = appContext.currentScrollTop;
    determineMarginDecorationVisibility(scrollTop);
  }
  useEffect(handleScroll, [appContext.currentScrollTop]);

  return (
    <Backdrop
      className="intro-backdrop-inverted"
      zIndex={props.order}
      backgroundColor={Colors.white}
    >
      <IntroWithBio />
      <LeftMarginDecoration className={showMarginDecoration ? "visible" : "invisible"} />
      <RightMarginDecoration className={showMarginDecoration ? "visible" : "invisible"} />
    </Backdrop>
  );
}
export default IntroBackdropInverted;


const MarginDecorationBase = styled.div`
  position: absolute;
  top: 0;
  height: 100%;

  background: url('images/red_dot.png');
  background-repeat: repeat;

  transition: opacity 0.3s;
  z-index: 6;

  @media screen and (max-width: 1044px) {
    display: none;
    width: 0;
  }

  @media screen and (min-width: 1044px) {
    display: block;
  }

  &.visible {
    opacity: 0.5;
  }

  &.invisible {
    opacity: 0.0;
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
