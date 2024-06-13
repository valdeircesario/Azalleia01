/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import "./CatalagoPromo.css"

function CatalagoPromo() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleImageClick = (index, image) => {
        setCurrentIndex(index);
        setCurrentImage(image);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
        setCurrentImage(null);
    };

    const showNextImage = () => {
        const nextIndex = (currentIndex + 1) % Products.length;
        setCurrentIndex(nextIndex);
        setCurrentImage(Products[nextIndex].img1);
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + Products.length) % Products.length;
        setCurrentIndex(prevIndex);
        setCurrentImage(Products[prevIndex].img1);
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=61996744915';
    };

    const Products = [
        {
            id: 1,
            icon:'/public/Icom/whatsapp.png',
            title: 'jJaqueta de chamois motor furad...',
            price: 'R$ 3.598,00',
            installments: '12x de R$ 299,83',
            img1: '/public/Imagem/conjunto alfaiataria1.png',
            img2: '/public/Imagem/conjunto alfaiataria2.png',
        },
        {
            id: 2,
            icon:'/public/Icom/whatsapp.png',
            title: 'Calça de couro pantalona com fi...',
            price: 'R$ 5.998,00',
            installments: '12x de R$ 499,83',
            img1: '/public/Imagem/conjunto tricoline01.png',
            img2: '/public/Imagem/conjunto tricoline02.png',
        },
        {
            id: 3,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/conjunto01.png',
            img2: '/public/Imagem/conjunto011.png',
        },
        {
            id: 4,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/Conjuntinhos.png',
            img2: '/public/Imagem/conjunto011.png',
        },
        {
            id: 5,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/vertido cinza.png',
            img2: '/public/Imagem/vestido cinza.png',
        },
        {
            id: 6,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/vestido verde longo.png',
            img2: '/public/Imagem/vestido verde longo1.png',
        },
        {
            id: 7,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/vestido lista rosa1.png',
            img2: '/public/Imagem/vestido lista rosa2.png',
        },
        {
            id: 8,
            icon:'/public/Icom/whatsapp.png',
            title: 'Blusa de tricot com manga long...',
            price: 'R$ 358,00',
            installments: '2x de R$ 179,00',
            img1: '/public/Imagem/conjunto01.png',
            img2: '/public/Imagem/conjunto011.png',
        },
        
        


    ];

    return (
        <div className="containera">
            <div className="product-grid">
                {Products.map((product, index) => (
                    <div key={product.id} className="product-card">
                        <div className="image-container" onClick={() => handleImageClick(index, product.img1)}>
                            {product.video ? (
                                <video src={product.video} loop muted autoPlay className="video-element" />
                            ) : (
                                <>
                                    <img src={product.img1} alt={product.title} className="primary-image" />
                                    <img src={product.img2} alt={product.title} className="secondary-image" />
                                </>
                            )}
                        </div>
                        <div>
                            <h2>{product.title}</h2>
                        </div>
                        <div className='preco'>
                            <p>{product.price}</p>
                            <p>{product.installments}</p>
                            <img
                                src={product.icon}
                                alt="WhatsApp"
                                className="whatsapp-icon"
                                onClick={handleWhatsAppClick}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <Modal open={open} onClose={handleCloseModal} center>
                <div className="modal-content">
                    <img src={currentImage} alt="Modal View" />
                    <a className="prev" onClick={showPrevImage}>&#10094;</a>
                    <a className="next" onClick={showNextImage}>&#10095;</a>
                </div>
            </Modal>
        </div>
    );
}

export default CatalagoPromo;