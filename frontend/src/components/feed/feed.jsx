import React from 'react'
import Posts from '../posts/posts'
import Share from '../share/share'
import './feed.css';
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{

        const fetchPosts = async () =>{
           const res = await axios.get('posts/timeline/60e1e4eb0ee0b010ecafa80b');
           setPosts(res.data);
        }
    
           
           fetchPosts();
    },[]);  



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
