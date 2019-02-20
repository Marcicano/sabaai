import React, { Component } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export class SpaThaiPage extends Component {
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
                    <h2 className="display-3">Spa Tailandês</h2>
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
                                    <h4>Spa Tailandês</h4>
                                    <p>Neste curso o aluno irá aprender sobre as técnicas de um spa tailandês, que vai da recepção do cliente, passando pela prática de massagem com óleos aromáticos, até a finalização e despedida. Um ritual seguido por todos os grandes SPAs de luxo da Tailândia. ​ A Massagem com Óleos Aromáticos, é uma uma combinação de técnicas de massagem sueca, tailandesa e indiana. Nesta massagem o aluno terá a oportunidade de aprender a utilização dos óleos aromáticos corretos para cada tipo de tratamento. Além de manobras chamadas Fire (Fogo) e Water (Água). ​ Essa técnica permite dois tipos de massagem com óleos aromáticos, cada um, respectivamente, para energizar (Fire) ou relaxar (Water). Os benefícios são imediatos na aparência da pele, no relaxamento muscular, mental e na circulação sanguínea. ​ Serão abordados os seguintes tópicos: ​ Posições: Decúbito Dorsal e Ventral (em média 50 movimentos). Entendimento sobre a rotina de um SPA, formas de atendimento. Aspectos práticos da Massagem com Óleos Aromáticos. Como montar e criar sua própria sessão. Documentação e Ética Psicologia na indústria de Spas Desenvolvimento Pessoal e Comunicação ​ Carga Horária: 15h</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Spa Tailandês</h4>
                                    <p>Não há pré-requisitos, é voltado àqueles que tenham interesse em práticas corporais, massoterapeutas, praticantes da Yoga ou simplesmente às pessoas que apreciam o toque como uma forma de relaxamento e bem-estar.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Spa Tailandês</h4>
                                    <p>Em breve...</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Spa Tailandês</h4>
                                    <p><li>R$ 1.000 à vista (matrícula de R$350 + 750)</li>
                                        <li>R$ 1.100 parcelado (matrícula de R$350 + 850 em até 12x no cartão)
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

export default SpaThaiPage
