import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
 
function Skills({onAddSkills}){
      const [skills, setSkills] = useState('');

      const handleAddSkillsClick = (e) => {
        e.preventDefault();
        const newSkillsEntry = {skills}
        onAddSkills(newSkillsEntry)
        setSkills('');
      }
  
    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control value={skills} onChange={(e) => setSkills(e.target.value)} type="text" />
      </Form.Group>
      <Button onClick={handleAddSkillsClick}>Add Skills</Button>

    </Form>
  );

}

export default Skills;