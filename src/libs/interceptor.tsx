import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://kimvi.app",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  config.headers["Accept-Language"] = "Eng";
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
