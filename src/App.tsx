import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Colors } from "./theme/Forge";
import Nav from "./Navigation/Nav";
import Backdrop from "./Backdrop";
import {
  IntroSpacer,
  Intro,
  BackdropImageSpacer,
  Contact, Footer
} from "./Layout";
import ScrollArea, { ScrollPositionValues } from "./ScrollArea";
import Loader from "./Loader";

const App: React.FunctionComponent = () => {
  const [borderColor, setBorderColor] = useState<string>(Colors.accent);
  const [navBackgroundColor, setNavBackgroundColor] = useState<string>('transparent');
  const [navTextColor, setNavTextColor] = useState<string>(Colors.textDefault);
  const [currentScrollTop, setCurrentScrollTop] = useState<number>(0);

  const [invertedScrollThumbHeight, setInvertedScrollThumbHeight] = useState<number>(0);

  // Container refs for each section
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const footerContainerRef = useRef<HTMLDivElement>(null);

  // Perform animation stage changes based on scroll position
  const handleScroll = (values: ScrollPositionValues) => {
    setCurrentScrollTop(values.scrollTop);

    if (values.scrollTop < 240) {
      setNavBackgroundColor('transparent');
      setNavTextColor(Colors.textDefault);
    }
    else {
      setNavBackgroundColor(Colors.light);
      setNavTextColor(Colors.textDefault);
    }

    if (contentContainerRef && contentContainerRef.current
      && footerContainerRef && footerContainerRef.current) {
      const scrollbarVerticalThumb: HTMLDivElement | null = contentContainerRef.current.querySelector('.scrollbar-thumb-vertical');
      const footerBoundingClientRectTop: number = footerContainerRef.current.getBoundingClientRect().top;
      if (scrollbarVerticalThumb) {
        const scrollThumbBottom: number = scrollbarVerticalThumb.getBoundingClientRect().bottom;
        if (scrollThumbBottom <= footerBoundingClientRectTop) setInvertedScrollThumbHeight(0);
        else setInvertedScrollThumbHeight(scrollThumbBottom - footerBoundingClientRectTop);
      }
    }

    if (footerContainerRef && footerContainerRef.current
      && values.scrollTop >= footerContainerRef.current.offsetTop - window.innerHeight) {
      setBorderColor(Colors.dark);
    }
    else setBorderColor(Colors.accent);
  }

  return (
    <AppContainer
      className="app-container"
      borderColor={borderColor}
    >
      <Loader/>
      <Backdrop
        headlineTextColor={Colors.textDefault}
        currentScrollTop={currentScrollTop}
      />
      <Nav
        backgroundColor={navBackgroundColor}
        textColor={navTextColor}
      />
      <Content
        navBackgroundColor={navBackgroundColor}
        invertedScrollThumbHeight={invertedScrollThumbHeight}
        ref={contentContainerRef}
      >
        <ScrollArea onScroll={handleScroll}>
          <IntroSpacer/>

          <Intro />

          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv>Hi what's up</TestDiv>
          <TestDiv>Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>
          <TestDiv className="bg">Hi what's up</TestDiv>

          <BackdropImageSpacer />

          <Contact containerRef={contactContainerRef}/>

          <Footer containerRef={footerContainerRef}/>
        </ScrollArea>
      </Content>
    </AppContainer>
  );
}
export default App;

interface AppContainerProps {
  borderColor: string;
}
const AppContainer = styled.div<AppContainerProps>`
  position: relative;
  width: 100vw;
  height: 100vh;

  background: none;
  border-top: 4px solid ${props => props.borderColor};
  border-right: 4px solid ${props => props.borderColor};
  border-bottom: 6px solid ${props => props.borderColor};
  border-left: 4px solid ${props => props.borderColor};

  z-index: 1;
  transform: translateZ(0);
  transition: border-color 0.4s;

  &,
  & * {
    box-sizing: border-box;
  }
`;

interface ContentProps {
  navBackgroundColor: string;
  invertedScrollThumbHeight: number;
}
const Content = styled.main<ContentProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;

  transform: translateZ(0);
  z-index: 3;

  & .scrollbar-track-vertical {
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      background: ${props => props.navBackgroundColor};
      transition: background 0.4s;
      z-index: 1;
    }
  }

  & .scrollbar-thumb-vertical {
    transform: translateZ(0);

    :after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: ${props => props.invertedScrollThumbHeight}px;
      max-height: 100%;
      background: ${Colors.light};
      transform: translateZ(0);
      z-index: 4;
    }
  }
`;

const TestDiv = styled.div`
  height: 500px;
  color: ${Colors.textDefault};
  padding: 80px;
  font-size: 24px;
  background: none;
  &.bg { background: rgba(220,220,220,1); }
`;