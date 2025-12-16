import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import './Auth.scss';

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Mật khẩu không trùng khớp!');
      return;
    }

    try {
      setLoading(true);

      const payload = {
        full_name: form.firstName + ' ' + form.lastName,
        email: form.email,
        password: form.password,
        phone: form.phone,
      };

      const res = await axiosClient.post('/api/auth/register', payload);  

      alert(res.data.message);

      navigate('/login');
    } catch (err) {
      console.error(err);

      const message = err.response?.data?.message || 'Lỗi đăng ký. Vui lòng thử lại!';

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const handleOutside = (e) => {
    if (e.target.classList.contains('auth-overlay')) {
      navigate('/');
    }
  };

  return (
    <div className="auth-overlay" onClick={handleOutside}>
      <div className="auth-container">
        <button className="close-btn" onClick={() => navigate('/')}>
          ×
        </button>

        <h2 className="title-auth">Đăng ký</h2>

        <form onSubmit={handleRegister}>
          <div className="row">
            <div className="input-group">
              <label>Họ</label>
              <input
                type="text"
                name="firstName"
                placeholder="Họ"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Tên</label>
              <input
                type="text"
                name="lastName"
                placeholder="Tên"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Số điện thoại</label>
            <input
              type="text"
              name="phone"
              placeholder="Số điện thoại"
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <div className="input-group">
              <label>Mật khẩu</label>
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Xác nhận mật khẩu</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Xác nhận mật khẩu"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button className="btn-submit" disabled={loading}>
            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
          </button>

          <p className="switch-text">
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
