import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../theme/Forge";
import NavMenu from "./NavMenu";

interface NavProps {
  backgroundColor: string;
  textColor: string;
}
const Nav: React.FunctionComponent<NavProps> = (props: NavProps): JSX.Element => {  
  return (
    <StyledNav
      className="navbar"
      {...props}
    >
      <HomeLink>Anik Bhattacharya</HomeLink>
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
  width: calc(100% - 20px);
  height: 50px;

  background: ${props => props.backgroundColor};
  color: ${props => props.textColor};
  z-index: 5;
`;

const HomeLink = styled.span`
  padding: 16px 20px;
  
  font-size: 1.3rem;
  font-weight: 800;
  text-transform: uppercase;
  
  cursor: pointer;

  &:hover {
    color: ${Colors.accent};
  }
`;