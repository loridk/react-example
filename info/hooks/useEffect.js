import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Use setTimeout() to count 1 second after initial render
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer) // <- clean up your timer
  }, []); // <- add empty brackets here, if not, it will keep running

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

useEffect(() => {
    //Runs on every render
});

useEffect(() => {
    //Runs only on the first render
}, []);

useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
}, [prop, state]);


// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter />);
