import React from 'react'
import {Container, Row, Col, Card } from 'react-bootstrap'

const SideAdd = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://random.imagecdn.app/300/300" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SideAdd
