import React from 'react'
import {Container,Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';

function FaleConosco() {
  return (
    <Container  fluid className="FaleConosco-section">
      <div className="FaleConosco-content">
          <h2 className="FaleConosco-title">Fale Conosco</h2>
              <Form>
                 <Container>
                      <Row form>
                          <Col sm="12" md={{size: 3, offset:3}}>
                              <FormGroup>
                                  <Input size="lg" type="email" name="email" id="exampleEmail" placeholder="Nome" />
                              </FormGroup>
                          </Col>
                          <Col sm="12" md={3}>
                              <FormGroup>
                                  <Input size="lg" type="password" name="password" id="examplePassword" placeholder="Email" />
                              </FormGroup>
                          </Col>
                          <Col sm="12" md={{size: 6, offset: 3}}>
                              <FormGroup>
                                  <Input   rows="5" type="textarea" name="text" id="exampleText" placeholder="Mensagem" />
                              </FormGroup>
                          </Col>
                          
                          <Col md={{ size: 4, offset: 4 }}>
                              <FormGroup>
                                  <Button size="lg" block className="FaleConosco-Btn">Enviar</Button>
                              </FormGroup>
                          </Col>

                         
                      </Row>
                 </Container>
                  </Form>
      </div>
    </Container>
  )
}

export default FaleConosco
