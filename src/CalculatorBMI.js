import React, { useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

const CalculatorTab = () => {
  const [weight, setWeight] = useState("");

  const [height, setHeight] = useState("");

  const [bmiPercentage, setBMIPercentage] = useState("");

  const onHeightChange = (event) => setHeight(event.target.value);

  const onWeightChange = (event) => setWeight(event.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const heightinMeters = height / 100;
    const heightSquared = heightinMeters * heightinMeters;
    const BMI = Math.round(weight / heightSquared);
    setBMIPercentage((BMI / 50) * 1000);
    console.log(bmiPercentage);
    //alert(BMI);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>BMI Calculator</h1>
      </div>

      <h3>Standard Calculation</h3>
      <br />
      <form onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="WeightInput">Weight in Kilogram</label>
          <input
            type="number"
            class="form-control"
            id="WeightInput"
            aria-describedby="weightInput"
            placeholder="Enter weight"
            value={weight}
            onChange={onWeightChange}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="HeightInput">Height in Centimeters</label>
          <input
            type="number"
            class="form-control"
            id="HeightInput"
            placeholder="Enter Height"
            value={height}
            onChange={onHeightChange}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <br />
      <div className="bmi_calculation">
        <ReactSpeedometer
          width={500}
          needleHeightRatio={0.7}
          value={bmiPercentage}
          currentValueText="Body Mass Index"
          customSegmentLabels={[
            {
              text: "Under Weight",
              position: "INSIDE",
              color: "#555",
              endColor: "#FF471A",
            },
            {
              text: "Normal Weight",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "OverWeight",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Obese",
              position: "INSIDE",
              color: "#555",
            },
            {
              text: "Morbidly Obese",
              position: "INSIDE",
              color: "#555",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CalculatorTab;
