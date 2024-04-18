// React events are written in camelCase syntax
// React event handlers are written inside curly braces
<button onClick={shoot}>Take the Shot!</button>

// Example
function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }

    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}

// Example with args
function Football() {
    const shoot = () => {
        alert("Great Shot!");
    }
  
    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    );
}

// Event handlers have access to the React event that triggered the function
// Sending the event object manually
function Football() {
    const shoot = (a, b) => {
        alert(b.type);
        /*
        'b' represents the React event that triggered the function,
        in this case the 'click' event
        */
    }
  
    return (
        <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
    );
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);

