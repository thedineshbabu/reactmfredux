import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext([0, () => {}]);

export const CounterProvider = ({ children }) => {
  return (
    <CounterContext.Provider value={useState(0)}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCount = () => {
  return useContext(CounterContext);
};
