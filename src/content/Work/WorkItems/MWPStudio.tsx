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
      imgURL={"images/workitems/mwpstudio.jpg"}
      detailsButtonLabel={WorkItem_MWPStudio.detailsButtonLabel}
      detailsLink={WorkItem_MWPStudio.detailsLink}
      className="mwp-studio-resources"
    />
  );
}
export default MWPStudio;