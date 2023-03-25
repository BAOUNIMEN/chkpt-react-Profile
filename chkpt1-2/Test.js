import {Form} from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import React from 'react'
const Test = () => {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>     

        
    )
}

export default Test
