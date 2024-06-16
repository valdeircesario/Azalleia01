/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import './Header.css';
import './App.css'
import { Link } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='container'>
            <Link to="/">
                <img className='logo' src="src/azaleia.jpg"alt="logo"/>
            </Link>
            <div className='wrapper'>
            <Link to="/" className="logo-link">
                    <h1>Azalleia</h1>
                </Link>
            </div>
            <nav className={`Nav ${menuOpen ? 'show' : ''}`}>
                <Link to="/">Pagina Inicial</Link>
                <Link to="/src/PAGINAS/Catalago.jsx">Catalago</Link>
                <Link to="/src/PAGINAS/Lancament.jsx">Lançamentos</Link>
                <Link to="/src/PAGINAS/Contatos.jsx">Contato</Link>
                
            </nav>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}

export default Header;
