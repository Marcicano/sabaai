import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from '../App'
import ThaiMassagemPage from '../components/ThaiMassagemPage'
import ReflexologiaPage from '../components/ReflexologiaPage'
import RetiroPage from '../components/RetiroCursoPage'
import TokSenPage from '../components/TokSenPage'
import Compressa from '../components/Compressa'
import SpaThaiPage from '../components/SpaThaiPage'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import FichaInscri from "../components/FichaInscri"

const SabaaiRouter = () => (
    <BrowserRouter>
        <div>
        <Menu />
            <Switch>
                <Route path="/" component={App} exact />
                <Route path="/curso-thaimassagem" component={ThaiMassagemPage}  />
                <Route path="/curso-compressa" component={Compressa} />
                <Route path="/curso-reflexologia" component={ReflexologiaPage} />
                <Route path="/curso-spa" component={SpaThaiPage} />
                <Route path="/curso-toksen" component={TokSenPage} />
                <Route path="/retiro" component={RetiroPage} />
                <Route path="/ficha-inscricao" component={FichaInscri} />
                
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>



)


export default SabaaiRouter