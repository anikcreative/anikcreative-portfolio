import React from "react";
import styled from "styled-components";
import { Intro } from "./Content";

const Backdrop: React.FunctionComponent = (): JSX.Element => {
  return (
    <StyledBackdrop>
      <Intro/>
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
  z-index: 1;
  overflow: hidden;
`;

