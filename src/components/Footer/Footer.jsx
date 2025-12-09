import React from 'react';
import './Footer.scss';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LOGO + MÔ TẢ */}

        {/* LIÊN KẾT */}
        <div className="footer-section links">
          <h3>Liên kết</h3>
          <ul>
            <li>
              <a href="#">Lịch chiếu</a>
            </li>
            <li>
              <a href="#">Phim đang chiếu</a>
            </li>
            <li>
              <a href="#">Phim sắp chiếu</a>
            </li>
            <li>
              <a href="#">Rạp chiếu</a>
            </li>
            <li>
              <a href="#">Khuyến mãi</a>
            </li>
          </ul>
        </div>

        {/* HỖ TRỢ */}
        <div className="footer-section support">
          <h3>Hỗ trợ</h3>
          <ul>
            <li>
              <a href="#">Trung tâm hỗ trợ</a>
            </li>
            <li>
              <a href="#">Điều khoản sử dụng</a>
            </li>
            <li>
              <a href="#">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="#">Hỏi đáp</a>
            </li>
          </ul>
        </div>

        {/* MẠNG XÃ HỘI */}
        <div className="footer-section social">
          <h3>Kết nối với chúng tôi</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} CineBooking – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
