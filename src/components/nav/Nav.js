import React, { useState } from 'react'
import './nav.css'
import { AiOutlineBook, AiOutlineHome, AiOutlineUser, } from 'react-icons/ai'
import { BiBook, BiMessage } from 'react-icons/bi'



export const Nav = () => {


    const [active, setactive] = useState('')
    return (
        <nav>
            <a href='#'

                onClick={() => {
                    setactive('#')
                }}

                className={active === '#' ? 'active' : ""}><AiOutlineHome /></a>
            <a href='#about'
                className={active === '#about' ? 'active' : ""}
                onClick={() => {
                    setactive('#about')
                }}><AiOutlineUser /></a>



            <a className={active === '#contact' ? 'active' : ""}
                onClick={() => {
                    setactive('#contact')
                }}

                href='#contact'><BiMessage /></a>

        </nav>
    )
}
