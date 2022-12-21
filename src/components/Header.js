import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const logoSize = { width: 330, height: 180, border: 0 };
const imgSize = { width: 40, height: 40, border: 0, margin: 15 };

const Right = styled.div`
  position: absolute;
  right: 320px;
  top: 55px;
  > .img-cart {
    cursor: pointer;
  }
  > .img-my {
    cursor: pointer;
  }
`;

const Nav = styled.div`
  position: absolute;
  right: 334px;
  top: 130px;
`;

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
      <Right>
        <img
          src="/photos/btn_header_cart.png"
          className="img-cart"
          alt="cart"
          style={imgSize}
        />
        <img
          src="/photos/btn_header_my.png"
          className="img-my"
          alt="cart"
          style={imgSize}
        />
      </Right>
      <Nav>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "btn menu btn-dark" : "btn menu btn-success";
          }}
          to="/"
        >
          책목록으로
        </NavLink>
      </Nav>
    </div>
  );
};
export default Header;
