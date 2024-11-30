import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';  
import axios from 'axios';
import './signup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://134.209.229.112:8080.com/api/users/login", { email, password: pass });

            if (response.data.success) {
                alert("Login Successfully");
                navigate('/Logout'); 
            } else {
                alert(response.data.message || "Login failed");
            }
        } catch (error) {
            alert("Error logging in. Please try again.");
        }
    };

    return (
        <div className="main_container_signup">
            <div className="header">
                <h2>Login</h2>
            </div>
            <div className="box">
                <input 
                    type="email" 
                    value={email} 
                    placeholder="Email" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="box">
                <input 
                    type="password" 
                    value={pass} 
                    placeholder="Password" 
                    onChange={(e) => setPass(e.target.value)} 
                />
            </div>
            <p>Don't Have an Account? <Link to="/">Create Account</Link></p> 
            <button onClick={submit}>Login</button>
        </div>
    );
};

export default Login;
