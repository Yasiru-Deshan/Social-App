import React, { useContext, useRef } from 'react'
import './login.css'
import {loginCall} from "../../apiCalls";
import {AuthContext} from "../../context/authcontext";
import {CircularProgress} from "@material-ui/core"

function Login() {

    const email = useRef();
    const password = useRef();
    const {user,isFetching, error, dispatch} = useContext(AuthContext); 


    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email:email.current.value,password:password.current.value}, dispatch)
    }



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
                    <form className="loginbox" onSubmit={handleClick}>
                        <input placeholder="Email"
                               type="email" 
                               required 
                               className="logininput" 
                               ref={email}/>
                        <input type="password"
                               required 
                               minLength="6"
                               className="logininput" 
                               ref={password} />
                        <button className="loginbutton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress 
                                          color="white"
                                          size="20px"/>: "Log In"}
                            </button>
                        <span className="loginforgot">Forgot Password?</span>
                        <button className="loginregisterbutton">Create a New Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Login
