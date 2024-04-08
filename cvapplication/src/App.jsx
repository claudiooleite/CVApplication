import React, { useState } from 'react';
import {GlobalStateProvider, useGlobalState } from './GlobalStateContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InfoTabs from './form/Tabs';
import CVPreview from './form/components/Cvpreview';

   
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
        </main>
      </GlobalStateProvider>
    </div>
  )
}
function AppContent() {
  const { person } = useGlobalState();
  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceEntries, setExperienceEntries] = useState([]);
  const [projectEntries, setProjectEntries] = useState([]);
  const [skillsEntries, setSkillsEntries] = useState([]);


  function handleAddEducation(newEducationEntry) {
    setEducationEntries([...educationEntries, newEducationEntry]);
  }

  function handleAddExperience(newExperienceEntry) {
    setExperienceEntries([...experienceEntries, newExperienceEntry]);
  }

  function handleProject(newProjectEntry) {
    setProjectEntries([...projectEntries, newProjectEntry]);
  }

  function handleSkills(newSkillsEntry) {
    setSkillsEntries([...skillsEntries, newSkillsEntry]);
  }



  return (
    <>
      <Col>
        <InfoTabs 
        onAddEducation={handleAddEducation} 
        onAddExperience={handleAddExperience}  
        onAddProject={handleProject} 
        onAddSkills={handleSkills}/>
      </Col>
      <Col>
        <CVPreview 
        educationEntries={educationEntries} 
        experienceEntries={experienceEntries}
        projectEntries={projectEntries}
        skillsEntries={skillsEntries}
        person={person}
        />
      </Col>
    </>
)}
export default App
