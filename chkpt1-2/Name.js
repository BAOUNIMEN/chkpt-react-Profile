import Form from 'react-bootstrap/Form';

function Name() {
  return (
    <>
      <Form.Group >
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="Text" placeholder="Full Name" />
        </Form.Group>
        
    </>
  );
}

export default Name;