import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from '@use-it/interval';

interface LoaderProps {
  imagesLoaded?: boolean;
}
const Loader: React.FunctionComponent<LoaderProps> = (props: LoaderProps): JSX.Element => {
  const [completion, setCompletion] = useState<number>(0.00);      // value from 0.00 to 1.00, determining current completion of loading
  const delay: number = 50;                                        // delay, in milliseconds
  const progress: any = useInterval(() => {
    if (completion <= 1.00)
      setCompletion((currentCompletion) => currentCompletion + 0.01);
  }, delay);
  
  useEffect(() => {
    if (completion > 1.00) clearInterval(progress);
    else console.log(completion);
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
    <StyledLoader>
      <ProgressBarTop completion={getTopCompletion(completion)}/>
      <ProgressBarRight completion={getRightCompletion(completion)}/>
      <ProgressBarBottom completion={getBottomCompletion(completion)}/>
      <ProgressBarLeft completion={getLeftCompletion(completion)}/>
    </StyledLoader>
  );
}
export default Loader;

const StyledLoader = styled.div`
  z-index: 1000;
`;

interface ProgressBarProps {
  completion: number;
}
const ProgressBarTop = styled.div<ProgressBarProps>`
`;
const ProgressBarRight = styled.div<ProgressBarProps>`
`;
const ProgressBarBottom = styled.div<ProgressBarProps>`
`;
const ProgressBarLeft = styled.div<ProgressBarProps>`
`;