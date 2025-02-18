import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoLight from "/images/logo2.webp";
import logoDark from "/images/logo.webp";
import { FaPhoneAlt } from "react-icons/fa";

const menuItems = [
  "Home",
  "About",
  "Services",
  "Why Choose Us",
  "Portfolio",
  "Products",
  "Testimonials",
  "Technologies",
  "Contact",
];
const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <header>
        <div className="left">
          <img src={logoLight} alt="logo" width={200} className="logo" />
        </div>
        <div className="right">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <li>
              <a href="tel:+18008268018">
                <FaPhoneAlt size={14} /> +1 (800) 826-8018
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU */}
        <div className="hamburger-mobile">
          <div className="hamburger" onClick={() => setIsActive(!isActive)}>
            <FaBars size={30} color="#ffffff" />
          </div>
        </div>

        <div
          className={`mobile-nav ${isActive ? "active" : ""}`}
          id="mobile-hambargur"
        >
          <div className="one">
            <div className="one-left">
              <a href="/">
                <img src={logoDark} alt="logo" width={200} className="logo" />
              </a>
            </div>
            <div
              className={`one-right ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <FaTimes size={30} color="#ffffff" />
            </div>
          </div>

          <div className="two" id="after-login-mobile">
            <ul>
              {menuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <li>
                <a href="tel:+18008268018">
                  <FaPhoneAlt size={14} /> +1 (800) 826-8018
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
