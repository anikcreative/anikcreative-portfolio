import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import { Colors } from "./Primordial";
export { Colors } from "./Primordial";

export function reduceColorOpacity(color: string, factor: number): string {
  // Reduces color opacity by the indicated factor.
  // "factor" should be between 0.0 and 1.0.
  // If "factor" is less than 0.0, a value of 0.0 will be used instead.
  // If "factor" is greater than 1.0, a value of 1.0 will be used instead.

  let factorNormalized: number;
  if (factor < 0.0) factorNormalized = 0.0;
  else if (factor > 1.0) factorNormalized = 1.0;
  else factorNormalized = factor;
  
  return color.replace("1.0", `${1.0 - factorNormalized}`);
}

export const Theme: React.FC = () => {
  return (
    <GlobalStyleWrapper>
      <LinkStyles />
    </GlobalStyleWrapper>
  );
}
const GlobalStyleWrapper = styled.div`
`;

// Links
export const LinkStyles = createGlobalStyle`
  body {
    a {
      transition: 0.2s;
    }

    a,
    a:visited {
      color: ${Colors.accent};

      &:hover,
      &:active,
      &:focus,
      &:active:focus {
        color: ${Colors.medium};
      }
    }

    a.inverted,
    a.inverted:visited {
      color: ${Colors.white};

      &:hover,
      &:active,
      &:focus,
      &:active:focus {
        color: ${Colors.bright};
      }
    }
  }
`;