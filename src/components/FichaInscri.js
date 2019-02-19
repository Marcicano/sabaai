import React, { Component } from 'react'
import { Row, Col, Container, Jumbotron, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap'
export class FichaInscri extends Component {
  render() {
    return (
        <Container className="Page-Section" fluid>
            <Jumbotron className="banner-curso">
                <h2 className="display-3">Ficha de Inscrição</h2>
            </Jumbotron>
            <Container>
                <Form>
                    <Label for="exampleAddress">Escolha o Curso:</Label>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>Curso Thai Massagem</option>
                        <option>Curso Thai Massagem Compressa de Ervas</option>
                        <option>Reflexologia Podal</option>
                        <option>Spa Tailandes</option>
                        <option>Tok Sen</option>
                        <option>Retiro</option>
                    </Input>
                    <FormGroup>
                        <Label for="exampleAddress">Nome Completo</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="Nome Completo" />
                    </FormGroup>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Data de Nascimento</Label>
                                <Input type="text" name="text" id="FormText" placeholder=" DD / MM / AAAA" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="examplePassword">Nacionalidade</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder=" Nacionalidade" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="examplePassword">CPF</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="000.000.000-00" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">Endereço</Label>
                        <Input type="text" name="address" id="exampleAddress" placeholder="Endereço" />
                    </FormGroup>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="exampleEmail">Bairro</Label>
                                <Input type="text" name="text" id="FormText" placeholder="Bairro" />
                            </FormGroup>
                        </Col>
                        <Col md={5}>
                            <FormGroup>
                                <Label for="examplePassword">Cidade</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder=" Cidade" />
                            </FormGroup>
                        </Col>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="examplePassword">CEP</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="00000-000" />
                            </FormGroup>
                        </Col>
                    </Row>
                    
                    <FormGroup>
                        <br/>
                        <Label for="exampleCheck" check><h3>Deseja solicitar o Certificado Internacional emitido pelo ITM School da Tailândia?</h3></Label>
                        <p>O valor do Certificado do ITM School é de 65 dólares (140 dólares para curso de Formação de Thai Massage) - não incluso no valor do curso. O pagamento é feito diretamente no site da escola tailandesa. No curso de Spa Tailandês haverá apenas emissão de certificado nacional.</p>
                        <Col xs="12" md={{size: 8, offset: 2}}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Sim</option>
                                <option>Não</option>
                                <option>Decidirei Mais Tarde</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <br />
                        <Label for="exampleCheck"><span className="negrito">Forma de pagamento</span></Label>
                        
                        <Col xs="12" md={{ size: 8, offset: 2 }}>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>A vista</option>
                                <option>Parcelado no cartao</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <br/> <br/>
                    <p>Ao clicar no botão abaixo, declaro que li e que estou de acordo com as informações prestadas da Ficha de Inscrição. Declaro que todas as informações prestadas são verdadeiras. Confirmo ainda ter assumido o compromisso de participar do curso e informar em caso de mudanças perante minha participação.</p>
                    <button type="submit" className="FaleConosco-Btn">Cadastrar</button>
                </Form>
            </Container>
        </Container>
    )
  }
}

export default FichaInscri
