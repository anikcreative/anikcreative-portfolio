import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../theme";
import NavMenu from "./NavMenu";

interface NavProps {
  visible: boolean;
  backgroundColor: string;
  textColor: string;
}
const Nav: React.FunctionComponent<NavProps> = (props: NavProps): JSX.Element => {  
  return (
    <StyledNav
      visible={props.visible ? 1 : 0}
      className="navbar"
      {...props}
    >
      <NavMenu/>
    </StyledNav>
  );
}
export default Nav;

const StyledNav = styled.nav<NavProps>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  height: 50px;

  background: ${Colors.accent};
  color: ${Colors.white};

  opacity: ${props => props.visible ? 1.0 : 0.0};

  transition: background 0.2s, opacity 0.2s;
  z-index: 5;

  @media screen and (max-width: 1064px) {
    left: 40px;
  }

  @media screen and (min-width: 1064px) {
    left: calc(50% - 512px);
  }
`;