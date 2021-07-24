import React from 'react'
import { Card, Form, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
import img from '../../../imgs/Miscellaneous/React.png'
const SignIn = () => {
  
  return (
    <div className="Profile-mainContainer">
      <Card bg="dark" text="light" className="text-center" style={{ width: '25rem', alignItems: 'center', borderRadius: '10px', padding: '2rem' }}>
      <FontAwesomeIcon size="10x" icon={faReact} className="SignIn-img"/>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder={`Enter email or use ${'empty'}`} className="AddPost-controls"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder={`Password or use ${'empty'}`} className="AddPost-controls"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" style={{textAlign: 'left'}}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default SignIn
