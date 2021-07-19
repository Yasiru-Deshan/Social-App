import React from 'react'
import './register.css'

function Register() {
    return (
        <div className="register">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Facebook</h3>
                    <span className="logindesc">
                        Connect with friends and the world around you on facebook.
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input type="text" placeholder="Username" className="logininput" />  
                        <input type="email" placeholder="Email" className="logininput" />
                        <input type="password" placeholder="Password" className="logininput" />
                        <input type="password" placeholder="Re-enter password" className="logininput" />
                        
                        <button className="loginbutton">Sign Up</button>
                        <button className="loginregisterbutton">Log into Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Register
