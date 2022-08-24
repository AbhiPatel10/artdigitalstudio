import React from 'react'
import Aboutimage1 from '../../images/about-img.jpg'
import Aboutimage2 from '../../images/about-img-bg-hani-right.png'

const About = () => {
    return (
        <>
            <section className="about_section layout_padding" id="aboutme">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            About Studio
                        </h2>
                    </div>
                    <div className="box">
                        <div className="img-box">
                            <img src={Aboutimage1} alt="" />
                            <div className="about_img-bg">
                                <img src={Aboutimage2} alt="" />
                            </div>
                        </div>
                        <div className="detail-box">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when
                                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                letters,
                            </p>
                            <div>
                                <a href="">
                                    about More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default About