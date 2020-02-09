import React from "react";
import { Section } from "../../components";
import { Colors } from "../../theme";
import styled from "styled-components";

interface WorkSectionProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}
export const Work: React.FC<WorkSectionProps> = (props: WorkSectionProps) => {
  return (
    <StyledWorkSection 
      className="work-section"
      ref={props.containerRef}
    >
      Hey hows it goin
    </StyledWorkSection>
  );
}
export default Work;

const StyledWorkSection = styled(Section)`
  height: 1000px;
  background: ${Colors.light};
`;