import React ,{useState} from "react";
// import './login.css'
import signIn, { authenticate, isAuthenticated } from '../../auth/loginAPI';
import { Redirect } from "react-router";
import Navbar from "../basic/Navbar/Navbar";
import Footer from "../basic/Footer/Footer";



const Register = () => {

    return (
        <>
       
        <Navbar />
        <section className="container pt-5 mb-3">
        <div className="col-xl-12 col-lg-12">
            <div className="row justify-content-center">
                <div className="card card-common">
                        <div className="card-body">
                           
                            <section className="">
                            
                                <div className="px-4 py-5 px-md-5" >
                                <div className="container">
                                    <div className="row gx-lg-3 align-items-center">
                                    <div className="col-lg-4 mb-5 mb-lg-0">
                                        <h3 className="my-5 display-5 fw-bold ls-tight">
                                        Let's get you<br />
                                        <span className="text-primary">Onboarded with us!</span>
                                        </h3>
                                        <p>
                                        Join Naturistic to access exclusive products and deals! Register for an account by providing your name, email address, and a secure password.
                                        </p>
                                    </div>
                            
                                    <div className="col-lg-8 mb-5 mb-lg-0">
                                        <div className="card">
                                        <div className="card-body py-5 px-md-5">
                                            <form action="/custom/accounts/register" method="POST">
                                            
                                            
                                            <div className="row">
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                    <label className="form-label"for="form3Example3">First Name</label>
                                                    <input name="first_name" type="text" id="form3Example3" className="form-control" />
                                                </div>
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                    <label className="form-label"for="form3Example3">Last Name</label>
                                                    <input name="last_name" type="text" id="form3Example3" className="form-control" />
                                                </div>
                                            </div>
                            
                                            
                                            <div className="row">
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                <label className=" text-left"  for="form3Example4">Contact No</label>
                                                <input type="text" name="contact" id="form3Example4" className="form-control" />
                                                
                                                </div>
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                <label className="form-label"for="form3Example3">Email address</label>
                                                <input name="email" type="email" id="form3Example3" className="form-control" />
                                                
                                                </div>
                                            </div>
                                            
                            
                                            
                                            <div className="row">
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                    <label className=" text-left"  for="form3Example4">Password</label>
                                                    <input type="password" name="password" id="form3Example4" className="form-control" />
                                                    
                                                </div>
                                                <div className="col-md-6 col-12 form-outline mb-4">
                                                    <label className=" text-left"  for="form3Example4">Confirm Password</label>
                                                    <input type="password" name="cpassword" id="form3Example4" className="form-control" />
                                                    
                                                </div>
                                            </div>

                                            <div className="">
                                                <div className="col form-outline mb-4">
                                                <label className="text-left" >Address</label>
                                                <textarea name="address" className="form-control"></textarea>
                                                </div>
                                            
                                            </div>
                                            
                            
                            
                                        

                            
                                            
                                            <div className="text-center">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6">
                                                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h5>or sign up with:</h5>
                                            <a href="{% provider_login_url 'google' %}"> <button type="button" className="btn btn-primary">
                                                <i className="fa fa-google"></i> | Google
                                                </button></a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            </form>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                            </section>
 
                        </div>
                  </div>
            </div>
        </div>
    </section>

    <Footer />
    </>
    )
}


export default Register;