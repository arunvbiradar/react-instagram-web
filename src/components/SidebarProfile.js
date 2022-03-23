import React from 'react'
import ButtonUi from '../templates/ButtonUi'
import dp from './../assets/images/dp.jpg'
import highlights from './../assets/images/highlights.jpg'

export default function SidebarProfile() {
    return (
        <aside className='aside-profile'>
            <div className='profile-followers'>
                <div className='display-picture'>
                    <img src={dp} alt="" />
                </div>
                <div className='followers'>
                    <ul className='list-items'>
                        <li>
                            <div className='content'>
                                <span className='numbers'>518</span><span className='text'>posts</span>
                            </div>
                        </li>
                        <li>
                            <div className='content'>
                                <span className='numbers'>518</span><span className='text'>followers</span>
                            </div>
                        </li>
                        <li>
                            <div className='content'>
                                <span className='numbers'>518</span><span className='text'>following</span>
                            </div>
                        </li>
                    </ul>
                    <ButtonUi>Follow</ButtonUi>
                </div>
            </div>
            <div className='about-me'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a href="/">www.applikers.com</a>
            </div>
            <div className='profile-highlights'>
                <ul className='list-items'>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                    <li>
                        <div className='content'>
                            <img src={highlights} alt="" /><span className="text">People</span>
                        </div>
                    </li>
                </ul >
            </div >
        </aside >
    )
}
