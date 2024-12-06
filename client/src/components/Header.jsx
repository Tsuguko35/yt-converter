import React from "react";
import logo_transparent from "../assets/images/logo_transparent.png";
import "../styles/Header/header.css";

function Header() {
  return (
    <header className="header flex">
      <img src={logo_transparent} alt="website logo" className="header__logo" />
    </header>
  );
}

export default Header;
