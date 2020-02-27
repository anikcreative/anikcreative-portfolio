import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Colors } from "../../theme";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { AppContext } from "../../contexts/AppContext";

interface NavProps {
  backgroundColor: string;
  textColor: string;
}
const Nav: React.FunctionComponent<NavProps> = (props: NavProps): JSX.Element => {
  const appContext = useContext(AppContext);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Determine if nav should be shown, based on current scroll position
  const determineNavVisibility = (scrollTop: number) => {
    const navVisibilityUpperLimit = (2.5 * window.innerHeight);
    if (scrollTop < navVisibilityUpperLimit) setIsVisible(false);
    else setIsVisible(true);
  }
  
  const handleScroll = () => {
    const scrollTop: number = appContext.currentScrollTop;
    determineNavVisibility(scrollTop);
  }
  useEffect(handleScroll, [appContext.currentScrollTop]);

  return (
    <StyledNav
      opacity={isVisible ? 1.0 : 0.0}
      className="navbar"
      {...props}
    >
      <Logo />
    </StyledNav>
  );
}
export default Nav;

interface StyledNavProps {
  opacity: number;
}
const StyledNav = styled.nav<StyledNavProps>`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  
  top: 0;
  padding: 10px 16px;

  background: none;
  color: ${Colors.white};

  opacity: ${props => props.opacity};

  transition: background 0.2s, opacity 0.2s;
  z-index: 5;

  @media screen and (max-width: 1064px) {
    left: 40px;
  }

  @media screen and (min-width: 1064px) {
    left: calc(50% - 512px);
  }
`;