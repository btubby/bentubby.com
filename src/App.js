import React, { Component } from "react";
import tubby from "./Assets/ThorbV3.svg";
import "./App.css";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  height: 100vh;
  padding-top: 4%;
`;
const Inner = styled.div`
display: flex;
flex-direction: column;
  @media (max-height: 450px) {
   flex-direction:row
    justify-content:space-between;
  }
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
  @media (max-height: 450px) {
    font-size: 2em;
  }
  @media (max-width: 650px) {
    line-height: 1em;
  }
`;

class App extends Component {
  componentDidMount() {
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      this.scrollFunction();
    };
  }

  scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  };
  // When the user clicks on the button, scroll to the top of the document
  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  render() {
    return (
      <div>
        <div class="item name">Ben Tubby</div>
        <button onClick={this.topFunction} id="myBtn" title="Go to top">
          Top
        </button>
        <Container>
          <Inner>
            <div class="item about">
              <a href="#about">About</a>
            </div>
            <div class="item photography">
              <a target="_" href="https://www.flickr.com/photos/tubby/">
                Photography
              </a>
            </div>
          </Inner>
          <Inner>
            <div class="item work">
              <a target="_" href="http://www.fairfx.com">
                Work
              </a>
            </div>
            <div class="item contact">
              <a href="#contact">Contact</a>
            </div>
          </Inner>
        </Container>

        <div className="App">
          <header className="App-header">
            <img src={tubby} className="App-logo" alt="logo" />
          </header>
        </div>

        <Section>
          <a name="about" />
          <About>
            Hi, I'm an experienced full stack developer based in the UK.
            <br />I enjoy&nbsp;
            <span class="about">
              <a
                target="_"
                href="https://www.flickr.com/photos/tubby/collections/72157600056784273"
              >
                travel
              </a>
            </span>
            . Sometimes I even&nbsp;
            <span class="about">
              <a target="_" href="http://bentubby.blogspot.com/">
                write about it
              </a>
              .
            </span>
            <br />
            Find me on&nbsp;
            <span class="about">
              <a target="_" href="https://www.linkedin.com/in/bentubby/">
                LinkedIn
              </a>
              .
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
