import React from 'react';
import "./posts.css";
import { MoreVert} from "@material-ui/icons";
import { useEffect,useState } from "react";
import axios from 'axios';
import { format} from "timeago.js";

function Posts({post}) {

    const [user,setUser] = useState({});
    const [like,setlike] = useState(post.likes.length);
    const [isliked,setisLiked] = useState(false);

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
 
    const likehandler=()=>{
        setlike(isliked ? like-1 : like+1);
        setisLiked(!isliked);
    }

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

                        <img src={user.profilePicture || PF+"noprofile.png"} 
                             className="postprofileimg" 
                             alt=""/>
                        <span className="postusername">
                            {user.username}
                        </span>
                        <span className="postdate">{format(post.createdAt)}</span>
                    </div>
                    <div className="posttopright">

                        <MoreVert/>
                    </div>
                </div>
                <div className="postcenter">

                    <span className="postText">{post.desc}</span>
                    <img className="postimg" 
                         src="assets/3.jpg" alt=""/>
                </div>

                <div className="postbottom">
                    <div className="postbottomleft">
                        <img className="likeicon" src="assets/likes.jpg" onClick={likehandler} alt=""/>
                        <img className="hearticon" src="assets/heart.jpg" onClick={likehandler}alt=""/>
                        <img className="loveicon" src="assets/loves.jpg" onClick={likehandler} alt=""/>
                        <span className="postlikecounter">{like} people liked this</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Posts
