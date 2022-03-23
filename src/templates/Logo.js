import React from 'react'
import logo from './../assets/images/logo.png'

export default function Logo() {
    return (
        <div className='logo' id="logo">
            <a href="/"><img src={logo} alt="Instagram" /></a>
        </div>
    )
}
