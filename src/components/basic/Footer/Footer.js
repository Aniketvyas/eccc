import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../../API'
const Footer = () => {
    return(
        <footer className="section-footer bg-gold">
		<div className="container">
			<section className="footer-main padding-y ">
				<div className="row justify-content-center">
					<aside className="col-sm-3 col-lg-3 ">
						<article className="me-lg-4">
							<img src={`${API}/static/images/logo.png`}  className="logo-footer" />
							<p className="mt-3"> © 2018 - 2021 Natural Marbles. <br /> All rights reserved. </p>
							<p><b>Address:</b> Chapar Kedi, Natural Marble, Tasol Rd, Rajsamand, Rajasthan 313334</p>
							
						</article>
					</aside>
					{/* <aside className="col-lg-2 col-md-3 col-sm-4 col-lg-2 ">
						<h6 className="title"><b>Useful Links</b></h6>
						<ul className="list-menu mb-4">
							<li> <Link className="" to="/">Home</Link></li>
							<li> <Link className="" to="/about">About us</Link></li>
							<li> <Link className="" to="/contact">Contact Us</Link></li>
							<li> <Link className="" to="/contact">Support</Link></li>
						</ul>
					</aside> */}
					 <aside className="col-lg-3 col-md-3 col-sm-4 col-lg-2 text-white">
						<h6 className="title"><b> Policies</b></h6>
						<ul className="list-menu mb-4">
							<li className='text-white'> <Link className="text-white" to="blog/refund-replacements-and-cancellations-policy-naturistic-from-rajsamand">Refund Policy</Link></li>
							<li> <Link className="text-white" to="https://naturistic.co/blog/shipping-policy">Shipping Policy</Link></li>
							<li> <Link className="text-white" to="https://naturistic.co/blog/terms-and-conditions-naturistic-from-natural-marble">Terms and Conditions</Link></li>
						</ul>
					</aside> 
					<aside className="col-lg-3 col-md-3 col-sm-4 col-lg-2">
						<h6 className="title"><b>Social Links</b></h6>
						<ul className="list-menu mb-4">
							<li> <Link className="text-white" to="https://www.facebook.com/naturalmarble1"> Facebook </Link></li>
							<li> <Link className="text-white" to="https://www.instagra.com/naturalmarble1"> Instagram </Link></li>
							<li> <Link className="text-white" to="https://wa.me/918949999291"> WhatsApp </Link></li>
							<li> <Link className="text-white" to="https://www.youtube.com/@naturalmarble1"> Youtube </Link></li>
						</ul>
					</aside>
					<aside className="col-lg-3 col-md-3 col-sm-4 col-lg-2">
						<h6 className="title "><b>Newsletter</b></h6>
						<p className="">Stay in touch with latest updates about our products and offers </p>

						<form action="/shop/subscribe" method="POST" className="mb-3">
							<div className="input-group">
							<input className="form-control" name="email" type="text" placeholder="Email" />
								<button className="btn btn-light" type="submit">
									Join
								</button>
							</div> 
						</form>
						<p>E-Mail : naturalmarbles3042@gmail.com</p>
						<p>Contact: +91-8949999291</p>
					</aside>
				</div> 
			</section> 


		</div> 
	</footer>
    )

    
}   

export default Footer;