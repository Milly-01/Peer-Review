//Requiring necessary node modules from the node package manager, including the dotenv for storing sensetive information
require("dotenv").config();
const express = require("express");
const SerpApi = require("google-search-results-nodejs");
const cors = require("cors");
const bodyParser = require("body-parser");



// Creating express app
const app = express();
app.use(express.json());

// Enabling reading of data from from frontend forms during requests
app.use(bodyParser.urlencoded({extended: true}));

// Store all out backend static files, i.e css, images ...
app.use(express.static("public"));

// Setting who can access backend, in this case only our frontend react can access backend since its origin is localhost 3000
app.use(cors({
     credentials: true,
     origin: "http://localhost:3000"
}));



// Serpi API data fetching, q should be a filter from user, but we will fix it
const search = new SerpApi.GoogleSearch(process.env.SCHOLARAPIKEY);
const params = {
  engine: "google_scholar",
  q: "biology"
};



// Show result as JSON
let json_data;
search.json(params, function(data){
    json_data = data.organic_results; 
});


// Home get request
app.get("/", function(req, res){
    res.send(json_data);
});


// Listening to access on the port 3001 or as generated for us by deploying plartforms
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log("Server running at port " + PORT);
});