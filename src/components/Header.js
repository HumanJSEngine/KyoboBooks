import React from "react";
import { NavLink } from "react-router-dom";
const logoSize = { width: 210, height: 120, border: 0 };
const imgSize = { width: 30, height: 30, border: 0, margin: 15 };
const Header = () => {
  return (
    <div className="flex text-center">
      <div className="navbar-brand">
        <img
          src="/photos/img_logo_kyobo.png"
          className="img-logo"
          alt="logo"
          style={logoSize}
        />
      </div>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "btn menu btn-dark" : "btn menu btn-success";
        }}
        to="/BookList"
      >
        BookList 바로가기
      </NavLink>
      <div className="navbar-cart">
        <img
          src="/photos/btn_header_cart.png"
          className="img-catr"
          alt="cart"
          style={imgSize}
        />
        <img
          src="/photos/btn_header_my.png"
          className="img-catr"
          alt="cart"
          style={imgSize}
        />
      </div>
    </div>
  );
};
export default Header;
