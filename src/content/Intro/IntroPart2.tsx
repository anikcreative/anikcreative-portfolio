import React, { useContext, useEffect, useState } from "react";
import Backdrop, { BackdropInstanceProps } from "../Backdrops/Backdrop";
import { Intro, IntroMessage } from "..";
import { Colors } from "../../theme/Theme";


export const IntroPart2: React.FC<BackdropInstanceProps> = (props: BackdropInstanceProps) => {
  return (
    <Backdrop
      className="intro-part-2"
      zIndex={props.order}
      backgroundColor={Colors.bright}
    >
      <Intro
        textColor={Colors.dark}
      >
        <IntroMessage className="intro-2-message">
          Hello, I'm Anik. I'm a designer and developer who's passionate 
          about human-centered design for the web.
        </IntroMessage>
      </Intro>
    </Backdrop>
  );
}
export default IntroPart2;