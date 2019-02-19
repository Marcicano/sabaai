import React, { Component } from 'react'
import { Container, Row, Col, Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import thaimassagem from '../images/formacao.png'
import compressa from '../images/hot-ball.png'
import reflex from '../images/reflexologia.png'
import spa from '../images/spa-tailandes.png'
import Toksen from '../images/toksen.png'
import retiro from '../images/retiro-teresopolis.png'
import {Link} from 'react-router-dom'



export class Cursos extends Component {
  render() {
    return (
      <Container id="cursos-section" fluid>
          <Row>
                <Col sm="12" md="6">
                    <Link to="/curso-thaimassagem">
                    <Card inverse className="cursothaiformacao">
                        <CardImg width="100%" src={thaimassagem} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h2 className="overlay-title">Thai Massagem</h2></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>
                            </CardImgOverlay>
                        </div>
                    </Card>
                    </Link>
                </Col>

                <Col sm="12" md="6">
                    <Link to="/curso-compressa">
                    <Card inverse className="compressa">
        <CardImg width="100%" src={compressa} alt="Card image cap" />
        <div className="overlay">  
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1 className="overlay-title">Thai Massagem com compressa de ervas</h1></CardTitle>
                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

             </CardImgOverlay>         </div>     </Card>
                    </Link>
                </Col> 
                <Col sm="12" md="6">
                    <Link to="/curso-reflexologia">
                    <Card inverse className="reflexologia">
                        <CardImg width="100%" src={reflex} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1 className="overlay-title">Reflexologia Podal</h1></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

                            </CardImgOverlay>
                        </div>

                    </Card>
                    </Link>
                </Col>
               
                <Col sm="12" md="6">
                    <Link to="/curso-spa">
                    <Card inverse className="spa">
         <CardImg width="100%" src={spa} alt="Card image cap" />
         <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1 className="overlay-title"> Spa Tailandes</h1></CardTitle>
                 <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

             </CardImgOverlay>
         </div>
     </Card>
                    </Link>

                </Col>

                <Col sm="12" md="6">
                    <Link to="/curso-toksen">
                    <Card inverse className="Toksen">
                        <CardImg width="100%" src={Toksen} alt="Card image cap" />
                        <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                                <CardTitle><h1 className="overlay-title">Tok Sen</h1></CardTitle>
                                <CardText>Vitória - Rio - Belo Horizonte - São Paulo - Curitiba - Brasília - Salvador - Recife - Fortaleza</CardText>

                            </CardImgOverlay>
                        </div>
                    </Card>
                    </Link>

                </Col>


                <Col sm="12" md="6">
                    <Link to="/retiro">
                    <Card inverse className="retiro">
         <CardImg width="100%" src={retiro} alt="Card image cap" />
         <div className="overlay">
                            <CardImgOverlay className="overlay-text">
                <CardTitle><h1 className="overlay-title">Retiro</h1></CardTitle>
                                <CardText>Teresópolis - Búzios</CardText>

             </CardImgOverlay>
         </div>
     </Card>
                    </Link>
                </Col>
          </Row>
      </Container>
    )
  }
}

export default Cursos


