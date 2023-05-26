import React from "react";
// import Button from "react-bootstrap/Button";

import NavBar from "./NavBar";

function Home (){
    return(
        <div>
            <NavBar/>
            <div className="container">
            <button id="signin">Sign In</button>
            <button id="signup">Sign Up</button>

            <h1>Welcome to Public Peer Review</h1>
            <h3>where critics go critical-101!</h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                 culpa qui officia deserunt mollit anim id est laborum.</p>

            
        
        </div>
        </div>
     
    );
}

export default Home;