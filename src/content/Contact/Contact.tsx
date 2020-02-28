import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "../../theme/Theme";
import { Section, Heading3, Paragraph } from "../../components";
import { ContentSectionProps } from "../ContentSectionProps";

enum ContactFormStatus {
  Success = 1,
  Error = 2
}
const Contact: React.FunctionComponent<ContentSectionProps> = 
  (props: ContentSectionProps): JSX.Element => {
  return (
    <StyledContact ref={props.containerRef}>
      <Heading3>Get in touch</Heading3>
      <br/>
      <Paragraph>
        For now, <strong> please use <a href="https://anikcreative.myportfolio.com/contact" target="_blank">
          this contact form
        </a></strong> (on my Adobe portfolio site) to send me a message.
      </Paragraph>
      <Paragraph>
        This area is still under construction, and will be coming soon!
      </Paragraph>
    </StyledContact>
  );
}
export default Contact;

const StyledContact = styled(Section)`
  padding-top: 160px;
  min-height: 100%;

  background: ${Colors.dark};
  color: ${Colors.white};
`;