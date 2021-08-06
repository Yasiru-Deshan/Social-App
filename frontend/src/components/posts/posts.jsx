import React from 'react';
import "./posts.css";
import { MoreVert} from "@material-ui/icons";
import { useEffect,useState } from "react";
import axios from 'axios';
import { format} from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/authcontext';
import { useContext } from 'react';

function Posts({post}) {

    const [user,setUser] = useState({});
    const [like,setlike] = useState(post.likes.length);
    const [isliked,setisLiked] = useState(false);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user:currentUser}= useContext(AuthContext);

    useEffect(()=>{
        setisLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])
 
    const likehandler=()=>{

        try{
            axios.put("/posts/"+post._id+'/like',{userId:currentUser._id})
        }catch(err){}

        setlike(isliked ? like-1 : like+1);
        setisLiked(!isliked);
    }
  
    useEffect(()=>{

        const fetchUser = async () =>{
           const res = await axios.get(`/users?userId=${post.userId}`);
           setUser(res.data);
        }
    
           
           fetchUser();
    },[post.userId]);  


     
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">

                    <div className="posttopleft">
                      <Link to={`profile/${user.username}`}>
                        <img src={user.profilePicture ? PF + user.profilePicture : PF+"noprofile.png"} 
                             className="postprofileimg" 
                             alt=""/>
                             </Link>
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
                         src={`${PF}3.jpg`}  alt=""/>
                </div>

                <div className="postbottom">
                    <div className="postbottomleft">
                        <img className="likeicon" src={`${PF}likes.jpg`} onClick={likehandler} alt=""/>
                        <img className="hearticon" src={`${PF}heart.jpg`}  onClick={likehandler}alt=""/>
                        <img className="loveicon" src={`${PF}loves.jpg`}  onClick={likehandler} alt=""/>
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
