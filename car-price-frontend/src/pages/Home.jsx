import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

const Home = () => {
  
  // ✅ Add the useEffect here
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const handleScroll = () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/montage.mp4" type="video/mp4" />
      </video>


      {/* 🌟 Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>AI-Powered Car Price Prediction</h1>
          <p>Unlock the true value of any car with our powerful AI-driven price estimation tool.</p>
          <Link to="/predict">
            <button className="cta-button">Try Now 🏎️</button>
          </Link>
        </div>
      </section>

      {/* ✅ Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Our Car Price Prediction System?</h2>
        <div className="features">
          <div className="feature-card">
            <h3>🤖 AI Accuracy</h3>
            <p>Our AI model ensures precise car price estimation.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Instant Predictions</h3>
            <p>Get real-time car price predictions within seconds.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure & Reliable</h3>
            <p>Your data is encrypted and protected.</p>
          </div>
        </div>
      </section>

      {/* 🔍 How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Enter Car Details</h3>
            <p>Fill in details like fuel type, engine size, horsepower, etc.</p>
          </div>
          <div className="step">
            <h3>2. AI Processes Data</h3>
            <p>Our powerful machine learning model analyzes your input.</p>
          </div>
          <div className="step">
            <h3>3. Get Your Prediction</h3>
            <p>Instantly receive an accurate estimated car price.</p>
          </div>
        </div>
      </section>

      {/* 🚗 Final CTA */}
      <section className="final-cta">
        <h2>Start Predicting Car Prices Today!</h2>
        <Link to="/predict">
          <button className="cta-button">Get Started 🚀</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;