import React, { useState } from 'react'
import { Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap'

const LogIn = () => {
  const [validated, setValidated] = useState(false);
  const [newUser, setNewUser] = useState({
    cell: '',
    dob: {
      date: ''
    },
    email: '',
    gender: '',
    location: {
      city: '',
      country: '',
      postcode: 0,
      state: ''
    },
    login: {
      password: '',
      username: ''
    },
    name: {
      first: '',
      last: ''
    },
    phone: '',
    picture: {
      large: ''
    }
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
  };


  return (
    <div className="Public-mainContainer">
      <Card bg="dark" text="light" style={{ width: '50rem', alignItems: 'center', borderRadius: '10px', padding: '2rem' }}>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" placeholder="First name" defaultValue="David Ricardo"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" placeholder="Last name" defaultValue="Flores Tena"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">U</InputGroup.Text>
                <Form.Control type="text" placeholder="Username" aria-describedby="inputGroupPrepend" required defaultValue="DavidFlr1"/>
                <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Birthday</Form.Label>
              <Form.Control required type="date" placeholder="Last name" defaultValue="1998-07-21"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Gender</Form.Label>
              <Form.Check required checked="true" type="radio" label="Male" name="formHorizontalRadios" id="formHorizontalRadios1"/>
              <Form.Check required type="radio" label="Female" name="formHorizontalRadios" id="formHorizontalRadios2" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom05">
              <Form.Label>Phone</Form.Label>
              <Form.Control required type="text" placeholder="Phone" defaultValue="8112365417"/>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control type="text" placeholder="email@something.com" aria-describedby="inputGroupPrepend" required defaultValue="davidricardo.flores33@gmail.com"/>
                <Form.Control.Feedback type="invalid">Please choose an email.</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom06">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required defaultValue="Monterrey"/>
              <Form.Control.Feedback type="invalid">Please provide a valid city.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom07">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required defaultValue="Nuevo Leon"/>
              <Form.Control.Feedback type="invalid">Please provide a valid state.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom08">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="State" required defaultValue="Mexico"/>
              <Form.Control.Feedback type="invalid">Please provide a valid country.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom09">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required defaultValue="64769" />
              <Form.Control.Feedback type="invalid">Please provide a valid zip.</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check required label="Agree to terms and conditions" feedback="You must agree before submitting."/>
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form>
      </Card>
    </div>
  )
}

export default LogIn
