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
    s_password: String
});    


const commentSchema = new mongoose.Schema({
    c_postid: String,
    c_posttitle: String,
    c_postlink: String,
    c_email_logged_in: String,
    // c_heading: String,
    c_comment: String,
    c_date: String,
    c_time: String
});


const Peer = mongoose.model("Peer", signupSchema);
const Comment = mongoose.model("Comment", commentSchema);




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

app.post("/api/signup", function(req, res){
    let {s_name, s_surname, s_email, s_password} = req.body;

    Peer.find({s_emailaddress: s_email}).then(
        function(result){
            if(result.length === 0){
                const user = new Peer({
                    s_name: s_name,
                    s_surname: s_surname,
                    s_emailaddress: s_email,
                    s_password: s_password
                })

                user.save();
                res.json("Success - User Added.");
            }else{
                res.json("Fail - Email Exists.");

            }
        }
    )
});


app.post("/api/signin", function(req, res){
    let {si_email, si_password} = req.body;

    Peer.find({s_emailaddress: si_email, s_password: si_password}).then(
        function(result){
            if(result.length !== 0){
                res.json("Success - Logged-In.");
            }else{
                res.json("Fail - Try again.");

            }
        }
    )
});

app.post("/api/createcomment", function(req, res){
    let  {the_id_post, the_title_post, the_link_post, u_send_loginemail, mycomments, mydate, mytime } = req.body;
    const mycomment = new Comment({
        c_postid: the_id_post,
        c_posttitle: the_title_post,
        c_postlink: the_link_post,
        c_email_logged_in: u_send_loginemail,
        // c_heading: heading,
        c_comment: mycomments,
        c_date: mydate,
        c_time: mytime
    });

    mycomment.save();
    res.send("Success - Comment added");
});



app.post("/api/getcomments", function(req, res){
    let {the_id_post, the_title_post, the_link_post} = req.body;
    Comment.find({c_postid: the_id_post, c_posttitle: the_title_post, c_postlink: the_link_post}).then(function(result){
            res.json(result);
        }
    );

});


// Listening to access on the port 3001 or as generated for us by deploying plartforms
const PORT = process.env.PORT || 3001;
app.listen(PORT, function(){
    console.log("Server running at port " + PORT);
});