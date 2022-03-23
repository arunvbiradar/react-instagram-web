import React from 'react'
import gallery from './../assets/images/gallery.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Gallery() {
    return (
        <div className='gallery'>
            <ul className='list-items list-3x3'>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='content'>
                        <img src={gallery} alt="" />
                        <div className='overlays'>
                            <span className="likes"><FontAwesomeIcon icon={faHeart} /> 234</span>
                            <span className="comments"><FontAwesomeIcon icon={faComment} /> 32</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
