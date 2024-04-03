
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';


const About = () => {
    return(

        <section>
       <ToastContainer position="bottom-right"/>
            <Navbar />


            <section className="bg-gold pt-3 pb-3">
        <div className="container">
        
          <ol className="breadcrumb ondark mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/about">About</Link></li>
          </ol>
        
        </div>
        </section>

        <section>
            <div className="container pb-4 pt-4">
                <div className="col-xl-12 ">
                    <div className="card jumbotron-original card-5">
                        <div className="card-body">
                            <div className="row justify-content-center align-items-center">
                                <div className="col-xl-6 col-lg-6 col-sm-12 ">
    
                                    <div className="col-xl-12 vision-wrapper ">
                                        <h1>About Us</h1>
                                    
                                        <p className="text-muted text-left">Welcome to Naturistic, the ultimate destination for premium marble products. Our website offers a wide range of marble products including marble sculptures, marble art, marble icons, marble murtis, marble bathroom sets, marble plates, and marble combs. All our products are made from Morwad's finest marble, known for its unparalleled beauty and durability.

                                            At Naturistic, we believe in offering our customers the very best in marble craftsmanship. Our skilled artisans use traditional techniques to create unique and stunning marble pieces that are sure to add a touch of elegance to any space.
                                            
                                            Whether you're looking for a beautiful marble sculpture to decorate your home or a practical marble bathroom set to add a touch of luxury to your daily routine, we have something for everyone. Our products are perfect for those who appreciate the natural beauty of marble and want to add a touch of sophistication to their homes.
                                            
                                            At Naturistic, we take pride in our commitment to quality and customer satisfaction. We offer a range of premium marble products at competitive prices, and our team of experts is always available to assist you with any questions or concerns you may have.
                                            
                                            So why wait?</p> </div>
    
                                </div>
                                <div className="col-xl-6 col-lg-6 col-sm-12 " >
                                    <img src="${API}/static/images/bichKaLanding.avif" className="img-fluid " />
                                </div>
                            </div>
                        </div>
                      </div>
    
    
                </div>
            </div>
        </section>
    

   

    <Footer />




        </section>


    )
}

export default About;