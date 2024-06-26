import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: 'Claudio',
    surname:'Leite',
    headline: 'Front-end Developer',
    email: 'claudio.leite@hotmail.com',
    portfolio: '',
    github: 'https://github.com/claudiooleite',
    linkedin: 'https://www.linkedin.com/in/claudio-leite-bb2a3262/',
    title: '',
    companyName: '',
    location: '',
    startDate:'',
    endDate:'',
    school:'',
    degree:'',
    endSchoolDate:'',
    grade:'',
    projectName:'',
    description:'',
    media:'',
    skills:'',
    certificationName:'',
    issuingOrganization:'',
    issueDate:'',
  
    
  });

  return (
    <GlobalStateContext.Provider value={{ person, setPerson }}>
      {children}
    </GlobalStateContext.Provider>
  );
};