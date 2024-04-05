import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../../GlobalStateContext';
  
function Experience(){
      
    const { person, setPerson } = useGlobalState();
  
    function handleTitleChange(e){
        setPerson({
            ...person,
            title:e.target.value
        });
    }

    function handleCompanyNameChange(e){
        setPerson({
           ...person,
           companyName:e.target.value
        });
    }
    function handleLocationChange(e){
        setPerson({
            ...person,
            location:e.target.value
            });
        }
    function handleStartDateChange(e){
        setPerson({
            ...person,
            startDate:e.target.value
            });
        }

    function handleEndDateChange(e){
        setPerson({
        ...person,
            endDate:e.target.value
            });
        }
    
    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control value={person.title} onChange={handleTitleChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control value={person.companyName} onChange={handleCompanyNameChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text"  value={person.location} onChange={handleLocationChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlStart">
        <Form.Label>Start Date</Form.Label>
        <Form.Control  value={person.startDate} onChange={handleStartDateChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlEnd">
        <Form.Label>End Date</Form.Label>
        <Form.Control value={person.endDate} onChange={handleEndDateChange} type="text" />
        
      </Form.Group>
    </Form>
  );

}

export default Experience;