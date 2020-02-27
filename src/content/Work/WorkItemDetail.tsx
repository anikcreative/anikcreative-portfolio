import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../components/TextContent/Text";
import { Heading3 } from "../../components/TextContent/Headings";
import { WorkItemAnimationProps } from "./WorkItem";
import { Colors } from "../../theme"; 
import { WorkItemInformation } from "./WorkItems/WorkItemData";
import { Button } from "../../components/Interactive/Button";


export interface WorkItemDetailComponentProps extends WorkItemAnimationProps, WorkItemInformation {}
export const WorkItemDetail: React.FC<WorkItemDetailComponentProps> = (props: WorkItemDetailComponentProps) => {

  const renderDetailsLink = () => {
    if (props.detailsButtonLabel && props.detailsLink) return (
      <MoreDetailsLinkWrapper 
        href={props.detailsLink}
        target="_blank"
      >
        <Button importance="primary">
          {props.detailsButtonLabel}
        </Button>
      </MoreDetailsLinkWrapper>
    );
    else return (
      <ComingSoonMessage>
        More details coming soon!
      </ComingSoonMessage>
    );
  }

  return (
    <WorkItemDetailContainer 
      show={props.show}
      className="work-item-detail"
    >
      <WorkItemTitle>{props.title}</WorkItemTitle>
      <WorkItemSubtitle>{props.subtitle}</WorkItemSubtitle>
      <WorkItemDescription className="detail-description">
        {props.description}
      </WorkItemDescription>
      {renderDetailsLink()}
    </WorkItemDetailContainer>
  );
}

const WorkItemDetailContainer = styled.div<WorkItemAnimationProps>`
  position: relative;
  opacity: ${props => props.show ? 1.0 : 0.0};
  flex-grow: 1;
  z-index: 3;
  transition: 0.3s;
`;

const WorkItemTitle = styled(Heading3)`
  margin: 8px 0 4px;
`;

const WorkItemSubtitle = styled.div`
  font-weight: 400;
  color: ${Colors.medium};

  @media screen and (max-width: 600px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.6rem;
  }
`;

const WorkItemDescription = styled(Paragraph)`
  margin: 24px 0;
`;

const MoreDetailsLinkWrapper = styled.a`
  display: inline-block;
  margin-top: 8px;
`;

const ComingSoonMessage = styled(Paragraph)`
  margin-top: 8px;
  color: ${Colors.medium}
`;