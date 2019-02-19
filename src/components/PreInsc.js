import React, { Component } from 'react'
import { Container, Col, Row, Input, FormGroup, Label, Button, Form} from 'reactstrap'
export class PreInsc extends Component {
  render() {
    return (
      <Col md={{ size: 4, offset: 4 }} className="pre-insc">
        <Col className="pre-insc_title">
          <h5>Inscreva-se já! Demora menos de 2 minutos.</h5>
        </Col>
        <Form>
          <Row form>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup>
                
                <Input type="text" name="text" id="FormText" placeholder=" Informe-nos o seu email" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                
                <Button>Cadastrar</Button>
              </FormGroup>
            </Col>
            </Row>
        </Form>
      </Col>
    )
  }
}

export default PreInsc

