import React from "react";
import { ReactDOM } from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Query from "./Query";
import QueryResults from "./QueryResults";
import QueryInDetails from "./QueryInDetails";
import CommentSection from "./CommentSection";
import NavBar from "./NavBar";


import { UserContext } from "./UserContext";
import { useState } from "react";
import { useEffect } from "react";



///////////////////////////////////////////////////////////////////////////////////////////
const getStoredData = () => {
    const data = localStorage.getItem("u_send_querydata_everywhere");
    if(data){
         return JSON.parse(data);
    }else{
        return [];
    }

}
///////////////////////////////////////////////////////////////////////////////////////////////



function App(){


    const [u_send_querydata_everywhere, setSendQueryDataEverywhere] = useState(getStoredData());
    const [u_send_loginemail, setSendLoginEmail] = useState("");

    //  useEffect(()=>{
    //     const data = localStorage.getItem("u_send_querydata_everywhere");
    //     if(data){
    //         setSendQueryDataEverywhere(JSON.parse(data));
    //     }
    // },[])

         

 
    useEffect(()=>{
        localStorage.setItem("u_send_querydata_everywhere", JSON.stringify(u_send_querydata_everywhere));
    },[u_send_querydata_everywhere]);


     // Login Email Address made available to every page after login in using User Context
     useEffect(()=>{
        const data = localStorage.getItem("u_send_loginemail");
            if(data){
                setSendLoginEmail(data);
            }
         },[])
  
       useEffect(()=>{
        localStorage.setItem("u_send_loginemail", u_send_loginemail);
         },[u_send_loginemail]);
      // Login Email Address made available to every page after login in using User Context



 



 
    return(
        <div>
            <BrowserRouter>
          
                <UserContext.Provider value={{u_send_querydata_everywhere, setSendQueryDataEverywhere, u_send_loginemail, setSendLoginEmail}}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                        <Route path={"/signup"} element={<Signup/>}/>
                        <Route path={"/signin"} element={<Signin/>}/>
                        <Route path={"/query"} element={<Query/>}/>
                        <Route path={"/queryresults"} element={<QueryResults/>}/>
                        <Route path={"/queryindetails"} element={<QueryInDetails/>}/>
                        <Route path={"/commentsection"} element={<CommentSection/>}/>
                        <Route path={"/navbar"} element={<NavBar/>}/>
                    </Routes>

                </UserContext.Provider>

            </BrowserRouter>    

        </div>
    );
}

export default App;