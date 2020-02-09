import React, { useContext, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContext";

type ViewportSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export interface BackdropInstanceProps {
  order: number;
}
interface BackdropProps {
  zIndex: number;
  className?: string;
  image?: string;
  backgroundColor?: string;
  heightAsPercentage?: number;
  children?: React.ReactNode | React.ReactNodeArray;
}
const Backdrop: React.FC<BackdropProps> = (props: BackdropProps): JSX.Element => {
  const appContext = useContext(AppContext);

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

  const renderImageSrc = () => {
    return `images/${props.image}_${viewportSize}.jpg`;
  }

  return (
    <StyledBackdrop
      className={`backdrop ${props.className}`}
      backgroundcolor={props.backgroundColor || 'transparent'}
      height={(props.heightAsPercentage || props.heightAsPercentage === 0) ? 
        props.heightAsPercentage : 100}
      zindex={props.zIndex}
    >
      {props.children}
      <ImageContainer>
        {props.image && 
        <StyledBackdropImage
          className="backdrop-image"
          src={renderImageSrc()}
          forcedHeightBreakpoint={1140}
          zIndex={5}
        />}
      </ImageContainer>
    </StyledBackdrop>
  );
}
export default Backdrop;



interface StyledBackdropProps {
  height: number;
  backgroundcolor: string;
  zindex: number;
}
const StyledBackdrop = styled.div<StyledBackdropProps>`
  position: absolute;
  width: 100%;
  height: ${props => props.height}%;
  top: 0;
  left: 0;
  background: ${props => props.backgroundcolor};
  
  transform: translateZ(0);
  z-index: ${props => props.zindex};
  overflow: hidden;
`;



const ImageContainer = styled.div`
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
