import React, { Component } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Footer from './Footer'

export class ThaiMassagemPage extends Component {
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
                <h2 className="display-3">Thai Massagem</h2>
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
                                <p>O curso de Formação em Massagem Tradicional Tailandesa (Massagem Thai) oferecido pelo Professor Anderson Marcicano segue os mesmos padrões de ensino da Escola Tailandesa ITM School, o que possibilita a Certificação Internacional emitida por esta escola, reconhecida em diversos países no mundo. Como trata-se de um curso intensivo, com carga horária de 60 horas, todos os dias de aula são fundamentais para o aprendizado e assimilação da técnica. Qualquer ausência acarretará na conclusão do curso. Portanto, é necessário o comprometimento do aluno em participar em todos os encontros. Em caso de não comparecimento à aula por qualquer motivo, será necessário a reposição da mesma, estando sujeito à cobrança adicional.</p>
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
                                <p>O curso de formação compreende os Níveis I e II do formato Tailandês do ITM School: - Abrange e ensina todas as posições da Massagem Thai sendo: Decúbito Dorsal, Ventral, Lateral e Sentado (em média 150 movimentos). - Introdução ao conceito de meridianos, linhas de energia (Sen). - Aspectos práticos da Massagem Thai como alongamentos, pressão, pontos de acupressão tailandesa, uso adequado do peso do corpo, técnicas que usam mãos, polegares, cotovelos e pés. - Ênfase adicional no trabalho abdominal profundo – Hara - Como montar e criar sua própria sessão de Thai Massagem - Como abordar e explicar o que é Massagem Tradicional Tailandesa (MTT) - Após a conclusão do curso os alunos terão uma base sólida dos movimentos da MTT e estarão aptos a criar suas próprias sequências de Massagem de 1h a 3 horas de terapia.</p>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm="12" id="conteudoTabCurso">
                                <h4>Curso de Thai Massagem</h4>
                                <p><li>R$ 1.850 à vista (matrícula R$ 350 + 1.500)</li>
                                    <li>R$ 1.950 parcelado (matrícula de R$ 350 + 1.600 - até 12x no cartão)
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

export default ThaiMassagemPage
