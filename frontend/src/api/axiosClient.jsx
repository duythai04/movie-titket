import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
