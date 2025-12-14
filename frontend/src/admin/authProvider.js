import axiosClient from '../api/axiosClient';
import { jwtDecode } from 'jwt-decode';

export const authProvider = {
  login: async ({ email, password }) => {
    const res = await axiosClient.post('/api/auth/login', { email, password });

    const { token } = res.data;
    if (!token) throw new Error('Không nhận được token');

    localStorage.setItem('token', token);

    const payload = jwtDecode(token);
    localStorage.setItem('role', payload.role);

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return Promise.resolve();
  },

  checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),

  checkError: (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  getPermissions: () => {
    const role = localStorage.getItem('role');
    return Promise.resolve(role);
  },
};
