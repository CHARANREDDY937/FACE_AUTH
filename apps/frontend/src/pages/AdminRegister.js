import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import { API_CONFIG, buildApiUrl } from "../config/api";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(buildApiUrl(API_CONFIG.authApiUrl, "/register"), formData);
      alert(response.data.message);
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Error registering user.");
    }
  };

  return (
    <div className="register-container">
      {error && <p className="error-message">{error}</p>}
      <div className="register-box">
        <h2>Register</h2>
        <div className="form-field">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Enter username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-field">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
      <p className="para">
        Already have an account?{" "}
        <span className="login-link" onClick={() => navigate("/admin")}>
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
