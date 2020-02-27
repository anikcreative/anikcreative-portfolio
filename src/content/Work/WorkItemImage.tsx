import React from "react";
import styled from "styled-components";
import { WorkItemAnimationProps } from "./WorkItem";
import { Colors } from "../../theme";

interface WorkItemImageProps extends WorkItemAnimationProps {
  src: string;
}
export const WorkItemImage: React.FC<WorkItemImageProps> = (props: WorkItemImageProps) => {
  return (
    <WorkItemImageContainer 
      show={props.show}
      className="work-item-image-container"
    >
      <img src={props.src}/>
    </WorkItemImageContainer>
  );
}

const WorkItemImageContainer = styled.div<WorkItemAnimationProps>`
  position: relative;
  flex-shrink: 0;
  margin-right: 40px;
  top: 0;
  left: 0;
  
  opacity: ${props => props.show ? 1.0 : 0.0};

  z-index: 1;
  overflow: visible;
  transition: 0.2s;

  width: 200px;
  height: 240px;

  & > img {
    display: block;
    position: absolute;
    top: 0;
    left: ${props => props.show ? 0 : -60}px;
    width: 100%;
    height: 100%;

    border: 4px solid ${Colors.accent};
    box-shadow: ${props => props.show ? `-8px -8px 0 0 ${Colors.bright}` : `0 -8px 0 0 transparent`};
    transition: opacity 0.2s, left 0.3s, box-shadow 0.6s;
  }
`;