// JSX
const myElement = <h1>I Love JSX!</h1>;

// Expression
const myElement2 = <h1>React is {5 + 5} times better with JSX</h1>;

// Block
const myElement3 = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);

// MUST be wrapped in one top level element
const myElement4 = (
    <div>   
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </div>
);

// Fragment also works
const myElement5 = (
    <>
        <p>I am a paragraph.</p>
        <p>I am a paragraph too.</p>
    </>
);

// Elements must be closed
const myElement6 = <input type="text" />;

// Use classname instead of class
const myElement7 = <h1 className="myclass">Hello World</h1>;

// If statements stay outside
const x = 5;
let text = "Goodbye";
if (x < 10) {
    text = "Hello";
}
const myElement8 = <h1>{text}</h1>;

// Ternary is fine
// in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
const xx = 5;
const myElement9 = <h1>{(xx) < 10 ? "Hello" : "Goodbye"}</h1>;