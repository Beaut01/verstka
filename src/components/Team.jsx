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
                    <div className="cardT">
                        <div className="cardT__image">
                            <img src="https://bigenc.ru/media/2016/10/27/1235151539/971.jpg" alt="aristotel" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>Aristotle</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>General Manger</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/274px-Nietzsche187a.jpg" alt="nietzsche" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>Friedrich Nietzsche</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>Office Director</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
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
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Kant_gemaelde_3.jpg/274px-Kant_gemaelde_3.jpg" alt="kant" />
                        </div>
                        <div className="cardT__info">
                            <div className="cardT__info-name">
                                <p>Immanuel Kant</p>
                            </div>
                            <div className="cardT__info-position">
                                <p>Admin</p>
                            </div>
                            <div className="cardT__info-social">
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
                                    <FontAwesomeIcon icon={faComments} />
                                </button>
                                <button className='button button__rounded'>
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