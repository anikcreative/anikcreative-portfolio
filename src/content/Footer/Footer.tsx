import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";
import { Section } from "../../components";
import { ContentSectionProps } from "../ContentSectionProps";

const Footer: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledFooter ref={props.containerRef}>
      © 2020, Anik Bhattacharya
    </StyledFooter>
  );
}
export default Footer;

const StyledFooter = styled(Section)`
  padding: 12px 0 10px;

  background: ${Colors.dark};
  border-top: 1px solid #252525;
  color: ${Colors.textLight};

  font-size: 1.2rem;
`;