import React from 'react'
import {Container,Col, Button, Form, FormGroup, Input, Row } from 'reactstrap';

function FaleConosco() {
  return (
    <Container  fluid id="FaleConosco-section">
      <div className="FaleConosco-content">
          <h2 className="FaleConosco-title">Fale Conosco</h2>
              <form name="contact" method="post">
                  <p>
                      <label>Your Name: <input type="text" name="name" /></label>
                  </p>
                  <p>
                      <label>Your Email: <input type="email" name="email" /></label>
                  </p>
                  <p>
                      <label>Your Role: <select name="role[]" multiple>
                          <option value="leader">Leader</option>
                          <option value="follower">Follower</option>
                      </select></label>
                  </p>
                  <p>
                      <label>Message: <textarea name="message"></textarea></label>
                  </p>
                  <p>
                      <button type="submit">Send</button>
                  </p>
              </form>
    </div></Container>            
  )
}

export default FaleConosco
