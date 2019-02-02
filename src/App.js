import React, { Component } from "react";
import logo from "./logo.svg";
import tubby from "./Assets/ThorbV3.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <p>
            <a href="https://en.wikipedia.org/wiki/Red">Ben Tubby</a>
          </p>

          {/* <p>
            <a href="https://en.wikipedia.org/wiki/Blue">Home</a>
          </p> */}

          <p>
            <a href="https://en.wikipedia.org/wiki/Yellow">About</a>
          </p>

          <p>
            <a href="https://en.wikipedia.org/wiki/Green">Work</a>
          </p>

          <p>
            <a href="https://en.wikipedia.org/wiki/Orange_(colour)">Contact</a>
          </p>

          <p>
            <a href="https://www.flickr.com/photos/tubby/">Photography</a>
          </p>
        </div>

        <div className="App">
          <header className="App-header">
            <img src={tubby} className="App-logo" alt="logo" />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
