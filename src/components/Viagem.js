import React from 'react'
import {Container, Col, Row} from 'reactstrap'

function Viagem() {
  return (
    <Container className="viagem-section" fluid>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }} className="viagem-content">
            <h1 className="Viagem-title">Viagem à Tailândia</h1>
            <p className="Viagem-text">Em breve viaje conosco para um dos destinos mais fascinantes do mundo, a incrível Tailândia para uma imersão na cultura e nos estudos das técnicas de massagem.</p>
            <p className="Viagem-text">Aguarde para novas informações!</p>
            <p className="Viagem-text">Estamos preparando tudo, e será imperdível!</p>
        </Col> 
        </Row>
      </Container>
    </Container>
  )
}

export default Viagem

  // {/* < div className = "viagem-content" >
  //   <h1 className="Viagem-content">Viagem à Tailândia</h1>
  //   <p className="Viagem-text" >Em breve viaje conosco para um dos destinos mais fascinantes do mundo, a incrível Tailândia para uma imersão na cultura e nos estudos das técnicas de massagem.</p>
  //   <p className="Viagem-text" >Aguarde para novas informações!</p>
  //   <p className="Viagem-text" >Estamos preparando tudo, e será imperdível!</p> */}