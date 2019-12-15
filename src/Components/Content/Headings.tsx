import styled from "styled-components";

export const Heading1 = styled.h1`
  font-weight: 800;
  margin: 0;

  @media screen and (max-width: 600px) {
    font-size: 4.4rem;
  }

  @media screen and (min-width: 601px) and (max-width: 800px) {
    font-size: 5.2rem;
  }

  @media screen and (min-width: 801px) {
    font-size: 6.0rem;
  }
`;