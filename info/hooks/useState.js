// Here we are using the useState Hook to keep track of the application state
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  // The first value, color, is our current state.
  // The second value, setColor, is the function that is used to update our state.
  // Then set a default value useState("red") - this can be empty
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        // arrow function to set the color on click
        // We should never directly update state. Ex: color = "red" is not allowed.
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
  
    return (
      <>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
      </>
    )
  }

  // Since we are now tracking a single object, we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand)
  function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
      </>
    )
  }

  // Update just one part of the state/object
  function Car() {
    const [car, setCar] = useState({
      brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
  
    const updateColor = () => {
      setCar(previousState => {
        // just update color, keep previous
        return { ...previousState, color: "blue" }
      });
    }
  
    return (
      <>
        <h1>My {car.brand}</h1>
        <p>
          It is a {car.color} {car.model} from {car.year}.
        </p>
        <button
          type="button"
          onClick={updateColor}
        >Blue</button>
      </>
    )
  }
  
  root.render(<Car />);