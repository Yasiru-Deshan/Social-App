import React from 'react'
import Posts from '../posts/posts'
import Share from '../share/share'
import './feed.css'

function Feed() {
    return (
        <div className="feed">
            <div className="feedwrapper">
                <Share/>
                <Posts/>
            </div>
        </div>
    )
}

export default Feed
