import React, { Component } from 'react'
import Hero from './Hero'
import About from './Aboutus'
import Cursos from './Cursos'
import Nos from './Nos'
import Viagem from './Viagem'
import FaleConosco from './FaleConosco'
import Footer from './Footer'
 

export class Home extends Component {
  render() {
    return (
      <div className="HomePage">
        <Hero />
        <About />
        <Cursos />
        <Nos />
        <Viagem />
        <FaleConosco />
        <Footer />
      </div>
      
    )
  }
}

export default Home
