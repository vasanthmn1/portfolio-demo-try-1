import React, { useRef, useState } from 'react'
import './contact.css'
import { AiOutlineFacebook, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import emailjs from '@emailjs/browser';


export const Contact = () => {

    const form = useRef()
    const [resut, setresut] = useState('')

    const sentEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_joixy47', 'template_lizzjdj', form.current, 'lsN6VBHxPzFNhYkam')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
        e.target.reset()
    }

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>123@gmail.com</h5>
                        <a href='mailto:mnvasanthcode@gmail.com'>Sent message</a>
                    </article>
                    {/* <article className='contact__option'>
                        <AiOutlineFacebook className='contact_icon' />
                        <h4>massangel</h4>
                        <h5>123@gmail.com</h5>
                        <a href='mailto:mnvasanthcode@gmail.com'>Sent message</a>
                    </article> */}
                    <article className='contact__option'>
                        <AiOutlineWhatsApp className='contact_icon' />
                        <h4>Email</h4>
                        <h5>+ 12345678</h5>
                        <a href='https://wa.me/919003259352' target={'_blank'}>Sent message</a>
                    </article>
                </div>
                <form action='' ref={form} onSubmit={sentEmail}>
                    <input type="text"
                        placeholder='Your Name'
                        name='name'
                    />
                    <input type="text"
                        name='email'
                        placeholder='Your Email'
                        required />
                    <textarea type="text"
                        name='massage'
                        placeholder='message'
                        required />
                    <button className='btn btn-primary' type='submit'>Sumit</button>
                </form>
            </div>
        </section>
    )
}
