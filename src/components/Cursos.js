import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import thaimassagem from '../images/formacao.png'
import compressa from '../images/hot-ball.png'
import reflex from '../images/reflexologia.png'
import spa from '../images/spa-tailandes.png'
import Toksen from '../images/toksen.png'
import retiro from '../images/retiro-teresopolis.png'


export class Cursos extends Component {
  render() {
    return (
      <Container fluid>
          <Row fluid>
                <Col sm="12" md="6">
                    <Card inverse className="cursothaiformacao">
                        <CardImg width="100%" src={thaimassagem} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1>Thai Massagem</h1></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>
                            </CardImgOverlay>
                        </div>
                    </Card>
                </Col>

                <Col sm="12" md="6">
                    <Card inverse className="compressa">
        <CardImg width="100%" src={compressa} alt="Card image cap" />
        <div className="overlay">  
                            <CardImgOverlay className="overlay-text">
                <CardTitle><h1>Thai Massagem com compressa de ervas</h1></CardTitle>
                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

             </CardImgOverlay>         </div>     </Card>
                </Col> <Col sm="12" md="6">
                    <Card inverse className="reflexologia">
                        <CardImg width="100%" src={reflex} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1>Reflexologia Podal</h1></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

                            </CardImgOverlay>
                        </div>

                    </Card>
                </Col>
               
                <Col sm="12" md="6">
                    <Card inverse className="spa">
         <CardImg width="100%" src={spa} alt="Card image cap" />
         <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                 <CardTitle><h1> Spa Tailandes</h1></CardTitle>
                 <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

             </CardImgOverlay>
         </div>
     </Card>

                </Col>

                <Col sm="12" md="6">
                    <Card inverse className="Toksen">
                        <CardImg width="100%" src={Toksen} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1>Tok Sen</h1></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

                            </CardImgOverlay>
                        </div>
                    </Card>

                </Col>


                <Col sm="12" md="6">
                    <Card inverse className="retiro">
         <CardImg width="100%" src={retiro} alt="Card image cap" />
         <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                <CardTitle><h1>Retiro</h1></CardTitle>
                                <CardText>Teresópolis - Búzios</CardText>

             </CardImgOverlay>
         </div>
     </Card>
                </Col>
          </Row>
      </Container>
    )
  }
}

export default Cursos


