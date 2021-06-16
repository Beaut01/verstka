import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    return(
    <div className='header'>
        <div className="header__logo">
            <span>Your Logo</span>
        </div>
        <div className="header__actions">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Servicing</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Contact us</li>
                <li>
                    <FontAwesomeIcon icon={faSearch} />
                </li>
            </ul>
        </div>
    </div>
    )
}