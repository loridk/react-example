// Inline - must use camelCase
const Header = () => {
    return (
      <>
        <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }

// Style objects
const Header2 = () => {
    const myStyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return (
      <>
        <h1 style={myStyle}>Hello Style!</h1>
        <p>Add a little style!</p>
      </>
    );
  }
