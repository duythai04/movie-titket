import axios from 'axios';

export const authProvider = {
  login: async ({ email, password }) => {
    const res = await axios.post('http://localhost:8080/api/auth/login', {
      email,
      password,
    });

    const { token, user } = res.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    return Promise.resolve();
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Promise.resolve();
  },

  checkAuth: () => (localStorage.getItem('token') ? Promise.resolve() : Promise.reject()),

  checkError: () => Promise.resolve(),

  getPermissions: () => Promise.resolve(),
};
