// React Props are like function arguments in JavaScript and attributes in HTML.
// To send props into a component, use the same syntax as HTML attributes
// React Props are read-only! You will get an error if you try to change their value.

function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}
const myElement = <Car brand="Ford" />;

// Component to component
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand="Ford" />
        </>
    );
}

// With variable
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
    const carName = "Ford";
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <Car brand={ carName } />
        </>
    );
}

// With object
function Car(props) {
    return <h2>I am a { props.brand }!</h2>;
}
  
function Garage() {
    const carInfo = { name: "Ford", model: "Mustang" };
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carInfo } />
      </>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);