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
            <h1 
            id="demoFont" 
            style={{marginLeft: '100px' }}
            >CV APP</h1>
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
      <Col 
        style={{ 
        backgroundColor: 'rgba(83,83,83,0.21)',
        borderRadius: '15px', 
        marginLeft: '20px' 
        }}>
        <InfoTabs 
        onAddEducation={handleAddEducation} 
        onAddExperience={handleAddExperience}  
        onAddProject={handleAddProject} 
        onAddSkills={handleAddSkills}
        onAddCertifications = {handleAddCertifications}
        />
      </Col>
      <Col 
      className='preview headers-style'
      xs={8}
      style={{ 
        marginRight: '50px',
        marginLeft: '50px'
        }}>
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
