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

           
             </div>
    
        </div>
     
    );
}

export default Home;