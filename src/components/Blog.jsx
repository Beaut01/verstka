import React from 'react'

export const Blog = () => {
    return(
        <div className="blog">
            <div className="blog__title">
                <h4>Blog</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div className="blog__cards">
                    <div className="cardB">
                        <div className="cardB__image">
                            <img src="https://www.rush-agency.ru/wp-content/uploads/2019/07/seo.jpg" alt="seo" />
                        </div>
                        <div className="carB__info ml-auto">
                            <h4>SEO Quis Vestibulun</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}