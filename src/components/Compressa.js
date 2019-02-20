import React, { Component } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import PreInsc from './PreInsc'


export class ThaiCompressa extends Component {
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
                    <h3 className="display-4">Thai Massagem com compressa <br/>de ervas quentes</h3>
                </Jumbotron>
                <PreInsc />
                <Container>

                    <Col className="Prox-Cursos">
                        <h3>Proximas <span className="Prox-Cursos-destaque">Turmas:</span></h3>
                    </Col>
                    <Col className="Prox-Cursos-info">
                        <h3>Rio de Janeiro</h3>
                        <p>Datas: 13, 14 Abril 2019 </p>
                        <p>Horário de realização: <br />Sábado e Domingo 09:00 - 17:00</p>
                        <h4>Endereco:</h4>
                        <p>Rua Dois de Dezembro, 119, Casa A - Flamengo (mapa)<br />
                            Rio de Janeiro (21) 2557-2344<br />
                            yoga.svadharma@gmail.com</p>
                    </Col>

                </Container>
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
                                    <h4>Thai Massagem com compressa <br />de ervas quentes</h4>
                                    <p>O curso de Thai Massagem com compressa de ervas quente é oferecido pelo Prof. Anderson Marcicano que segue os mesmos padrões de ensino da Escola Tailandesa ITM School/Spa Mantra, o que possibilita a Certificação Internacional emitida por esta escola, reconhecida em diversos países no mundo e pelo Ministério da Saúde Tailandês. Como trata-se de um curso intensivo, com carga horária de 15 horas, todos os dias de aula são fundamentais para o aprendizado e assimilação da técnica. Qualquer ausência acarretará na conclusão do curso. Portanto, é necessário o comprometimento do aluno em participar em todos os encontros. Em caso de não comparecimento à aula por qualquer motivo, será necessário a reposição da mesma, estando sujeito à cobrança adicional. Carga Horária: 15h</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Thai Massagem com compressa <br />de ervas quentes</h4>
                                    <p>Não há pré-requisitos, é voltado àqueles que tenham interesse em práticas corporais, massoterapeutas, praticantes da Yoga ou simplesmente às pessoas que apreciam o toque como uma forma de relaxamento e bem-estar.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Thai Massagem com compressa <br />de ervas quentes</h4>
                                    <p>O curso de formação compreende os movimentos do formato Tailandês da ITM School/Spa Mantra: - Posições: Decúbito Dorsal, Ventral, Lateral e Sentado (em média 50 movimentos). - Propriedades das ervas aplicadas na composição das bolas de compressa. - Estudo dos benefícios e contraindicações de cada erva utilizada. - Como montar e criar sua própria sessão. - Como abordar e explicar o que é Thai Herbal Hot Compress - Como produzir e montar suas próprias bolas de ervas. <br /> Carga Horária: 15h</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Thai Massagem com compressa <br />de ervas quentes</h4>
                                    <p><li>RR$ 1.000 à vista (matrícula de R$350 + 750)</li>
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

export default ThaiCompressa
