import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop, { BackdropInstanceProps } from "./Backdrop";
import { AppContext } from "../../contexts/AppContext";
import { Intro, IntroMessage } from "../../content";
import { Colors } from "../../theme/Theme";


export const IntroPart2: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  const appContext = useContext(AppContext);
  const [heightAsPercentage, setHeightAsPercentage] = useState<number>(100);
  
  const calculateHeightAsPercentage = (scrollTop: number) => {
    const limit: number = (2 * window.innerHeight) - 4;
    const introPaneHeight: number = window.innerHeight - 4;
    if (scrollTop <= introPaneHeight) setHeightAsPercentage(100);
    else {
      const difference = (scrollTop > limit) ? 100 : (100 * ((scrollTop - introPaneHeight) / introPaneHeight));
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
      className="intro-part-2"
      zIndex={props.order}
      backgroundColor={Colors.bright}
      heightAsPercentage={heightAsPercentage}
    >
      <Intro
        textColor={Colors.dark}
      >
        <IntroMessage className="intro-2-message">
          I love finding ways to make products and experiences intuitive, inclusive, reliable, and memorable.
        </IntroMessage>
      </Intro>
    </Backdrop>
  );
}
export default IntroPart2;