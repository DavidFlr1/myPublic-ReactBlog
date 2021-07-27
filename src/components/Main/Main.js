import React, {useState} from 'react'
import { Carousels, AddPosts, Posts,SideProfile, SideAdds } from '../index'
import { Container, Row, Col } from 'react-bootstrap'

import './styles.css'

const Main = () => {
  return (
    <div>
      <Carousels/>
      
      <div className="main-container">
        <SideAdds />

        <Container >
          <Row className="main-postContainer">
            <Col md="12">
              <Row>
                <AddPosts />

              </Row>
              <Row className="main-postLine">
                <Posts />

              </Row>

            </Col>
          </Row>
        </Container>

        <SideProfile />
      </div>
    </div>
  )
}

export default Main
