import React from "react";
import { ReactDOM } from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Query from "./Query";
import QueryResults from "./QueryResults";


import { UserContext } from "./UserContext";
import { useState } from "react";


function App(){


    const [u_send_querydata_everywhere, setSendQueryDataEverywhere] = useState([]);


    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                    <Route path={"/signin"} element={<Signin/>}/>
                </Routes>


                <UserContext.Provider value={{u_send_querydata_everywhere, setSendQueryDataEverywhere}}>
                    <Routes>
                      <Route path={"/query"} element={<Query/>}/>
                      <Route path={"/queryresults"} element={<QueryResults/>}/>
                    </Routes>

                </UserContext.Provider>

            </BrowserRouter>    

        </div>
    );
}

export default App;