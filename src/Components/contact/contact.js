import React from 'react'
import contactimage1 from '../../images/bg-img-1.png'
import contactimage2 from '../../images/bg-img-2.png'



const Contact = () => {
    return (
        <>
            <section className="contact_section layout_padding">
                <div className="bg-img1">
                    <img src={contactimage1} alt="" />
                </div>
                <div className="bg-img2">
                    <img src={contactimage2} alt="" />
                </div>
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="">
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <form action="">
                                    <div className="contact_form-container">
                                        <div>
                                            <div>
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Phone Number" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email" />
                                            </div>
                                            <div className="">
                                                <input type="text" placeholder="Message" className="message_input" />
                                            </div>
                                            <div className=" d-flex justify-content-center ">
                                                <button type="submit">
                                                    Send
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact