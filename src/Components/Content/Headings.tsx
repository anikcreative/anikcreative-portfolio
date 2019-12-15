import styled from "styled-components";

export const Heading1 = styled.h1`
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 512px) {
    font-size: 5.0rem;
  }

  @media screen and (min-width: 513px) and (max-width: 768px) {
    font-size: 5.4rem;
  }

  @media screen and (min-width: 769px) {
    font-size: 6.0rem;
  }
`;