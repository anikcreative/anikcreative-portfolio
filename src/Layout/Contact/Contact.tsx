import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Forge";
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

const StyledContact = styled.div`
  width: 100%;
  height: 500px;

  background: ${Colors.light};
  color: ${Colors.textDefault};

  font-size: 1.6rem;
`;