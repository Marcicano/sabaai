import React, { Component } from 'react'
import { Container, Col } from 'reactstrap'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export class Ficha extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "ficha", ...this.state })
        })
            .then(() => alert("Cadastro Realizado com Sucesso!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Col x="12" md={{ size: 6, offset: 3 }} className="FaleConosco-content">
                        <input type="text" placeholder="Nome" name="name" value={name} onChange={this.handleChange} />
                        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                    </Col>

                    <Col x="12" md={{ size: 6, offset: 3 }} className="FaleConosco-content">
                        <textarea name="message" rows="5" placeholder="Mensagem" value={message} onChange={this.handleChange} />
                    </Col>

                    <button type="submit" className="FaleConosco-Btn">Enviar</button>

                </form>
            </Container>
        );
    }
}
  

export default Ficha
