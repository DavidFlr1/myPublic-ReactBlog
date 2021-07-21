import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'

import './styles.css'
const Navbars = () => {
  const [isMobile, setIsMobile] = useState(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

  return (
<Navbar bg="dark" variant="dark" expand="lg" >
  {!isMobile ? <FontAwesomeIcon size="2x" icon={faReact} className="navbar-icon"/>: ''}
  <Container>
    {isMobile ? <FontAwesomeIcon size="2x" icon={faReact} className="navbar-icon"/>: ''}
    <Navbar.Brand href="/">REACT BLOG</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-center" >
        <Link to="/" className="navbar-outline" >
          <FontAwesomeIcon icon={faHome} /> HOME
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars
