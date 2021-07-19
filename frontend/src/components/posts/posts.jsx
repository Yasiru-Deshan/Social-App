import React from 'react';
import "./posts.css";
import { MoreVert} from "@material-ui/icons";
import { useEffect,useState } from "react";
import axios from 'axios';

function Posts({post}) {

    const [user,setUser] = useState({});

    useEffect(()=>{

        const fetchUser = async () =>{
           const res = await axios.get(`users/${post.userId}`);
           setUser(res.data);
        }
    
           
           fetchUser();
    },[]);  


     
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">

                    <div className="posttopleft">

                        <img src={user.profilePicture} className="postprofileimg" alt=""/>
                        <span className="postusername">
                            {user.username}
                        </span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">

                        <MoreVert/>
                    </div>
                </div>
                <div className="postcenter">

                    <span className="postText">Hey it's my 1st post</span>
                    <img className="postimg" src="assets/3.jpg" alt=""/>
                </div>

                <div className="postbottom">
                    <div className="postbottomleft">
                        <img className="likeicon" src="assets/likes.jpg" alt=""/>
                        <img className="hearticon" src="assets/heart.jpg" alt=""/>
                        <img className="loveicon" src="assets/loves.jpg" alt=""/>
                        <span className="postlikecounter">32 people liked this</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">9 comments</span>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Posts
