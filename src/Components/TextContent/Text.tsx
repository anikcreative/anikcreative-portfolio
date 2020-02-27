import styled from "styled-components";
import { Colors } from "../../theme/Theme";

export const AccentText = styled.span`
  color: ${Colors.accent};
`;

interface ParagraphProps {
  addSpaceBefore?: boolean;
  addSpaceAfter?: boolean;
}
export const Paragraph = styled.p<ParagraphProps>`
  font-weight: 400;
  margin-top: ${props => props.addSpaceBefore ? '24px' : '4px'};
  margin-bottom: ${props => props.addSpaceAfter ? '24px' : '4px'};

  @media screen and (max-width: 400px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.8rem;
  }
`;