/* eslint-disable no-unused-vars */
// src/pages/Contatos.js

import React from 'react';


import Header from '../Header';
import ContactForm from '../Contatcform';
import './Contatos.css'
import Footer from '../Footer';


function Contatos() {
    return (
        <>
            <Header />
            
            <hr />
            <div>
                
                <form className="additional-form">
                    <h2>Nós Mande uma Mensagem, Sua Opnião séra Bem Vínda!</h2>
                    <label htmlFor="form-category">Categoria:</label>
                    <select id="form-category">
                        <option value="suggestion">Sugestão</option>
                        <option value="complaint">Reclamação</option>
                        <option value="contact">Contato</option>
                    </select>

                    <label htmlFor="form-name">Nome:</label>
                    <input type="text" id="form-name" required />

                    <label htmlFor="form-phone">Telefone:</label>
                    <input type="tel" id="form-phone" required />

                    <label htmlFor="form-email">E-mail:</label>
                    <input type="email" id="form-email" required />

                    <label htmlFor="form-message">Mensagem:</label>
                    <textarea id="form-message" required></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </div>
            
            <ContactForm />
            
        <Footer/>
                
        
            
        </>
    );
}

export default Contatos;
