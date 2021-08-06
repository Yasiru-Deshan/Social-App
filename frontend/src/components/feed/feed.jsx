import React, { useContext } from 'react'
import Posts from '../posts/posts'
import Share from '../share/share'
import './feed.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../../context/authcontext';

function Feed({username}) {

    const [posts,setPosts] = useState([]);
    const {user} = useContext(AuthContext)

    useEffect(()=>{

        const fetchPosts = async () =>{
           const res = username 
            ? await axios.get('/posts/profile/'+ username)
            : await axios.get('posts/timeline/'+ user._id);
           setPosts(res.data);
        }
    
           
           fetchPosts();
    },[username,user._id]);  



    return (
        <div className="feed">
            <div className="feedwrapper">
                <Share/>
                {posts.map((p)=>(
                    <Posts 
                     key={p.id} 
                     post={p}/>
                ))}
            </div>
        </div>
    )
}

export default Feed
