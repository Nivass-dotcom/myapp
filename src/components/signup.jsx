import React, { useState } from "react";
import "./signup.css"; // Importing the CSS file for styling
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h2><u>Sign Up</u></h2>
        <form>
          <div className="input-group">
            <input type="text" placeholder="First Name" />
          </div>
          <div className="input-group">
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Confirm Password" />
          </div>
          <button type="submit" onClick={goToLogin} className="signup-button">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
