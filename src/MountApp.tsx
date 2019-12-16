import React from "react";
import App from "./App";
import { AppContextProvider } from "./Contexts/AppContext";

const MountApp = () => {
  return (
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  );
}
export default MountApp;