
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Link } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import ContactForm from '../basic/Contact/ContactForm'


const Contact = () => {
 

    return(

        <section>
       <ToastContainer position="bottom-right"/>
            <Navbar />


            <section className="bg-gold pt-3 pb-3">
        <div className="container">
        
          <ol className="breadcrumb ondark mb-0">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to="/contact">contact</Link></li>
          </ol>
        
        </div>
        </section>

  <ContactForm />

    <Footer />




        </section>


    )
}

export default Contact;