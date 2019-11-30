import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "./theme/Solitude";
import Nav from "./Navigation/Nav";
import Backdrop from "./Backdrop";
import ScrollArea, { ScrollPositionValues } from "./ScrollArea";

const App: React.FunctionComponent = () => {
  const [navBackgroundVisible, setNavBackgroundVisible] = useState<boolean>(false);
  
  const handleScroll = (values: ScrollPositionValues) => {
    // Determines whether or not navbar should or should not have a transparent background
    setNavBackgroundVisible(values.top > .07);
  }

  return (
    <AppContainer className="app-container">
      <Backdrop/>
      <Nav showBackground={navBackgroundVisible}/>
      <Content>
        <ScrollArea onScroll={handleScroll}>
          <TestDiv>Hi what's up</TestDiv>
          <TestDiv>Hi what's up</TestDiv>
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

  background: white;
  border-top: 4px solid #ff3f1f;
  border-right: 4px solid #ff3f1f;
  border-bottom: 6px solid #ff3f1f;
  border-left: 4px solid #ff3f1f;

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
  color: #aaa;
  padding: 80px;
  font-size: 24px;
  &.bg { background: rgba(220,220,220,0.8); }
`;