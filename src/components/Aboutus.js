import React from 'react'
import { Container, Col, Row} from 'reactstrap'

function About() {
  return (
    <Container className="About-section" id="About-section" fluid>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 7, offset: 2 }} className="viagem-content">
            <h3 className="Viagem-title">Sabaai (สบาย), a Tailândia nas suas mãos!</h3>
            <p className="Viagem-text"><span className="negrito">Sabaai</span> é do bem, <span className="negrito">Sabaai</span> é conforto, <span className="negrito">Sabaai</span> é alegria!</p>
            <p className="About-text">Das montanhas do Norte da Tailândia, através da cultura milenar tailandesa Lanna, o <span className="negrito">Sabaai</span> leva a você a experimentar o sabor, a sensação, o som e o toque que cura - tradições que passaram de geração a geração e agora chegam ao Ocidente através do <span className="negrito">Sabaai</span>. Conheça nossos cursos de diversos tipos de técnicas de Thai Massagem, reconhecidos pelo Ministério da Saúde e pelo Ministério da Educação Tailandês; Mergulhe conosco nessa experiência, nesse universo fascinante de cores e sabedoria ancestral.</p>
            <p className="Viagem-text"><span className="negrito">Sabaai</span>, uma experiência.</p>
            
        </Col> 
        </Row>
      </Container>
    </Container>
    
  )
}

export default About

    