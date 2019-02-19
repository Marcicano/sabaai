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
        this.state = { Nome: "", email: "", curso: "", Nascimento: "", cpf: "", endereco: "", bairro: "", cidade: "", cep: "", CertificadoITM: "", FormaPagamento: "" };
    }

    /* Here’s the juicy bit for posting the form submission */I
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
        const { curso, Nome, email, Nascimento, cpf, endereco, bairro, cidade, cep, CertificadoITM, FormaPagamento} = this.state;
        return (
            <Container>
                <form onSubmit={this.handleSubmit}>
                    <Col x="12" md={{ size: 6, offset: 3 }} className="FaleConosco-content">
                        <select type="select" name="curso" value={curso} onChange={this.handleChange}>
                            <option>Curso Thai Massagem</option>
                            <option>Curso Thai Massagem Compressa de Ervas</option>
                            <option>Reflexologia Podal</option>
                            <option>Spa Tailandes</option>
                            <option>Tok Sen</option>
                            <option>Retiro</option>
                        </select>
                        <input type="text" placeholder="Nome" name="Nome" value={Nome} onChange={this.handleChange} />
                        <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />
                        <input type="date" placeholder="Nome" name="Nascimento" value={Nascimento} onChange={this.handleChange} />
                        <input type="text" placeholder="cpf" name="cpf" value={cpf} onChange={this.handleChange} />
                        <input type="text" placeholder="endereco" name="endereco" value={endereco} onChange={this.handleChange} />
                        <input type="text" placeholder="bairro" name="bairro" value={bairro} onChange={this.handleChange} />
                        <input type="text" placeholder="cidade" name="cidade" value={cidade} onChange={this.handleChange} />
                        <input type="text" placeholder="cep" name="cep" value={cep} onChange={this.handleChange} />
                        
                        <select type="select" name="CertificadoITM" value={CertificadoITM} onChange={this.handleChange}>
                            <option>Sim </option>
                            <option>Nao</option>
                            <option>Decidirei mais tarde</option>
                        </select>
                        
                        <select type="select" name="FormaPagamento" value={FormaPagamento} onChange={this.handleChange}>
                            <option>A vista</option>
                            <option>Parcelado no cartao de credito</option>
                        </select>
                    </Col>

                    <button type="submit" className="FaleConosco-Btn">Enviar</button>

                </form>
            </Container>
        );
    }
}
  

export default Ficha
