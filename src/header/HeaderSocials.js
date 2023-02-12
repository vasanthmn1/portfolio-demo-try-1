import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs'
export const HeaderSocials = () => {
    return (
        <div className='header__social'>
            <a href='https://www.linkedin.com/' rel='noreferrer' target='_blank' ><BsLinkedin /></a>
            <a href='https://github.com/' rel='noreferrer' target='_blank' ><BsGithub /></a>
            <a href='https://www.linkedin.com/' rel='noreferrer' target='_blank'  ><BsFacebook /></a>
        </div>
    )
}
