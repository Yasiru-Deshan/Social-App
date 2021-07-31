import React from 'react';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/topbar';
import "./profile.css";
import { useEffect,useState } from "react";
import axios from 'axios';
import { useParams} from "react-router";

function Profile() {


    const [user,setUser] = useState({});

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const username = useParams().username;
   

    useEffect(()=>{

        const fetchUser = async () =>{
           const res = await axios.get(`/users?username=${username}`);
           setUser(res.data);
        }
    
           
           fetchUser();
    },[]);  


    return (
        <div>
            <Topbar/>
               <div className="profile">
                  <Sidebar/>

                  <div className="profileright">
                      <div className="profilerighttop">

                         <div className="profilecover">

                           <img className="profilecoverimg" 
                                src={user.coverPicture || PF+"4.jpg"}
                                alt=""/>
                           <img className="profileuserimg"
                                src={user.profilePicture || PF+"noprofile.png"}
                                alt=""/>

                         </div>         

                         <div className="profileinfo">
                             <h4 className="profileinfoname">{user.username}</h4>
                             <span className="profileinfodesc">{user.desc}</span>
                         </div>                
                      </div>
                      <div className="profilerightbottom">
                  
                  <Feed username={username}/>
                  <Rightbar user={user}/>
                  </div>
                  </div> 
                </div>
            
        </div>
    )
}

export default Profile