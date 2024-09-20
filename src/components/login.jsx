import React, { useState } from "react";
import "./login.css"; // Importing the CSS file for styling\
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();     

    // Here you can add your authentication logic
    if (username === "" && password === "") {
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } else {
      alert("Invalid username or password");
    }
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>
          <u>LOGIN</u>
        </h2>     
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="input-group">
            <input 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="login-button" >
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <a href="#" onClick={goToSignup}>
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
