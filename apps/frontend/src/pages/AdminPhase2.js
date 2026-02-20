import React from "react";
import Navbar from "../components/Navbar";
import "./AdminPhase2.css";
import { API_CONFIG, buildApiUrl } from "../config/api";

const AdminPhase2 = () => {
  const startRecognition = () => {
    fetch(buildApiUrl(API_CONFIG.groupFaceApiUrl, "/recognize"), { method: "POST" })
      .then((response) => response.json())
      .then(() => {
        const videoElement = document.getElementById("video");
        videoElement.src = buildApiUrl(API_CONFIG.groupFaceApiUrl, "/video_feed");
        videoElement.style.display = "block";
        videoElement.style.opacity = 1;
      })
      .catch((error) => console.error("Error:", error));
  };

  const stopRecognition = () => {
    fetch(buildApiUrl(API_CONFIG.groupFaceApiUrl, "/stop_recognition"), { method: "POST" })
      .then((response) => response.json())
      .then(() => {
        const videoElement = document.getElementById("video");
        videoElement.src = "";
        videoElement.style.opacity = 0;
        setTimeout(() => {
          videoElement.style.display = "none";
        }, 300);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="admin-phase2-container">
      <Navbar />
      <div className="admin-phase2-content">
        <h1>Admin Phase 2</h1>
        <p>Welcome to Admin Phase 2!</p>

        <h1>Face Recognition App</h1>
        <button onClick={startRecognition}>Start Recognition</button>
        <button onClick={stopRecognition}>Stop Recognition</button>
        <div>
          <img id="video" alt="Video Feed" />
        </div>
      </div>
    </div>
  );
};

export default AdminPhase2;
