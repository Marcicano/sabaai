import React from 'react'
import {Container, Row, Col } from 'reactstrap'
import Logo from '../images/logoHero.png'
function Hero() {
  return (
      <div className="Hero-section">
          <Container fluid>
              <Row fluid>
                  <Col className="Hero" xs="12">
                      <img className="Logo" alt="sabaai" src={Logo} />
                  </Col>
              </Row>
          </Container>
    </div>
  )
}

export default Hero

