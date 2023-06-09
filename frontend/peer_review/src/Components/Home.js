import React from "react";
// import Button from "react-bootstrap/Button";

import NavBar from "./NavBar";
import "./Home.css";

import { UserContext } from "./UserContext";
import { useContext } from "react";

function Home (){
    const {u_send_loginemail, setSendLoginEmail} = useContext(UserContext);
    return(
        <div>
            <NavBar/>
            <div className="container-fluid con-me">
                <h1 className="peer-heading">Welcome to Public Peer Review</h1>
                <h3 className="peer-heading-2">where critics go critical-101!</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>
             <h1>Hello</h1>
          </div>
        </div>
     
    );
}

export default Home;