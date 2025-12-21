import axios from 'axios';

let setLoading = null;

// Cho phép inject setLoading từ bên ngoài
export const setLoadingHandler = (handler) => {
  setLoading = handler;
};

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    if (setLoading) setLoading(true);
    return config;
  },
  (error) => {
    if (setLoading) setLoading(false);
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    if (setLoading) setLoading(false);
    return response;
  },
  (error) => {
    if (setLoading) setLoading(false);
    return Promise.reject(error);
  },
);

export default axiosClient;
