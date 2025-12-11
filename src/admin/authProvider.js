// src/authProvider.js
import axios from 'axios';

export const authProvider = {
  login: async ({ email, password }) => {
    const res = await axios.post('http://localhost:8080/api/auth/login', {
      email,
      password,
    });

    const { token } = res.data;
    if (!token) {
      return Promise.reject('Không nhận được token!');
    }

    localStorage.setItem('token', token);

    const payload = JSON.parse(atob(token.split('.')[1]));
    localStorage.setItem('role', payload.role);

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    return Promise.resolve();
  },

  checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),

  checkError: () => Promise.resolve(),

  getPermissions: () => {
    const role = localStorage.getItem('role');
    return Promise.resolve(role);
  },
};
