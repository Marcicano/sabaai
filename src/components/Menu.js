import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


import logoSmall from '../images/logo-small.png'

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (<Navbar color="light" className="Menup" light expand="md">
            <NavbarBrand> 
                <NavLink href="/#HomePage">
                    <img className="logoSmall" src={logoSmall}  alt="Sabaai-logo" />    
                </NavLink>   
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mx-auto" navbar>
                    <NavItem>
                        <NavLink to="/" className="Menu" href="/#cursos-section">CURSO</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="Menu" href="/#nos-section">NÓS</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="Menu" href="/#viagem-section">VIAGEM</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="Menu" href="/#FaleConosco-section">CONTATO</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        );
    }
}