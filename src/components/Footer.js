import React from 'react'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <Container fluid className="Rodape-section">
      <div className="social-icons">
        
        <a href="https://www.instagram.com/thaisabaai">
        <i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/sabaaithai/"><i className="fab fa-facebook-f"></i></a>
        <a href="https://wa.me/5521986199671?text=Ol%C3%A1!%20Tudo%20bem%3F%20Tenho%20interesse%20nos%20cursos%20do%20Sabaai"><i className="fab fa-whatsapp"></i></a>
      </div>
      <div className="copyright">
        
          Copyright © 2019 SABAAI.
        
      </div>
    </Container>
  )
}

export default Footer
