import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* 🎥 Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/about-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌟 About Hero Section */}
      <section className="about-hero">
        <h1>Meet The Minds Behind T⛭pGear.AI</h1>
        <p>From an idea to a reality—this is our journey.</p>
      </section>

      {/* 🚗 The Story */}
      <section className="our-story">
        <h2>🏁 How It All Started</h2>
        <p>
          It all started with three friends—Shaurya, Raghav, and Rev—who shared a passion for cars, technology, and solving real-world problems. Rev, a die-hard Formula 1 fan and car enthusiast, had always been fascinated by automobiles and their engineering. One day, while browsing used car listings, he realized how difficult it was for buyers to determine whether they were getting a fair deal. Feeling frustrated, he brought up the issue with Raghav, the data analyst of the group, and asked: "What if there was a way to stop people from getting scammed when buying used cars?"
        </p>
        <p>
          Raghav, intrigued by the idea, began digging into market data and quickly realized that this was a **huge problem**. Many buyers were unknowingly overpaying for cars because they lacked proper pricing insights. Dealers often manipulated prices, leaving customers vulnerable to unfair deals. The data was clear—people needed a reliable way to determine a car’s true value.
        </p>
        <p>
          That’s when Shaurya, the problem-solver of the trio, stepped in. With a determination to create real impact, he envisioned a Powerful AI system that could analyze thousands of real-time car listings and market trends to generate accurate, unbiased price predictions. Together, they combined their skills—Rev’s knowledge of cars, Raghav’s expertise in data analysis, and Shaurya’s problem-solving mindset—to build T⛭pGear.AI, a platform designed to make car buying transparent, fair, and stress-free for everyone.
        </p>
      </section>

      {/* 🌍 Our Mission */}
      <section className="mission">
        <h2>🌍 Our Mission</h2>
        <p>
          At T⛭pGear.AI, we believe that buying a car should be exciting, not stressful. Our goal is to empower buyers with AI-driven price predictions, so no one has to worry about being overcharged ever again. We stand for Transparency, Fairness, and Innovation, ensuring that every buyer knows exactly what a car is worth before making a decision.
        </p>
      </section>

      {/* 🛠️ How It Works */}
      <section className="how-it-works">
        <h2>🛠️ How T⛭pGear.AI Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Enter Your Car Details</h3>
            <p>Provide specifications like make, model, fuel type, and mileage.</p>
          </div>
          <div className="step">
            <h3>2. AI Analyzes Market Data</h3>
            <p>Our system compares your car with thousands of real-time listings.</p>
          </div>
          <div className="step">
            <h3>3. Get Your True Price</h3>
            <p>Instantly receive an accurate, unbiased car price estimate.</p>
          </div>
        </div>
      </section>

      {/* 🚗 Call to Action */}
      <section className="final-cta">
        <h2>🚀 Ready to Know Your Car’s Value?</h2>
        <Link to="/predict">
        <button className="cta-button">Get Your Free Estimate Now</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
