import React, { useContext, useEffect, useState } from "react";
import Backdrop, { BackdropInstanceProps } from "../Backdrops/Backdrop";
import { Intro, IntroMessage } from "..";
import { Colors } from "../../theme/Theme";
import { __IMAGES__ } from "../../images";


export const IntroPart2: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  const textShadowSetting: string = `2px -2px 2px ${Colors.bright}, 2px 2px 2px ${Colors.bright}, -2px -2px 2px ${Colors.bright}, -2px 2px 2px ${Colors.bright}`;
  return (
    <Backdrop
      className="intro-part-2"
      zIndex={props.order}
      image={__IMAGES__[2]}
      backgroundColor={Colors.bright}
    >
      <Intro
        textColor={Colors.dark}
        textShadow={textShadowSetting}
      >
        <IntroMessage className="intro-1-message">
          Hello, I'm Anik. I'm a designer and developer who's exploring ways to
          create intuitive, delightful web experiences.
        </IntroMessage>
      </Intro>
    </Backdrop>
  );
}
export default IntroPart2;