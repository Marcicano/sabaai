import React from 'react'
import ContactForm from './ContactForm'
import {Container,Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';

function FaleConosco() {
  return (
    <Container  fluid id="FaleConosco-section">
      <div className="FaleConosco-content">
          <h2 className="FaleConosco-title">Fale Conosco</h2>
             
              <ContactForm />
              
    </div></Container>            
  )
}

export default FaleConosco
