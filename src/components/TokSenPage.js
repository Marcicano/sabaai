import React, { Component } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export class TokSenPage extends Component {
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
                    <h2 className="display-3">Tok-Sen</h2>
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
                                    <h4>Tok-Sen</h4>
                                    <p>O curso de Tok Sen oferecido pelos professores do SABAAI segue os mesmos padrões de ensino da Escola Tailandesa SPA Mantra, o que permite a Certificação Internacional emitida por esta escola, reconhecida pelo Ministério da Saúde Tailandês, pelo Ministério da Educação Tailandesa, e em diversos países no mundo. ​ Serão abordados os seguintes tópicos: ​ Posições: Decúbito Dorsal, Ventral, Lateral e Sentado (em média 50 movimentos). Linhas de energia (Sen), Yin e Yang. Aspectos práticos da Thai Massagem com aplicação de Tok Sen. Como montar e criar sua própria sessão. Como abordar e explicar o que é Tok Sen. ​Carga Horária: 15h Para saber mais sobre o SPA Mantra, acesse o site: www.spamantra.com ​</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Tok-Sen</h4>
                                    <p>Não há pré-requisitos, é voltado àqueles que tenham interesse em práticas corporais, massoterapeutas, praticantes da Yoga ou simplesmente às pessoas que apreciam o toque como uma forma de relaxamento e bem-estar.</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="3">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Tok-Sen</h4>
                                    <p>Tok = Vibração / Sen = Linhas de energia Desenvolvido por médicos tradicionais tailandeses há mais de 3 mil anos na região do norte da Tailândia - antigo império de Lanna. Esta terapia consiste na limpeza das linhas energéticas através da utilização de um martelo e uma cunha, de madeira extraída de uma árvore de tamarindo, usados para criar vibrações rítmicas de ressonância corporal para limpar e liberar energia bloqueada e penetrar profundamente nos músculos. Alguns benefícios: alívio dos músculos cansados, a doenças mais graves, como reumatismo, nervos comprimidos, doenças das linhas de energia e paralisia. ​</p>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="4">
                            <Row>
                                <Col sm="12" id="conteudoTabCurso">
                                    <h4>Tok-Sen</h4>
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

export default TokSenPage
