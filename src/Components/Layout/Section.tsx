import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;

  @media screen and (max-width: 600px) {
    padding-left: 20px;
    padding-right: 40px;
  }

  @media screen and (min-width: 600px) and (max-width: 1064px) {
    padding-left: 40px;
    padding-right: 60px;
  }

  @media screen and (min-width: 1064px) {
    padding-left: calc(50% - 512px);
    padding-right: calc(50% - 492px);
  }
`;