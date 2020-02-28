import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Section } from "../../components";
import { WorkItemImage } from "./WorkItemImage";
import { WorkItemDetail } from "./WorkItemDetail";
import { WorkItemInformation } from "./WorkItems/WorkItemData";
import { AppContext } from "../../contexts/AppContext";
import { Colors } from "../../theme";
import debounce from "lodash/debounce";



export interface WorkItemAnimationProps {
  show: boolean;
}
interface WorkItemProps extends WorkItemInformation {
  imgURL?: string;
  className?: string;
}
export const WorkItem: React.FC<WorkItemProps> = (props: WorkItemProps) => {
  const appContext = useContext(AppContext);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const [topOffset, setTopOffset] = useState<number | null>(null);
  const workItemRef = useRef<any>(null);

  const displayImage = () => setShowImage(true);
  const displayDetail = () => setShowDetail(true);

  const handleScroll = debounce(() => {
    if (!showImage
      && !showDetail
      && workItemRef 
      && workItemRef.current
      && topOffset != null
      && appContext.currentScrollTop >= topOffset - (window.innerHeight * 0.85)) {  
      if (!showImage) setTimeout(displayImage, 20);
      if (!showDetail) setTimeout(displayDetail, 200);
    }
  }, 225);
  useEffect(handleScroll, [appContext.currentScrollTop]);

  useEffect(() => {
    if (workItemRef && workItemRef.current && topOffset == null) {
      const self: Element = workItemRef.current as Element;
      setTopOffset(self.getBoundingClientRect().top);
    }
  }, [workItemRef.current]);

  return (
    <WorkItemContainer 
      className={`work-item work-item-container ${props.className ? `${props.className}-work-item` : ''}`}
      ref={workItemRef}
    >
      <WorkItemImage 
        show={showImage}
        src={props.imgURL || ""} 
      />
      <WorkItemDetail 
        show={showDetail}
        title={props.title}
        subtitle={props.subtitle}
        description={props.description}
        detailsButtonLabel={props.detailsButtonLabel}
        detailsLink={props.detailsLink}
      />
    </WorkItemContainer>
  );
}

const WorkItemContainer = styled(Section)`  
  position: relative;
  border-bottom: 1px solid ${Colors.accent};

  z-index: 1;

  @media screen and (max-width: 600px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    padding-top: 32px;
    padding-bottom: 32px;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 800px) {
    padding-top: 36px;
    padding-bottom: 36px;
    font-size: 1.6rem;
  }
`;