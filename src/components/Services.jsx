import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt} from '@fortawesome/free-solid-svg-icons'
 
export const Services = () => {
    return(
        <div className="services">
            <div className="services__title">
                <p>Our Services</p>
            </div>
            <div className="services__descr">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="services__cards">
                <div className="d-flex justify-content-center">
                    <div className="cardS" style={{marginRight: '2.5%'}}>
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardS" style={{marginRight: '2.5%'}}>
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardS">
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{marginTop: '33px'}}>
                <div className="cardS" style={{marginRight: '2.5%'}}>
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardS" style={{marginRight: '2.5%'}}>
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                    <div className="cardS">
                        <div className="cardS__image">
                            <FontAwesomeIcon icon={faMobileAlt} style={{width: '60px', height: '60px'}}/>
                        </div>
                        <div className="cardS__title">
                            <p>Research</p>
                        </div>
                        <div className="cardS__descr">
                            <p>At vero eos et accusamus et iusto odio dignissinos ducimus qui blanditiis presentium voluptatum itti atque corrupri quos</p>
                        </div>
                        <div className="cardS__button">
                            <button className='button button__outline'>
                                <span>READ MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}