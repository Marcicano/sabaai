import React, { Component } from 'react'
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Col } from 'reactstrap';
import classnames from 'classnames';
import marcicano from '../images/marcicano.jpg'
import roberto from '../images/roberto.jpeg'
import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.jpg'
import logo4 from '../images/logo4.jpg'
import logo5 from '../images/logo5.jpg'
import logo6 from '../images/logo6.jpg'


export class Prof extends Component {
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
      <Container id = "nos-section" fluid>
            <Container>
                <Col sm="12" md={{ size: 8, offset: 2 }} className="NosContent">
                    <Nav md="8" tabs>
                        <NavItem className="prof-tab-custom">
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                <span className="professor">
                                    Prof. Anderson Marcicano
                                            </span>
                            </NavLink>
                        </NavItem>
                        <NavItem className="prof-tab-custom">
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
                
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Col sm="12" className="Prof-content">
                                <div className="Prof-photo">
                                    <img src={marcicano} className="imageTab" alt="Prof. Anderson" />
                                </div>
                                <div className="Prof-title">
                                    <h2>Prof. Anderson Marcicano</h2>
                                    <p>Graduado em Nuad Bo-rarn Thai Massagem pela ITM School; pelo SPA Mantra e pelo Thai Oasis Spa School em Chiang Mai na Tailândia, é membro da Thai Healing Alliance International (THAI) e professor de terapias corporais alternativas desde 2016, possuindo formação em variadas técnicas de massagem tailandesa.
                                        <br /> <br />
                                        Reside em Chiang Mai, no norte da Tailândia, onde faz uma imersão profunda na cultura e nas tradições do norte do país onde a cultura Lanna está presente. Hoje administra workshops e cursos das técnicas de Thai Massagem no Brasil, Europa e América Latina.
</p>
                                </div>
                                <div className="Prof-footer">
                                    <img src={logo1} className="ico-cert" alt="Certificacao" />
                                    <img src={logo2} className="ico-cert" alt="Certificacao" />
                                    <img src={logo3} className="ico-cert" alt="Certificacao" />
                                    <img src={logo4} className="ico-cert" alt="Certificacao" />
                                    <img src={logo5} className="ico-cert" alt="Certificacao" />
                                    <img src={logo6} className="ico-cert" alt="Certificacao" />
                                </div>
                            </Col>

                        </TabPane>
                        <TabPane tabId="2">
                            <Col sm="12" className="Prof-content" >
                                <div className="Prof-photo">
                                    <img src={roberto} className="imageTab" alt="Prof. Roberto" />
                                </div>
                                <div className="Prof-title">
                                    <h2>Prof. Roberto Saraiva</h2>
                                    <p>Jornalista com 10 anos de experiência no Yoga, formado em Hatha com o mestre Vijay Amar, na Índia, e certificado pela Yoga Alliance. Se aprofundou no estilo Iyengar no Himalayan Iyengar Yoga Centre nas montanhas do norte e nas praias do sul, e deu aulas pelo país e também no Sri Lanka e na Tailândia. Tem no repertório outras modalidades como Vinyasa Flow, Yin Yoga e Restaurativo.
                                        <br /> <br />
                                        O interesse pela Thai Massage surgiu logo depois, e fez cursos em algumas das principais escolas da Tailândia, como TMC, Old Medicine Hospital e ONG’s, além de aulas com mestres locais. Lá também teve contato com a Rusie Dutton, o Yoga tailandês, usado tanto como preparação corporal para o terapeuta de Thai Massage quanto como atividade independente.
</p>
                                </div>
                            </Col>
                        </TabPane>
                    </TabContent>
                    </Col>
                
                </Container>
      </Container>
    )
  }
}

export default Prof
