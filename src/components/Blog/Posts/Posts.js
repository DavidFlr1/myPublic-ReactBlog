import React from 'react'
import {Container, Row, Col, Card, Nav, Button } from 'react-bootstrap'

const Posts = () => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="https://random.imagecdn.app/1100/300" />
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Posts
