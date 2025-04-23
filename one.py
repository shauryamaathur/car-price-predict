import pandas as pd
import numpy as np
import joblib
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
from sklearn.preprocessing import OneHotEncoder

# Load the dataset
file_path = "/Users/shaurya/Documents/my_projects/car_price/CarPrice_Assignment.csv"
df = pd.read_csv(file_path)

# Drop unnecessary columns
df.drop(columns=["car_ID", "CarName"], inplace=True)

# Identify categorical and numerical features
categorical_cols = df.select_dtypes(include=["object"]).columns.tolist()
numerical_cols = df.select_dtypes(include=["int64", "float64"]).columns.tolist()
numerical_cols.remove("price")  # Remove target variable

# One-hot encode categorical variables
encoder = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
encoded_cats = encoder.fit_transform(df[categorical_cols])
encoded_cat_df = pd.DataFrame(encoded_cats, columns=encoder.get_feature_names_out(categorical_cols))

# Combine encoded categorical and numerical features
X = pd.concat([df[numerical_cols], encoded_cat_df], axis=1)
y = df["price"]

# Split data (80% train, 20% test)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize RandomForestRegressor
model = RandomForestRegressor(
    n_estimators=200,
    max_depth=20,
    min_samples_split=5,
    random_state=42,
    n_jobs=-1
)

# Train the model
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n--- Model Performance ---")
print(f"R² Score: {r2:.4f}")
print(f"Mean Absolute Error (MAE): {mae:.2f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.2f}")

# Save the trained model and encoder
model_path = "/Users/shaurya/Documents/my_projects/car_price/car_price_model.pkl"
encoder_path = "/Users/shaurya/Documents/my_projects/car_price/encoder.pkl"

joblib.dump(model, model_path)
joblib.dump(encoder, encoder_path)

print(f"\nModel saved at: {model_path}")
print(f"Encoder saved at: {encoder_path}")
print("Feature shape:", X_train.shape)
