import React from 'react'
import { Row, Col,Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
const Info = () => {
  return (
    <div className="Public-mainContainer">
      <Card bg="dark" text="light" className="text-center" style={{ width: '90rem'}}>
        <Card.Body>
          <Card.Title>References</Card.Title>
          <Card.Text>
            Here is the references to APIs, Tools and Frameworks I used to create this website
            <br/>
            <hr/>
            <Row className="Footer-references">
              <Col md="3">
                <div className="Info-text">The internet’s source of freely-usable images. Powered by creators everywhere.</div>
                <a href="https://source.unsplash.com" target="_blank" className="Footer-outlined">API Photo generator</a></Col>
              <Col md="3">
                <div className="Info-text">A free, open-source API for generating random user data</div>
                <a href="https://randomuser.me" target="_blank" className="Footer-outlined">API Random user</a></Col>
              <Col md="3">
                <div className="Info-text">Free fake API for testing and prototyping.</div>
                <a href="https://jsonplaceholder.typicode.com" target="_blank" className="Footer-outlined">API Posts information</a></Col>
              <Col md="3">
                <div className="Info-text">Promise based HTTP client for the browser and node.js</div>
                <a href="https://axios-http.com/docs/intro" target="_blank" className="Footer-outlined">Axios client request</a></Col>
            </Row>
            <br/><br/>
            <Row className="Footer-references">
              <Col md="3">
                <div className="Info-text">A JavaScript library for building user interfaces</div>
                <a href="https://reactjs.org" target="_blank" className="Footer-outlined">React Framework</a></Col>
              <Col md="3">
                <div className="Info-text">The most popular front-end framework rebuilt for React.</div>
                <a href="https://react-bootstrap.github.io" target="_blank" className="Footer-outlined">Bootstrap Framework</a></Col>
              <Col md="3">
                <div className="Info-text">The Biggest Theme Ever for Blog/Magazine</div>
                <a href="https://soledad.pencidesign.net/landing-page/" target="_blank" className="Footer-outlined">Landing page inspiration</a></Col>
              <Col md="3">
                <div className="Info-text">My portfolio where you can see all my job</div>
                <a href="https://davidflr1.github.io/web-Portfolio/" target="_blank" className="Footer-outlined">My portfolio</a></Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Info
