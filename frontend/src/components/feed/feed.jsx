import React from 'react'
import Posts from '../posts/posts'
import Share from '../share/share'
import './feed.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Feed({username}) {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        const fetchPosts = async () =>{
           const res = username 
            ? await axios.get('/posts/profile/'+ username)
            : await axios.get('posts/timeline/60dac2fe1eccfb27d8e1c774');
           setPosts(res.data);
        }
    
           
           fetchPosts();
    },[username]);  



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
