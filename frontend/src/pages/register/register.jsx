import axios from 'axios';
import React,{ useRef} from 'react'
import { useHistory } from 'react-router-dom';
import './register.css';


function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const password2 = useRef();
    const history = useHistory();

    const handleClick = async (e)=>{
        e.preventDefault();

        if(password2.current.value !== password.current.value){
            password2.current.setCustomValidity("Passwords don't match");
        }else{
            const user = 
            {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,

            }
           try{
            await axios.post("/auth/register", user);
            history.push('/login');

           }catch(err){
                 console.log(err)
           }
        }
    }


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
                    <form className="loginbox" onSubmit={handleClick}>
                        <input type="text" placeholder="Username" required ref={username} className="logininput" />  
                        <input type="email" placeholder="Email" required ref={email} className="logininput" />
                        <input type="password" placeholder="Password" required ref={password} className="logininput" minLength="6"/>
                        <input type="password" placeholder="Re-enter password" required ref={password2} className="logininput" />
                        
                        <button className="loginbutton" type="submit">Sign Up</button>
                        <button className="loginregisterbutton">Log into Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register
