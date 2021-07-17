import React from 'react';
import './sidebar.css';
import { RssFeed,Chat,PlayCircleFilledOutlined,Group,Bookmark } from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar"> 
            <div className="sidebarwrapper">
                <ul className="sidebarlist">
                    <li className="sidebarlistitem">
                       <RssFeed className="sidebaricon"/>
                       <span className="sidebarlistitemtext">Feed</span>
                    </li>

                    <li className="sidebarlistitem">
                       <Chat className="sidebaricon"/>
                       <span className="sidebarlistitemtext">Chats</span>
                    </li>

                    <li className="sidebarlistitem">
                       <PlayCircleFilledOutlined className="sidebaricon"/>
                       <span className="sidebarlistitemtext">Videos</span>
                    </li>

                    <li className="sidebarlistitem">
                       <Group className="sidebaricon"/>
                       <span className="sidebarlistitemtext">Groups</span>
                    </li>

                    <li className="sidebarlistitem">
                       <Bookmark className="sidebaricon"/>
                       <span className="sidebarlistitemtext">Bookmarks</span>
                    </li>
                </ul>


            <button className="sidebarbutton">Show More</button>
              <hr className="sidebarhr"/>
                <ul className="sidebarfriendlist">
                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                     <li className="sidebarfriend">
                         <img className="sidebarfriendimg" src="/assets/2.jpg" alt=""/>
                         <span className="sidebarfriendname">Louis Tomillson</span>
                     </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar;
