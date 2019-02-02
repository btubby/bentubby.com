import React, { Component } from "react";
import logo from "./logo.svg";
import tubby from "./Assets/ThorbV3.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div id="container">
          <p>Ben Tubby</p>

          {/* <p>
            <a href="https://en.wikipedia.org/wiki/Blue">Home</a>
          </p> */}

          <p>
            <a href="#about">About</a>
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
        <div id="container">
          <div className="about">
            <a name="about">About</a>
            <p>An experienced full stack developer based in the UK.</p>
            <br />
            Find me on
            <a href="https://www.linkedin.com/in/bentubby/">LinkedIn</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
