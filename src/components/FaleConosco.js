import React from 'react'
import {Container,Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';

function FaleConosco() {
  return (
    <Container  fluid id="FaleConosco-section">
      <div className="FaleConosco-content">
          <h2 className="FaleConosco-title">Fale Conosco</h2>
              <form name="contact" method="POST" data-netlify="true">
                 <Container>
                      <Row form>
                          <Col sm="12" md={{size: 3, offset:3}}>
                              <FormGroup>
                                  <Input size="lg" type="text" name="name" id="name" placeholder="Nome" />
                              </FormGroup>
                          </Col>
                          <Col sm="12" md={3}>
                              <FormGroup>
                                  <Input size="lg" type="email" name="email" id="email" placeholder="Email" />
                              </FormGroup>
                          </Col>
                          <Col sm="12" md={{size: 6, offset: 3}}>
                              <FormGroup>
                                  <Input   rows="5" type="textarea" name="Messagem" id="exampleText" placeholder="Mensagem" />
                              </FormGroup>
                          </Col>
                          
                          <Col md={{ size: 4, offset: 4 }}>
                              <FormGroup>
                                  <button type="submit" className="FaleConosco-Btn">Send</button>
                                  {/* <Button size="lg" block >Enviar</Button> */}
                              </FormGroup>
                          </Col>

                         
                      </Row>
                 </Container>
                  </form>
      </div>
    </Container>
  )
}

export default FaleConosco
