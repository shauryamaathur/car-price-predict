import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Predict.css";

const Predict = () => {
  const [formData, setFormData] = useState({
    symboling: 0,
    fuelType: "gas",
    aspiration: "std",
    doorNumber: "four",
    carBody: "sedan",
    driveWheel: "fwd",
    engineLocation: "front",
    wheelBase: 88.6,
    carLength: 168.8,
    carWidth: 64.1,
    carHeight: 48.8,
    curbWeight: 2548,
    engineType: "ohc",
    cylinderNumber: "four",
    engineSize: 130,
    fuelSystem: "mpfi",
    boreRatio: 3.47,
    stroke: 2.68,
    compressionRatio: 9.0,
    horsepower: 100,
    peakRpm: 5000,
    cityMpg: 20,
    highwayMpg: 25,
  });

  const [prediction, setPrediction] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPrediction("");
    setProgress(0);
    setLoading(true);

    // Start fake progress loader
    let interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 99) {
          clearInterval(interval);
          return old;
        }
        return old + 1;
      });
    }, 30);

    try {
      const response = await fetch("https://car-price-predict-g03p.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          features: Object.values(formData),
        }),
      });

      const data = await response.json();
      if (data.predicted_price) {
        setPrediction(`Estimated Price: $${data.predicted_price}`);
      } else {
        setPrediction("Error: Could not fetch price");
      }
    } catch (error) {
      console.error("Error fetching prediction:", error);
      setPrediction("Error: Could not fetch price");
    }

    clearInterval(interval);
    setProgress(100);
    setTimeout(() => setLoading(false), 300); // smooth out animation
  };

  return (
    <div className="predict-page">
      <Navbar />

      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/predict-bg.mp4" type="video/mp4" />
      </video>

      <div className="container">
        <h1>Top Gear Car Price Predictor</h1>
        <form onSubmit={handleSubmit}>
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

          <label htmlFor="engineSize">Engine Size (60cc-400cc):</label>
          <input type="number" id="engineSize" min="60" max="400" value={formData.engineSize} onChange={handleChange} />

          <label htmlFor="cityMpg">City MPG (5-50):</label>
          <input type="number" id="cityMpg" min="5" max="50" value={formData.cityMpg} onChange={handleChange} />

          <label htmlFor="highwayMpg">Highway MPG (10-60):</label>
          <input type="number" id="highwayMpg" min="10" max="60" value={formData.highwayMpg} onChange={handleChange} />

          <label htmlFor="compressionRatio">Compression Ratio (5-15):</label>
          <input type="number" id="compressionRatio" min="5" max="15" step="0.1" value={formData.compressionRatio} onChange={handleChange} />

          <label htmlFor="stroke">Stroke (2.0-4.0):</label>
          <input type="number" id="stroke" min="2.0" max="4.0" step="0.01" value={formData.stroke} onChange={handleChange} />

          <label htmlFor="boreRatio">Bore Ratio (2.5-4.0):</label>
          <input type="number" id="boreRatio" min="2.5" max="4.0" step="0.01" value={formData.boreRatio} onChange={handleChange} />

          <label htmlFor="peakRpm">Peak RPM (4000-7000):</label>
          <input type="number" id="peakRpm" min="4000" max="7000" value={formData.peakRpm} onChange={handleChange} />

          <button type="submit">Predict Price</button>
        </form>

        {loading ? (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            <div className="progress-text">{progress}%</div>
          </div>
        ) : (
          <div id="result">{prediction}</div>
        )}
      </div>
    </div>
  );
};

export default Predict;
