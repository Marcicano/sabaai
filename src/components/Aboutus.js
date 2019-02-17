import React from 'react'
import { Container, Col, Row} from 'reactstrap'

function About() {
  return (
    <Container className="About-section" fluid>
       <Row>
        <Col xs="12" md={{size: 6, offset: 3}} className="About-paper">
          <h2 className="About-title">Sabaai (สบาย), a Tailândia nas suas mãos!</h2>
          <br />
          <p className="About-subtitle"> <span className="negrito">Sabaai</span> é do bem, <span className="negrito">Sabaai</span> é conforto, <span className="negrito">Sabaai</span> é alegria!</p>
          <p className="About-text">Das montanhas do Norte da Tailândia, através da cultura milenar tailandesa Lanna, o <span className="negrito">Sabaai</span> leva a você a experimentar o sabor, a sensação, o som e o toque que cura - tradições que passaram de geração a geração e agora chegam ao Ocidente através do <span className="negrito">Sabaai</span>. Conheça nossos cursos de diversos tipos de técnicas de Thai Massagem, reconhecidos pelo Ministério da Saúde e pelo Ministério da Educação Tailandês; Mergulhe conosco nessa experiência, nesse universo fascinante de cores e sabedoria ancestral.</p>
          <br />
          <p className="About-text"> <span className="negrito">Sabaai</span>, uma experiência.</p>
        </Col>
       </Row>
          </Container>
    
    
  )
}

export default About
