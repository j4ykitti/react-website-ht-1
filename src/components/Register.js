import React from "react";
import "./Register.css"
import { Link } from "react-router-dom";


const RegisterForm = () =>{
    return (
        <div className="cover">
            <h1>Register</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <input type="con-password" placeholder="confirm password" />
            
            <div className="register-btn">
                Register
                </div>
            
              
        </div>
    )
}

export default RegisterForm