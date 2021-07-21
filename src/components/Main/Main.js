import React, {useState} from 'react'
import {Carousels} from '../index'
import {Container, Row, Col, Card } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Carousels />
      <div style={{display: "flex", padding: "0 20px 0 20px"}}>
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

        <Container style={{background: "gray", height: "40vh", padding: "0 80px 0 80px"}}>
          <Row>
            <Col md="12" style={{background: "blue"}}>A</Col>
          </Row>
        </Container>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://random.imagecdn.app/301/301" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    </div>
  )
}

export default Main
