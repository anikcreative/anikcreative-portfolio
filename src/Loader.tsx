import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from '@use-it/interval';
import { Colors } from "./theme/Theme";

type LoaderStates = "active" | "complete" | "hidden";
interface LoaderProps {
  imagesLoaded?: boolean;
}
const Loader: React.FunctionComponent<LoaderProps> = (props: LoaderProps): JSX.Element => {
  const [completion, setCompletion] = useState<number>(0.00);      // value from 0.00 to 1.00, determining current completion of loading
  const [loaderState, setLoaderState] = useState<LoaderStates>("active");
  const [delay, setDelay] = useState<number | null>(10);
  
  useInterval(() => {
    setCompletion((currentCompletion) => currentCompletion + 0.01);
  }, delay);
  
  useEffect(() => {
    if (completion > 1.20) {
      setDelay(null);
      if (loaderState === "active") {
        setLoaderState("complete");
        setTimeout(() => setLoaderState("hidden"), 825);
      }
    }
  }, [completion]);

  const getTopCompletion = (currentCompletion: number): number => {
    if (currentCompletion <= 0.25) return currentCompletion * 4;
    else return 1.00;
  }
  const getRightCompletion = (currentCompletion: number): number => {
    if (currentCompletion <= 0.25) return 0.00;
    else if (currentCompletion > 0.25 && currentCompletion <= 0.50)
      return (currentCompletion * 4) - 1;
    else return 1.00;
  }
  const getBottomCompletion = (currentCompletion: number): number => {
    if (currentCompletion <= 0.50) return 0.00;
    else if (currentCompletion > 0.50 && completion <= 0.75)
      return (currentCompletion * 4) - 2;
    else return 1.00;
  }
  const getLeftCompletion = (currentCompletion: number): number => {
    if (currentCompletion <= 0.75) return 0.00;
    else return (currentCompletion * 4) - 3;
  }

  return (
    <StyledLoader loaderState={loaderState}>
      <ProgressBarTop completion={getTopCompletion(completion)}/>
      <ProgressBarRight completion={getRightCompletion(completion)}/>
      <ProgressBarBottom completion={getBottomCompletion(completion)}/>
      <ProgressBarLeft completion={getLeftCompletion(completion)}/>
    </StyledLoader>
  );
}
export default Loader;

interface StyledLoaderProps {
  loaderState: LoaderStates;
}
const StyledLoader = styled.div<StyledLoaderProps>`
  display: ${props => props.loaderState === "hidden" ?
    "none" : "block"};
  position: absolute;
  top: -4px;
  left: -4px;
  width: 100vw;
  height: 100vh;

  background: ${Colors.white};
  opacity: ${props => props.loaderState === "active" ?
    "1.0" : "0.0"};
  transition: 0.8s;
  z-index: 1000;
`;

interface ProgressBarProps {
  completion: number;
}
const ProgressBarBase = styled.div<ProgressBarProps>`
  position: absolute;
  background: ${Colors.accent};
`;
const ProgressBarTop = styled(ProgressBarBase)`
  top: 0;
  left: 0;
  width: ${props => (props.completion * 100)}%;
  height: 4px;
`;
const ProgressBarRight = styled(ProgressBarBase)`
  top: 0;
  right: 0;
  width: 4px;
  height: ${props => (props.completion * 100)}%;
`;
const ProgressBarBottom = styled(ProgressBarBase)`
  bottom: 0;
  right: 0;
  width: ${props => (props.completion * 100)}%;
  height: 4px;
`;
const ProgressBarLeft = styled(ProgressBarBase)`
  bottom: 0;
  left: 0;
  width: 4px;
  height: ${props => (props.completion * 100)}%;
`;