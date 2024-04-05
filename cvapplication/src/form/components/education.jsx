import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';



function Education({onAddEducation}){
  

const [school, setSchool] = useState('');
const [degree, setDegree] = useState('');
const [endSchoolDate, setSchoolDate] = useState('');
const [grade, setGrade] = useState('');


const handleAddEducationClick = (e) => {
  e.preventDefault();
  const newEducationEntry = { school, degree, endSchoolDate, grade };
  onAddEducation(newEducationEntry);
  setSchool('');
  setDegree('');
  setSchoolDate('');
  setGrade('');
  
 };



    return (
      
    <Form>
        <Form.Group className="mb-3" controlId="controlSchool">
          <Form.Label>School</Form.Label>
          <Form.Control  value={school} onChange={(e) => setSchool(e.target.value)} type="text" />
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="controlDegree">
          <Form.Label>Degree</Form.Label>
          <Form.Control  value={degree} onChange={(e) => setDegree(e.target.value)} type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="controlGraduationDate">
          <Form.Label>Graduation Date</Form.Label>
          <Form.Control  type="date" value={endSchoolDate} onChange={(e) => setSchoolDate(e.target.value)} />
        
      </Form.Group>
        <Form.Group className="mb-3" controlId="controlGrade">
          <Form.Label>Grade</Form.Label>
          <Form.Control  value={grade} onChange={(e) => setGrade(e.target.value)} type="text"/>
      </Form.Group>
      <button onClick={handleAddEducationClick}>Add Education</button>
    </Form>
  );
}

export default Education;