import React from 'react'
import {Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhoneAlt, faBirthdayCake, faLink } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
const SideProfile = () => {
  // position: 'fixed', top: '50%', right: '0'
  return (
    <div>
        <Card bg="dark" text="light" className="SideProfile-Card">
          <Card.Img variant="top" src="https://random.imagecdn.app/301/301" className="sideProfile-img"/>
          <Card.Body>
            <Card.Title className="text-center">Profile name</Card.Title>
            <Card.Text className="text-center">
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>

            <Card.Title className="text-center">Follow me</Card.Title>
            <Card.Text className="text-center">
              <ListGroup  horizontal>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faFacebook} size="2x" color="#1877F2"/><br/>David Flores</a>
                </ListGroup.Item>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2"/><br/>DavidFlores321</a>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faGithub} size="2x" color="#8400E3"/><br/>DavidFlr1</a>
                </ListGroup.Item>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/><br/>David Flores</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text><br/>

            <Card.Title className="text-center">About</Card.Title>
              <Card.Text >
                <Row>
                  <Col md="1"><FontAwesomeIcon icon={faEnvelope} color="#C8C8C8"/> </Col>
                  <Col md="10" className="sideProfile-about">Email</Col>
                <br/>
                  <Col md="1"><FontAwesomeIcon icon={faMapMarkedAlt} color="#C8C8C8"/> </Col>
                  <Col md="10" className="sideProfile-about">Location</Col>
                <br/>
                  <Col md="1"><FontAwesomeIcon icon={faPhoneAlt} color="#C8C8C8"/> </Col>
                  <Col md="10" className="sideProfile-about">Phone</Col>
                <br/>
                  <Col md="1"><FontAwesomeIcon icon={faBirthdayCake} color="#C8C8C8"/> </Col>
                  <Col md="10" className="sideProfile-about">Birthday</Col>
                <br/>
                  <Col md="1"><FontAwesomeIcon icon={faLink} color="#C8C8C8"/> </Col>
                  <Col md="10" className="sideProfile-about">Link</Col>
                </Row>
              </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SideProfile
