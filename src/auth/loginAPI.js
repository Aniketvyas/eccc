// import {API} from '../API';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import {API} from '../API';

// const signUp = user => {
//     return fetch(`${API}accounts/login`,{
//         method:"POST",
//         header: {
//             Accept: "application/json",
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(user)
//     })
//     .then((response) => {
//         return response.json();
//     })
//     .catch(
//         err => {console.log(err)}
//     )
// }


const signIn = user => {
    const data = {
        "username":user['email'],
        "password":user['password']
    }
    // console.log(data,API);  
    // console.log(formData.keys());  
    // return Axios.post('http://localhost:8000/api/gettoken/',data)
    return fetch(`${API}/auth/gettoken/`,{
        method:"POST",
        headers: {"Content-Type": "application/json"},
        // url : 'http://oneportal.pythonanywhere.com/auth/gettoken/',
        body: JSON.stringify(data),
    })
    .then((response) => {
        // console.log(response.json)
       return response.json();
 
    })
    .catch(
        err => {console.log(err)}
    )
}

export const authenticate = (data) => {
    if(typeof window !== undefined){
        if(localStorage.getItem('Token')){
            window.location="/"

        }else{
        // console.log(data)
        localStorage.setItem('Token', (data.token));
        console.log("hogyi set");
        window.location="/";

        // window.location = "/faculty/dashboard";
        // next();
        }   
    }
    else
    {
        console.log("Error occured in authentication");
    }
}

export const isAuthenticated = () => {
   var Token = localStorage.getItem('Token')
//    console.log(Token, typeof Token)
    if(Token === "undefined") {
        // console.log("mc")
        localStorage.removeItem('Token')
        return isAuthenticated()
    }
    if(localStorage.getItem('Token') !== "undefined"){
        // console.log(localStorage.getItem('Token'));
        return (localStorage.getItem('Token'));

    }
    else{
        localStorage.removeItem('Token');
        return false;
    }
}

export const logout = next =>{
    const userId = isAuthenticated() && isAuthenticated().user.id

    if(typeof window !== undefined){
        localStorage.removeItem('Token');
        next();

        return fetch(`${API}/accounts/logout/${userId}`, {
            method:"GET",
        })
        .then(response => {
            console.log("Success");
            next();
        })
        .catch(err => {console.log(err)});
    }
}

export default signIn;