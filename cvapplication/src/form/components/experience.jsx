import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

  
function Experience({onAddExperience}){
      
    
    const [title, setTitle] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');


  const handleAddExperienceClick = (e) => {
    e.preventDefault();
    const newExperienceEntry = { title, companyName, location, startDate, endDate};
    onAddExperience(newExperienceEntry);
    setTitle('');
    setCompanyName('');
    setLocation('');
    setStartDate('');
    setEndDate('');
  };
  
    
    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text"  value={location} onChange={(e) => setLocation(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlStart">
        <Form.Label>Start Date</Form.Label>
        <Form.Control  value={startDate} onChange={(e) => setStartDate(e.target.value)} type="date" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlEnd">
        <Form.Label>End Date</Form.Label>
        <Form.Control value={endDate} onChange={(e) => setEndDate(e.target.value)} type="date" />
        
      </Form.Group>
      <Button onClick={handleAddExperienceClick}>Add Education</Button>
    </Form>
  );

}

export default Experience;