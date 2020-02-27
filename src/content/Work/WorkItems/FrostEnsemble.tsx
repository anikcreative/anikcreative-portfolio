import React from "react";
import { WorkItem } from "../WorkItem";
import { WorkItem_FrostEnsemble } from "./WorkItemData";

export const FrostEnsemble = () => {
  return (
    <WorkItem
      title={WorkItem_FrostEnsemble.title}
      subtitle={WorkItem_FrostEnsemble.subtitle}
      description={WorkItem_FrostEnsemble.description}
      imgURL={"images/workitems/frostensemble.jpg"}
      detailsButtonLabel={WorkItem_FrostEnsemble.detailsButtonLabel}
      detailsLink={WorkItem_FrostEnsemble.detailsLink}
      className="frost-rec-ensemble"
    />
  );
}
export default FrostEnsemble;