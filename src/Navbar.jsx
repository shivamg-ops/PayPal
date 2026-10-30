
import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="paypal-header">
     
<a href="/" className="paypal-logo" aria-label="PayPal home">
  <img
    src="https://www.paypalobjects.com/marketing/web/logos/paypal-wordmark-color_new.svg"
    alt="PayPal"
    onError={(e) => {
      e.currentTarget.src =
        "https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png";
    }}
  />
</a>



      <nav className="paypal-nav">
        <a href="#personal">Personal</a>
        <a href="#business">Business</a>
        <a href="#developer">Developer</a>
        <a href="#help">Help</a>
      </nav>

      <div className="paypal-actions">
        <a className="login-btn" href="#login">
          Log In
        </a>

        <a className="signup-btn" href="#signup">
          Sign Up
        </a>
      </div>
    </header>
  );
}

export default Navbar;
