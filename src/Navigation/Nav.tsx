import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Solitude";

interface NavProps {
  showBackground: boolean;
}
const Nav: React.FunctionComponent<NavProps> = (props: NavProps): JSX.Element => {
  return (
    <StyledNav
      className="navbar"
      showBackground={props.showBackground}
    >
      Anik
    </StyledNav>
  );
}
export default Nav;

const StyledNav = styled.nav<NavProps>`
  display: block;
  width: 100%;
  height: 50px;

  background: ${props => props.showBackground ? Colors.background1 : "none"};

  z-index: 2;
`;