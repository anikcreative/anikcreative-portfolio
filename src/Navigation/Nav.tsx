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
  position: absolute;
  width: 100%;
  padding: 12px 16px;

  background: ${props => props.showBackground ? Colors.background1 : "none"};
  color: ${Colors.textNormal1};

  transition: 0.4s;
  z-index: 2;
`;