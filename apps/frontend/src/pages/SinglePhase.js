import React, { useState } from "react";
import axios from "axios";
import "./SinglePhase.css";
import { API_CONFIG, buildApiUrl } from "../config/api";

const SinglePhase = () => {
  const [labelName, setLabelName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddStudent = async () => {
    try {
      if (!labelName) {
        alert("Please enter a label name");
        return;
      }

      const captureResponse = await axios.post(buildApiUrl(API_CONFIG.singleFaceApiUrl, "/capture_faces"), {
        label_name: labelName,
        num_samples: 100,
      });
      alert(captureResponse.data.message);

      setLoading(true);
      const trainResponse = await axios.post(buildApiUrl(API_CONFIG.singleFaceApiUrl, "/train_model"));
      setLoading(false);

      alert(trainResponse.data.message);
    } catch (error) {
      console.error("Error adding student:", error);
      alert("An error occurred while adding the student.");
      setLoading(false);
    }
  };

  return (
    <div className="single-phase-container">
      <div className="single-phase-content">
        <h2 className="single-phase-title">Add Student</h2>
        <input
          type="text"
          value={labelName}
          onChange={(e) => setLabelName(e.target.value)}
          placeholder="Enter Student Name"
          className="single-phase-input"
        />
        <button onClick={handleAddStudent} className="single-phase-button">
          Add Student
        </button>
        {loading && (
          <div className="single-phase-loading">
            <p>Training the model... Please wait.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePhase;
