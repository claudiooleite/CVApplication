import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
  
function Projects({onAddProject}){
      
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');
  

    const handleAddProjectClick = (e) => {
      e.preventDefault();
      const newProjectEntry = { projectName, description, media};
      onAddProject(newProjectEntry);
      setProjectName('');
      setDescription('');
      setMedia('');
      
     };
    
    
    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlProject">
        <Form.Label>Project Name</Form.Label>
        <Form.Control value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control  value={description} onChange={(e) => setDescription(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlMedia">
        <Form.Label>Media</Form.Label>
        <Form.Control  value={media} onChange={(e) => setMedia(e.target.value)} type="text" />
        <Button onClick={handleAddProjectClick}>Add Education</Button>
      </Form.Group>
    </Form>
  );

}

export default Projects;