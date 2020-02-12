import styled from "styled-components";
import { Colors } from "../../theme/Theme";

export const AccentText = styled.span`
  color: ${Colors.accent};
`;

export const Paragraph = styled.p`
  font-weight: 400;
  margin: 6px 0;

  @media screen and (max-width: 400px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 400px) and (max-width: 600px) {
    font-size: 1.3rem;
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    font-size: 1.35rem;
  }

  @media screen and (min-width: 800px) {
    font-size: 1.4rem;
  }
`;