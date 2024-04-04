import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../../GlobalStateContext';

function Education(){

const { person, setPerson } = useGlobalState();

    function handleSchoolChange(e){
        setPerson({
           ...person,
           school:e.target.value
        });
    }

    function handleDegreeChange(e){
        setPerson({
           ...person,
           degree:e.target.value
        });

    }

    function handleEndSchoolDateChange(e){
        setPerson({
           ...person,
           endSchoolDate:e.target.value
        });
    }

    function handleGradeChange(e){
        setPerson({
           ...person,
           grade:e.target.value
        });
    }


    return (

    <Form>
      <Form.Group className="mb-3" controlId="controlSchool">
        <Form.Label>School</Form.Label>
        <Form.Control value={person.school} onChange={handleSchoolChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlDegree">
        <Form.Label>Degree</Form.Label>
        <Form.Control value={person.degree} onChange={handleDegreeChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlGraduationDate">
        <Form.Label>Graduation Date</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={person.endSchoolDate} onChange={handleEndSchoolDateChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlGrade">
        <Form.Label>Grade</Form.Label>
        <Form.Control placeholder="link"value={person.grade} onChange={handleGradeChange} type="text" />
        
      </Form.Group>
    </Form>
  );
}

export default Education;