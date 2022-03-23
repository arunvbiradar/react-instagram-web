import React from 'react'
import Logo from '../templates/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMagnifyingGlass, faPlay, faVideo, faHeart, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <header>
            <div className='container'>
                <Logo />
                <div className='header-icon-list'>
                    <ul className='list-items'>
                        <li><a href="/"><FontAwesomeIcon icon={faHome} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faPlay} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faVideo} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faHeart} /></a></li>
                    </ul>
                </div>
                <div className='header-profile-settings'>
                    <ul className='list-items'>
                        <li><a href="/"><FontAwesomeIcon icon={faMessage} /></a></li>
                        <li><a href="/"><FontAwesomeIcon icon={faUser} /></a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
