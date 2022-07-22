import { faFacebookF, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import PayPal from "../../assets/image/PayPal.webp"
import visa from "../../assets/image/visa.webp"
import master from "../../assets/image/master.webp"
import unknown1 from "../../assets/image/unknown.webp"
import unknown2 from "../../assets/image/unknown2.webp"
export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-success pt-5 text-white">
                <section className="d-flex justify-content-center">
                    <div className="w-75 text-center text-md-start mt-5">
                        <div className="row mt-3 d-flex justify-content-between">
                            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    CATEGORIES
                                </h6>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Fruits</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Vegetables</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Cereals</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Others</Link>
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    HELP
                                </h6>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Track Order</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Returns</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">Shipping</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-decoration-none text-white">FAQs</Link>
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    GET IN TOUCH
                                </h6>
                                <p className='text-white'>
                                    Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                                </p>
                                <p className='d-flex gap-3 fs-5'>
                                    <Link to="/" className='text-white'><FontAwesomeIcon icon={faFacebookF} /></Link><Link className='text-white' to="/"><FontAwesomeIcon icon={faInstagram} /></Link><Link className='text-white' to="/"><FontAwesomeIcon icon={faPinterestP} /></Link>
                                </p>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    NEWSLETTER
                                </h6>
                                <p>
                                    <input type="email" placeholder='email@example.com' className='bg-transparent btn text-start shadow-none border-bottom ps-0 pe-5 footer-input' />
                                </p>
                                <p>
                                    <button className='btn btn-primary rounded-pill px-5 py-2'>SUBSCRIBE</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <p className='text-center mt-5'><img src={PayPal} alt='PayPal' /><img src={visa} alt='PayPal' /><img src={master} alt='PayPal' /><img src={unknown1} alt='PayPal' /><img src={unknown2} alt='PayPal' /></p>
                <div className="text-center text-white p-5 pt-0">
                    Copyright ©2022 All rights reserved
                </div>
            </footer>
        </div>
    )
}
