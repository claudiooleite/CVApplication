import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: '',
    headline: '',
    email: '',
    portfolio: '',
    github: '',
    linkedin: '',
  });

  return (
    <GlobalStateContext.Provider value={{ person, setPerson }}>
      {children}
    </GlobalStateContext.Provider>
  );
};