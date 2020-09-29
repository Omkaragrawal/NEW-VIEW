import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
function LandingPage({ Image }) {
  return (
    <div className="landing">
      <NavBar />
      <Banner />
      <div className="landing__inner">
        <div className="landing__info">
          <h3
            style={{
              fontSize: "6vh",
              fontStyle: "italic",
              fontWeight: "800",
              marginTop: "5vh",
            }}
          >
            Get Started
          </h3>
          <p style={{ fontSize: "8vh" }}>
            To watch and get info about your favourite movies
          </p>
          <Link to="/register">
            <button className="button-btn" style={{ marginTop: "5vh" }}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
