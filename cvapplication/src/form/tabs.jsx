import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PersonalInfo from './components/Personal_info';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function InfoTabs({onAddEducation, onAddExperience, onAddProject, onAddSkills, onAddCertifications}) {
  return (
    <Tabs
      defaultActiveKey="personal-info"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="personal-info" title="Personal Info">
        <PersonalInfo/>
      </Tab>
      <Tab eventKey="education" title="Education">
        <Education onAddEducation={onAddEducation}/>
      </Tab>
      <Tab eventKey="experience" title="Experience">
        <Experience onAddExperience={onAddExperience}/>
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <Projects onAddProject={onAddProject}/>
      </Tab>
      <Tab eventKey="skills" title="Skills">
        <Skills onAddSkills={onAddSkills}/>
      </Tab>
      <Tab eventKey="certifications" title="Certifications">
        <Certifications onAddCertifications={onAddCertifications}/>
      </Tab>
    </Tabs>
  );
}

export default InfoTabs;
