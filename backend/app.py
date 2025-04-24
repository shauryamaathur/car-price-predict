from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import pandas as pd
import os

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://car-price-predict-68li.vercel.app"]) 

# Get the directory where the app.py file is located and use it to create relative paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Use relative paths for model and encoder (no need for "backend" in the path since app.py is inside "backend")
MODEL_PATH = os.path.join(BASE_DIR, "car_price_model.pkl")
ENCODER_PATH = os.path.join(BASE_DIR, "encoder.pkl")

# Load the trained model and encoder
if os.path.exists(MODEL_PATH) and os.path.exists(ENCODER_PATH):
    model = joblib.load(MODEL_PATH)
    encoder = joblib.load(ENCODER_PATH)
    print("Model and Encoder loaded successfully!")
else:
    model, encoder = None, None
    print("Error: Model or Encoder file not found.")



@app.route("/")
def home():
    return "Car Price Prediction API is running!"

@app.route("/predict", methods=["POST"])
def predict():
    if model is None or encoder is None:
        return jsonify({"error": "Model or Encoder not loaded properly!"})

    try:
        data = request.json
        features = data.get("features", [])

        # Convert to DataFrame
        feature_names = [
            "symboling", "fueltype", "aspiration", "doornumber", "carbody",
            "drivewheel", "enginelocation", "wheelbase", "carlength",
            "carwidth", "carheight", "curbweight", "enginetype",
            "cylindernumber", "enginesize", "fuelsystem", "boreratio",
            "stroke", "compressionratio", "horsepower", "peakrpm",
            "citympg", "highwaympg"
        ]
        
        input_df = pd.DataFrame([features], columns=feature_names)

        # Separate categorical and numerical data
        categorical_cols = encoder.feature_names_in_
        numerical_cols = [col for col in feature_names if col not in categorical_cols]

        # Encode categorical features
        encoded_cats = encoder.transform(input_df[categorical_cols])
        encoded_cat_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(categorical_cols))

        # Combine encoded categorical and numerical features
        final_input = pd.concat([input_df[numerical_cols], encoded_cat_df], axis=1)

        # Ensure correct number of features
        if final_input.shape[1] != model.n_features_in_:
            return jsonify({"error": f"Expected {model.n_features_in_} features, but got {final_input.shape[1]}"})

        # Make prediction
        prediction = model.predict(final_input)[0]
        return jsonify({"predicted_price": round(prediction, 2)})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)
