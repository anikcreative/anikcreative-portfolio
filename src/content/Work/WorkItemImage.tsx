import React from "react";
import styled from "styled-components";

interface WorkItemImageProps {
  show: boolean;
  src: string;
}
export const WorkItemImage: React.FC<WorkItemImageProps> = (props: WorkItemImageProps) => {
  return (
    <WorkItemImageContainer className="work-item-image-container">
      Hey.
    </WorkItemImageContainer>
  );
}

const WorkItemImageContainer = styled.div``;