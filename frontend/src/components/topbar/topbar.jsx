import React, { useContext } from 'react';
import "./topbar.css";
import { Search,Person,Chat,Notifications } from "@material-ui/icons";
import { AuthContext } from '../../context/authcontext';
import { Link } from "react-router-dom";

function Topbar() {

    const { user } = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return (
        <div className="topbarContainer">

            <div className="topbarLeft">
                <span className = "logo">Facebook</span>
            </div>


            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search" className="searchinput"/>
                </div>
            </div>


            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home Page</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbaricons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbariconbadge">1</span>
                    </div>
                </div>

                <div className="topbaricons">
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbariconbadge">1</span>
                    </div>
                </div>

                <div className="topbaricons">
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbariconbadge">1</span>
                    </div>
                </div>
            
            <Link to={`/profile/${user.username}`}>
            <img src={ 
                user.profilePicture 
                ? PF + user.profilePicture 
                : PF + "noprofile.png" } 
                alt=""  
                className="topbarImg"/></Link>
            </div>
            
            
        </div>
    )
}

export default Topbar;
