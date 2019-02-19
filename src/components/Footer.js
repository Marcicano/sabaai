import React from 'react'
import {Container} from 'reactstrap'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <Container fluid className="Rodape-section">
      <div className="social-icons">
        <Link><i className="fab fa-instagram"></i>https://wa.me/5521986199671?text=Ol%C3%A1!%20Tudo%20bem%3F%20Tenho%20interesse%20nos%20cursos%20do%20Sabaai</Link>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
      <div className="copyright">
        
          Copyright © 2019 SABAAI.
        
      </div>
    </Container>
  )
}

export default Footer
