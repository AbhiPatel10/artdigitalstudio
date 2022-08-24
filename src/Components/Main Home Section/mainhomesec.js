import React from 'react'
import mainimage from '../../images/Main-artist-1.png'

const MainHomesec = () => {
    return (
        <>
            <section className=" slider_section position-relative">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-5 offset-md-1 ">
                                        <div className="detail_box">
                                            <h1>
                                                Art Design <br />
                                                studio
                                            </h1>
                                            <p>
                                                “Design can be art. Design can be simple. That’s why it’s so complicated.”
                                            </p>
                                            <div className="btn-box">
                                                <a href="#aboutme" className="btn-1">
                                                    About Me
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 px-0">
                                        <div className="img-box">
                                            <img src={ mainimage } alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainHomesec