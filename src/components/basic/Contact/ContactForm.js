import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { API } from '../../../API';
import  Axios  from 'axios';
import $ from 'jquery';
import { Link } from "react-router-dom";
// import { Toast, ToastContainer } from 'react-toastify/dist/components';



const ContactForm = () => {

    const [captchaText, setCaptchaText] = useState(''); 
	const [userInput, setUserInput] = useState(''); 
	const canvasRef = useRef(null); 

	useEffect(() => { 
		const canvas = canvasRef.current; 
		const ctx = canvas.getContext('2d'); 
		initializeCaptcha(ctx); 
	}, []); 

	const generateRandomChar = (min, max) => 
		String.fromCharCode(Math.floor 
			(Math.random() * (max - min + 1) + min)); 

	const generateCaptchaText = () => { 
		let captcha = ''; 
		for (let i = 0; i < 2; i++) { 
			captcha += generateRandomChar(65, 90); 
			captcha += generateRandomChar(97, 122); 
			captcha += generateRandomChar(48, 57); 
		} 
		return captcha.split('').sort( 
			() => Math.random() - 0.5).join(''); 
	}; 

	const drawCaptchaOnCanvas = (ctx, captcha) => { 
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
		const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)']; 
		const letterSpace = 150 / captcha.length; 
		for (let i = 0; i < captcha.length; i++) { 
			const xInitialSpace = 25; 
			ctx.font = '20px Roboto Mono'; 
			ctx.fillStyle = textColors[Math.floor( 
				Math.random() * 2)]; 
			ctx.fillText( 
				captcha[i], 
				xInitialSpace + i * letterSpace, 
				
				// Randomize Y position slightly 
				Math.floor(Math.random() * 16 + 25), 
				100 
			); 
		} 
	}; 

	const initializeCaptcha = (ctx) => { 
		setUserInput(''); 
		const newCaptcha = generateCaptchaText(); 
		setCaptchaText(newCaptcha); 
		drawCaptchaOnCanvas(ctx, newCaptcha); 
	}; 

	const handleUserInputChange = (e) => { 
		setUserInput(e.target.value); 
	}; 

	const handleCaptchaSubmit = async(e) => { 
        e.preventDefault();
		if (userInput === captchaText) { 
            console.log("sc")
			
            var obj = {}
            const formData = new FormData(e.currentTarget);
            console.log(formData);
            for (let [key, value] of formData.entries()) {
                obj[key] = value;
            }
            console.log("obj",obj)
            let res = await Axios.post(`${API}/shop/inquiry`,obj).then( res=> {
                console.log(res)
            }).catch(err=>{
                toast(err);
            })
            toast('Success'); 
            window.location = '/';
		} else { 
			toast('Incorrect'); 
            console.log("fa");
			const canvas = canvasRef.current; 
			const ctx = canvas.getContext('2d'); 
			initializeCaptcha(ctx); 
		} 
	}; 

    return(
        <section className="contact-content">
        <div className="top-content">
            <div className="contact-form">
                <div className="container">
                    <div className="row justify-content-center">
                        
                        <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                            <form onSubmit={handleCaptchaSubmit} method="POST">

                                <h4>We'd love to hear from you</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-2">
                                        <div className="form-group">
                                            <input type="text" name="name" id="name" className="form-control"
                                                minlength="2" maxlength="70" required placeholder="Name" />
                                            <div className="form-error" id="error-name"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  my-2">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" className="form-control" required
                                                placeholder="E-mail Address" />
                                            <div className="form-error" id="error-email"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  my-2">
                                        <div className="form-group">
                                            <input type="text" name="contact_number" id="contact_number" minlength="8"
                                                maxlength="20" className="form-control" placeholder="Contact No."
                                                required />
                                            <div className="form-error" id="error-contact_number"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12  my-2">
                                        <div className="form-group">
                                            <input type="text" name="country" id="country" maxlength="70"
                                                className="form-control" placeholder="Your Country" required />
                                            <div className="form-error" id="error-country"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12  my-2">
                                        <div className="form-group">
                                            <textarea name="message" id="message" className="form-control"
                                                placeholder="Contact Message" cols="30" rows="5" maxlength="500"
                                                required></textarea>
                                            <div className="form-error" id="error-description"></div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12  my-2">
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <input type="text"
                                                        id="user-input"
                                                        value={userInput} 
                                                        onChange={handleUserInputChange}rows="3" name="captcha" className="form-control"
                                                        placeholder="Write Captcha" required />
                                                </div>
                                                <div className="col-xl-4"> 
                                                    <div className="wrapper"> 
                                                        <canvas ref={canvasRef} 
                                                          height='70' > 

                                                        </canvas> 
                                                    </div> 
                                                    {/* <input 
                                                        type="text"
                                                        id="user-input"
                                                        placeholder="Enter the text in the image"
                                                        value={userInput} 
                                                        onChange={handleUserInputChange}/>  */}
                                                        
                                                    {/* <button id="submit-button"
                                                        onClick={handleCaptchaSubmit}> 
                                                        Submit 
                                                    </button>  */}
                                                </div> 
                                                <div className='col-xl-4'>
                                                <button className='btn btn-warning' id="reload-button" onClick={ 
                                                            () => initializeCaptcha( 
                                                                canvasRef.current.getContext('2d'))}> 
                                                            Reload 
                                                        </button> 
                                                </div>
                                            </div>
                                            <div className="form-error" id="error-description"></div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <button type="submit"className="btn btn-outline-success">
                                           submit
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
    )
}



export default ContactForm;