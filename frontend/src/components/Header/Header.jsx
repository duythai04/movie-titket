import React, { useState, useRef, useEffect } from 'react';
import { TiTicket } from 'react-icons/ti';
import { LuPopcorn, LuMenu } from 'react-icons/lu';
import { IoSearchOutline } from 'react-icons/io5';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import SearchMovie from '../SearchMovie/SearchMovie';
import './Header.scss';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const searchRef = useRef(null);

  /* Responsive */
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  /* Click outside → đóng search */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpenSearch(false);
        setSearchKeyword('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="header-logo">
          <h1>Cinema</h1>
        </Link>

        <div className="header-actions">
          <Link to="/movies" className="btn btn-ticket">
            <TiTicket className="btn-icon" />
            ĐẶT VÉ
          </Link>

          <button className="btn btn-combo">
            <LuPopcorn className="btn-icon" />
            BỎNG NƯỚC
          </button>

          {/* MOBILE SEARCH INPUT */}
          <div className="mobile-search">
            <input
              type="text"
              placeholder="Tìm kiếm phim..."
              value={searchKeyword}
              onChange={(e) => {
                setSearchKeyword(e.target.value);
                setOpenSearch(true);
              }}
            />
          </div>
        </div>

        <div className="header-icons">
          <IoSearchOutline className="icon-item" onClick={() => setOpenSearch(true)} />
          <Link to="/register" className="icon-item">
            <FaRegUserCircle />
          </Link>
          <MdLanguage className="icon-item" />
        </div>

        <button className="menu-toggle" onClick={() => setOpenMenu(!openMenu)}>
          <LuMenu />
        </button>
      </div>

      {/* SEARCH OVERLAY */}
      {openSearch && (
        <div className="search-overlay">
          <div className="search-box" ref={searchRef}>
            <SearchMovie
              keyword={searchKeyword}
              setKeyword={setSearchKeyword}
              hideInput={isMobile}
              onClose={() => {
                setOpenSearch(false);
                setSearchKeyword('');
              }}
            />
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
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
