/* eslint-disable no-unused-vars */


import React from 'react';
import Header from "../Header"
import TituloPromo from '../TituloPromo';
import Footer from '../Footer';
import Novidades from './Novas';
import Promocoes from '../PromocoesElement';
import ScrollToTop from '../ScrollToTop';





function Promoções(){
    return(
        <>
        <ScrollToTop/>
        <Header/>
        <TituloPromo/>
        <Promocoes/>
        
        <Footer/>
        </>
    )
}
export default Promoções