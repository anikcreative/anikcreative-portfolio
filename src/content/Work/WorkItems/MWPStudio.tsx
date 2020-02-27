import React from "react";
import { WorkItem } from "../WorkItem";
import {
  WorkItem_MWPStudio,
} from "./WorkItemData";

export const MWPStudio = () => {
  return (
    <WorkItem
      title={WorkItem_MWPStudio.title}
      subtitle={WorkItem_MWPStudio.subtitle}
      description={WorkItem_MWPStudio.description}
      className="mwp-studio-resources"
    />
  );
}
export default MWPStudio;