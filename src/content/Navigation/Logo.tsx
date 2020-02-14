import React from "react";
import styled from "styled-components";
import { Colors } from "../../theme";

export const Logo = () => (
  <StyledLogo 
    className="logo-svg"
    version="1.1" 
    id="Layer_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlnsXlink="http://www.w3.org/1999/xlink"  
    xmlSpace="preserve"
    viewBox="0 20 220 80"
  >
    <g transform="translate(-899 172)">
      <g className="st0 shadow">
        <path className="st1" d="M947.1-91.4H927l-3.1,9.4h-16.6l20.7-56.4h18.2L966.8-82h-16.6L947.1-91.4z M943.2-103.3l-6.1-18.4l-6.2,18.4
          H943.2z"/>
        <path className="st1" d="M1025.3-82h-15.8l-20.8-31.6V-82H973v-56.6h15.8l20.8,32v-32h15.8V-82z"/>
        <path className="st1" d="M1051.3-138.6V-82h-15.8v-56.6H1051.3z"/>
        <path className="st1" d="M1092.2-111l21.9,29h-19l-17.8-25v25h-15.8v-56.6h15.8v24.5l18-24.5h18.8L1092.2-111z"/>
      </g>
      <g className="st0 fill">
        <path className="st2" d="M944.1-91.4H924l-3.1,9.4h-16.6l20.7-56.4h18.2L963.8-82h-16.6L944.1-91.4z M940.2-103.3l-6.1-18.4l-6.2,18.4
          H940.2z"/>
        <path className="st2" d="M1022.3-82h-15.8l-20.8-31.6V-82H970v-56.6h15.8l20.8,32v-32h15.8V-82z"/>
        <path className="st2" d="M1048.3-138.6V-82h-15.8v-56.6H1048.3z"/>
        <path className="st2" d="M1089.2-111l21.9,29h-19l-17.8-25v25h-15.8v-56.6h15.8v24.5l18-24.5h18.8L1089.2-111z"/>
      </g>
      <g className="st0 outline">
        <path className="st3" d="M941.1-95.4H921l-3.1,9.4h-16.6l20.7-56.4h18.2L960.8-86h-16.6L941.1-95.4z M937.2-107.3l-6.1-18.4l-6.2,18.4
          H937.2z"/>
        <path className="st3" d="M1019.3-86h-15.8l-20.8-31.6V-86H967v-56.6h15.8l20.8,32v-32h15.8V-86z"/>
        <path className="st3" d="M1045.3-142.6V-86h-15.8v-56.6H1045.3z"/>
        <path className="st3" d="M1086.2-115l21.9,29h-19l-17.8-25v25h-15.8v-56.6h15.8v24.5l18-24.5h18.8L1086.2-115z"/>
      </g>
    </g>
  </StyledLogo>
);
export default Logo;

const StyledLogo = styled.svg`
  height: 32px;
  transition: 0.2s;
  cursor: pointer;

  .st0, .st1, .st2, .st3,
  path {
    transition: 0.2s;
  }
  
  .st0 {
    enable-background: new;
  }
  .st1 {
    fill: #47D1A7;
  }
  .st2 {
    fill: ${Colors.accent};
  }
  .st3 {
    fill: none;
    stroke: #000000;
    opacity: 0.8;
    stroke-width: 2;
  }

  &:hover {
    transform: rotate(-2deg);

    .st1 {
      fill: #80ddff;
    }
    .st2 {
      fill: ${Colors.bright};
    }
    .st3 {
      fill: none;
      stroke: ${Colors.accent};
      opacity: 0.8;
      stroke-width: 2;
    }
  }
`;