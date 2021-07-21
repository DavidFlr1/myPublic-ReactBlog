import React, {useState} from 'react'
import {Carousels, AddPosts, Posts,SideProfile, SideAdd, Footer} from '../index'
import {Container, Row, Col, Card } from 'react-bootstrap'

import './styles.css'

const Main = () => {
  return (
    <div>
      <Carousels/>
      <div className="main-container">
        <SideAdd />

        <Container>
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
      <Footer />
    </div>
  )
}

export default Main
