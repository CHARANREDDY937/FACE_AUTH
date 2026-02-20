import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./User.css";
import { API_CONFIG, buildApiUrl } from "../config/api";

const User = () => {
  const [selectedPhase, setSelectedPhase] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSelect = (phase) => {
    setSelectedPhase(phase);
    setTimeout(() => setShowLogin(true), 500);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(buildApiUrl(API_CONFIG.userAuthApiUrl, "/login1"), {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);

      if (selectedPhase === "Single Face Recognition") navigate("/userphase1");
      if (selectedPhase === "Group Face Recognition") navigate("/userphase2");
      if (selectedPhase === "Crowd Counting") navigate("/userphase3");
    } catch (err) {
      setError(err.response?.data?.message || "Error logging in.");
    }
  };

  return (
    <div className="user-container">
      <h2 className="user-heading">User Panel</h2>

      <div className="phase-boxes">
        {[
          { phase: "Single Face Recognition", image: "phase1.jpg" },
          { phase: "Group Face Recognition", image: "phase2.jpg" },
          { phase: "Crowd Counting", image: "phase3.jpg" },
        ].map((phase, index) => (
          <div
            key={index}
            className={`phase-box ${
              selectedPhase === phase.phase ? "selected" : selectedPhase ? "hidden" : ""
            }`}
          >
            <h3 className="phase-title">{phase.phase}</h3>
            <img src={require(`../assets/${phase.image}`)} alt={phase.phase} />
            <button onClick={() => handleSelect(phase.phase)}>Select</button>
          </div>
        ))}
      </div>

      {showLogin && (
        <div className="login-container">
          <h3>{selectedPhase}</h3>
          {error && <p className="error-message">{error}</p>}
          <div className="login-box">
            <div className="form-field">
              <label>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div className="form-field">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
          </div>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
