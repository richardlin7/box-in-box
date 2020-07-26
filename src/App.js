// make parent component that renders a box
// when clicked inside, render box inside

// Logic Process: clicked a box in parent =>
// sent to onClick method =>
// calls something that creates a new class with a box =>
//(SHARES SIMILAR CODE AS PARENT AND REDUCED SIZE)

//IE: root pass state down to child => child pass their state to their child etc.
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={this._onClick}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: this.state.height,
            width: this.state.width,
            border: "1px solid black",
          }}
        />
        {makeBox(this.state.child)}
      </div>
    );
  }
  constructor() {
    super();
    this.state = { height: 700, width: 1200 };
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    console.log("clicked");
  }
}

class Box extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={this._onClick}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: this.props.height,
            width: 1000,
            border: "1px solid black",
          }}
        />
        {makeBox(this.state.child)}
      </div>
    );
  }
  constructor() {
    super();
    this.state = { child: "" };
    this._onClick = this._onClick.bind(this);
  }
  _onClick() {
    console.log("clicked");
    this.setState({ child: "" });
  }
}

function makeBox(x) {
  if (x === 1) {
    console.log("BOX MADE!");
    return <Box />;
  }
  return;
}
export default App;
