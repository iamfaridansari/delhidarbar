import React, { createContext } from "react";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendAPI = "https://server-application.onrender.com";
  return (
    <AppContext.Provider value={backendAPI}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
