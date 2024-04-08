import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
 
function Certifications({onAddCertifications}){
      
  const [certificationName, setCertificationName] = useState('');
  const [issuingOrganization, setIssuingOrganization] = useState('');
  const [issueDate, setIssueDate] = useState('');
  
  const handleAddCertificationsClick = (e) => {
    e.preventDefault();
    const newCertificationsEntry = { certificationName, issuingOrganization, issueDate };
    onAddCertifications(newCertificationsEntry);
    setCertificationName('');
    setIssueDate('');
    setIssuingOrganization('');
   };

    return (
    <Form>
      <Form.Group className="mb-3" controlId="controlCertifications">
        <Form.Label>Certification Name</Form.Label>
        <Form.Control value={certificationName} onChange={(e) => setCertificationName(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlIssuingOrganization">
        <Form.Label>Issuing Organization</Form.Label>
        <Form.Control value={issuingOrganization} onChange={(e) => setIssuingOrganization(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlIssueDate">
        <Form.Label>Issue Date</Form.Label>
        <Form.Control value={issueDate} onChange={(e) => setIssueDate(e.target.value)} type="text" />
      </Form.Group>
      <Button onClick={handleAddCertificationsClick}>Add Certification</Button>

    </Form>
  );

}

export default Certifications;