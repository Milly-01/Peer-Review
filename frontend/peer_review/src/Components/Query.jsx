import React from "react";
import ReactDOM from "react-dom";

import "./Query.css";
import NavBar from "./NavBar";

function Query(){

    return(
        <div>
             <NavBar/>
            <div className="container-fluid con-query">

              
                    <form className="search-form">
                        <div className="search-div">
                            <input type="text" placeholder="Search" className="my-query"></input>
                            <button type="submit" className="searh-btn"><i class="fa-solid fa-magnifying-glass color-mag-glass"></i></button>
                            <h2 className="peer-search-engine"><span>Peer Review Engine</span></h2>
                            <label className="peer-q">Search for articles by category. i.e Biology, Mathematics ...</label>
                        </div>
                    </form>

               

               
            </div>

        </div>
       
    );
}

export default Query;