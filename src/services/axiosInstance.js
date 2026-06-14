import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {

    return Promise.reject(error);
  }
);

export default axiosInstance;