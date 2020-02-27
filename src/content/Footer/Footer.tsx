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
  padding: 10px 0;

  background: ${Colors.dark};
  border-top: 1px solid #252525;
  color: ${Colors.white};

  font-size: 1.4rem;
`;