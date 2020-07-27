// Logic Process: clicked a box in parent =>
// sent to onClick method =>
// calls something that creates a new class with a box =>
//(SHARES SIMILAR CODE AS PARENT AND REDUCED SIZE)

//IE: root pass state down to child => child pass their state to their child etc.

//create a method that will render box however many times its clicked
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <div
          onClick={this._onClick}
          onContextMenu={this._onContextMenu}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            height: this.height,
            width: this.width,
            border: "1px solid black",
          }}
        />
        {_makeBox(this.state.child, this.height, this.width)}
      </div>
    );
  }
  constructor() {
    super();
    this.height = 700;
    this.width = 1200;
    this.state = { child: 0 };
  }

  _onClick = (e) => {
    e.preventDefault();
    // console.log("clicked");
    this.setState({ child: this.state.child + 1 });
  };

  _onContextMenu = (e) => {
    e.preventDefault();
    if (this.state.child !== 0) {
      this.setState({ child: this.state.child - 1 });
    }
    return;
  };
}

function _makeBox(value, height, width) {
  for (var i = 0; i < value; i++) {
    console.log("making box");
    return <Box child={value} height={height} width={width} />;
  }
  return;
}

export default App;

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
            height: this.props.height * 0.7,
            width: this.props.width * 0.7,
            border: "1px solid black",
          }}
        />
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
