import React, { useState } from "react";
import "./UserPhase3.css";
import { API_CONFIG } from "../config/api";

const AdminPhase3 = () => {
  const [videoFeed, setVideoFeed] = useState("");
  const serverUrl = API_CONFIG.crowdApiUrl;

  const startFeed = async () => {
    try {
      await fetch(`${serverUrl}/start`, { method: "POST" });
      setVideoFeed(`${serverUrl}/video_feed`);
    } catch (error) {
      console.error("Error starting feed:", error);
    }
  };

  const stopFeed = async () => {
    try {
      await fetch(`${serverUrl}/stop`, { method: "POST" });
      setVideoFeed("");
    } catch (error) {
      console.error("Error stopping feed:", error);
    }
  };

  return (
    <div className="user-phase3-container">
      <h1>Real-Time Crowd Counting</h1>
      <div className="button-container">
        <button onClick={startFeed}>Start</button>
        <button onClick={stopFeed}>Stop</button>
      </div>
      <div className="video-container">
        {videoFeed ? <img src={videoFeed} alt="Video feed will appear here" /> : <p>Video feed will appear here</p>}
      </div>
    </div>
  );
};

export default AdminPhase3;
