import React, { useContext, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "./Contexts/AppContext";
import { Colors } from "./theme/Theme";
import { __IMAGES__ } from "./images";

type ViewportSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
interface BackdropProps {
  headlineTextColor: string;
}
const Backdrop: React.FunctionComponent<BackdropProps> = (props: BackdropProps): JSX.Element => {
  const appContext = useContext(AppContext);
  const backdropImages: string[] = [
    __IMAGES__[0],
  ];

  const getViewportSize = () => {
    const vw: number = appContext.viewportWidth;
    const getSize = (): ViewportSize => {
      if (vw <= 600) return "xs";
      else if (vw <= 900) return "sm";
      else if (vw <= 1200) return "md";
      else if (vw <= 1600) return "lg";
      else if (vw <= 1920) return "xl";
      else return "xxl";
    }
    setViewportSize(getSize());
  }
  const [viewportSize, setViewportSize] = useState<ViewportSize>("sm");
  useLayoutEffect(getViewportSize, [appContext.viewportWidth]);

  const renderImageSrc = (imageIndex: number) => {
    const imageSrc: string = backdropImages[imageIndex];
    return `images/${imageSrc}_${viewportSize}.jpg`;
  }

  return (
    <StyledBackdrop
      className="backdrop"
    >
      <LeftMarginDecoration/>
      <RightMarginDecoration/>

      <Screen />
      <Images>
        <StyledBackdropImage
          className="backdrop-image"
          src={renderImageSrc(0)}
          forcedHeightBreakpoint={1140}
          zIndex={5}
        />
      </Images>
    </StyledBackdrop>
  );
}
export default Backdrop;



const StyledBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${Colors.light};
  
  transform: translateZ(0);
  z-index: 1;
  overflow: hidden;
`;



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
const Images = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  filter: contrast(1.2);
  z-index: 3;
`;
interface StyledBackdropImageProps {
  forcedHeightBreakpoint: number;
  zIndex: number;
}
const StyledBackdropImage = styled.img<StyledBackdropImageProps>`
  min-width: 100%;
  object-fit: cover;
  transform: translateZ(0);
  z-index: ${props => props.zIndex};
`;



const MarginDecorationBase = styled.div`
  position: absolute;
  top: 0;
  height: 100%;

  background: url('images/red_dot.png');
  background-repeat: repeat;

  opacity: 0.7;
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

