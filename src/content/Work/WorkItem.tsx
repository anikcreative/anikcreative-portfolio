import React from "react";
import styled from "styled-components";
import { WorkItemImage } from "./WorkItemImage";
import { WorkItemDetail } from "./WorkItemDetail";

interface WorkItemProps {
  show: boolean;
}
export const WorkItem: React.FC<WorkItemProps> = (props: WorkItemProps) => {
  return (
    <WorkItemContainer className="work-item work-item-container">
      <WorkItemImage show={props.show} src=""/>
      <WorkItemDetail show={props.show}>
        Hi.
      </WorkItemDetail>
    </WorkItemContainer>
  );
}

const WorkItemContainer = styled.div``;