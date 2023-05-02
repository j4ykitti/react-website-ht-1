import React from "react";
import "./Register.css"
import { Link } from "react-router-dom";


const RegisterForm = () =>{
    return (
        <div className="cover">
            <h1>Register</h1>
            <div className="box">
            <input type="text" placeholder="username" />
            </div>
            
            <div className="box">
            <input type="password" placeholder="password" />
            </div>
            
            <div className="box">
            <input type="con-password" placeholder="confirm password" />
            </div>
            
            <div className="box">
            <input type="user-email" placeholder="email" />
            </div>
            
            <div className="box">
            <input type="user-phone" placeholder="phone" />
            </div>
            
            <div className="register-btn">
                Register
                </div>
                <Link to='/sign-up' >
              <p>
                  Login
              </p>
              </Link>
              
            
              
        </div>
    )
}

export default RegisterForm