import React, { Component } from "react";
import logo from "./logo.svg";
import tubby from "./Assets/ThorbV3.svg";
import "./App.css";

import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  padding-top: 4%;
`;
const Section = styled.div`
  width: 80%;
  margin: auto;
  height: 100vh;
  padding-top: 4%;
  font-size: 1rem;
`;
const About = styled.div`
  font-size: 3em;
  color: #fff;
  font-family: Iceland;
  line-height: 2em;
`;
class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <p>Ben Tubby</p>

          {/* <p>
            <a href="https://en.wikipedia.org/wiki/Blue">Home</a>
          </p> */}

          <div class="item about">
            <a href="#about">About</a>
          </div>

          <p>
            <a href="http://www.fairfx.com">Work</a>
          </p>

          <p>
            <a href="#contact">Contact</a>
          </p>

          <p>
            <a href="https://www.flickr.com/photos/tubby/">Photography</a>
          </p>
        </Container>

        <div className="App">
          <header className="App-header">
            <img src={tubby} className="App-logo" alt="logo" />
          </header>
        </div>
        <Section>
          <a name="about" />
          <About>
            <br />
            Hi, I'm an experienced full stack developer based in the UK.
            <br />I enjoy&nbsp;
            <span class="about">
              <a href="https://www.flickr.com/photos/tubby/collections/72157600056784273">
                travel
              </a>
            </span>
            . Sometimes I even&nbsp;
            <span class="about">
              <a href="http://bentubby.blogspot.com/">write about it</a>
            </span>
            <br />
            <br />
            Find me on&nbsp;
            <span class="about">
              <a href="https://www.linkedin.com/in/bentubby/">LinkedIn</a>
            </span>
          </About>
        </Section>
        <Section>
          <About>
            <a name="contact" />
            <br />
            07982613944
            <br />
            btubby@gmail.com
          </About>
        </Section>
      </div>
    );
  }
}

export default App;
