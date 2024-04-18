// Example
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
  
  // Textarea
  function MyForm() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
  
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    )
  }

  // Select
  function MyForm() {
    const [myCar, setMyCar] = useState("Volvo");
  
    const handleChange = (event) => {
      setMyCar(event.target.value)
    }
  
    return (
      <form>
        <select value={myCar} onChange={handleChange}>
          <option value="Ford">Ford</option>
          <option value="Volvo">Volvo</option>
          <option value="Fiat">Fiat</option>
        </select>
      </form>
    )
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
