import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;

  @media screen and (max-width: 1044px) {
    padding: 24px 40px;
  }

  @media screen and (min-width: 1044px) {
    padding: 48px calc(50% - 512px);
  }
`;