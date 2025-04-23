document.getElementById("prediction-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    let fueltype = document.getElementById("fueltype").value;
    let carbody = document.getElementById("carbody").value;
    let horsepower = parseFloat(document.getElementById("horsepower").value);
    let enginesize = parseFloat(document.getElementById("enginesize").value);
    let citympg = parseFloat(document.getElementById("citympg").value);
    let highwaympg = parseFloat(document.getElementById("highwaympg").value);

    let data = {
        "features": [2, fueltype, "std", "four", carbody, "rwd", "front", 113.0, 193.2, 70.6, 54.9, 3200, "ohc", "six", enginesize, "mpfi", 3.78, 3.48, 9.0, horsepower, 5700, citympg, highwaympg]
    };

    try {
        let response = await fetch("http://127.0.0.1:8000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        let result = await response.json();
        document.getElementById("result").innerHTML = "Predicted Price: $" + result.predicted_price;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error predicting price!";
    }
});
