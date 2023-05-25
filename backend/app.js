require("dotenv").config();
const express = require("express");
const SerpApi = require("google-search-results-nodejs");


const app = express();
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


app.get("/", function(req, res){
    res.send(json_data);
});

app.listen(3001, function(){
    console.log("Server running at port 3001");
});