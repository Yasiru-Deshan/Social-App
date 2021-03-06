import React from 'react';
import './rightbar.css'

function Rightbar({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const Homerightbar = () =>{


      return(
          <>
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


            
          </>
      )


    }

    const Profilerightbar = ()=>{

        return (
            <>
            <h4 className="rightbartitle">UserInformation</h4>
            <div className="rightbarinfo">
                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">City:</span>
                    <span className="rightbarinfovalue">{user.city}</span>
                </div>

                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">From:</span>
                    <span className="rightbarinfovalue">{user.from}</span>
                </div>

                <div className="rightbarinfoitem">
                    <span className="rightbarinfokey">Relationship:</span>
                    <span className="rightbarinfovalue">{user.relationship ===1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
                </div>
            </div>

            <h4 className="rightbartitle">Friends</h4>
               <div className="rightbarfollowings">
                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>

                   <div className="rightbarfollowing">
                       <img src={`${PF}2.jpg`} alt="" className="rightbarfollowingimg" />
                       <span className="rightbarfollowingname">Jason Roy</span>
                   </div>
               </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
               {user ? <Profilerightbar/>:<Homerightbar/>}
            </div>
        </div>
    )
}

export default Rightbar
