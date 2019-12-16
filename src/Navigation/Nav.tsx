import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";
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
  text-shadow: ${props => props.textColor === Colors.white ?
    "-3px -3px 4px #000000, 3px -3px 4px #000000, 3px 3px 4px #000000, 3px -3px 4px #000000" : "unset"};

  transition: background 0.2s;
  z-index: 5;

  @media screen and (max-width: 1064px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1064px) {
    padding: 0 calc(50% - 512px);
  }
`;

const HomeLink = styled.span`
  padding: 16px 0;
  
  font-size: 1.3rem;
  font-weight: 600;
  text-transform: uppercase;
  
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${Colors.accent};
  }
`;