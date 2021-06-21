import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export const Team = () => {
    return(
        <div className="team">
            <div className="team__title">
                <h4>Our Team Member</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="team__cards">
                <div className="d-flex justify-content-center">
                    <div className="cardT" style={{marginRight: '2.5%'}}>
                        <div className="cardT__image">
                            <img src="https://sun9-72.userapi.com/impg/k1CJI1FZaCJjJgNQ-5SLxOOxjXGY1k31CBGeew/myOeEmHTPnk.jpg?size=370x320&quality=96&sign=ee64bb7f65d4c77eb12456d4697bc557&type=album" alt="doe" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>John Doe</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>General Manger</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardT" style={{marginRight: '2.5%'}}>
                        <div className="cardT__image">
                            <img src="https://sun9-64.userapi.com/impg/Dq122VHva_O1ttp6AKwMY_j-BWNywasD3J-4vQ/AAcgjUiWzRE.jpg?size=370x320&quality=96&sign=49fe77e79e21b3595ea783d4d1d05240&type=album" alt="biru" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>Alexa Biru</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>Office Director</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="cardT">
                        <div className="cardT__image">
                            <img src="https://sun9-37.userapi.com/impg/2-inNys7rTCP0LVYSCH8JUrgz0BsAeButqpIzA/Byhkp_i18t8.jpg?size=370x320&quality=96&sign=41494e5bca539eed05c1c7983d016f9d&type=album" alt="sing" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>Ronobir Sing</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>Admin</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded' style={{marginRight: '8.1%'}}>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}