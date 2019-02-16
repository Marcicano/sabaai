import React from 'react'
import {Container, Col} from 'reactstrap'

function Viagem() {
  return (
    <div className="viagem-section">
      <Container>
          <Col sm="12" md={{size: 8, offset: 2}}>
            <div className="viagem-content">
                      <h1 className="Viagem-content">Viagem à Tailândia</h1>
                      <p className="Viagem-text" >Em breve viaje conosco para um dos destinos mais fascinantes do mundo, a incrível Tailândia para uma imersão na cultura e nos estudos das técnicas de massagem.</p>
                      <p className="Viagem-text" >Aguarde para novas informações!</p>
                      <p className="Viagem-text" >Estamos preparando tudo, e será imperdível!</p> 
      
            </div>
          </Col>
      </Container>
    </div>
  )
}

export default Viagem