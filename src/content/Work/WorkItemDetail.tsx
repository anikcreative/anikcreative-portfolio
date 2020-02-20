import React from "react";
import styled from "styled-components";

interface WorkItemDetailProps {
  show: boolean;
  children?: React.ReactNode | React.ReactNodeArray;
}
export const WorkItemDetail: React.FC<WorkItemDetailProps> = (props: WorkItemDetailProps) => {
  return (
    <WorkItemDetailContainer className="work-item-detail-container">
      {props.children}
    </WorkItemDetailContainer>
  );
}

const WorkItemDetailContainer = styled.div``;