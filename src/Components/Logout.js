import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css';

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("https://134.209.229.112:8080.com/api/users/profile?id=");

            localStorage.removeItem('userToken'); 
            alert("Logged out successfully");
            navigate('/');
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className="main_container_signup">
            <div className="header">
                <h2>Profile</h2>
                <h4 style={{textAlign: 'center'}}>Welcome to the Profile Page!</h4>
            </div>
            <button onClick={handleLogout}>Logout</button>
            <p>Go back to <Link to="/login">Login</Link> page</p>
        </div>
    );
};

export default Logout;
