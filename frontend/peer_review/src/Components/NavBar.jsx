import React from "react";
import ReactDOM from "react";
import {Link, useNavigate} from "react-router-dom";

import "./NavBar.css";

function NavBar(){

    const navigate = useNavigate();
    function handleS(event){
        event.preventDefault();
        navigate("/signup");
    }

    return(
        <div>
            <nav className="navbar navbar-expand-lg">
                 <div className="container-fluid">
                    <a class="navbar-brand" href="#">Peer Review</a>
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
                        <li className="nav-item">
                             <a className="nav-link" href="#">Link2</a>
                        </li>
                        <li className="nav-item">
                              <a className="nav-link">Link3</a>
                        </li>
                      </ul>

                      <form onSubmit={handleS}>
                        <button  type="submit" class="btn btn-primary my-btns">Sign In/Up</button>
                      </form>
                     
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                     </div>
                 </div>
                </nav>
             </div>
    );
}

export default NavBar;