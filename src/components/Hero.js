import React from 'react'
import {Container, Row, Col } from 'reactstrap'
import Logo from '../images/logoHero.png'



function Hero() {
  return (
      <div className="Hero-section">
          <Container fluid>
              <Row>
                  <Col className="Hero">
                      
                      <img className="Logo" alt="sabaai" src={Logo} />
                      
                  </Col>
                  
              </Row>
              
          </Container>
    </div>
  )
}

export default Hero

