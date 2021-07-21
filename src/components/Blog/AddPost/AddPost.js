import React, {useState} from 'react'
import {Container, Row, Col, Card, ButtonGroup, Dropdown, Button, Form } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFont, faPaperclip, faMapMarkedAlt, faSmileWink } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
const AddPost = () => {
  const [radioValue, setRadioValue] = useState('1');
  return (
    <div>

      <Card bg="dark" text="light" >
        <Card.Header className="text-center">
          ¿What do you have in mind?
        </Card.Header>
        <Card.Body style={{position: "relative"}}>
          <Card.Title>
            <Form.Control type="text" placeholder="Give me a fresh title..." className="AddPost-controls"/>
          </Card.Title>
          <Card.Text>
            <Row>
              <Col md="10">
                <Form.Control as="textarea" rows={6} placeholder="Don't be shay and say everything..." className="AddPost-controls"/>
              </Col>
              <Col md="2">
                  <Card.Img src="https://random.imagecdn.app/200/200"/>
              </Col>
            </Row>
          </Card.Text>
          <Card.Text>
            <Row>
              <Col md="2">
                <ButtonGroup aria-label="Basic example">
                  <Button variant="outline-secondary"><FontAwesomeIcon icon={faFont} /></Button>
                  <Button variant="outline-secondary"><FontAwesomeIcon icon={faSmileWink} /></Button>
                  <Button variant="outline-secondary"><FontAwesomeIcon icon={faPaperclip} /></Button>
                  <Button variant="outline-secondary"><FontAwesomeIcon icon={faMapMarkedAlt} /></Button>
                </ButtonGroup>
              </Col>
              <Col md="8">
                <Form.Control type="text" placeholder="Labels" className="AddPost-controls"/>
              </Col>
              <Col md="2">
              </Col>
            </Row>
          </Card.Text>
          <Col md={{span: 2, offset: 10}} className="d-grid gap-2">
            <Button variant="outline-secondary"  className="float-right">POST</Button>
          </Col>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AddPost
