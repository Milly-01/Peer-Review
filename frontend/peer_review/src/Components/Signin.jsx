import React from "react";
import ReactDOM from "react";

import "./Signin.css";
import NavBar from "./NavBar";


function Signin(){


    function handleSubmitSignin(event){
        event.preventDefault();
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
                            <input required className="my-inputs2" type="email"></input>
                            <label className="my-labels2">Password</label>
                            <input required className="my-inputs2" type="password"></input>
                            <button className="btn btn-primary my-sub-btn2" type="submit">Submit</button>
                            <label><a href="/signup" className="already-account2">Don't have an account? Sign up</a></label>

                        </form>
                     

                    </div>
                </div>
                <div className="col-md-3"></div>

            </div>

        </div>
    );
}

export default Signin;