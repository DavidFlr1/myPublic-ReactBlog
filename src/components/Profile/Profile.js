import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card, OverlayTrigger, Popover } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhoneAlt, faBirthdayCake, faLink, faUser, faKey } from '@fortawesome/free-solid-svg-icons'

import './styles.css'
const Profile = () => {
  const [randomUser, setRandomUser] = useState({name: {first: '', last: ''}})
  const [display, setDisplay] = useState({displayField: '', displayValue: ''})

  const getUser = async () => {
    axios.get('https://randomuser.me/api/')
    .then(response => setRandomUser(response.data.results[0]))
    .catch(error => console.log(error))
  }

  const handleHover = (field, value) => {
    console.log(field, value)
    console.log(randomUser)
    setDisplay({displayField: field, displayValue: value})
  }

  useEffect(() => {
    getUser()
  }, [])
  return (
    <div className="Profile-mainContainer">
      <Card bg="dark" text="light" className="text-center" style={{ width: '50rem', alignItems: 'center' }}>
        <Card.Img variant="top" src="https://random.imagecdn.app/160/160" className="Profile-img" />
        <Card.Body>
          <Card.Title>{randomUser.name.first} {randomUser.name.last}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Card.Text>
            Hi, my <b>{display.displayField}</b> is <b>{display.displayValue}</b>
            <br/>

          </Card.Text>
        <hr className="Profile-hr"></hr>
          <FontAwesomeIcon icon={faEnvelope} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Email', randomUser.email)}/>
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Location', randomUser.location.street.name + ' ' + randomUser.location.street.number + ' ' + randomUser.location.state)}/>
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Cellphone', randomUser.cell)}/>
          <FontAwesomeIcon icon={faBirthdayCake} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Birthday', randomUser.dob.date.substring(0,10)) }/>
          <FontAwesomeIcon icon={faLink} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Link', 'https://randomuser.me')}/>
          <FontAwesomeIcon icon={faUser} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('User', randomUser.login.username)}/>
          <FontAwesomeIcon icon={faKey} size="2x" color="#C8C8C8" className="Profile-Icon" onMouseEnter={() => handleHover('Password', randomUser.login.password)}/>
        <hr className="Profile-hr"></hr>
        </Card.Body>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile
