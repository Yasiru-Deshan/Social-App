import React from 'react';
import "./posts.css";
import { MoreVert} from "@material-ui/icons";

function Posts() {
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">

                    <div className="posttopleft">

                        <img src="/assets/1.jpg" className="postprofileimg" alt=""/>
                        <span className="postusername">Yasiru Deshan</span>
                        <span className="postdate">5 minutes ago</span>
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
