import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faNewspaper, faIdCard, faUserCheck, faUserPlus, faInfo } from '@fortawesome/free-solid-svg-icons'
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
        <Link to="/" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon icon={faHome} /> HOME
        </Link>
        <Link to="/Profile" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon icon={faUser} /> PROFILE
        </Link>
        {/* <Link to="/" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon variant="regular" icon={faNewspaper} /> NEWS
        </Link> */}
        <Link to="/Contact" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon variant="regular" icon={faIdCard} /> CONTACT
        </Link>
        <Link to="/Info" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon variant="regular" icon={faInfo} /> INFO
        </Link>
      </Nav>
      <br/>
      <Nav>
        <Link to="/SignIn" className="navbar-outline navbar-nullButton" >
          <FontAwesomeIcon icon={faUserCheck} /> SIGN IN
        </Link>
        <Link to="/LogIn" className="navbar-outline navbar-button" >
          <FontAwesomeIcon icon={faUserPlus} /> LOG IN
        </Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Navbars
