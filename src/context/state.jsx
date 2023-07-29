"use client";

import { useState, createContext, useContext } from "react";

export const AppStateContext = createContext();

export const AppProvider = ({ children }) => {
  const value = useState({});
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be within the AppProvider");
  }
  return context;
};
