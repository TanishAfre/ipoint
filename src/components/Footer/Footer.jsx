import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img className="footer-img" src={assets.logo} alt="logo" />
            <p>
            Your one-stop shop for all things mobile. We offer a wide selection of phones, accessories, and vapes, along with expert repair services for phones and laptops. Visit us today for great deals, friendly service, and quick fixes to keep you connected.
            </p>
            <div className="footer-social-icon">
            <a href="https://www.facebook.com/ipoint.dundalk/" target="_blank" rel="noopener noreferrer">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
              {/* <img src={assets.twitter_icon} alt="twitter" />
              <img src={assets.linkedin_icon} alt="linkedin" /> */}
            </div>
          </div>
          <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                {/* <li><a href="/">Home</a></li>
                <li><a href="#explore-menu">About us</a></li> */}
                <li><Link to="/privacy-policy">Privacy policy</Link></li>
            </ul>
          </div>
          <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li><a href="tel:+353851925850">085 192 5850</a></li>
                <li><a href="mailto:dundalkipoint@gmail.com">dundalkipoint@gmail.com</a></li>
                <li><a href="https://www.google.com/maps?q=54.003458, -6.400915" target="_blank" rel="noopener noreferrer">Location</a></li>
            </ul>
          </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Tanish 2024 &copy; iPoint.com</p>
      </div>
    </>
  );
};

export default Footer;