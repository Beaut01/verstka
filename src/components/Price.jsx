import React from 'react'

export const Price = () => {
    return(
        <div className="price">
            <div className="price__title">
                <p>Pricing Plan</p>
            </div>
            <div className="price__descr">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="price__cards">
                <div className="d-flex">
                    <div className="cardP" style={{marginRight: '30px'}}>
                        <div className="cardP__blue">
                            <div className="cardP__blue-title">
                                <p>Free Trail</p>
                            </div>
                            <div className="cardP__blue-price">
                                <p>$ <span>00</span> per month</p>
                            </div>
                        </div>
                        <div className="cardP__list">
                            <ul>
                                <li>30 Free Trail</li>
                                <hr />
                                <li>5 Free Projects</li>
                                <hr />
                                <li>PHP 5 Enabled</li>
                                <hr />
                                <li>24/7 Suports</li>
                                <hr />
                            </ul>
                        </div>
                        <div className="cardP__button">
                            <button className='button button__outline'> 
                                <span>ORDER NOW</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardP" style={{marginRight: '30px'}}>
                        <div className="cardP__blue">
                            <div className="cardP__blue-title">
                                <p>Free Trail</p>
                            </div>
                            <div className="cardP__blue-price">
                                <p>$ <span>00</span> per month</p>
                            </div>
                        </div>
                        <div className="cardP__list">
                            <ul>
                                <li>30 Free Trail</li>
                                <hr />
                                <li>5 Free Projects</li>
                                <hr />
                                <li>PHP 5 Enabled</li>
                                <hr />
                                <li>24/7 Suports</li>
                                <hr />
                            </ul>
                        </div>
                        <div className="cardP__button">
                            <button className='button button__outline'> 
                                <span>ORDER NOW</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardP">
                        <div className="cardP__blue">
                            <div className="cardP__blue-title">
                                <p>Free Trail</p>
                            </div>
                            <div className="cardP__blue-price">
                                <p>$ <span>00</span> per month</p>
                            </div>
                        </div>
                        <div className="cardP__list">
                            <ul>
                                <li>30 Free Trail</li>
                                <hr />
                                <li>5 Free Projects</li>
                                <hr />
                                <li>PHP 5 Enabled</li>
                                <hr />
                                <li>24/7 Suports</li>
                                <hr />
                            </ul>
                        </div>
                        <div className="cardP__button">
                            <button className='button button__outline'> 
                                <span>ORDER NOW</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}