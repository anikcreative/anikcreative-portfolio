import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Forge";
import NavMenu from "./NavMenu";

interface NavProps {
  showBackground: boolean;
}
const Nav: React.FunctionComponent<NavProps> = (props: NavProps): JSX.Element => {
  return (
    <StyledNav
      className="navbar"
      showBackground={props.showBackground}
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
  width: calc(100% - 24px);

  background: ${props => props.showBackground ? Colors.light : "none"};

  transition: 0.3s;
  z-index: 2;
`;

const HomeLink = styled.span`
  padding: 16px 20px;
  
  font-size: 1.3rem;
  font-weight: 800;
  text-transform: uppercase;
  color: ${Colors.textDefault};
`;