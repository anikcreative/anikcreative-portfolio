import React from "react";
import { Section } from "../../components";
import { Colors } from "../../theme";
import styled from "styled-components";

interface WorkSectionProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}
export const Work: React.FC<WorkSectionProps> = (props: WorkSectionProps) => {
  return (
    <StyledWorkSection ref={props.containerRef}>
      hi
    </StyledWorkSection>
  );
}
export default Work;

const StyledWorkSection = styled(Section)`
  background: ${Colors.light}
`;