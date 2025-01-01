import axios from "axios";

// const baseUR = process.env.DEV_API_URL;
// const baseUR = import.meta.env.DEV_API_URL;

const baseURL = "https://pk-backend-jzxv.onrender.com/api/v1";
// import.meta.env.VITE_XX
// const baseURL = import.meta.env.VITE_APP_API_LIVE;

const axiosInstance = axios.create({
  baseURL,
  // headers: {
  //   "x-spj-host": "spj.sarkariprivatejobs.com",
  //   "x-spj-key": "dwff230a1ad4msh4243dsd2s1bd075jsn11c95bb6bsdf33",
  // },
  // You can add other default configurations here, such as headers
});

export default axiosInstance;
