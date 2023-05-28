import React from "react";
import ReactDOM from "react";

import "./Signup.css";

import NavBar from "./NavBar";


function Signup(){


    function handleSubmitSignup(event){
        event.preventDefault();
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
                            <input required className="my-inputs" type="text" ></input>
                            <label className="my-labels">Surname</label>
                            <input required className="my-inputs" type="text"></input>
                            <label className="my-labels">Email</label>
                            <input required className="my-inputs" type="email"></input>
                            <label className="my-labels">Password</label>
                            <input required className="my-inputs" type="password"></input>
                            <button className="btn btn-primary my-sub-btn" type="submit">Submit</button>
                            <label><a href="/signin" className="already-account">Already have an account? Sign in</a></label>

                        </form>
                       

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>

        </div>
    );
}

export default Signup;