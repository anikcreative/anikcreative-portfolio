import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";
import { Section } from "../../components";
import { ContentSectionProps } from "../ContentSectionProps";

const Contact: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledContact ref={props.containerRef}>
      Get in touch
    </StyledContact>
  );
}
export default Contact;

const StyledContact = styled(Section)`
  min-height: 100%;

  background: ${Colors.dark};
  color: ${Colors.textLight};
`;