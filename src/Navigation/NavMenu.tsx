import React from "react";
import styled from "styled-components";
import { Colors } from "../theme/Theme";

const NavMenu: React.FunctionComponent = (): JSX.Element => {
  return (
  <StyledNavMenu>
    Menu goes here.
  </StyledNavMenu>
  );
}
export default NavMenu;

const StyledNavMenu = styled.div`
  display: inline-block;
  padding: 16px 20px;
  font-size: 1.5rem;
`;