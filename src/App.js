// get .map to work: works
// add to child list when clicked: works

// create recursion for makeBox method

//current issue: box does not generate in child component
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

  _makeBox(index) {
    // create recursion f6or makeBox method
    if ((index = 1)) {
      // when index(click) is 1, it returns the box once.
      return (
        <Box
          onClick={() => this._onClick()}
          onContextMenu={() => this._onContextMenu()}
          makeBox={() => this._makeBox()}
        />
      );
    }
    return index * this._makeBox(index - 1); // returns box (index) many times
  }
}

export default App;

class Box extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "70%",
            height: "70vh", // render at 70 percent smaller height
            margin: "1%",
            border: "1px solid black",
          }}
          onClick={this._onClick}
          onContextMenu={this._onContextMenu}
        />
        {this.state.child.map(this.props.makeBox)}
      </div>
    );
  }
  constructor() {
    super();
    this.state = { index: 0, child: [] };

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
}
