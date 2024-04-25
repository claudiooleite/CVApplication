import React from 'react';
import Form from 'react-bootstrap/Form';
import { useGlobalState } from '../GlobalStateContext';

function PersonalInfo(){
    
    const { person, setPerson } = useGlobalState();

    function handleNameChange(e){
        setPerson({
           ...person,
           name:e.target.value
        });
    }
    function handleSurnameChange(e){
      setPerson({
         ...person,
         surname:e.target.value
      });
  }

    function handleHeadlineChange(e){
        setPerson({
           ...person,
           headline:e.target.value
        });

    }

    function handleEmailChange(e){
        setPerson({
           ...person,
           email:e.target.value
        });
    }

    function handlePortfolioChange(e){
        setPerson({
           ...person,
           portfolio:e.target.value
        });
    }

    function handleGithubChange(e){
        setPerson({
           ...person,
           github:e.target.value
        });
    }

    function handleLinkedinChange(e){
        setPerson({
           ...person,
           linkedin:e.target.value
        });
    }


    return (

    <Form>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={person.name} onChange={handleNameChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control value={person.surname} onChange={handleSurnameChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlHeadline">
        <Form.Label>Headline</Form.Label>
        <Form.Control value={person.headline} onChange={handleHeadlineChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={person.email} onChange={handleEmailChange} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlPortfolio">
        <Form.Label>Portfolio</Form.Label>
        <Form.Control placeholder="link"value={person.portfolio} onChange={handlePortfolioChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlGitHub">
        <Form.Label>GitHub</Form.Label>
        <Form.Control value={person.github} onChange={handleGithubChange} type="text" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlLinkedin">
        <Form.Label>Linkdin</Form.Label>
        <Form.Control value={person.linkedin} onChange={handleLinkedinChange} type="text" />
        
      </Form.Group>
    </Form>
  );
}

export default PersonalInfo;