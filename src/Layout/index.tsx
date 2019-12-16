import React from "react";
import styled from "styled-components";

export { default as Intro } from "./Intro/Intro";
export { default as Contact } from "./Contact/Contact";
export { default as Footer } from "./Footer/Footer";

interface BackdropImageSpacerProps {
  containerRef?: any;
}
export const BackdropImageSpacer: React.FunctionComponent<BackdropImageSpacerProps>= 
  (props: BackdropImageSpacerProps): JSX.Element => {
  return (
    <StyledBackdropImageSpacer
      ref={props.containerRef}
    />
  );
}
const StyledBackdropImageSpacer = styled.div`
  width: 100%;
  height: 100%;
  background: none;
`;