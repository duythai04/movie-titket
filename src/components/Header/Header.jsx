import React from "react";
import { TiTicket } from "react-icons/ti";
import { LuPopcorn } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <Link to="/" className="header-logo">
          <h1>Cinema</h1>

        </Link>

        <div className="header-actions">
          <Link to="/movies" className="btn btn-ticket">
            <TiTicket className="btn-icon" />
            ĐẶT VÉ NGAY
          </Link>

          <button className="btn btn-combo">
            <LuPopcorn className="btn-icon" />
            ĐẶT BỎNG NƯỚC
          </button>
        </div>

        <div className="header-icons">
          <div className="icon-item">
            <IoSearchOutline />
          </div>

          <Link to="/register" className="icon-item">
            <FaRegUserCircle />
          </Link>

          <div className="icon-item">
            <MdLanguage />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
