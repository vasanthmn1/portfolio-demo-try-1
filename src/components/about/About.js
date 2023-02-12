import React from 'react'
import img from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

import './about.css'

export const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={img} alt='about-img' />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__card'>
                        <article className='about__cards'>
                            <FaAward className='about__icon' />
                            <h5>Exprience</h5>
                            <small>!+ Ysear Exprience</small>
                        </article>
                        <article className='about__cards'>
                            <FiUser className='about__icon' />
                            <h5>Clinent</h5>
                            <small>30</small>
                        </article>
                        <article className='about__cards'>
                            <VscFolderLibrary />
                            <h5>Exprience</h5>
                            <small>80+ Projet</small>
                        </article>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting
                    </p>
                    <a href='#contact' className='btn btn-primary' >Let's Take</a>
                </div>
            </div>
        </section>
    )
}
