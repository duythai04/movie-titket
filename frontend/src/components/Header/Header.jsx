import React, { useState } from 'react';
import { TiTicket } from 'react-icons/ti';
import { LuPopcorn } from 'react-icons/lu';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { LuMenu } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="header-logo">
          <h1>Cinema</h1>
        </Link>

        {/* Desktop */}
        <div className="header-actions">
          <Link to="/movies" className="btn btn-ticket">
            <TiTicket className="btn-icon" />
            ĐẶT VÉ
          </Link>

          <button className="btn btn-combo">
            <LuPopcorn className="btn-icon" />
            BỎNG NƯỚC
          </button>

          <div className="mobile-search">
            <input type="text" placeholder="Tìm kiếm phim" />
          </div>
        </div>

        <div className="header-icons">
          <IoSearchOutline className="icon-item" />
          <Link to="/register" className="icon-item">
            <FaRegUserCircle />
          </Link>
          <MdLanguage className="icon-item" />
        </div>

        {/* Mobile menu button */}
        <button className="menu-toggle" onClick={() => setOpenMenu(!openMenu)}>
          <LuMenu />
        </button>
      </div>

      {/* Mobile menu */}
      {openMenu && (
        <div className="mobile-menu">
          <Link to="/movies" onClick={() => setOpenMenu(false)}>
            Phim
          </Link>
          <Link to="/register" onClick={() => setOpenMenu(false)}>
            Tài khoản
          </Link>
          <button onClick={() => setOpenMenu(false)}>Bỏng nước</button>
        </div>
      )}
    </header>
  );
}

export default Header;
