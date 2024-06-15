/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Slaids.css';
import { Link } from 'react-router-dom';

const slides = [
    {
        imgSrc: '/public/ImagemCapa/vestido brilhossss.png',
        text: 'Confiras,Nossas Promoções!,Não Fique Fora Dessa! ',
        link: '/src/PAGINAS/Promoçoes.jsx'
    },
    {
        imgSrc: '/public/ImagemCapa/vestido brilhossss.png',
        text: 'Nova Coleção,Venha Conferir,Chegou com tudo!',
        link: '/src/PAGINAS/Lancament.jsx'
    },
    {
        imgSrc: '/public/ImagemCapa/vestido verde longosss.png',
        text: 'Nossa linha de Acessorios,Não perca!',
        link: '/src/PAGINAS/Acessorios.jsx'
    },
    
    {
        imgSrc: '/public/ImagemCapa/vestido brilhossss.png',
        text: 'Nosso Catalalo,Confira as novidades',
        link: '/src/PAGINAS/Catalago.jsx'
    }
];

const icons = [
    {
        iconSrc: '/public/Icom/entrega-rapida (1).png',
        title: 'ENTREGA GRÁTIS',
        description: 'Em compras acima de R$399'
    },
    {
        iconSrc: '/public/Icom/pagamento.png',
        title: '3X SEM JUROS',
        description: 'Com cartão de crédito'
    },
    {
        iconSrc: '/public/Icom/entrega-rapida (2).png',
        title: 'ENTREGA ÁGIL',
        description: 'Para a Cidade e entorno'
    },
    {
        iconSrc: '/public/Icom/garantia.png',
        title: 'COMPRA SEGURA',
        description: 'Segurança em todo o processo'
    }
];

function SlaidFot() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % slides.length);
        }, 5000); // Muda a imagem a cada 5 segundos
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="slaidfot-container">
            <div className="slaidfot-slideshow">
                {slides.map((slide, index) => (
                    <div
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                        key={index}
                    >
                        <img src={slide.imgSrc} alt={slide.text} />
                        <div className="slide-text">
                            <h2>{slide.text}</h2>
                            <Link to={slide.link} className="slide-button">CONFIRA</Link>
                        </div>
                    </div>
                ))}
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>
            </div>
            <div className="slaidfot-icons">
    {icons.map((icon, index) => (
        <div className="icon-item" key={index}>
            <img src={icon.iconSrc} alt={icon.title} />
            <div className="icon-text1">
                <h4>{icon.title}</h4>
                <p>{icon.description}</p>
            </div>
        </div>
    ))}
</div>

        </div>
    );
}

export default SlaidFot;
