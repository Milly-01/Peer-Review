import React from "react";
import { ReactDOM } from "react";


import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";

import "./QueryResults.css";

function QueryResults(){

    const {u_send_querydata_everywhere, setSendQueryDataEverywhere} = useContext(UserContext);

    const navigate = useNavigate();


    return(
        <div>
            <NavBar/>
           
            <div className="container-fluid">
                <div className="my-elements">
                    {
                        u_send_querydata_everywhere.map(querydata => (
                            <div className="my-boxes">
                                <h4 className="query-title">{querydata.title}</h4>
                                <p className="p-snippet">{querydata.snippet}</p>
                                {/* <a href={querydata.link}>click to read more on external link</a> */}
                                <button className="btn btn-primary detail-btn" onClick={function (){
                                    navigate("/queryindetails", {
                                        state: {
                                            // q_pos: querydata.position,
                                            q_tit: querydata.title,
                                            q_res_id: querydata.result_id,
                                            q_link: querydata.link,
                                            q_snip: querydata.snippet
                                            // q_pub_sum: querydata.publication_info
                                    
                                        }
                                     })
                                }}>View in detail</button>
                            </div>
                        ))
                    }


                </div>

            </div>
            
        </div>
    );
}

export default QueryResults;