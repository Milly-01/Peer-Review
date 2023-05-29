//Requiring necessary node modules from the node package manager, including the dotenv for storing sensetive information
require("dotenv").config();
const express = require("express");
const SerpApi = require("google-search-results-nodejs");



/////////////////////////
const cors = require("cors");
const axios = require("axios");


//////////////////////////
const bodyParser = require("body-parser");

// New
const mongoose = require("mongoose");



mongoose.connect(process.env.MONGOATLASS, {useNewUrlParser: true})
    .then(function(result){
        console.log("Connected to database");
    })
    .catch(function(error){
        console.log(error);
    })



const signupSchema = new mongoose.Schema({
    s_name: String,
    s_surname: String,
    s_emailaddress: String,
    s_password: String,
    s_occupation: String
});    


const Peer = mongoose.model("Peer", signupSchema);




// New





// Creating express app
const app = express();
app.use(express.json());

// Enabling reading of data from from frontend forms during requests
app.use(bodyParser.urlencoded({extended: true}));

// Store all out backend static files, i.e css, images ...
app.use(express.static("public"));



// Substitute for cors
app.use(function(req, res, next){
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "*");
    res.set("Access-Control-Allow-Methods", "*");
    res.set("x-requested-with", "XMLHttpRequest");
    res.set("Access-Control-Expose-Headers","Content-Encoding,api_key");
    res.set("origin","http://localhost:3000");
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    next();
});



//Query using input from frontend
app.post("/api/query", function(req, res){
    let {query} = req.body;
    axios.get(`https://serpapi.com/search.json?engine=google_scholar&q=${query}&api_key=${process.env.SCHOLARAPIKEY}`)
        .then(function (response) {
            res.send(response.data);
        })
        .catch(function (error) {
            res.send(error.response.data);
        });
});



// Listening to access on the port 3001 or as generated for us by deploying plartforms
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log("Server running at port " + PORT);
});