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
        <Card bg="dark" text="light" style={{ width: '18rem', padding: '5px'}}>
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
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faTwitter} size="2x" color="#1DA1F2"/><br/>David Flores</a>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup horizontal>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faGithub} size="2x" color="#8400E3"/><br/>David Flores</a>
                </ListGroup.Item>
                <ListGroup.Item className="sideProfile-group">
                  <a href="/" className="sideProfile-outline"><FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/><br/>David Flores</a>
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>

            <Card.Title className="text-center">About</Card.Title>
            <Card.Text>
              <FontAwesomeIcon icon={faEnvelope} color="gray"/> Email
              <br/>
              <FontAwesomeIcon icon={faMapMarkedAlt}  color="gray"/> Location
              <br/>
              <FontAwesomeIcon icon={faPhoneAlt}  color="gray"/> Phone
              <br/>
              <FontAwesomeIcon icon={faBirthdayCake}  color="gray"/> Birthday
              <br/>
              <FontAwesomeIcon icon={faLink}  color="gray"/> Website
              <br/>
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SideProfile
