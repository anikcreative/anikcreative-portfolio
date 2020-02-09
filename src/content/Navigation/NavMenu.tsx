import React from "react";
import styled from "styled-components";
import { TextButton } from "../../components";

const NavMenu: React.FunctionComponent = (): JSX.Element => {
  return (
  <StyledNavMenu>
    <TextButton className="tooltip-trigger">
      <span className="label">Menu</span>
    </TextButton>
  </StyledNavMenu>
  );
}
export default NavMenu;

const StyledNavMenu = styled.div`
  display: inline-block;
  padding: 10px 8px 12px;
  font-size: 1.5rem;
  transition: 0.3s;
`;