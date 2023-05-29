import React from "react";
import { ReactDOM } from "react";


import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";

import NavBar from "./NavBar";

import "./QueryResults.css";

function QueryResults(){

    const {u_send_querydata_everywhere, setSendQueryDataEverywhere} = useContext(UserContext);



    return(
        <div>
            <NavBar/>
           
            <div className="container-fluid">
                <div className="my-elements">
                    {
                        u_send_querydata_everywhere.map(querydata => (
                            <div className="my-boxes">
                                <h4>{querydata.title}</h4>
                                <p>{querydata.snippet}</p>
                                {/* <a href={querydata.link}>click to read more on external link</a> */}
                                <button>View in detail</button>
                            </div>
                        ))
                    }


                </div>

            </div>
            
        </div>
    );
}

export default QueryResults;