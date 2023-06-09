import React from "react";
import ReactDOM from "react";

import "./Signup.css";

import NavBar from "./NavBar";

import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import { UserContext } from "./UserContext";
import { useContext } from "react";

function Signup(){

    const {u_send_loginemail, setSendLoginEmail} = useContext(UserContext);

    const [s_name, setName] = useState("");
    const [s_surname, setSurname] = useState("");
    const [s_email, setEmail] = useState("");
    const [s_password, setPassword] = useState("");

    const navigate = useNavigate();


    function handleSubmitSignup(event){
        event.preventDefault();

        
        axios.post("http://localhost:3001/api/signup", {s_name, s_surname, s_email, s_password})
            .then(function(response){
                if(response.data === "Success - User Added."){
                    Swal.fire(
                        'Success!',
                        'User Added! You can now login',
                        'success'
                    )
                    navigate("/signin");
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Try Signing up again.',
                      })
                }
            });
    }


    function handleName(event){
        setName(event.target.value);


    }

    function handleSurname(event){
        setSurname(event.target.value);
        
    }

    function handleEmail(event){
        setEmail(event.target.value);
        
    }
    function handlePassword(event){
        setPassword(event.target.value);
        
    }



    return(
        <div className="container-fluid c-2">
            <NavBar/>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="my-signup-form">
                        <form onSubmit={handleSubmitSignup}>
                            <h3 className="sign-up">Sign Up</h3>
                            <label className="my-labels">Name</label>
                            <input required className="my-inputs" type="text" onChange={handleName} ></input>
                            <label className="my-labels">Surname</label>
                            <input required className="my-inputs" type="text"  onChange={handleSurname}></input>
                            <label className="my-labels">Email</label>
                            <input required className="my-inputs" type="email"  onChange={handleEmail}></input>
                            <label className="my-labels">Password</label>
                            <input required className="my-inputs" type="password"  onChange={handlePassword}></input>
                            <button className="btn btn-primary my-sub-btn" type="submit">Submit</button>
                            <label><Link to="/signin" className="already-account">Already have an account? Sign in</Link></label>

                        </form>
                       

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>

        </div>
    );
}

export default Signup;