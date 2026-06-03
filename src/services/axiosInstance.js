import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response?.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(err);
  },
);

export default axiosInstance;
