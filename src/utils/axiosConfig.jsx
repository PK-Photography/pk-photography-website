import axios from "axios";

// const baseUR = process.env.DEV_API_URL;
// const baseUR = import.meta.env.DEV_API_URL;

const baseURL = "https://pk-photography-backend.onrender.com/api/v1";
// const baseURL = "http://localhost:8081/api/v1";
// import.meta.env.VITE_XX
// const baseURL = import.meta.env.VITE_APP_API_LIVE;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },


});
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    // If token exists, set it in the Authorization header
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    // Check if the request data is an instance of FormData (for file upload)
    if (config.data instanceof FormData) {
      // Don't set Content-Type to allow the browser to set the boundary automatically for multipart/form-data
      delete config.headers["Content-Type"];
    } else {
      // Set the content type to JSON for other requests
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
