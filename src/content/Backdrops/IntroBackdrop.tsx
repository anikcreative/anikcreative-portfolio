import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Backdrop, { BackdropInstanceProps } from "./Backdrop";
import { Intro } from "../../content";
import { AppContext } from "../../contexts/AppContext";
import { Colors } from "../../theme/Theme";
import { __IMAGES__ } from "../../images";


export const IntroBackdrop: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  const appContext = useContext(AppContext);
  const [heightAsPercentage, setHeightAsPercentage] = useState<number>(100);

  const calculateHeightAsPercentage = (scrollTop: number) => {
    const limit: number = window.innerHeight - 4;
    if (scrollTop === 0) setHeightAsPercentage(100);
    else {
      const difference = (scrollTop > limit) ? 100 : (100 * (scrollTop / limit));
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
      className="intro-backdrop"
      zIndex={props.order}
      image={__IMAGES__[0]}
      backgroundColor={Colors.dark}
      heightAsPercentage={heightAsPercentage}
    >
      <Intro />
      <Screen />
    </Backdrop>
  );
}
export default IntroBackdrop;

const Screen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: #000000;
  opacity: 0.3;
  z-index: 5;
`;