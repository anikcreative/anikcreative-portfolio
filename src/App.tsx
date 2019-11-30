import React, { useEffect } from "react";
import styled from "styled-components";
import { Colors } from "./theme/Solitude";
import Nav from "./Navigation/Nav";

const App: React.FunctionComponent = () => {
  return (
    <AppContainer className="app-container">
      <Nav showBackground={true}/>
      <Content>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
        <TestDiv>Hi what's up</TestDiv>
      </Content>
    </AppContainer>
  );
}
export default App;

const AppContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: ${Colors.background1};

  z-index: 1;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const Content = styled.main`
  width: 100vw;
  height: calc(100vh - 50px);
  overflow: auto;

  z-index: 1;
`;

const TestDiv = styled.div`
  height: 500px;
  background: red;
  margin-bottom: 16px;
  padding: 16px;
  font-size: 24px;
`;