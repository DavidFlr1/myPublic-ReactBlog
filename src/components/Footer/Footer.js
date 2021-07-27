import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

import './styles.css'
const Footer = () => {
  return (
    <div>
      <Card bg="dark" text="light" className="text-center">
        <Card.Body>
          <Card.Title>Thanks to view my work!</Card.Title>
          <Card.Text>
            Here is the references to APIs, Tools and Frameworks I used to create this website
            <Row className="Footer-references">
              <Col md="3"><a href="https://source.unsplash.com" target="_blank" className="Footer-outlined">API Photo generator</a></Col>
              <Col md="3"><a href="https://randomuser.me" target="_blank" className="Footer-outlined">API Random user</a></Col>
              <Col md="3"><a href="https://jsonplaceholder.typicode.com" target="_blank" className="Footer-outlined">API Posts information</a></Col>
              <Col md="3"><a href="https://axios-http.com/docs/intro" target="_blank" className="Footer-outlined">Axios client request</a></Col>
            </Row>
            <br/>
            <Row className="Footer-references">
              <Col md="3"><a href="https://reactjs.org" target="_blank" className="Footer-outlined">React Framework</a></Col>
              <Col md="3"><a href="https://react-bootstrap.github.io" target="_blank" className="Footer-outlined">Bootstrap Framework</a></Col>
              <Col md="3"><a href="https://quilljs.com" target="_blank" className="Footer-outlined">Rich Text Tool</a></Col>
              <Col md="3"><a href="https://davidflr1.github.io/web-Portfolio/" target="_blank" className="Footer-outlined">My portfolio</a></Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2021 &copy; All rights reserved</Card.Footer>
      </Card>
    </div>
  )
}

export default Footer
