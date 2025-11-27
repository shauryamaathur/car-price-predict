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
        <h1>Meet The Mind Behind T⛭pGear.AI</h1>
        <p>From a spark of an idea to a complete AI-driven solution.</p>
      </section>

      {/* 🚗 The Story */}
      <section className="our-story">
        <h2>🏁 How It All Started</h2>
        <p>
          Fascinated by automobiles and equally passionate
          about technology, Shaurya spent months exploring how AI could solve real,
          meaningful problems in everyday life.
        </p>

        <p>
          One day, while browsing used car marketplaces, Shaurya noticed a huge
          issue: <b>there was no reliable way for buyers to know the true value of a
          car.</b> Prices were inconsistent, dealers often manipulated numbers, and
          buyers had no proper data-driven insights. People were getting
          overcharged simply due to lack of transparency.
        </p>

        <p>
          That’s when Shaurya decided to take matters into his own hands.
          Leveraging machine learning, data analysis, and a deep understanding of
          automotive parameters, he began building a system that could analyze
          thousands of listings, learn from market trends, and instantly predict a
          fair and accurate price for any car.
        </p>

        <p>
          What started as a simple experiment quickly evolved into a powerful
          platform: <b>T⛭pGear.AI</b>. Designed with precision, transparency, and
          fairness at its core, the platform ensures that no buyer ever has to
          guess a car’s true value again.
        </p>
      </section>

      {/* 🌍 Our Mission */}
      <section className="mission">
        <h2>🌍 Our Mission</h2>
        <p>
          At T⛭pGear.AI, the mission is simple yet impactful — to make car buying
          transparent, fair, and stress-free. With AI-powered price predictions,
          every user can confidently know the actual worth of a car before making
          a decision. Shaurya’s vision is to empower buyers with knowledge,
          eliminate scams, and bring honesty to the automobile marketplace.
        </p>
      </section>

      {/* 🛠️ How It Works */}
      <section className="how-it-works">
        <h2>🛠️ How T⛭pGear.AI Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Enter Your Car Details</h3>
            <p>
              Provide specifications like make, model, fuel type, engine size, and
              mileage.
            </p>
          </div>

          <div className="step">
            <h3>2. AI Analyzes Market Data</h3>
            <p>
              The ML system compares your car with thousands of real market
              listings and historical trends.
            </p>
          </div>

          <div className="step">
            <h3>3. Get Your True Price</h3>
            <p>
              Instantly receive an accurate, unbiased price estimate — backed by
              data, not guesswork.
            </p>
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
