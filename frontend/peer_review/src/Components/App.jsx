import React from "react";
import { ReactDOM } from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Query from "./Query";


function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/signup"} element={<Signup/>}/>
                    <Route path={"/signin"} element={<Signin/>}/>
                    <Route path={"/query"} element={<Query/>}/>
                </Routes>
            </BrowserRouter>    

        </div>
    );
}

export default App;