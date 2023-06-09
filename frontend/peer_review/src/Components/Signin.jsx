import React from "react";
import ReactDOM from "react";

import "./Signin.css";
import NavBar from "./NavBar";

import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";


import { UserContext } from "./UserContext";
import { useContext } from "react";

import Swal from "sweetalert2";

function Signin(){

    const [si_email, setSIEmail] = useState("");
    const [si_password, setSIPassword] = useState("");

    const {u_send_loginemail, setSendLoginEmail} = useContext(UserContext);

    function handleSignInEmail(event){
        setSIEmail(event.target.value);
    }

    function handleSignInPassword(event){
        setSIPassword(event.target.value);
    }

    function handleSubmitSignin(event){
        event.preventDefault();

 
        axios.post("http://localhost:3001/api/signin", {si_email, si_password})
            .then(function(response){
                if(response.data === "Success - Logged-In."){
                    setSendLoginEmail(si_email);
                    Swal.fire(
                        'Good job!',
                        'You have now logged in and can make comments.',
                        'success'
                    )

                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Try logging in again',
                      })

                }
            });
    }




    return(
        <div className="container-fluid c-3">
            <NavBar/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="my-signup-form2">
                        <form onSubmit={handleSubmitSignin}>
                            <h3 className="sign-up2">Sign In</h3>
                            <label className="my-labels2">Email</label>
                            <input required className="my-inputs2" type="email" onChange={handleSignInEmail}></input>
                            <label className="my-labels2">Password</label>
                            <input required className="my-inputs2" type="password" onChange={handleSignInPassword}></input>
                            <button className="btn btn-primary my-sub-btn2" type="submit">Submit</button>
                            {/* <label><a href="/signup" className="already-account2">Don't have an account? Sign up</a></label> */}
                            <label><Link to="/signup" className="already-account2">Don't have an account? Sign up</Link></label>
                        </form>
                     

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>

        </div>
    );
}

export default Signin;