import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [zip_code, setZip_code] = useState("");
  const [password, setPassword] = useState("");
  const [device_type, setDevice_type] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!email || !password || !first_name || !last_name || !username || !zip_code || !phone || !device_type) {
      alert("All fields are required!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://134.209.229.112:8080/api/users/register_web", {
        email,
        password,
        first_name,
        last_name,
        username,
        zip_code,
        phone,
        device_type,
      });

      if (response.data.success) {
        alert("Account Created Successfully!");
        console.log("response",response);
        
        navigate("/login");
      } else {
        alert(response.data.message || "Something went wrong!");
      }
      return response.data.statuscode === false;
    } catch (error) {
      console.error("Error during signup:", error.message);
      alert("Error during signup. Please try again.");
      console.error("Error checking email:", error.message);
      alert("An error occurred while checking the email.");
      return false;
    }
  };

  return (
    <div className="main_container_signup">
      <div className="header">
        <h2>Registration</h2>
      </div>
      <form onSubmit={submit}>
        <div className="box">
          <input
            type="text"
            value={first_name}
            placeholder="First Name"
            onChange={(e) => setFirst_name(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={last_name}
            placeholder="Last Name"
            onChange={(e) => setLast_name(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
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
            type="tel"
            value={phone}
            placeholder="Mobile Number"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="text"
            value={zip_code}
            placeholder="Zip Code"
            onChange={(e) => setZip_code(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="box">
          <input
            type="password"
            value={device_type}
            placeholder="device type"
            onChange={(e) => setDevice_type(e.target.value)}
          />
        </div>
        <p>
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
