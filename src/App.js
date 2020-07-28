// get .map to work: works
// add to child list when clicked: works

import React from "react";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: 700,
          width: 1400,
          border: "1px solid black",
        }}
        onClick={this._onClick}
        onContextMenu={this._onContextMenu}
      >
        {this.state.child.map(this._makeBox)}
      </div>
    );
  }

  constructor() {
    super();
    this.state = { index: 0, child: [] };
    this._makeBox = this._makeBox.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onContextMenu = this._onContextMenu.bind(this);
  }

  _onClick() {
    this.setState({
      child: this.state.child.concat(""),
      index: this.state.index + 1,
    });
    console.log("box made");
  }

  _onContextMenu(index) {
    if (this.state.index !== 0) {
      const child = this.state.child;

      child.splice(index, 1);
      this.setState({
        child,
        index: this.state.index - 1,
      });
      console.log("box removed");
    }
  }

  _makeBox(_, index) {
    for (var i = 0; i <= index; i++) {
      return (
        <Box
          key={index}
          onClick={() => this._onClick(index)}
          onContextMenu={() => this._onContextMenu(index)}
        />
      );
    }
    return;
  }
}

export default App;

class Box extends React.Component {
  render() {
    return (
      <div>
        <div
          // onClick={this.props.onClick}
          // onContextMenu={this.props.onContextMenu}
          style={{
            width: "70%",
            height: "70vh", // render at 70 percent smaller height
            margin: "1%",
            border: "1px solid black",
          }}
        />
      </div>
    );
  }
  constructor() {
    super();
    this.state = { index: 0, child: [] };
  }
}
