import React, { useEffect, useLayoutEffect } from "react";

export interface AppContextState {
  currentScrollTop: number;
  setCurrentScrollTop: (scrollTop: number) => void;
  
  viewportWidth: number;
}

export const AppContext = React.createContext<AppContextState>({
  currentScrollTop: 0,
  setCurrentScrollTop: (scrollTop: number) => {},

  viewportWidth: 0
});

export const AppContextProvider: React.FC = (props) => {
  const [currentScrollTop, setCurrentScrollTop] = React.useState<number>(0);
  const [viewportWidth, setViewportWidth] = React.useState<number>(window.innerWidth);
  const handleViewportResize = (event?: any) => setViewportWidth(window.innerWidth);
  useLayoutEffect(() => {
    window.addEventListener("resize", handleViewportResize);
    return () => window.removeEventListener("resize", handleViewportResize);
  }, []);

  const state: AppContextState = {
    currentScrollTop: currentScrollTop,
    setCurrentScrollTop: setCurrentScrollTop,

    viewportWidth: viewportWidth
  };

  return (
    <AppContext.Provider value={state}>
      {props.children}
    </AppContext.Provider>
  );
}