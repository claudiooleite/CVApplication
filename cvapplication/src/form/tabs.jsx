import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PersonalInfo from './components/Personal_info';

function InfoTabs() {
  return (
    <Tabs
      defaultActiveKey="personal-info"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="personal-info" title="Personal Info">
        <PersonalInfo ></PersonalInfo>
      </Tab>
      <Tab eventKey="education" title="Education">
        Tab content for Contact
      </Tab>
      <Tab eventKey="experience" title="Experience">
        Tab content for Profile
      </Tab>
      <Tab eventKey="projects" title="Projects">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="skills" title="Skills">
        Tab content for Contact
      </Tab>
      <Tab eventKey="certificatios" title="Certifications">
        Tab content for Loooonger Tab
      </Tab>
    </Tabs>
  );
}

export default InfoTabs;
