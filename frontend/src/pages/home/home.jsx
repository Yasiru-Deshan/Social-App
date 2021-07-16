import React from 'react';
import Feed from '../../components/feed/feed';
import Rightbar from '../../components/rightbar/rightbar';
import Sidebar from '../../components/sidebar/sidebar';
import Topbar from '../../components/topbar';
import "./home.css"

function home() {
    return (
        <div>
            <Topbar/>
               <div className="homeContainer">
                  <Sidebar/>
                  <Feed/>
                  <Rightbar/>
                </div>
               
        </div>
    )
}

export default home;