/* eslint-disable no-unused-vars */
import React from 'react';
import './Navegacao.css';
import {Link, NavLink } from 'react-router-dom';

const items = [
    {
        id: 1,
        title: 'Conjuntos',
        imgSrc: '/public/ImagensLinks/conjuntolinhao1copia.png', 
        link: '/src/PAGINAS/Conjuntos.jsx', 
        description: 'Conjuntos'
    },
    {
        id: 2,
        title: 'Macaquinhos',
        imgSrc: '/public/ImagensLinks/macaquinhoppcopia.png',
        link: '/src/PAGINAS/Macaquinhos.jsx',
        description: 'Macaquinhos'
    },
    {
        id: 3,
        title: 'Acessorios',
        imgSrc: '/public/ImagensLinks/joias.png',
        link: '/src/PAGINAS/Acessorios.jsx',
        description: 'Acessorios'
    },
    {
        id: 4,
        title: 'Vestido',
        imgSrc: '/public/ImagensLinks/vestidocasualcopia.png',
        link: '/src/PAGINAS/Vestidos.jsx',
        description: 'Vestido'
    },
    {
        id: 5,
        title: 'Short',
        imgSrc: '/public/ImagensLinks/Short saia2copia.png',
        link: '/src/PAGINAS/Shorts.jsx',
        description: 'Shorts'
    },
    
];

function Navegacao() {
    return (
        <div className="navegacao-container">
            <h3>Navegue por Categoria</h3>
            <div className="navegacao-grid">
                {items.map(item => (
                    <div className="navegacao-item" key={item.id}>
                        <NavLink to={item.link}>
                            <img src={item.imgSrc} alt={item.title} />
                        </NavLink>
                        <Link to={item.link}>
                            <p>{item.description}</p>
                        </Link>
                    
                        
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Navegacao;
