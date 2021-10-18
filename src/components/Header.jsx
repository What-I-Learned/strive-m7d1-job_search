import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/xing.png";

const mainNav = [
  {
    display: "Home",
    path: "/",
    icon: "home",
  },
  {
    display: "Login",
    path: "/user",
    icon: "user",
  },
];

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="main-nav">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__menu">
            <div className="header__menu__right">
              {mainNav.map((item, index) => (
                <div className="header__menu__right__item" key={index}>
                  <Link to={item.path}>
                    <span>
                      <box-icon name={item.icon}></box-icon>
                    </span>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
