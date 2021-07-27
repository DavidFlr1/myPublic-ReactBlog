import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

const InfoAlert = () => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
        <Modal.Header >
          <Modal.Title>Welcome to my react blog landing page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The purpose of this blog is just to show a bit of my work using react framework, functionalities with js,
          interaction with APIs, handling data and styles.
          <br/><br/>
          You can use the different functionalities of the blog such as the log, sign and blog post
          You can use the default data within the forms or register your own, all data is handled confidentially, 
          is temporarily stored in the APIs and then destroyed
          <br/><br/>
          All the information, icons and images are collected from different APIs, 
          you can find the reference to them in the footer or in the Information tab
          <br/><br/>
          You can check <a href="https://github.com/DavidFlr1/myPublic-ReactBlog" target="_blank">this blog from my repository</a> on github
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default InfoAlert
