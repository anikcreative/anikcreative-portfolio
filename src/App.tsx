import React, { useContext, useLayoutEffect, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Colors } from "./theme/Theme";
import Backdrop from "./content/Backdrop/Backdrop";
import {
  IntroSpacer, BackdropImageSpacer,
  Nav, Footer,
  Work, Contact
} from "./content";
import ScrollArea from "./ScrollArea";
import Loader from "./Loader";
import { AppContext } from "./contexts/AppContext";

const App: React.FunctionComponent = () => {
  const appContext = useContext(AppContext);
  const [borderColor, setBorderColor] = useState<string>(Colors.accent);
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const [invertedScrollThumbHeight, setInvertedScrollThumbHeight] = useState<number>(0);
  const [invertedScrollThumbAnchor, setInvertedScrollThumbAnchor] = useState<"top" | "bottom">("top");

  // Container refs for each section
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const workSectionContainerRef = useRef<HTMLDivElement>(null);
  const contactContainerRef = useRef<HTMLDivElement>(null);
  const footerContainerRef = useRef<HTMLDivElement>(null);

  // Calculate inverted scroll thumb height
  const calculateInvertedScrollThumbHeight = () => {
    if (contentContainerRef && contentContainerRef.current
      && workSectionContainerRef && workSectionContainerRef.current
      && footerContainerRef && footerContainerRef.current) {
      const scrollbarVerticalThumb: HTMLDivElement | null = contentContainerRef.current.querySelector('.scrollbar-thumb-vertical');
      const testDivBounds: ClientRect | DOMRect = workSectionContainerRef.current.getBoundingClientRect();
      const footerBounds: ClientRect | DOMRect = footerContainerRef.current.getBoundingClientRect();

      if (scrollbarVerticalThumb) {
        const scrollThumbBounds: ClientRect | DOMRect = scrollbarVerticalThumb.getBoundingClientRect();

        if (scrollThumbBounds.bottom <= testDivBounds.top) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(scrollThumbBounds.height)
        }
        else if (scrollThumbBounds.bottom <= testDivBounds.bottom) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(testDivBounds.top - scrollThumbBounds.top);
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

  // Perform animation stage changes based on scroll position
  const handleScroll = () => {
    const scrollTop: number = appContext.currentScrollTop;

    if (scrollTop < window.innerHeight + 160) setNavVisible(false);
    else setNavVisible(true);

    if (contentContainerRef && contentContainerRef.current
      && workSectionContainerRef && workSectionContainerRef.current
      && footerContainerRef && footerContainerRef.current) {
      const scrollbarVerticalThumb: HTMLDivElement | null = contentContainerRef.current.querySelector('.scrollbar-thumb-vertical');
      const testDivBounds: ClientRect | DOMRect = workSectionContainerRef.current.getBoundingClientRect();
      const footerBounds: ClientRect | DOMRect = footerContainerRef.current.getBoundingClientRect();

      if (scrollbarVerticalThumb) {
        const scrollThumbBounds: ClientRect | DOMRect = scrollbarVerticalThumb.getBoundingClientRect();

        if (scrollThumbBounds.bottom <= testDivBounds.top) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(scrollThumbBounds.height)
        }
        else if (scrollThumbBounds.bottom <= testDivBounds.bottom) {
          setInvertedScrollThumbAnchor("top");
          setInvertedScrollThumbHeight(testDivBounds.top - scrollThumbBounds.top);
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
      <Backdrop
        headlineTextColor={Colors.textDefault}
      />
      <Nav
        visible={navVisible}
        backgroundColor={Colors.light}
        textColor={Colors.textDefault}
      />
      <Content
        invertedScrollThumbHeight={invertedScrollThumbHeight}
        invertedScrollThumbAnchor={invertedScrollThumbAnchor}
        ref={contentContainerRef}
      >
        <ScrollArea>
          <IntroSpacer />
          <Work containerRef={workSectionContainerRef} />

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
  invertedScrollThumbHeight: number;
  invertedScrollThumbAnchor: "top" | "bottom";
}
const Content = styled.main<ContentProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;

  transform: translateZ(0);
  z-index: 3;

  & .scrollbar-thumb-vertical {
    transform: translateZ(0);

    :after {
      content: "";
      position: absolute;
      top: ${props => props.invertedScrollThumbAnchor === "top" ? 0 : "unset"};
      bottom: ${props => props.invertedScrollThumbAnchor === "bottom" ? 0 : "unset"};;
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
  &.bg { background: ${Colors.grayLight}; }
  &.bg-2 { background: ${Colors.light}; }
`;