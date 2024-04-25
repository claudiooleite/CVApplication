import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PersonalInfo from './Personal_info';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';

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
