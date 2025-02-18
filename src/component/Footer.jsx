import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top">
          <div className="wrap">
            <img src="/images/logo.webp" alt="logo" width={150} />
            <div className="contact-detail">
              <h2>Contact Us</h2>
              <a href="tel:+18008268018">+1-(800) 826 8018</a>
              <a href="mailto:info@appicoders.com">info@appicoders.com</a>
            </div>
          </div>
          <div className="wrap">
            <h2>About</h2>
            <div className="links">
              <p>Home</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="wrap">
            <h2>Appicoders Services</h2>
            <div className="links">
              <p>iPHONE APPLICATION DEVELOPMENT</p>
              <p>ANDROID APPLICATION DEVELOPMENT</p>
              <p>ENTERPRISE APPLICATION DEVELOPMENT</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>&copy; 2023 APPICODERS. ALL RIGHTS RSERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
