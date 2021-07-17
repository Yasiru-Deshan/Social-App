import React from 'react';
import './rightbar.css'

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
               <div className="birthdaycontainer">
                   <img className="birthdayimg" src="assets/gift.png" alt=""/>
                   <span className="birthdaytext">
                     <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                     </span>
               </div>
               <img className="rightbarad" src="assets/ad.jpg" alt=""/>
             <h4 className="rightbartitle">Active Now</h4>
              <ul className="rightbarfriendlist">
                  <li className="rightbarfriend">
                       <div className="rightbarprofileimgcontainer">
                           <img className="rightbarprofileimg"
                           src="assets/2.jpg"
                           alt= ""/>
                           <span className="rightbaronline"></span>
                       </div>
                       <span className="rightbarusername">Jason Roy</span>
                  </li>

                  <li className="rightbarfriend">
                       <div className="rightbarprofileimgcontainer">
                           <img className="rightbarprofileimg"
                           src="assets/2.jpg"
                           alt= ""/>
                           <span className="rightbaronline"></span>
                       </div>
                       <span className="rightbarusername">Jason Roy</span>
                  </li>

                  <li className="rightbarfriend">
                       <div className="rightbarprofileimgcontainer">
                           <img className="rightbarprofileimg"
                           src="assets/2.jpg"
                           alt= ""/>
                           <span className="rightbaronline"></span>
                       </div>
                       <span className="rightbarusername">Jason Roy</span>
                  </li>
              </ul>


            </div>

        </div>
    )
}

export default Rightbar
