/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './VestElement.css';
import SearchProducts from './ProdutosEstoque';

const ProductsData = [
{
            id: 1,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido viscolinho.',
            title1:'tamanho: Unico',
            promo:'De R$189,90',
            price: 'Por R$179,99',
            installments: '3x de R$59,99',
            img1: '/public/Vestidos/Vestido viscolinho.png',
            img2: '/public/Vestidos/vestido branco.png',
        },
        {
            id: 2,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido alfaiataria.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$210,00',
            installments: '3x de R$70,00',
            img1: '/public/Vestidos/Vestido alfaiataria.png',
            img2: '/public/Vestidos/Vestido alfaiataria1.png',
        },
        {
            id: 3,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido Duna.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$179,99',
            installments: '3x de R$59,99',
            img1: '/public/Vestidos/vestido duu.png',
            img2: '/public/Vestidos/vestido duu3.png',
        },
        {
            id: 4,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido Tubinho.',
            title1:'tamanho: Unico',
            promo:'De R$187,90',
            price: 'Por R$170,00',
            installments: '3x de R$56,66',
            img1: '/public/Vestidos/Vestido tubinho.png',
            img2: '/public/Vestidos/Vestido tubinho1.png',
        },
        {
            id: 5,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido alfaiataria.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$185,25',
            installments: '3x de R$61,75',
            img1: '/public/Vestidos/vestifocinza1.png',
            img2: '/public/Vestidos/vestifocinza.png',
        },
        {
            id: 6,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido alfaiataria.',
            title1:'tamanho: Unico',
            promo:'De R$199,90',
            price: 'Por R$185,25',
            installments: '3x de R$61,75',
            img1: '/public/Vestidos/vestifopreto.png',
            img2: '/public/Vestidos/vestifopreto1.png',
        },
        {
            id: 7,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido Moletin.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$179,99',
            installments: '3x de R$58,99',
            img1: '/public/Vestidos/Vestido alfaiataria.png',
            img2: '/public/Vestidos/Vestido alfaiataria1.png',
        },
        {
            id: 8,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido.',
            title1:'tamanho: Unico',
            promo:'De R$199,90',
            price: 'Por R$190,00',
            installments: '3x de R$63,33',
            img1: '/public/Vestidos/vestido branco.png',
            img2: '/public/Vestidos/Vestido elegante todo no linho.png',
        },
        {
            id: 9,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido Duna.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$179,99',
            installments: '3x de R$58,99',
            img1: '/public/Vestidos/vestido duna.png',
            img2: '/public/Vestidos/vestido duna.png',
        },
        {
            id: 10,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido Casual.',
            title1:'tamanho: Unico',
            promo:'De R$179,90',
            price: 'Por R$159,99',
            installments: '3x de R$53,33',
            img1: '/public/Vestidos/vestidocasual.png',
            img2: '/public/Vestidos/vestidocasual1.png',
        },
        {
            id: 11,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido alfaiataria.',
            title1:'tamanho: Unico',
            promo:'',
            price: 'R$ 179,99',
            installments: '3x de R$58,99',
            img1: '/public/Vestidos/Vestido viscolinho.png',
            img2: '/public/Vestidos/Vestido viscolinho.png',
        },
        {
            id: 12,
            icon:'/public/Icom/whatsapp.png',
            title: 'Vestido alfaiataria.',
            title1:'tamanho; Unico',
            promo:'De R$189,90',
            price: 'Por R$170,00',
            installments: '3x de R$56,66',
            img1: '/public/Vestidos/Vestido viscolinho.png',
            img2: '/public/Vestidos/Vestido viscolinho.png',
        },
    
];

function VestElement() {
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
        <div className="container-vestido">
            
            
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

export default VestElement;