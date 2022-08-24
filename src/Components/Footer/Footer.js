import React from 'react'
import Facebook_img from '../../images/fb.png'
import Twitter_img from '../../images/twitter.png'
import instagram_img from '../../images/instagram.png'
import Linkedin_img from '../../images/linkedin.png'
import Dribble_img from '../../images/dribble.png'
import Pinterest_img from '../../images/pinterest.png'

const Footer = () => {
    return (
        <>
            <section className="info_section ">
                <div className="container">
                    <div className="info_container">
                        <div className="info_social">
                            <div className="d-flex justify-content-center">
                                <h4 className="">
                                    Follow on
                                </h4>
                            </div>
                            <div className="social_box">
                                <a href="/">
                                    <img src={Facebook_img} alt="" />
                                </a>
                                <a href="/">
                                    <img src={Twitter_img} alt="" />
                                </a>
                                <a href="/">
                                    <img src={instagram_img} alt="" />
                                </a>
                                <a href="/">
                                    <img src={Linkedin_img} alt="" />
                                </a>
                                <a href="/">
                                    <img src={Dribble_img} alt="" />
                                </a>
                                <a href="/">
                                    <img src={Pinterest_img} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container-fluid footer_section">
                <div className="container">
                    <p>
                        &copy; 2022 All Rights Reserved By <b>Hani Patel</b>
                    </p>
                </div>
            </section>
        </>
    )
}

export default Footer