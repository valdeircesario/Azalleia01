/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        category: 'suggestion'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Aqui você pode implementar a lógica para enviar os dados via WhatsApp ou outro serviço de backend
        // Por exemplo, para enviar um e-mail, você pode usar um serviço como EmailJS
        console.log('Form submitted:', formData);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="category">Categoria:</label>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="suggestion">Sugestão</option>
                <option value="complaint">Reclamação</option>
                <option value="contact">Contato</option>
            </select>

            <label htmlFor="name">Nome:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="phone">Telefone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Mensagem:</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            ></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
}

export default ContactForm;
