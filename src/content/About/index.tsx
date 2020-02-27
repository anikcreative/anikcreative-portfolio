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
        I'm a User Experience Developer at <a href="https://www.hcss.com" target="_blank">HCSS</a>, helping 
        build enterprise web applications for the construction industry. Most of my work focuses on interaction 
        design, front-end development with React, rapid prototyping for emerging products, and rescuing those 
        stranded in CSS.
      </Paragraph>
      <Paragraph addSpaceAfter>
        Whether in familiar territory, or in uncharted waters, I love finding ways to interpret and analyze 
        complex challenges. I've worked on interdisciplinary projects with artists, designers, choreographers, 
        film directors, game developers, and all sorts of talented people. I'm always on the lookout for cool 
        ideas on the horizon — get in touch if you have one and are looking to collaborate!
      </Paragraph>
      <Paragraph>
        Keep scrolling to see some of my recent work.
      </Paragraph>
    </StyledAboutSection>
  );
}
export default About;

const StyledAboutSection = styled(Section)`
  padding: 80px 0 120px;
  background: ${Colors.white};

  & > * {
    max-width: 600px;
  }
`;