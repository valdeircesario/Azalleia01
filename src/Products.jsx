/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Products.css';
import { Link } from 'react-router-dom';
import SearchProducts from './ProdutosEstoque';

const ProductsData = [
   {
            id: 15,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto Alfaiataria.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$169,99',
            installments: '3x de R$53,66',
            img1: '/public/Conjuntos/conjuntoalafa.png',
            img2: '/public/Conjuntos/conjuntoalafa2.png',
        },
        {
            id: 1,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto Alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$199.00',
            price: 'Por R$170,00',
            installments: '3x de R$56,66',
            img1: '/public/Conjuntos/Conjunto alfaiataria.png',
            img2: '/public/Conjuntos/Conjunto alfaiataria1.png',
        },
        {
            id: 2,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto com botões.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/public/Conjuntos/Conjunto com botões.png',
            img2: '/public/Conjuntos/Conjunto com botões1.png',
        },
        {
            id: 3,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto dia a dia.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$159,99',
            installments: '3x de R$53,33',
            img1: '/public/Conjuntos/Conjunto dia a dia.png',
            img2: '/public/Conjuntos/Conjunto dia a dia1.png',
        },
        {
            id: 4,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto com botões.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/public/Conjuntos/Conjunto com botões2.png',
            img2: '/public/Conjuntos/Conjunto com botões3.png',
        },
        {
            id: 5,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto risca de giz.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$200,00',
            installments: '3x de R$66,66',
            img1: '/public/Conjuntos/Conjunto risca de giz.png',
            img2: '/public/Conjuntos/Conjunto risca de giz1.png',
        },
        {
            id: 6,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto short + blazer.',
            title1:'tamanho unico',
            promo:'De R$229.90',
            price: 'Por R$210,00',
            installments: '3x de R$70,00',
            img1: '/public/Conjuntos/Conjunto short + blazer.png',
            img2: '/public/Conjuntos/Conjunto short + blazer1.png',
        },
        {
            id: 15,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto Alafaiataria Moderno.',
            title1:'tamanho G',
            promo:'',
            price: 'R$223,90',
            installments: '3x de R$74,63',
            img1: '/public/Conjuntos/conjuntomoder.png',
            img2: '/public/Conjuntos/conjuntomoder.png',
        },
        {
            id: 7,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto Tricoline.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$190,00',
            installments: '3x de R$63,33',
            img1: '/public/Conjuntos/Conjunto tricoline.png',
            img2: '/public/Conjuntos/Conjunto tricoline1.png',
        },
         {
            id: 8,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto.',
            title1:'tamanho unico',
            promo:'De R$199.90',
            price: 'Por R$190,00',
            installments: '3x de R$63,33',
            img1: '/public/Conjuntos/Conjunto.png',
            img2: '/public/Conjuntos/Conjunto1.png',
        },
        {
            id: 9,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$189.90',
            price: 'Por R$169,99',
            installments: '3x de R$56,66',
            img1: '/public/Conjuntos/conjuntoalafa.png',
            img2: '/public/Conjuntos/conjuntoalafa1.png',
        },
        {
            id: 10,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$259,99',
            installments: '3x de R$86,66',
            img1: '/public/Conjuntos/conjuntocreme.png',
            img2: '/public/Conjuntos/conjuntocreme1.png',
        },
        {
            id: 11,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto duna farn.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$199,99',
            installments: '3x de R$66,66',
            img1: '/public/Conjuntos/conjuntofarn.png',
            img2: '/public/Conjuntos/conjuntofarn1.png',
        },
        {
            id: 12,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto linhão.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$190,00',
            installments: '3x de R$63,33',
            img1: '/public/Conjuntos/conjuntolinhao.png',
            img2: '/public/Conjuntos/conjuntolinhao1.png',
        },
        {
            id: 13,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto vestido com linha modal.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$276,99',
            installments: '3x de R$92,33',
            img1: '/public/Conjuntos/conjuntomodel.png',
            img2: '/public/Conjuntos/conjuntomodel1.png',
        },
        {
            id: 14,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto duna.',
            title1:'tamanho unico',
            promo:'De R$179,90',
            price: 'Por R$160,00',
            installments: '3x de R$53,33',
            img1: '/public/Conjuntos/conjuntouuu.png',
            img2: '/public/Conjuntos/conjuntouuu.png',
        },
        {
            id: 16,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto short+blazer.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$210,00',
            installments: '3x de R$70,00',
            img1: '/public/Conjuntos/Conjunto short + blazer1.png',
            img2: '/public/Conjuntos/Conjunto short + blazer.png',
        },
        {
            id: 17,
            icon:'/public/Icom/whatsapp.png',
            title: 'Conjunto  com botões e regulares.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/public/Conjuntos/Conjunto com botões2.png',
            img2: '/public/Conjuntos/Conjunto com botões1.png',
        },
    // outros produtos...
];

function Products() {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(ProductsData);

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
        const nextIndex = (currentIndex + 1) % filteredProducts.length;
        setCurrentIndex(nextIndex);
        setCurrentImage(filteredProducts[nextIndex].img1);
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + filteredProducts.length) % filteredProducts.length;
        setCurrentIndex(prevIndex);
        setCurrentImage(filteredProducts[prevIndex].img1);
    };

    const handleWhatsAppClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=61996744915';
    };

    const handleSearch = (searchTerm) => {
        if (searchTerm) {
            const filtered = ProductsData.filter(product =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts(ProductsData);
        }
    };

    return (
        <div className="container-products">
            
            <SearchProducts onSearch={handleSearch} />
            
            <div className="product-grid">
                {filteredProducts.map((product, index) => (
                    <div key={product.id} className="product-card">
                        <div className="image-container" onClick={() => handleImageClick(index, product.img1)}>
                            <img src={product.img1} alt={product.title} className="primary-image" />
                            <img src={product.img2} alt={product.title} className="secondary-image" />
                        </div>
                        <div className='description'>
                            <h2>{product.title}</h2>
                            <p className='size'>{product.title1}</p>
                        </div>
                        <div className='price-info'>
                            <p className='promo'>{product.promo}</p>
                            <p className='price'>{product.price}</p>
                            <p className='installments'>{product.installments}</p>
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

export default Products;
