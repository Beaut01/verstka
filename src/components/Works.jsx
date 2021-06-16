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
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
                    </div>
                </div>
                <div className="works__images-container" style={{marginTop: '30px'}}>
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
                    </div>
                    <div className="works__images-container_image">
                        <img src="https://images.samsung.com/is/image/samsung/ru-galaxy-s20-plus-g985-sm-g985fzpdser-frontbpurple-255590904?$720_576_PNG$" alt="work" />
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