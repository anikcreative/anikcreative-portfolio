import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "./theme/Forge";
import Nav from "./Navigation/Nav";
import Backdrop from "./Backdrop";
import { Intro } from "./Content/index";
import ScrollArea, { ScrollPositionValues } from "./ScrollArea";
import Loader from "./Loader";

const App: React.FunctionComponent = () => {
  const [navBackgroundVisible, setNavBackgroundVisible] = useState<boolean>(false);
  
  const handleScroll = (values: ScrollPositionValues) => {
    // Determines whether or not navbar should or should not have a transparent background
    setNavBackgroundVisible(values.top > .1);
  }

  return (
    <AppContainer className="app-container">
      <Loader/>
      <Backdrop/>
      <Nav showBackground={navBackgroundVisible}/>
      <Content>
        <ScrollArea onScroll={handleScroll}>
          <Intro/>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv>Hi what's up</TestDiv>
          <TestDiv>Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv style={{background: '#ff3f1f'}}>Contact</TestDiv>
        </ScrollArea>
      </Content>
    </AppContainer>
  );
}
export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: none;
  border-top: 4px solid ${Colors.accent};
  border-right: 4px solid ${Colors.accent};
  border-bottom: 5px solid ${Colors.accent};
  border-left: 4px solid ${Colors.accent};

  z-index: 1;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const Content = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;

  z-index: 1;
`;

const TestDiv = styled.div`
  height: 500px;
  color: ${Colors.light};
  padding: 80px;
  font-size: 24px;
  background: none;
  &.bg { background: rgba(220,220,220,0.8); }
`;