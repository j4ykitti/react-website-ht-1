import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";


const LoginForm = () =>{
    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            
            <div className="login-btn">
                Login
                </div>
            
            <Link to='/register' >
              <p>
                  register
              </p>
              </Link>
              
        </div>
    )
}

export default LoginForm