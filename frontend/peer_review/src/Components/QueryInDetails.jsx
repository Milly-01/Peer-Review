import React from "react";
import { ReactDOM } from "react";

import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import { useState } from "react";

import NavBar from "./NavBar";

import "./QueryInDetails.css";

function QueryInDetails(){

    const location = useLocation();
    // const [loc_pos, setPosition] = useState(0);
    const [loc_tit, setTitle] = useState("");
    const [loc_res_id, setResID] = useState("");
    const [loc_link, setLink] = useState("");
    const [loc_snip, setSnippet] = useState("");
    // const [loc_pub_sum, setPubSum] = useState();


    useEffect(function(){
        // setPosition(location.state.q_pos);
        setTitle(location.state.q_tit);
        setResID(location.state.q_res_id);
        setLink(location.state.q_link);
        setSnippet(location.state.q_snip);
        // setPubSum(location.state.q_pub_sum);
   
    },[]); 


    return(
        <div>
            <NavBar/>
            <div className="container-fluid">
                <div className="query-in-detail">
                    <h4 className="loc-title">{loc_tit}</h4>
                    <p className="loc-snippet">{loc_snip}</p>
                    <a href={loc_link} className="loc-external-link">Click here to read external full link. When you are done, feel free to leave a comment or review bellow</a>
                    <div className="my-btns2">
                        <button className="btn btn-primary the-btn2">Comment</button>
                        <button className="btn btn-success the-btn2">Review</button>
                    </div>
                    
                </div>
                <hr></hr>
            </div>
        </div>
       
    );
}

export default QueryInDetails;