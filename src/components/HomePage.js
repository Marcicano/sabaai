import React, { Component } from 'react'
import Hero from './Hero'
import About from './Aboutus'
import Cursos from './Cursos'
import Nos from './Nos'
import Viagem from './Viagem'
import FaleConosco from './FaleConosco'

import Prof from './Prof'
 

export class Home extends Component {
  render() {
    return (
      <div className="HomePage" id="HomePage">
        <Hero />
        <About />
        <Cursos />
        <Prof />
        <Viagem />
        <FaleConosco />
        
      </div>
      
    )
  }
}

export default Home
