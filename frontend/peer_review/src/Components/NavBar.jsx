import React from "react";
import ReactDOM from "react";
import {Link, useNavigate} from "react-router-dom";

import "./NavBar.css";

import { UserContext } from "./UserContext";
import { useContext } from "react";

function NavBar(){

    const {u_send_loginemail, setSendLoginEmail} = useContext(UserContext);

    const navigate = useNavigate();
    function handleS(event){
        event.preventDefault();
        navigate("/signup");
    }
    function handleL(event){
      event.preventDefault();
      setSendLoginEmail("");
      navigate("/");
  }

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                 <div className="container-fluid">
                    <a className="navbar-brand" href="#">Peer Review</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
  
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                             <a className="nav-link"  href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/query">Articles</a>
                        </li>
                      
                      </ul>

                      {
                        u_send_loginemail===""?  <form onSubmit={handleS}><button  type="submit" className="btn btn-primary my-btns">Sign In/Up</button></form> : <form onSubmit={handleL}><button  type="submit" className="btn btn-primary my-btns">Logout</button></form>
                      }

                    
                     
                    <form className="d-flex" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                        {/* {
                          u_send_loginemail===""? <button className="btn btn-outline-success unclickable" type="submit">Search</button> : <button className="btn btn-outline-success unclickable" type="submit">T</button>
                        } */}

                        {
                          u_send_loginemail === ""? null : <button className="btn btn-success unclickable">{u_send_loginemail[0].toUpperCase()}</button>
                        }
                    </form>
                     </div>
                 </div>
                </nav>
             </div>
    );
}

export default NavBar;