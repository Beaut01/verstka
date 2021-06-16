import React from 'react'

export const Logo = () => {
    return(
        <div className='logo'>
            <div className='logo__title'>
                <span>Web development project</span>
            </div>
            <div className="logo__descr">
                <span>Very suitable to support all web development projects</span>
            </div>
            <div className="logo__buttons">
                <button className='button button__logo'>
                    <span>OUR SERVICES</span>
                </button>
                <button className='button button__logo'>
                    <span>HIRE IS NOW</span>
                </button>
            </div>
        </div>
    )
}