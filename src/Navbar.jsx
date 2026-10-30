import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Left side: Logo + Links */}
      <div className="nav-left">
        <a href="/" className="logo">
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
          />
        </a>

        <div className="nav-links">
          <a href="#personal">Personal ▾</a>
          <a href="#business">Business ▾</a>
          <a href="#partners">Partners ▾</a>
          <a href="#useful">Useful Info ▾</a>
        </div>
      </div>

      {/* Right side: Login & Sign Up buttons */}
      <div className="nav-right">
        <a href="#login" className="btn-login">
          Log In
        </a>
        <a href="#signup" className="btn-signup">
          Sign Up
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
