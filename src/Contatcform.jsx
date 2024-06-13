/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contatcform.css';

function ContactForm() {
    const [nome, setNome] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            name: nome,
            phone: phone,
            email: email
        };

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (err) => {
            console.log('FAILED...', err);
        });

        setNome('');
        setPhone('');
        setEmail('');
    }

    return (
        <div className='ofertas'>
            <div className='ofertas1'>
                <h3>Inscreva-se para receber nossas ofertas</h3>
                <p id="guide-text">E receba as últimas novidades!</p>
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Nome:
                    <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
                </label>
                <label>
                    WhatsApp:
                    <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default ContactForm;
