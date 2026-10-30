
import React from "react";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-content">
          <h1>
            The simpler, safer way to pay
          </h1>

          <p>
            Shop, send money, and manage your payments
            securely with PayPal.
          </p>

          <button
            className="get-started"
            onClick={() => {
              window.location.href = "#signup";
            }}
          >
            Get Started
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
