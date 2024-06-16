/* eslint-disable no-unused-vars */



import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-element">
        <h2>Quem somos</h2>
        <p>Somos uma empresa seria, que levar elegacia e bom gosto aos clientes,fundada em 2024 com parceria trazendo um otimo atendimento aos seus clientes</p>
        <Link to="/src/QuemSou.jsx">Saiba mais</Link>
      </div>
    
      <div className="footer-element">
        <h2>Redes Sociais</h2>
        <ul className="social-icons">
  <li>
    <a href="URL_DO_FACEBOOK">
      <img src='/icom/facebook.png'alt="Ícone do Facebook" /></a>
  </li>
  <li>
    <a href="https://www.instagram.com/useazalleia/">
      <img src="/icom/instagram.png"alt="Ícone do instagran" />
    </a>
  </li>
  <li>
    <a href="URL_DO_INSTAGRAM">
      <img src="/icom/tik-tok.png"alt="Ícone do tick tok" />
    </a>
  </li>
  <li>
    <a href="https://api.whatsapp.com/send?phone=61996744915">
      <img src="/icom/whatsapp.png"alt="Ícone do whatssap" />
    </a>
  </li>
</ul>

      </div>
      <div className="footer-element">
        <h2>Endereço</h2>
        <p>Avenida Alfredo Nascer , Corumbar Shopping Entrada B LJ 30 </p>
        <p>Luziânia, Estado GO</p>
        <Link to="https://maps.app.goo.gl/BA7nbYJE9n6Ys8Z49">
      <img src="/icom/mapa.png"alt="Ícone do maps" />
    </Link>
      </div>
      <div className="footer-element">
        <h2>Contatos</h2>
        <p>Email: contato@exemplo.com</p>
        <p>Telefone: (00) 12345-6789</p>
        <Link to='/src/PAGINAS/Contatos.jsx'>Entre em contato conosco</Link>
      </div>
    </footer>
  );
}

export default Footer;
