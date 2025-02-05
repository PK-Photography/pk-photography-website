import axios from "axios";

// const baseUR = process.env.DEV_API_URL;
// const baseUR = import.meta.env.DEV_API_URL;

const baseURL = "https://pk-backend-jzxv.onrender.com/api/v1";
// const baseURL = "http://localhost:8081/api/v1";
// import.meta.env.VITE_XX
// const baseURL = import.meta.env.VITE_APP_API_LIVE;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },

});

export default axiosInstance;
