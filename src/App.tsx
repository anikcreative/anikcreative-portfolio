import React, { useContext, useLayoutEffect, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "./theme";
import {
  IntroSpacer, IntroButtons,
  IntroPart1, IntroPart2, IntroPart3,
  BackdropImageSpacer,
  Nav, Footer,
  Work, Contact
} from "./content";
import ScrollArea from "./ScrollArea";
import Loader from "./Loader";
import { AppContext } from "./contexts/AppContext";



const App: React.FunctionComponent = () => {
  const appContext = useContext(AppContext);
  const [borderColor, setBorderColor] = useState<string>(Colors.accent);
  const [introButtonsVisible, setIntroButtonsVisible] = useState<boolean>(true);

  const [invertedScrollThumbHeight, setInvertedScrollThumbHeight] = useState<number>(0);
  const [invertedScrollThumbAnchor, setInvertedScrollThumbAnchor] = useState<"top" | "bottom">("top");

  // Container refs for each section
  const introButtonsRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const worksContainerRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const footerContainerRef = useRef<HTMLDivElement>(null);

  // Calculate inverted scroll thumb height
  const calculateInvertedScrollThumbHeight = () => {
    if (contentContainerRef && contentContainerRef.current
      && footerContainerRef && footerContainerRef.current) {
      const scrollbarVerticalThumb: HTMLDivElement | null = contentContainerRef.current.querySelector('.scrollbar-thumb-vertical');
      const introBackdrop: HTMLDivElement | null = document.querySelector('.intro-part-1');
      const footerBounds: ClientRect | DOMRect = footerContainerRef.current.getBoundingClientRect();

      if (scrollbarVerticalThumb && introBackdrop) {
        const scrollThumbBounds: ClientRect | DOMRect = scrollbarVerticalThumb.getBoundingClientRect();
        const introBackdropBounds: ClientRect | DOMRect = introBackdrop.getBoundingClientRect();

        if (scrollThumbBounds.bottom <= introBackdropBounds.bottom) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(scrollThumbBounds.height)
        }
        else if (scrollThumbBounds.top <= introBackdropBounds.bottom) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(introBackdropBounds.bottom - scrollThumbBounds.top);
        }
        else if (scrollThumbBounds.bottom <= footerBounds.top) {
          setInvertedScrollThumbAnchor("bottom");
          setInvertedScrollThumbHeight(0);
        }
        else {
          setInvertedScrollThumbAnchor("bottom");
          setInvertedScrollThumbHeight(scrollThumbBounds.bottom - footerBounds.top);
        }
      }
    }
  }
  useEffect(() => {
    setTimeout(calculateInvertedScrollThumbHeight, 500)
  }, []);

  // Determine in intro buttons should be shown (at top) based on current scroll position
  const determineIntroButtonsVisibility = (scrollTop: number) => {
    if (worksContainerRef && worksContainerRef.current
      && introButtonsRef && introButtonsRef.current) {
      const introButtonsBottom = introButtonsRef.current.getBoundingClientRect().bottom;
      const worksContainerTop = worksContainerRef.current.getBoundingClientRect().top;

      if (introButtonsBottom >= worksContainerTop - 20) setIntroButtonsVisible(false);
      else setIntroButtonsVisible(true);
    }
  }

  // Perform animation stage changes based on scroll position
  const handleScroll = () => {
    const scrollTop: number = appContext.currentScrollTop;

    determineIntroButtonsVisibility(scrollTop);
    calculateInvertedScrollThumbHeight();
    
    if (footerContainerRef && footerContainerRef.current
      && scrollTop >= footerContainerRef.current.offsetTop - window.innerHeight) {
      setBorderColor(Colors.medium);
    }
    else setBorderColor(Colors.accent);
  }
  useLayoutEffect(handleScroll, [false]);
  useEffect(handleScroll, [appContext.currentScrollTop]);

  return (
    <AppContainer
      className="app-container"
      borderColor={borderColor}
    >
      <Loader/>
      
      <BackdropContainer className="backdrop-container">
        <IntroPart1 order={3} />
        <IntroPart2 order={2} />
        <IntroPart3 order={1} />
      </BackdropContainer>

      <Nav
        backgroundColor={Colors.light}
        textColor={Colors.textDefault}
      />
      
      <Content
        className="main-content-container"
        invertedScrollThumbHeight={invertedScrollThumbHeight}
        invertedScrollThumbAnchor={invertedScrollThumbAnchor}
        ref={contentContainerRef}
      >
        <IntroButtons
          visible={introButtonsVisible}
          containerRef={introButtonsRef}
        />
        <ScrollArea>
          <IntroSpacer />
          <Work containerRef={worksContainerRef} />

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
  min-width: 320px;

  background: none;
  border-top: 4px solid ${props => props.borderColor};
  border-right: 4px solid ${props => props.borderColor};
  border-bottom: 6px solid ${props => props.borderColor};
  border-left: 4px solid ${props => props.borderColor};

  z-index: 1;
  transform: translate3d(0);
  transition: border-color 0.4s;

  &,
  & * {
    box-sizing: border-box;
  }
`;

const BackdropContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

interface ContentProps {
  invertedScrollThumbHeight: number;
  invertedScrollThumbAnchor: "top" | "bottom";
}
const Content = styled.main<ContentProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;

  transform: translate3d(0);
  z-index: 3;

  & .scrollbar-thumb-vertical {
    transform: translate3d(0);

    :after {
      content: "";
      position: absolute;
      top: ${props => props.invertedScrollThumbAnchor === "top" ? 0 : "unset"};
      bottom: ${props => props.invertedScrollThumbAnchor === "bottom" ? 0 : "unset"};;
      left: 0;
      width: 100%;
      height: ${props => props.invertedScrollThumbHeight}px;
      max-height: 100%;
      background: ${Colors.white};
      transform: translate3d(0);
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
  &.bg { background: ${Colors.grayLight}; }
  &.bg-2 { background: ${Colors.light}; }
`;