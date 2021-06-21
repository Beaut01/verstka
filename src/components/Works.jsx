import React from 'react'

export const Works = () => {
    return(
        <div className="works">
            <div className="works__title">
                <p>Latest Works</p>
            </div>
            <div className="works__descr">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="works__buttons">
                <button className='button button__outline'>
                    <span>ALL</span>
                </button>
                <button className='button button__outline'>
                    <span>WEB DESIGN</span>
                </button>
                <button className='button button__outline'>
                    <span>UI/UX DESIGN</span>
                </button>
                <button className='button button__outline'>
                    <span>MOCKUPS</span>
                </button>
            </div>
            <div className="works__images">
                <div className="works__images-container">
                    <div className="works__images-container_image" style={{marginRight: '30px'}}>
                        <img src="https://sun9-66.userapi.com/impg/GlYbfwVhsM0qGMdqz_DzvqhE3HcjES0QRq-hlQ/HdevctboPnY.jpg?size=370x370&quality=96&sign=97e836701e2c3dd1b79dbeaafe83da59&type=album" alt="work" />
                    </div>
                    <div className="works__images-container_image" style={{marginRight: '30px'}}>
                        <img src="https://sun9-76.userapi.com/impg/XH7YNL3zl1_iCi7T6Z4_NIZacQo55bMHMdm46w/aTqIY0RWZ7g.jpg?size=370x370&quality=96&sign=4290ae1b854616fc0421e1f47350cf84&type=album" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://sun9-86.userapi.com/impg/KTdHN84z_ZNMAZMATu5rP0FvIVxYniAjqUtw3w/5cBUA6Vl-jI.jpg?size=370x370&quality=96&sign=9483bba2881d6dd4eb852a7f974013ad&type=album" alt="work" />
                    </div>
                </div>
                <div className="works__images-container" style={{marginTop: '30px'}}>
                    <div className="works__images-container_image" style={{marginRight: '30px'}}>
                        <img src="https://sun9-26.userapi.com/impg/rvQq9Pd2HryqeL7w5O3S7uKzJ8dCI_G3LhjDVg/VZR5xDT_7sw.jpg?size=370x370&quality=96&sign=47e505a4e2d58dc1aac3daf5469a35fe&type=album" alt="work" />
                    </div>
                    <div className="works__images-container_image" style={{marginRight: '30px'}}>
                        <img src="https://sun9-56.userapi.com/impg/bmbhM6154XSZm1jCIj6mr3Kqr05zIWYdyHE7iA/TACxRmax8ks.jpg?size=370x370&quality=96&sign=b4a0e12c3f0d5a4574212ef54181660c&type=album" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://sun9-63.userapi.com/impg/jMNhtsFDWo2gsqPnIt61Pm6WgeIhQkSVztMTvw/GfcA4mZT9cw.jpg?size=370x370&quality=96&sign=1f0e930953a5c2c12504d3d98004fcfc&type=album" alt="work" />
                    </div>
                </div>
            </div>
            <div className="works__buttonBottom">
                <button className='button button__outline'>
                    <span>VIEW ALL</span>
                </button>
            </div>
        </div>
    )
}