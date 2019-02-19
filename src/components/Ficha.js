import React, { Component } from 'react'
import { Container, Col, Input, FormGroup, Label, Row} from 'reactstrap'

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
                    <Col xs="12" md={{ size: 8, offset: 2 }}>
                        <FormGroup>
                            <Label for="exampleAddress">Escolha o curso:</Label>
                            <Input type="select" name="curso" value={curso} onChange={this.handleChange}>
                                <option>Curso Thai Massagem</option>
                                <option>Curso Thai Massagem Compressa de Ervas</option>
                                <option>Reflexologia Podal</option>
                                <option>Spa Tailandes</option>
                                <option>Tok Sen</option>
                                <option>Retiro</option>
                            </Input>
                        </FormGroup>
                       
                           
                        <FormGroup>
                            <Label for="exampleAddress">Nome Completo:</Label>
                            <Input type="text" placeholder="Nome" name="Nome" value={Nome} onChange={this.handleChange} />  
                        </FormGroup>
                       

                        <Row form>
                            <Col md={4}>
                            <Label for="exampleAddress">Email:</Label>
                            <Input type="email" placeholder="Email" name="email" value={email} onChange={this.handleChange} />  
                        </Col>
                            <Col md={4}>
                                <Label for="exampleAddress">Data de Nascimento:</Label>
                                <Input type="date" placeholder="Nome" name="Nascimento" value={Nascimento} onChange={this.handleChange} />
                            </Col>
                            <Col md={4}>
                                <Label for="exampleAddress">CPF:</Label>
                                <Input type="text" placeholder="cpf" name="cpf" value={cpf} onChange={this.handleChange} />
                                </Col>
                        </Row>

                       <FormGroup>
                            <Label for="exampleAddress">Endereco:</Label>
                            <Input type="text" placeholder="endereco" name="endereco" value={endereco} onChange={this.handleChange} />
                        </FormGroup> 
                        <Row form>
        
                                <Col md={4}>
                                    <Label for="exampleAddress">Bairro:</Label>
                                    <Input type="text" placeholder="bairro" name="bairro" value={bairro} onChange={this.handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label for="exampleAddress">Cidade:</Label>
                                    <Input type="text" placeholder="cidade" name="cidade" value={cidade} onChange={this.handleChange} />
                                </Col>
                                <Col md={4}>
                                    <Label for="exampleAddress">CEP:</Label>
                                    <Input type="text" placeholder="cep" name="cep" value={cep} onChange={this.handleChange} />
                                </Col>
                        </Row>
                        <FormGroup>
                            <br />
                            <Label for="exampleCheck" check><h3>Deseja solicitar o Certificado Internacional emitido pelo ITM School da Tailândia?</h3></Label>
                            <p>O valor do Certificado do ITM School é de 65 dólares (140 dólares para curso de Formação de Thai Massage) - não incluso no valor do curso. O pagamento é feito diretamente no site da escola tailandesa. No curso de Spa Tailandês haverá apenas emissão de certificado nacional.</p>
                            <Col xs="12" md={{ size: 8, offset: 2 }}>
                                <FormGroup>
                                    
                                    <Input type="select" name="CertificadoITM" value={CertificadoITM} onChange={this.handleChange}>
                                        <option>Sim </option>
                                        <option>Nao</option>
                                        <option>Decidirei mais tarde</option>
                                    </Input>
                                </FormGroup>
                            </Col>

                        </FormGroup>
                        
                        
                        <FormGroup>
                            <Label for="exampleAddress">Forma de Pagamento:</Label>
                            <Input type="select" name="FormaPagamento" value={FormaPagamento} onChange={this.handleChange}>
                                <option>A vista</option>
                                <option>Parcelado no cartao de credito</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <br /> <br />
                    <p>Ao clicar no botão abaixo, declaro que li e que estou de acordo com as informações prestadas da Ficha de Inscrição. Declaro que todas as informações prestadas são verdadeiras. Confirmo ainda ter assumido o compromisso de participar do curso e informar em caso de mudanças perante minha participação.</p>
                    <button type="submit" className="FaleConosco-Btn">Cadastrar</button>

                </form>
            </Container>
        );
    }
}
  

export default Ficha
