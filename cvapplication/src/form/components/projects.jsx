import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../../GlobalStateContext';
  
function Projects(){
      
    const { person, setPerson } = useGlobalState();
  
    function handleProjectNameChange(e){
        setPerson({
            ...person,
            projectName:e.target.value
        });
    }

    function handleDescriptionChange(e){
        setPerson({
           ...person,
           description:e.target.value
        });
    }
    function handleMediaChange(e){
        setPerson({
            ...person,
            media:e.target.value
            });
        }
    
    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlProject">
        <Form.Label>Project Name</Form.Label>
        <Form.Control value={person.projectName} onChange={handleProjectNameChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text"  value={person.description} onChange={handleDescriptionChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlMedia">
        <Form.Label>Media</Form.Label>
        <Form.Control  value={person.media} onChange={handleMediaChange} type="text" />
        
      </Form.Group>
    </Form>
  );

}

export default Projects;