import React, { Component } from 'react'
import Hero from './Hero'
import About from './Aboutus'
import Cursos from './Cursos'
import Nos from './Nos'
import Viagem from './Viagem'
import FaleConosco from './FaleConosco'
import Footer from './Footer'
import ThaiMassagemPage from './ThaiMassagemPage'
import ThaiCompressa from './Compressa'
import ReflexologiaPage from './ReflexologiaPage'
import SpaThaiPage from './SpaThaiPage'
import TokSenPage from './TokSenPage'
import RetiroPage from './RetiroCursoPage'
import FichaInscri from './FichaInscri'
import Ficha from './Ficha'
 

export class Home extends Component {
  render() {
    return (
      <div className="HomePage" id="HomePage">
        {/* <Hero />
        <About />
        <Cursos />
        <Nos />
        <Viagem />
        <FaleConosco />
        <Footer /> */}
        <Ficha />
      </div>
      
    )
  }
}

export default Home
