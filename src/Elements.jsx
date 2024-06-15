/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './Elements.css'; 
import { Link } from 'react-router-dom';

function Elements() {
    const items = [
        {
            title: 'Lançamentos',
            text: 'Venha Conhecer Nossa Nova Coleção, com novos Modelos e cores que vão te enlouquecer. Não fique fora dessa.',
            link: '/src/PAGINAS/Lancament.jsx',
        },
        {
            title: 'Promoções',
            text: 'Confira nossas promoções que vão de 10% até 40%. Acesse aqui e não fique fora dessa!',
            link: '/src/PAGINAS/Promoçoes.jsx',
        },
        {
            title: 'Acessórios',
            text: 'Veja nossa linha de acessórios, são mais de 50 opções para deixar você mais elegante.',
            link: '/src/PAGINAS/Acessorios.jsx',
        },
        {
            title: 'Catálogo',
            text: 'Que tal você conferir nosso catálogo? São milhares de opções para te deixar elegante.',
            link: '/src/PAGINAS/Catalago.jsx',
        }
    ];

    const elementsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        });

        elementsRef.current.forEach(element => {
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            if (elementsRef.current) {
                elementsRef.current.forEach(element => {
                    if (element) {
                        observer.unobserve(element);
                    }
                });
            }
        };
    }, []);

    return (
        <div className="full-page-container">
            {items.map((item, index) => (
                <div key={index} className="element" ref={el => elementsRef.current[index] = el}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <Link to={item.link}>Saiba mais</Link>
                </div>
            ))}
        </div>
    );
}

export default Elements;
