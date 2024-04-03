import React ,{useState} from "react";
// import './login.css'
import signIn, { authenticate, isAuthenticated } from '../../auth/loginAPI';
import { Redirect } from "react-router";
import Navbar from "../basic/Navbar/Navbar";



const Login = () => {
    
    const [values, setValues] = useState({
        email : "",
        password: ""
    });
    const {email,password} = values;
    if(localStorage.getItem('Token')){
        return authenticate({});

    }else{

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(email,password,"fgh")
        setValues({...values,email, password});
        console.log("Prep")
        signIn({email, password})
        .then(data => {
            console.log(data);
            authenticate(data);
            // successMessage();
        })
        .catch( e => console.log(e));
    }

    // const successMessage = () => {
    //     return (
    //         alert('Login Successfull')
    //     );
    // }
    const errorMessage = () => {
        return (
            alert('Error Occured')
        );
    }

    const handleChange = (name) => 
        (event) => {
            setValues({...values,[name]:event.target.value});
        }
    

    return (
      <div>
        <Navbar />
      <section class="container pt-5">
      <div class="col-xl-12 col-lg-12">
          <div class="row justify-content-center">
              <div class="card">
                      <div class="card-body">
                          
<section class="">

  <div class="px-4 py-5 px-md-5" >
    <div class="container">
      <div class="row gx-lg-5 align-items-center">
        <div class="col-lg-6 mb-5 mb-lg-0">
          <h3 class="my-5 display-3 fw-bold ls-tight">
            Let's get you<br />
            <span class="text-primary">Onboarded with us!</span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0">
          <div class="card">
            <div class="card-body py-5 px-md-5">
              <form action="/custom/accounts/login" method="POST"> 
               
                <div class="form-outline mb-4">
                  <label class="form-label"for="form3Example3">Email address</label>
                  <input name="username" type="email" id="form3Example3" class="form-control" />
                  
                </div>

               

                <div class="form-outline mb-4">
                  <label class=" text-left"  for="form3Example4">Password</label>
                  <input type="password" name="password" id="form3Example4" class="form-control" />
                  
                </div>


                
                <button type="submit" class="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

               
                <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <a href="{% provider_login_url 'google' %}"> <i class="fa fa-google"></i></a>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
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
      </div>

    );
    }
}

export default Login;