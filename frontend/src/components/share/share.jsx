import React, { useContext } from 'react';
import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import { AuthContext } from '../../context/authcontext';

function Share() {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img className="shareprofileimg" src={user.profilePicture ? PF+user.profilePicture : PF+"noprofile.png"} alt=""/>
                    <input placeholder="What's on your mind" 
                           type="text" 
                           className="shareinput"/>
                </div>

                <hr className="sharehr"/>
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">

                        <PermMedia htmlColor="tomato" className="shareicon"/>   
                            <span className="shareoptiontext">Photo or Video</span>
                               
                       
                        </div>

                        <div className="shareoption">

                        <Label htmlColor="blue" className="shareicon"/>   
                            <span className="shareoptiontext">Tag</span>
                               
                       
                        </div>

                        <div className="shareoption">

                        <Room htmlColor="green" className="shareicon"/>   
                            <span className="shareoptiontext">Location</span>
                               
                       
                        </div>

                        <div className="shareoption">

                        <EmojiEmotions htmlColor="goldenrod" className="shareicon"/>   
                            <span className="shareoptiontext">Feelings</span>
                               
                       
                        </div>
                    </div>

                    <button className="sharebutton">Share</button> 
                </div>
            </div>
            
        </div>
    )
}

export default Share;
