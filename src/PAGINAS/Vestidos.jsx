/* eslint-disable no-unused-vars */

/* eslint-disable react/no-unescaped-entities */


import React from 'react';
import Footer from "../Footer"
import Header from "../Header"

import "./Vestidos.css"
import VestElement from '../VestElement';
import ScrollToTop from '../ScrollToTop';


function Vestidos(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <div className="tituloVest">
            <div className="titulo1Vest">
                <h1>Vestidos</h1>
                <p>"Peças Perfeitas Para Empoderar Mulheres Incríveis"</p>    
            </div>
        </div>
        <VestElement/>
    
        
        
    
        
        <Footer/>
        </>
    )
}

export default Vestidos