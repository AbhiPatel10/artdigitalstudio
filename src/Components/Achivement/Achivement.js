import React from 'react'
import Achivement_img_1 from '../../images/a-1.png'
import Achivement_img_2 from '../../images/a-2.png'
import Achivement_img_3 from '../../images/a-3.png'

const Achivement = () => {
    return (
        <>
            <section className="achieve_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            ACHIEVEMENTS
                        </h2>
                        <p>
                            minim veniam, quis nostrud exercitation ullamco laboris nisi
                        </p>
                    </div>
                    <div className="achieve_container">
                        <div className="box">
                            <div className="img-box">
                                <img src={Achivement_img_1} alt="" />
                            </div>
                            <div className="detail-box">
                                <h2>
                                    1000+
                                </h2>
                                <h6>
                                    Photo Session
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Achivement_img_2} alt="" />
                            </div>
                            <div className="detail-box">
                                <h2>
                                    9000+
                                </h2>
                                <h6>
                                    Happy Customers
                                </h6>
                            </div>
                        </div>
                        <div className="box">
                            <div className="img-box">
                                <img src={Achivement_img_3} alt="" />
                            </div>
                            <div className="detail-box">
                                <h2>
                                    1000+
                                </h2>
                                <h6>
                                    Archive Photographs
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Achivement