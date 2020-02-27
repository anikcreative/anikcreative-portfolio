import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { WorkItemImage } from "./WorkItemImage";
import { WorkItemDetail, WorkItemDetailProps } from "./WorkItemDetail";
import { AppContext } from "../../contexts/AppContext";
import debounce from "lodash/debounce";



export interface WorkItemAnimationProps {
  show: boolean;
}
interface WorkItemProps extends WorkItemDetailProps {
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
      <WorkItemImage show={showImage} src={props.imgURL || ""} />
      <WorkItemDetail 
        show={showDetail}
        title={props.title}
        subtitle={props.subtitle}
        description={props.description}
      />
    </WorkItemContainer>
  );
}

const WorkItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: stretch;
  
  position: relative;
  margin: 80px 0 120px;

  z-index: 1;
`;