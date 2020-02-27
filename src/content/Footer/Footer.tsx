import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";
import { Section } from "../../components";
import { ContentSectionProps } from "../ContentSectionProps";

const Footer: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledFooter ref={props.containerRef}>
      Sup. this is a footer.
    </StyledFooter>
  );
}
export default Footer;

const StyledFooter = styled(Section)`
  height: 96px;

  background: ${Colors.dark};
  border-top: 1px dashed ${Colors.medium};
  color: ${Colors.white};

  font-size: 1.4rem;
`;