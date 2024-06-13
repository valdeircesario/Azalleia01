/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './ShortElements.css';
import SearchProducts from './ProdutosEstoque';

const ProductsData = [
{
            id: 1,
            icon:'/public/Icom/whatsapp.png',
            title: 'Saia alfaiataria.',
            title1:'tamanho: P ao G',
            promo:'',
            price: 'R$200,00',
            installments: '3x de R$66,66',
            img1: '/public/Shorts/saias.png',
            img2: '/public/Shorts/saias1.png',
        },
        {
            id: 2,
            icon:'/public/Icom/whatsapp.png',
            title: 'Saia alfaiataria.',
            title1:'tamanho: P ao G',
            promo:'',
            price: 'R$200,00',
            installments: '3x de R$66,66',
            img1: '/public/Shorts/saias2.png',
            img2: '/public/Shorts/saias.png',
        },
        {
            id: 3,
            icon:'/public/Icom/whatsapp.png',
            title: 'Short saia alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$160,00',
            price: 'Por R$140,00',
            installments: '3x de R$46,66',
            img1: '/public/Shorts/Short saia1.png',
            img2: '/public/Shorts/Short saia.png',
        },
        {
            id: 4,
            icon:'/public/Icom/whatsapp.png',
            title: 'Short saia alfaiataria.',
            title1:'tamanho unico',
            promo:'De R$159,90',
            price: 'Por R$140,00',
            installments: '3x de R$46,66',
            img1: '/public/Shorts/Short saia3.png',
            img2: '/public/Shorts/Short saia1.png',
        },
    
];

function ShortElements() {
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
        <div className="container-short">
            
            
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

export default ShortElements;