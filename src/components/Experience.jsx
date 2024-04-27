import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Experience({ onAddExperience }) {
  const [experienceData, setExperienceData] = useState({
    title: '',
    companyName: '',
    location: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperienceData({ ...experienceData, [name]: value });
  };

  const handleAddExperienceClick = (e) => {
    e.preventDefault();
    onAddExperience(experienceData);
    setExperienceData({
      title: '',
      companyName: '',
      location: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="controlTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          value={experienceData.title}
          onChange={handleChange}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          name="companyName"
          value={experienceData.companyName}
          onChange={handleChange}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          name="location"
          value={experienceData.location}
          onChange={handleChange}
          type="text"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlStart">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          name="startDate"
          value={experienceData.startDate}
          onChange={handleChange}
          type="date"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlEnd">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          name="endDate"
          value={experienceData.endDate}
          onChange={handleChange}
          type="date"
        />
      </Form.Group>
      <Button onClick={handleAddExperienceClick}>Add Experience</Button>
    </Form>
  );
}

export default Experience;