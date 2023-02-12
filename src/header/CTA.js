import React from 'react'
import CV from '../assets/cv.pdf'
// import './header.module.css'
export const CTA = () => {
    return (
        <div className='cta'>
            <a className='btn' href={CV} download>Downlodad CV</a>
            <a className='btn btn-primary' href='#contact'>Let's Go</a>
        </div>
    )
}
