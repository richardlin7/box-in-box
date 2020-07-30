// get .map to work: works
// add to child list when clicked: works

// create recursion for makeBox method

//current issue:
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          height: 700,
          width: 1400,
        }}
      >
        <Box />
      </div>
    );
  }
}

export default App;

class Box extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "70%",
          height: "70%", // render at 70 percent smaller height
          margin: "1%",
          border: "1px solid black",
        }}
        onClick={this._onClick}
        onContextMenu={this._onContextMenu}
      >
        {this.state.child.map((child, i) => {
          return (
            <Box
              key={i}
              // index={this.state.index === index}
              child={child}
              _onClick={() => this._onClick(i)}
              _onContextMenu={() => this._onContextMenu(this.i)}
            />
          );
        })}
      </div>
    );
  }

  constructor() {
    super();
    this.state = { index: 0, child: [] };

    this._onClick = this._onClick.bind(this);
    this._onContextMenu = this._onContextMenu.bind(this);
  }

  _onClick(e) {
    e.stopPropagation();
    this.setState({
      child: this.state.child.concat(""),
      index: this.state.index + 1,
    });
    console.log("box made");
  }

  _onContextMenu(e) {
    if (this.state.index !== 0) {
      const child = this.state.child;
      var nChild = child.slice(0, -1);
      e.stopPropagation();
      this.setState({
        child: nChild,
        index: this.state.index - 1,
      });
      console.log("box removed");
    }
  }
}
