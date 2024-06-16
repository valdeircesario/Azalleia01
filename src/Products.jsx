/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Products.css';

import SearchProducts from './ProdutosEstoque';

const ProductsData = [
   {
            id: 15,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto Alfaiataria.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$169,99',
            installments: '3x de R$53,66',
            img1: '/conjuntos/conjuntoalafa.png',
            img2: '/conjuntos/conjuntoalafa2.png',
        },
        {
            id: 1,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto Alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$199.00',
            price: 'Por R$170,00',
            installments: '3x de R$56,66',
            img1: '/conjuntos/Conjunto alfaiataria.png',
            img2: '/conjuntos/Conjunto alfaiataria1.png',
        },
        {
            id: 2,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto com botões.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/conjuntos/Conjunto com botões.png',
            img2: '/conjuntos/Conjunto com botões1.png',
        },
        {
            id: 3,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto dia a dia.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$159,99',
            installments: '3x de R$53,33',
            img1: '/conjuntos/Conjunto dia a dia.png',
            img2: '/conjuntos/Conjunto dia a dia1.png',
        },
        {
            id: 4,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto com botões.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/conjuntos/Conjunto com botões2.png',
            img2: '/conjuntos/Conjunto com botões3.png',
        },
        {
            id: 5,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto risca de giz.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$200,00',
            installments: '3x de R$66,66',
            img1: '/conjuntos/Conjunto risca de giz.png',
            img2: '/conjuntos/Conjunto risca de giz1.png',
        },
        {
            id: 6,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto short + blazer.',
            title1:'tamanho unico',
            promo:'De R$229.90',
            price: 'Por R$210,00',
            installments: '3x de R$70,00',
            img1: '/conjuntos/Conjunto short + blazer.png',
            img2: '/conjuntos/Conjunto short + blazer1.png',
        },
        {
            id: 15,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto Alafaiataria Moderno.',
            title1:'tamanho G',
            promo:'',
            price: 'R$223,90',
            installments: '3x de R$74,63',
            img1: '/conjuntos/conjuntomoder.png',
            img2: '/conjuntos/conjuntomoder.png',
        },
        {
            id: 7,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto Tricoline.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$190,00',
            installments: '3x de R$63,33',
            img1: '/conjuntos/Conjunto tricoline.png',
            img2: '/conjuntos/Conjunto tricoline1.png',
        },
         {
            id: 8,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto.',
            title1:'tamanho unico',
            promo:'De R$199.90',
            price: 'Por R$190,00',
            installments: '3x de R$63,33',
            img1: '/conjuntos/conjunto.png',
            img2: '/conjuntos/conjunto1.png',
        },
        {
            id: 9,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$189.90',
            price: 'Por R$169,99',
            installments: '3x de R$56,66',
            img1: '/conjuntos/conjuntoalafa.png',
            img2: '/conjuntos/conjuntoalafa1.png',
        },
        {
            id: 10,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$259,99',
            installments: '3x de R$86,66',
            img1: '/conjuntos/conjuntocreme.png',
            img2: '/conjuntos/conjuntocreme1.png',
        },
        {
            id: 11,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto duna farn.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$199,99',
            installments: '3x de R$66,66',
            img1: '/conjuntos/conjuntofarn.png',
            img2: '/conjuntos/conjuntofarn1.png',
        },
        {
            id: 12,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto linhão.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$189,00',
            installments: '3x de R$63,33',
            img1: '/conjuntos/conjuntolinhao.png',
            img2: '/conjuntos/conjuntolinhao1.png',
        },
        {
            id: 13,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto vestido com linha modal.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$276,99',
            installments: '3x de R$92,33',
            img1: '/conjuntos/conjuntomodel.png',
            img2: '/conjuntos/conjuntomodel1.png',
        },
        {
            id: 14,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto duna.',
            title1:'tamanho unico',
            promo:'De R$179,90',
            price: 'Por R$160,00',
            installments: '3x de R$53,33',
            img1: '/conjuntos/conjuntouuu.png',
            img2: '/conjuntos/conjuntouuu.png',
        },
        {
            id: 16,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto short+blazer.',
            title1:'tamanho unico',
            promo:'',
            price: 'R$210,00',
            installments: '3x de R$70,00',
            img1: '/conjuntos/Conjunto short + blazer1.png',
            img2: '/conjuntos/Conjunto short + blazer.png',
        },
        {
            id: 17,
            icon:'/icom/whatsapp.png',
            title: 'Conjunto  com botões e regulares.',
            title1:'tamanho P ao G',
            promo:'',
            price: 'R$189,90',
            installments: '3x de R$63,30',
            img1: '/conjuntos/Conjunto com botões2.png',
            img2: '/conjuntos/Conjunto com botões1.png',
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
