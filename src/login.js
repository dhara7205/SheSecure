import React from 'react';
import './login.css';

const Login = () => {
    return(
        <div className="container">
            <div className="box">
                <h1>Login</h1>
                <form className='grid-container'>
                    <label>Email ID:</label>
                    <input type="email" name="email" placeholder="Enter your email" />
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                </form>
            </div>
        </div>
    );
};

export default Login;