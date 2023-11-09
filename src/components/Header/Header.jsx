import React from "react";
import "./Header.scss";
import Logo from "../../images/Logo.svg";

function Header() {
  return (
    <header className="header-wrapper">
      <img className="header-logo" src={Logo} alt="logo" />
      <h1 className="header-title">React weather</h1>
    </header>
  );
}

export default Header;
