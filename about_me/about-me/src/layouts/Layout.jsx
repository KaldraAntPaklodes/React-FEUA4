import React from "react";
import Hamburger from "../components/Hamburger2";
import logoSrc from "../images/LOGO.png";
import { Link } from "react-router-dom";
import "./Layout.css";
import { HOME_ROUTE } from "../routes/const";

const Layout = ({ children }) => {
  return (
    <>
    
      <div className="layoutBox">
        <div className="logoContainer">
          <Link to={HOME_ROUTE}>
            <img className="logo" src={logoSrc} alt="logo" />
          </Link>
        </div>
        <div className="hamburgerContainer">
          <Hamburger />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
