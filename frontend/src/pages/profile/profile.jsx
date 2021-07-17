import React from 'react';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar/topbar';
import "./profile.css"

function Profile() {
    return (
        <div>
            <Topbar/>
               <div className="profile">
                  <Sidebar/>

                  <div className="profileright">
                      <div className="profilerighttop">

                         <div className="profilecover">

                           <img className="profilecoverimg" src="assets/4.jpg" alt=""/>
                           <img className="profileuserimg" src="assets/1.jpg" alt=""/>

                         </div>         

                         <div className="profileinfo">
                             <h4 className="profileinfoname">Yasiru Deshan</h4>
                             <span className="profileinfodesc">Hello there!</span>
                         </div>                
                      </div>
                      <div className="profilerightbottom">
                  
                  <Feed/>
                  <Rightbar profile/>
                  </div>
                  </div> 
                </div>
            
        </div>
    )
}

export default Profile