// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authProvider } from '../../admin/authProvider';
import './Auth.scss';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✔ Login dùng chung authProvider
      await authProvider.login(form);

      // ✔ Lấy role từ localStorage
      const role = localStorage.getItem('role');

      // ✔ Điều hướng theo quyền
      if (role === 'admin') navigate('/admin');
      else navigate('/');
    } catch (err) {
      const message = err?.response?.data?.message || 'Sai email hoặc mật khẩu!';
      alert(message);
    }

    setLoading(false);
  };

  return (
    <div className="auth-overlay">
      <div className="auth-container">
        <h2 className="title-auth">Đăng nhập</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button className="btn-submit" disabled={loading}>
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>

          <p className="switch-text">
            Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
