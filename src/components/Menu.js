import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
        return (
            <div>
                <Navbar color="light" light expand="md">
                    {/* <NavbarBrand> <img className="logoSmall" src={logoSmall} alt="Sabaai-logo"  /> </NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mx-auto" navbar>
                            <NavItem>
                                <NavLink href="">CURSO</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">NOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">VIAGEM</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">CONTATO</NavLink>
                            </NavItem>
                           
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}