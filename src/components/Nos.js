import React from 'react';
import { Media, Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import marcicano from '../images/marcicano.jpg'
import roberto from '../images/roberto.jpeg'
import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.jpg'
import logo4 from '../images/logo4.jpg'
import logo5 from '../images/logo5.jpg'
import logo6 from '../images/logo6.jpg'

export default class Nos extends React.Component {
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
        return (<div className="Nos-section">
                    <div className="section-overlay">
                        <Container>
                            <Col sm="12" md={{ size: 8, offset: 2 }} className="NosContent">
                                <Nav md="8" tabs>
                                    <NavItem >
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '1' })}
                                            onClick={() => { this.toggle('1'); }}
                                        >
                                            <span className="professor">
                                                Prof. Anderson Marcicano
                                            </span>
            </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: this.state.activeTab === '2' })}
                                            onClick={() => { this.toggle('2'); }}
                                        >

                                    <span className="professor">
                                        Prof. Roberto Saraiva
                                            </span>
                                            
            </NavLink>
                                    </NavItem>
                                </Nav>
                            </Col>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                                            <Media className="Nos_paper">
                                                <Media left href="#">
                                                    <Media object src={marcicano} className="imageTab" alt="Generic placeholder image" />
                                                </Media>
                                                <Media className="About-text" body>
                                                    <Media className="About-title" heading>
                                                        Prof. Anderson Marcicano
                                                    </Media>
                                                    Graduado em Nuad Bo-rarn Thai Massagem pela ITM School; pelo SPA Mantra e pelo Thai Oasis Spa School em Chiang Mai na Tailândia, é membro da Thai Healing Alliance International (THAI) e professor de terapias corporais alternativas desde 2016, possuindo formação em variadas técnicas de massagem tailandesa.
                                        <br /> <br />
                                                    Reside em Chiang Mai, no norte da Tailândia, onde faz uma imersão profunda na cultura e nas tradições do norte do país onde a cultura Lanna está presente. Hoje administra workshops e cursos das técnicas de Thai Massagem no Brasil, Europa e América Latina.

                                                     
                                            </Media>
                                        
                                            </Media>
                                    <Col className="nos-footer" sm="12" md={{ size: 12 }}>
                                        <media className="nos-footer">
                                            <img src={logo1} className="ico-cert" alt="teste" />
                                            <img src={logo2} className="ico-cert" alt="teste" />
                                            <img src={logo3} className="ico-cert" alt="teste" />
                                            <img src={logo4} className="ico-cert" alt="teste" />
                                            <img src={logo5} className="ico-cert" alt="teste" />
                                            <img src={logo6} className="ico-cert" alt="teste" />
                                        </media>
                                    </Col>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                                            <Media className="Nos_paper">
                                                <Media left href="#">
                                                    <Media object src={roberto} className="imageTab" alt="Generic placeholder image" />
                                                </Media>
                                        <Media className="About-text" body>
                                            <Media className="About-title" heading>
                                                        Prof. Roberto Saraiva
                                            </Media>
                                                    Jornalista com 10 anos de experiência no Yoga, formado em Hatha com o mestre Vijay Amar, na Índia, e certificado pela Yoga Alliance. Se aprofundou no estilo Iyengar no Himalayan Iyengar Yoga Centre nas montanhas do norte e nas praias do sul, e deu aulas pelo país e também no Sri Lanka e na Tailândia. Tem no repertório outras modalidades como Vinyasa Flow, Yin Yoga e Restaurativo.
                    <br /><br />
                                                    O interesse pela Thai Massage surgiu logo depois, e fez cursos em algumas das principais escolas da Tailândia, como TMC, Old Medicine Hospital e ONG’s, além de aulas com mestres locais. Lá também teve contato com a Rusie Dutton, o Yoga tailandês, usado tanto como preparação corporal para o terapeuta de Thai Massage quanto como atividade independente.
                                            </Media>
                                            </Media>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </Container>
                    </div>
                </div>
        );
    }
}