import React from "react";
import { WorkItem } from "../WorkItem";
import {
  WorkItem_ProjectInsight,
} from "./WorkItemData";

export const ProjectInsight = () => {
  return (
    <WorkItem
      title={WorkItem_ProjectInsight.title}
      subtitle={WorkItem_ProjectInsight.subtitle}
      description={WorkItem_ProjectInsight.description}
      className="project-insight"
    />
  );
}
export default ProjectInsight;