// Arrows
hello = () => "Hello World!";
hello = val => "Hello " + val;

// Array map
const myArray = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>)


// Destructing
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car, truck, suv] = vehicles;

    // If we only want the car and suv we can simply leave out the truck but keep the comma:
    const vehicles2 = ['mustang', 'f-150', 'expedition'];
    const [car2,, suv2] = vehicles2;

    // examples
    function calculate(a, b) {
        const add = a + b;
        const subtract = a - b;
        const multiply = a * b;
        const divide = a / b;
      
        return [add, subtract, multiply, divide];
      }
      
      const [add, subtract, multiply, divide] = calculate(4, 7);

      const vehicleOne = {
        brand: 'Ford',
        model: 'Mustang',
        type: 'car',
        year: 2021, 
        color: 'red',
        registration: {
          city: 'Houston',
          state: 'Texas',
          country: 'USA'
        }
      }
      
      myVehicle(vehicleOne)
      
      function myVehicle({ model, registration: { state } }) {
        const message = 'My ' + model + ' is registered in ' + state + '.';
      }

// Spread Operator
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];

    // Assign the first and second items from numbers to variables and put the rest in an array
    const numbers = [1, 2, 3, 4, 5, 6];
    const [one, two, ...rest] = numbers;

    // combine objects
    const myVehicle = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red'
    }
    
    const updateMyVehicle = {
      type: 'car',
      year: 2021, 
      color: 'yellow'
    }
    
    const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// ternary
authenticated ? renderApp() : renderLogin();

