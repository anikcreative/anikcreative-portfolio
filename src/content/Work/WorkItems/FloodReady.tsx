import React from "react";
import { WorkItem } from "../WorkItem";
import { WorkItem_FloodReady } from "./WorkItemData";

export const FloodReady = () => {
  return (
    <WorkItem
      title={WorkItem_FloodReady.title}
      subtitle={WorkItem_FloodReady.subtitle}
      description={WorkItem_FloodReady.description}
      imgURL={"images/workitems/floodready.jpg"}
      detailsButtonLabel={WorkItem_FloodReady.detailsButtonLabel}
      detailsLink={WorkItem_FloodReady.detailsLink}
      className="mwp-studio-resources"
    />
  );
}
export default FloodReady;