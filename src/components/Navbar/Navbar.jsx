import React, { useContext, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "./../../assets/assets";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const { getTotalCartAmount, isLoggedIn, setIsLoggedIn, setShowLogin } = useContext(StoreContext);
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleMenuClick = (menuItem, sectionId) => {
    setMenu(menuItem);
    if (location.pathname === '/') {
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => handleMenuClick("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => handleMenuClick("Menu", "explore-menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </Link>
        <Link
          to="/"
          onClick={() => handleMenuClick("Reviews", "reviews")}
          className={menu === "Reviews" ? "active" : ""}
        >
          Reviews
        </Link>
        <Link
          to="/"
          onClick={() => handleMenuClick("Contact us", "footer")}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact us
        </Link>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="cart" />
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </Link>
        </div>
        {isLoggedIn ? (
          <button onClick={handleLogout}>
            <AiOutlineUser className="userIcon"/>
          </button>
        ) : (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;