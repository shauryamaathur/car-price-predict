import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Predict.css";

const Predict = () => {
  const [formData, setFormData] = useState({
    fuelType: "gas",
    carBody: "sedan",
    horsepower: 100,
    engineSize: 130,
    cityMpg: 20,
    highwayMpg: 25,
  });

  const [prediction, setPrediction] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPrediction(`Estimated Price: $${Math.floor(Math.random() * 50000) + 10000}`);
  };

  return (
    <div className="predict-page">
      <Navbar /> {/* Navigation Bar */}

      {/* 🎥 Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/predict-bg.mp4" type="video/mp4" />
      </video>

      {/* Background Animations */}
      <div className="background">
        <div className="gear"></div>
        <div className="gear small"></div>
        <div className="screwdriver"></div>
      </div>

      <div className="container">
        <h1>Top Gear Car Price Predictor</h1>
        <form id="prediction-form" onSubmit={handleSubmit}>
          <label htmlFor="fuelType">Fuel Type:</label>
          <select id="fuelType" value={formData.fuelType} onChange={handleChange}>
            <option value="gas">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>

          <label htmlFor="carBody">Car Body:</label>
          <select id="carBody" value={formData.carBody} onChange={handleChange}>
            <option value="sedan">Sedan</option>
            <option value="hatchback">Hatchback</option>
            <option value="wagon">Wagon</option>
            <option value="convertible">Convertible</option>
            <option value="coupe">Coupe</option>
          </select>

          <label htmlFor="horsepower">Horsepower (50-300):</label>
          <input type="number" id="horsepower" min="50" max="300" value={formData.horsepower} onChange={handleChange} />

          <label htmlFor="engineSize">Engine Size (60-400):</label>
          <input type="number" id="engineSize" min="60" max="400" value={formData.engineSize} onChange={handleChange} />

          <label htmlFor="cityMpg">City MPG (5-50):</label>
          <input type="number" id="cityMpg" min="5" max="50" value={formData.cityMpg} onChange={handleChange} />

          <label htmlFor="highwayMpg">Highway MPG (10-60):</label>
          <input type="number" id="highwayMpg" min="10" max="60" value={formData.highwayMpg} onChange={handleChange} />

          <button type="submit">Predict Price</button>
        </form>
        <div id="result">{prediction}</div>
      </div>
    </div>
  );
};

export default Predict;
