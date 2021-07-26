import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
const Contact = () => {
  return (
    <div className="Public-mainContainer">
      <Card bg="dark" text="light" style={{ width: '50rem'}}>
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text className="Contact-Info">
            I'am located in Monterrey Sur, N.L., Mexico <br/><br/>
            You can reach me trough my email 
            <b> davidricardo.flores33@gmail.com </b><br/>
            or with my phone number
            <b> +1 52 (81) 1236 5417 </b><br/>  
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to="https://davidflr1.github.io/web-Portfolio/" target="_blank" className="navbar-outline">
            <FontAwesomeIcon icon={faLink} color="white" className="Contact-Icon"/>
          </Link>
          <Link to="https://www.linkedin.com/in/david-flores-31803b145/" target="_blank" className="navbar-outline">
            <FontAwesomeIcon icon={faLinkedin} color="white" className="Contact-Icon"/>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default Contact
