import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPhase1.css";
import { API_CONFIG, buildApiUrl } from "../config/api";

const AdminPhase1 = () => {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate("/add-student");
  };

  const handleAuthenticate = async () => {
    try {
      const response = await fetch(buildApiUrl(API_CONFIG.singleFaceApiUrl, "/recognize_faces"), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Face recognition completed successfully.");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Error occurred during face recognition.");
      }
    } catch (error) {
      alert("An error occurred while connecting to the server.");
      console.error(error);
    }
  };

  return (
    <div className="admin-phase1">
      <div className="admin-welcome">
        <h1>Welcome back Admin!!</h1>
      </div>

      <div className="admin-boxes">
        <button className="admin-box" onClick={handleAddStudent}>
          <img src={require("../assets/admin1.jpg")} alt="Add Student" />
          <h3>Add a Student</h3>
        </button>
        <button className="admin-box" onClick={handleAuthenticate}>
          <img src={require("../assets/admin3.jpg")} alt="Authenticate" />
          <h3>Authenticate</h3>
        </button>
      </div>
    </div>
  );
};

export default AdminPhase1;
