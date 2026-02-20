const API_CONFIG = {
  authApiUrl: process.env.REACT_APP_AUTH_API_URL || "http://localhost:5000",
  userAuthApiUrl: process.env.REACT_APP_USER_AUTH_API_URL || "http://localhost:5003",
  singleFaceApiUrl: process.env.REACT_APP_SINGLE_FACE_API_URL || "http://127.0.0.1:5000",
  groupFaceApiUrl: process.env.REACT_APP_GROUP_FACE_API_URL || "http://localhost:5010",
  crowdApiUrl: process.env.REACT_APP_CROWD_API_URL || "http://127.0.0.1:5002",
};

const buildApiUrl = (baseUrl, path) => `${baseUrl}${path}`;

export { API_CONFIG, buildApiUrl };
