import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop, { BackdropInstanceProps } from "../Backdrops/Backdrop";
import { Intro, IntroMessage } from "..";
import { AppContext } from "../../contexts/AppContext";
import { Colors } from "../../theme/Theme";
import { __IMAGES__ } from "../../images";


export const IntroPart1: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  const appContext = useContext(AppContext);
  const [heightAsPercentage, setHeightAsPercentage] = useState<number>(100);
  const textShadowSetting: string = "4px -4px 2px #000000, 4px 4px 2px #000000, -4px -4px 2px #000000, -4px 4px 2px #000000";

  const calculateHeightAsPercentage = (scrollTop: number) => {
    const introPaneHeight: number = window.innerHeight - 4;
    if (scrollTop === 0) setHeightAsPercentage(100);
    else {
      const difference = (scrollTop > introPaneHeight) ? 100 : (100 * (scrollTop / introPaneHeight));
      setHeightAsPercentage(100 - difference);
    }
  }

  const handleScroll = () => {
    const scrollTop: number = appContext.currentScrollTop;
    calculateHeightAsPercentage(scrollTop);
  }
  useEffect(handleScroll, [appContext.currentScrollTop]);

  return (
    <Backdrop
      className="intro-part-1"
      zIndex={props.order}
      image={__IMAGES__[0]}
      backgroundColor={Colors.dark}
      heightAsPercentage={heightAsPercentage}
    >
      <Intro
        textColor={Colors.white}
        textShadow={textShadowSetting}
      >
        <IntroMessage className="intro-1-message">
          Hello, I'm Anik. I'm a designer and developer exploring ways to
          create intuitive, delightful experiences for the web.
        </IntroMessage>
      </Intro>
      <Screen />
    </Backdrop>
  );
}
export default IntroPart1;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #000000;
  opacity: 0.0;
  z-index: 5;
`;