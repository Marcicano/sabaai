import React from 'react'
import {Container,Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';

function FaleConosco() {
  return (
    <Container  fluid id="FaleConosco-section">
      <div className="FaleConosco-content">
          <h2 className="FaleConosco-title">Fale Conosco</h2>
             
              <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                  <input type="text" name="name" />
                  <input type="email" name="email" />
                  <textarea name="message"></textarea>
              </form>
    </div></Container>            
  )
}

export default FaleConosco
