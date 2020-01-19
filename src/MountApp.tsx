import React from "react";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContext";

const MountApp = () => {
  return (
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  );
}
export default MountApp;