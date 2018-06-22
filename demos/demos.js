import React from "react";

export class Demos extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="demo-link">
          <button
            className="buttonStyle"
            onClick={() => window.location.assign("/demos/demo3")}
          >
            <a onClick={() => window.location.assign("/demos/demo3")}>
              Create Diagram
            </a>
          </button>
        </div>
      </div>
    );
  }
}
