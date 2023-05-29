import React from "react";
import ReactDOM from "react-dom";

import "./Query.css";
import NavBar from "./NavBar";

import { useState } from "react";

import axios from "axios";


import { UserContext } from "./UserContext";
import { useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";

function Query(){


    const navigate = useNavigate();
    
    const [query, setQuery] = useState("");
    const [mydata, setData] = useState([]);
    const {u_send_querydata_everywhere, setSendQueryDataEverywhere} = useContext(UserContext);

    function handleQueryChange(event){
        setQuery(event.target.value);
    }

    function handleSubmitQuery(event){
        event.preventDefault();

        axios.post("http://localhost:3001/api/query", {query})
            .then(function(response){
                setData(response.data.organic_results); 
                setSendQueryDataEverywhere(response.data.organic_results); 
            });


        navigate("/queryresults")    
    }






    return(
        <div>
             <NavBar/>
            <div className="container-fluid con-query">

                <form className="search-form" onSubmit={handleSubmitQuery}>
                    <div className="search-div">
                        <input type="text" placeholder="Search" className="my-query" onChange={handleQueryChange}></input>
                        <button type="submit" className="searh-btn"><i className="fa-solid fa-magnifying-glass color-mag-glass"></i></button>
                        <h2 className="peer-search-engine"><span>Peer Review Search Engine</span></h2>
                        <label className="peer-q">Search for articles by category. i.e Biology, Mathematics ...</label>
                    </div>
                </form>

           
              
             
               

               
            </div>

        </div>
       
    );
}

export default Query;