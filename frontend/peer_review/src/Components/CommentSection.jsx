import React from "react";


import { useState, useEffect } from "react";
import "./CommentSection.css";


import { UserContext } from "./UserContext";
import { useContext } from "react";

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function CommentSection(props){


    const navigate = useNavigate();

    const {u_send_loginemail, setSendLoginEmail} = useContext(UserContext);

    const [comments, setComments] = useState([]);

    const [the_id_post, setThePostID] = useState("");
    const [the_title_post, setThePostTitle] = useState("");
    const [the_link_post, setThePostLink] = useState("");


    const [heading, setHeading] = useState("");
    const [mycomments, setMyComments] = useState([]);
    const [mydate, setDate] = useState("");
    const [mytime, setTime] = useState("");

    useEffect(()=>{
        setThePostID(props.postid);
        setThePostTitle(props.posttitle);
        setThePostLink(props.postlink);
        axios.post("http://localhost:3001/api/getcomments", {the_id_post, the_title_post, the_link_post})
            .then(function(results){
                setComments(results.data);
            });

  
    });


    // function handleChangeHeading(event){
    //     setHeading(event.target.value);
    //     // setThePostID(props.postid);
    //     // setThePostTitle(props.posttitle);
    //     // setThePostLink(props.postlink);
    //     var today = new Date();
    //     var options = {
    //         weekday: "long",
    //         day: "numeric",
    //         month: "long"
    //     }
    //     var day = today.toLocaleDateString("en-US", options);
    //     setDate(day);

    //     var now = today.toLocaleTimeString();
    //     setTime(now);
    // }

    function handleChangeComment(event){
        setMyComments(event.target.value);
        var today = new Date();
        var options = {
            weekday: "long",
            day: "numeric",
            month: "long"
        }
        var day = today.toLocaleDateString("en-US", options);
        setDate(day);

        var now = today.toLocaleTimeString();
        setTime(now);
    }

    function handleSubmitComment(event){
        if(u_send_loginemail === ""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You must logging first in order to create a comment.',
            })

            navigate("/signin");

        }else{

            event.preventDefault();

                    

            axios.post("http://localhost:3001/api/createcomment", {the_id_post, the_title_post, the_link_post, u_send_loginemail, mycomments, mydate, mytime })
                .then(function(response){
                    if(response.data === "Success - Comment added"){
                        Swal.fire(
                            'Good job!',
                            'You have added a comment.',
                            'success'
                        )
                    }

                });



        }

     
    }


    return(
        <div className="container-fluid">


            <h5>Comments</h5>
            {
                comments.map(comment => (
                    <div className="my-comments">
                        <div className="comment-blocks">
                            <label className="my-labels-2 posted-by"><span className="my-span">posted By</span> : {comment.c_email_logged_in}</label>
                            {/* <label className="my-labels-2 the-heading">{comment.c_heading}</label> */}
                            <p className="my-p">{comment.c_comment}</p>
                            <label className="my-labels-3">{comment.c_time}</label>
                            <label className="my-labels-3 my-date">{comment.c_date}</label>

                        </div>
                       
                    </div>
             
                ))
               
            }




            <h5 className="my-comment-h">Write a comment</h5>
            <div className="my-comment-section">
                <form onSubmit={handleSubmitComment}>
                    {/* <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Heading</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" onChange={handleChangeHeading}/>
                    </div> */}

                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Enter Comment</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleChangeComment}></textarea>
                    </div>

                    <button id="callmesubmit" type="submit" className="btn btn-success">Submit Comment</button>

                </form>
                

               

                
             </div>

        </div>
        
    )
}


export default CommentSection;