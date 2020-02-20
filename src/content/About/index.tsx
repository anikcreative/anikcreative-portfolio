import React from "react";
import { Section, Paragraph } from "../../components";
import { Colors } from "../../theme";
import styled from "styled-components";

interface AboutSectionProps {
  containerRef?: React.RefObject<HTMLDivElement>;
}
export const About: React.FC<AboutSectionProps> = (props: AboutSectionProps) => {
  return (
    <StyledAboutSection 
      className="about-section"
      ref={props.containerRef}
    >
      <Paragraph addSpaceAfter>
        I love finding ways to address complex challenges with interactions and experiences that are 
        intuitive, inclusive, and reliable.
      </Paragraph>
      <Paragraph addSpaceAfter>
        I'm currently a user experience developer at <a href="www.hcss.com" target="_blank">HCSS</a>.
        I help build enterprise web applications for the construction industry, along with the 
        design system and components library behind those products.
      </Paragraph>
      <Paragraph>
        Keep scrolling to see some of my recent work.
      </Paragraph>
    </StyledAboutSection>
  );
}
export default About;

const StyledAboutSection = styled(Section)`
  padding: 60px 0;
  background: ${Colors.white};

  & > * {
    max-width: 600px;
  }
`;