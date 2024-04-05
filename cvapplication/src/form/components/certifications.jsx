import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../../GlobalStateContext';
  
function Certifications(){
      
    const { person, setPerson } = useGlobalState();
  
    function handleCertificationNameChange(e){
        setPerson({
            ...person,
            certificationName:e.target.value
        });
    }
    function handleIssuingOrganizationChange(e){
        setPerson({
            ...person,
            issuingOrganization:e.target.value
        });
    }
    function handleIssueDateChange(e){
        setPerson({
            ...person,
            issueDate:e.target.value
        });
    }

    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlCertifications">
        <Form.Label>Certification Name</Form.Label>
        <Form.Control value={person.certificationName} onChange={handleCertificationNameChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlIssuingOrganization">
        <Form.Label>Issuing Organization</Form.Label>
        <Form.Control value={person.issuingOrganization} onChange={handleIssuingOrganizationChange} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlIssueDate">
        <Form.Label>Issue Date</Form.Label>
        <Form.Control value={person.issueDate} onChange={handleIssueDateChange} type="text" />
      </Form.Group>
    </Form>
  );

}

export default Certifications;