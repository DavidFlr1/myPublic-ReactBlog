import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Card bg="dark" text="light" className="text-center">
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2021 &copy; All rights reserved</Card.Footer>
      </Card>
    </div>
  )
}

export default Footer
