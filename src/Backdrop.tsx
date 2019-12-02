import React from "react";
import styled from "styled-components";
import { Intro } from "./Content";
import { Colors } from "./theme/Forge";

interface BackdropProps {
  headlineTextColor: string;
}
const Backdrop: React.FunctionComponent<BackdropProps> = (props: BackdropProps): JSX.Element => {
  return (
    <StyledBackdrop>
      <LeftMarginDecoration/>
      <RightMarginDecoration/>
      <Headlines textColor={props.headlineTextColor}>
        <Intro/>
      </Headlines>
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
  
  z-index: 1;
  overflow: hidden;
`;

interface HeadlineProps {
  textColor: string;
}
const Headlines = styled.div<HeadlineProps>`
  display: inline-block;
  position: absolute;
  top: calc(10% + 80px);
  max-width: 800px;

  color: ${props => props.textColor};

  & > h1 {
    font-size: 3.2rem;
    font-weight: 800;
    margin: 4px 0;
  }

  @media screen and (max-width: 1044px) {
    margin-left: 40px;
    margin-right: 40px;
    width: calc(100% - 80px);
  }

  @media screen and (min-width: 1044px) {
    margin-left: calc(50% - 492px);
    margin-right: 0;
    width: 50%;
  }
`;

const MarginDecorationBase = styled.div`
  position: absolute;
  top: 0;
  height: 100%;

  background: url('https://i.imgur.com/jyNpF0D.png');
  background-repeat: repeat;

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
    width: calc(100% - 1044px);
  }
`;

const RightMarginDecoration = styled(MarginDecorationBase)`
  right: 0;
  @media screen and (min-width: 1280px) {
    width: calc(100% - 1280px);
  }
`;

