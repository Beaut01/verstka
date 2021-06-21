import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
    return(
        <div className="contact">
            <div className="contact__title">
                <h4>Contact Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="contact__icons">
                <div className="contact__icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} color='white' className='fa-4x' />
                </div>
                <div className="contact__icon">
                    <FontAwesomeIcon icon={faPhoneAlt} color='white' className='fa-4x' />
                </div>
                <div className="contact__icon">
                    <FontAwesomeIcon icon={faEnvelope} color='white' className='fa-4x' />
                </div>
            </div>
            <div className="contact__values">
                <div className="contact__phone">
                    <p>Nobinagar savar, Dhaka Bangladesh</p>
                </div>
                <div className="contact__phone">
                    <p>+8801743331996</p>
                    <p>+8801928737807</p>
                </div>
                <div className="contact__phone">
                    <p>example01@gmail.com</p>
                    <p>example02@gmail.com</p>
                </div>
            </div>
            <div className="contact__inputs">
                <div className="d-flex justify-content-center">
                    <input placeholder='Your NAME' className='contact__input' style={{marginRight: '2.9%'}}/>
                    <input placeholder='Your Email' className='contact__input'  />
                </div>
                <textarea name="" id="" className='contact__textarea'>Write Message</textarea>
                <div className="d-flex justify-content-end mt-3">
                    <button className='button button__contact'>
                        <span>SEND</span>
                    </button>
                </div>
            </div>
        </div>
    )
}