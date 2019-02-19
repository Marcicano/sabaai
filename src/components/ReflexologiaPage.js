import React, { Component } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export class ReflexologiaPage extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
            <Container fluid className="Page-Section">
                <Jumbotron className="banner-curso">
                    <h2 className="display-3">Reflexologia</h2>
                </Jumbotron>

                <Container>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Sobre o Curso
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Publico-alvo
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Curriculo
            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '4' })}
                                onClick={() => { this.toggle('4'); }}
                            >
                                Investimento
            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Curso de Thai Massagem</h4>
                                    <p>O curso de Reflexologia Podal Tailandesa é um curso intensivo com duração de 12 horas, e segue os mesmos padrões de ensino da Escola Tailandesa ITM School, o qual possibilita a Certificação Internacional emitida por esta escola, reconhecida em diversos países do mundo. Trata-se de um curso intensivo, portanto é fundamental que o aluno esteja presente em todos os dias de aula. A falta por qualquer motivo implicará na necessidade de reposição de aula, o qual é cobrado separadamente.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Curso de Thai Massagem</h4>
                                    <p>Não há pré-requisitos, é voltado àqueles que tenham interesse em práticas corporais, massoterapeutas, praticantes da Yoga ou simplesmente às pessoas que apreciam o toque como uma forma de relaxamento e bem-estar.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Curso de Thai Massagem</h4>
                                    <p>O ensino é baseado em “hands-on technique”, ou seja, aprender praticando, o que leva à rápida assimilação da técnica.
Movimentos de massagem nos pés e nas pernas que induzem ao equilíbrio saudável e natural do corpo.
Ensino e trabalho nos pontos de reflexão nos pés, os quais correspondem aos órgãos e sistemas do corpo.
O aprendizado é voltado ao estilo Tailandês, o que inclui o uso do bastão de reflexologia. Carga Horária: 12h</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Curso de Thai Massagem</h4>
                                    <p><li>R$ 540 à vista</li>
                                        <li>R$ 640 parcelado (matrícula de R$ 250 + 390 - até 12x no cartão)
</li>
                                    </p>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </Container>



            </Container>


        )
    }
}

export default ReflexologiaPage
