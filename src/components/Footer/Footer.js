import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'

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
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">API Photo generator</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">API Random user</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">API Posts information</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">Axios client request</a></Col>
            </Row>
            <br/>
            <Row className="Footer-references">
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">React Framework</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">Bootstrap Framework</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">Landing page inspiration</a></Col>
              <Col md="3"><a href="/" target="_blank" className="Footer-outlined">My portfolio</a></Col>
            </Row>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2021 &copy; All rights reserved</Card.Footer>
      </Card>
    </div>
  )
}

export default Footer
