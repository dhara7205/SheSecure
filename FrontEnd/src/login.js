// // import React from 'react';
// // import './login.css';
// // import axios from 'axios';
// // import { useRef } from 'react';
// // import process from 'process';

// // const Login = () => {
// //     const handleLogin = async (e) => {
// //         e.preventDefault();
    
// //         // Get input values from state or refs, not the entire form
// //         const formData = {
// //             email: email,   // Get the input value directly
// //             password: password,
// //         };
    
// //         try {
// //             const response = await axios.post('http://localhost:5000/login', formData);
// //             console.log(response.data); 
// //         } catch (err) {
// //             console.error(err);
// //         }
// //     };
// //     const email = useRef();
// //     const password = useRef();
// //     return(
// //         <div className="container">
// //             <div className="box">
// //                 <h1>Login</h1>
// //                 <form className='grid-container' onSubmit={handleLogin}>
// //                     <label>Email ID:</label>
// //                     <input type="email" name="email" placeholder="Enter your email" ref={email} />
// //                     <label>Password:</label>
// //                     <input type="password" name="password" placeholder="Enter your password" ref={password}/>
// //                     <button type="submit">submit</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';
// import process from 'process';  // Import process if needed

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const handleLogin = async (e) => {
//         e.preventDefault();

//         // Construct the formData object with only relevant values
//         const formData = {
//             email_id : email,
//             password
//         };

//         try {
//             const response = await axios.post('http://localhost:5000/login', formData);
//             if(response.data.message == "Login successful"){
//             navigate('/home');}
//             console.log(response.data);  // Handle the response as needed
//         } catch (err) {
//             console.error('Login failed:', err);
//         }
//     };

//     return (
//         // <form onSubmit={handleLogin}>
//         //     <input
//         //         type="email"
//         //         value={email}
//         //         onChange={(e) => setEmail(e.target.value)}
//         //         placeholder="Email"
//         //     />
//         //     <input
//         //         type="password"
//         //         value={password}
//         //         onChange={(e) => setPassword(e.target.value)}
//         //         placeholder="Password"
//         //     />
//         //     <button type="submit">Login</button>
//         // </form>

//         <div className="container">
//         //             <div className="box">
//         //                 <h1>Login</h1>
//         //                 <form className='grid-container' onSubmit={handleLogin}>
//         //                     <label>Email ID:</label>
//         //                     <input type="email" name="email" placeholder="Enter your email" ref={email} />
//         //                     <label>Password:</label>
//         //                     <input type="password" name="password" placeholder="Enter your password" ref={password}/>
//         //                     <button type="submit">submit</button>
//         //                 </form>
//         //             </div>
//         //         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import "./login.css";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = {
            email_id : email,
            password
        };

        try {
            const response = await axios.post('http://localhost:5000/login', formData);
            if(response.data.message == "Login successful"){
            navigate('/home');}
            console.log(response.data); 
        } catch (err) {
            console.error('Login failed:', err);
        }
    };

    return (
        <div className="container">
                    <div className="box">
                        <h1>Login</h1>
                        <form className='grid-container' onSubmit={handleLogin}>
                            <label>Email ID:</label>
                            <input type="email" name="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                            <label>Password:</label>
                            <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
                            <button type="submit">submit</button>

                            <span className='signup'>
                                <Link to="/signup">Sign up</Link>
                            </span>
                        </form>
                    </div>
                </div>

    );
};

export default Login;