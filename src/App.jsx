import React, { useState } from 'react';
import {GlobalStateProvider, useGlobalState } from './GlobalStateContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoTabs from './components/Tabs';
import CVPreview from './components/Cvpreview';
// import BtnConvertToPdf from './components/BtnConvertPdf';

   
function App() {
  

  return (
    <div>
      <GlobalStateProvider>
        <header>
          <div>
            <h1>CV App</h1>
          </div>
        </header>
        <main>
          <Container id='outer' fluid="md">
            <Row>
              <AppContent></AppContent>
            </Row>
          </Container>
          <Container>
            {/* <BtnConvertToPdf/> */}
          </Container>
        </main>
        
      </GlobalStateProvider>
    </div>
  )
};


function AppContent() {
  const { person } = useGlobalState();
  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceEntries, setExperienceEntries] = useState([]);
  const [projectEntries, setProjectEntries] = useState([]);
  const [skillsEntries, setSkillsEntries] = useState([]);
  const [certificationsEntries, setCertificationsEntries] = useState([]);


  function handleAddEducation(newEducationEntry) {
    setEducationEntries([...educationEntries, newEducationEntry]);
  }

  function handleAddExperience(newExperienceEntry) {
    setExperienceEntries([...experienceEntries, newExperienceEntry]);
  }

  function handleAddProject(newProjectEntry) {
    setProjectEntries([...projectEntries, newProjectEntry]);
  }

  function handleAddSkills(newSkillsEntry) {
    setSkillsEntries([...skillsEntries, newSkillsEntry]);
  }

  function handleAddCertifications(newCertificationsEntry){
    setCertificationsEntries([...certificationsEntries, newCertificationsEntry])
  }



  return (
    <>
      <Col>
        <InfoTabs 
        onAddEducation={handleAddEducation} 
        onAddExperience={handleAddExperience}  
        onAddProject={handleAddProject} 
        onAddSkills={handleAddSkills}
        onAddCertifications = {handleAddCertifications}
        />
      </Col>
      <Col>
        <CVPreview 
        educationEntries={educationEntries} 
        experienceEntries={experienceEntries}
        projectEntries={projectEntries}
        skillsEntries={skillsEntries}
        certificationsEntries={certificationsEntries}
        person={person}
        />
      </Col>
    </>
)}
export default App
