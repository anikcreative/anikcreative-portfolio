import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";
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

const StyledFooter = styled.div`
  width: 100%;
  height: 200px;

  background: ${Colors.medium};
  color: ${Colors.white};

  font-size: 1.6rem;
`;