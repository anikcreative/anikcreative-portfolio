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
      <WorkItemImageFrame
        className="work-item-image-frame" 
        imageSrc={props.src}
      />
    </WorkItemImageContainer>
  );
}

const WorkItemImageContainer = styled.div<WorkItemAnimationProps>`
  position: relative;
  height: 180px;
  margin-bottom: 36px;
  
  opacity: ${props => props.show ? 1.0 : 0.0};
  filter: saturate(${props => props.show ? 1.0 : 0.2});

  z-index: 1;
  overflow: hidden;
  transition: 0.4s;
`;

interface WorkItemImageFrameProps {
  imageSrc: string;
}
const WorkItemImageFrame = styled.div<WorkItemImageFrameProps>`
  width: 100%;
  max-width: 600px;
  height: 100%; 

  background: ${Colors.white};
  background: url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;