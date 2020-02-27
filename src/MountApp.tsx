import React from "react";
import App from "./App";
import { Theme } from "./theme";
import { AppContextProvider } from "./contexts/AppContext";

const MountApp = () => {
  return (
    <AppContextProvider>
      <App/>
      <Theme/>
    </AppContextProvider>
  );
}
export default MountApp;