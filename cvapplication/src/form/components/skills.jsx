import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../../GlobalStateContext';
  
function Skills(){
      
    const { person, setPerson } = useGlobalState();
  
    function handleSkillsChange(e){
        setPerson({
            ...person,
            skills:e.target.value
        });
    }

    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlSkills">
        <Form.Label>Skills</Form.Label>
        <Form.Control value={person.skills} onChange={handleSkillsChange} type="text" />
        
      
      </Form.Group>
    </Form>
  );

}

export default Skills;