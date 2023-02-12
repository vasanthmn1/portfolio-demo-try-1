import React from 'react'
import { CTA } from './CTA'
import ME from '../assets/me.png'
import { HeaderSocials } from './HeaderSocials'
import './header.css'
export const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Vasanth M N</h1>
                <h5 className='text-light'>
                    MERN Stuck Developer
                </h5>
                {/* cta */}
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="imageme" />
                </div>
                <a href='#contact' className='scroll__down'>Down</a>
            </div>
        </header>
    )
}
