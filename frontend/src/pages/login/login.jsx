import React from 'react'
import './login.css'

function Login() {
    return (
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Facebook</h3>
                    <span className="logindesc">
                        Connect with friends and the world around you on facebook.
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input type="email" className="logininput" />
                        <input type="password" className="logininput" />
                        <button className="loginbutton">Log In</button>
                        <span className="loginforgot">Forgot Password?</span>
                        <button className="loginregisterbutton">Create a New Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login
