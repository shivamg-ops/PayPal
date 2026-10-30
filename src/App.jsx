import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <div className="hero">
        {/* Toggle buttons: Personal / Business */}
        <div className="toggle-box">
          <button className="toggle-btn">Personal</button>
          <button className="toggle-btn active">Business</button>
        </div>

        {/* Big Heading */}
        <h1 className="title">PayPal Open</h1>

        {/* Subtitle */}
        <h2 className="subtitle">One platform for your business needs</h2>

        {/* Paragraph */}
        <p className="desc">
          PayPal Open unifies your PayPal business solutions to help you get paid,
          get growing, and get ahead.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#signup" className="btn-black">
            Sign Up
          </a>
          <a href="#sales" className="btn-gray">
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
