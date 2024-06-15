/* eslint-disable react/no-unescaped-entities */

import Footer from "../Footer"
import Header from "../Header"
import ScrollToTop from "../ScrollToTop"
import ShortElements from "../ShortElements"

import "./Shorts.css"

function Shorts(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <div className="tituloShot">
            <div className="titulo1Shot">
                <h1>Shorts e Saias</h1>
                <p>"Peças Perfeitas Para Empoderar Mulheres Incríveis"</p>
            </div>
        </div>
        <ShortElements/>
        
        
        <Footer/>
        </>
    )
}

export default Shorts