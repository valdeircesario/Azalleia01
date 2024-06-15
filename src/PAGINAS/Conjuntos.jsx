/* eslint-disable react/no-unescaped-entities */

import ConjuntosElements from "../ConjuntosElements"
import Footer from "../Footer"
import Header from "../Header"
import ScrollToTop from "../ScrollToTop"
import "./Conjuntos.css"

function Conjuntos(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <div className="tituloConj">
            <div className="titulo1Conj">
                <h1>Conjuntos</h1>
                <p>"Peças Perfeitas Para Empoderar Mulheres Incríveis"</p>
            </div>
        </div>
        <ConjuntosElements/>
        <Footer/>
        </>
    )
}

export default Conjuntos