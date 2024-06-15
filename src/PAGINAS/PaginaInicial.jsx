/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header'
import Titulo from '../Titulo'
import SlaidFot from '../Slaids'
import Elements from '../Elements'
import Products from '../Products'
import Navegacao from '../Navegacao'
import Info from '../Info'
import ContactForm from '../Contatcform'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop';




function PaginaInicial(){
    return(
        <>
        <ScrollToTop/>
      <Header/>
      <Titulo/>
      <SlaidFot/>
      <hr />
      <Elements/>
      <hr />
      
      <Products/>
      <hr />
      <Navegacao/>
      <hr />
      <Info/>
      <hr />
      <ContactForm/>
      <Footer/> 
    </>

    )
}
export default PaginaInicial