// When creating a React component, the component's name MUST start with an upper case letter.
// A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
//The component also requires a render() method, this method returns HTML.

// Class component (Outdated?)
class Car extends React.Component {
    render() {
        return <h2>Hi, I am a Car!</h2>;
    }
}

// Function component (props are properties)
function Car(props) {
    return <h2>I am a {props.color} Car!</h2>;
}
  
// Render component with prop
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car color="red"/>);
*/

// Components in components
function Car() {
    return <h2>I am a Car!</h2>;
}
  
function Garage() {
    return (
        <>
        <h1>Who lives in my Garage?</h1>
        <Car />
        </>
    );
}
// Render component
/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
*/

// in file that would be Car.js
function Car() {
    return <h2>Hi, I am a Car!</h2>;
}
  
export default Car;

// Import the Car component
import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);