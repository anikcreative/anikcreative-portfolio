import React from "react";
import { WorkItem } from "../WorkItem";
import { WorkItem_FloodReady } from "./WorkItemData";

export const FloodReady = () => {
  return (
    <WorkItem
      title={WorkItem_FloodReady.title}
      subtitle={WorkItem_FloodReady.subtitle}
      description={WorkItem_FloodReady.description}
      className="mwp-studio-resources"
    />
  );
}
export default FloodReady;