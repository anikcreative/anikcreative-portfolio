import React from "react";
import styled from "styled-components";

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