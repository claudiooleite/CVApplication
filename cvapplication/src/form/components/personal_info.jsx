import Form from 'react-bootstrap/Form';

function PersonalInfo(){
    return (

    <Form>
      <Form.Group className="mb-3" controlId="controlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlText">
        <Form.Label>Headline</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlTextarea1">
        <Form.Label>Portfolio</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlTextarea1">
        <Form.Label>GitHub</Form.Label>
        <Form.Control type="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlTextarea1">
        <Form.Label>Linkdin</Form.Label>
        <Form.Control type="textarea" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default PersonalInfo;