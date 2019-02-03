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
  padding-top: 6%;
  @media (min-height: 1000px) {
    padding-top: 35%;
    font-size: 2vw;
  }
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
  @media (min-height: 1500px) {
    padding: 15%;
    font-size: 5rem;
  }
`;
const Button = styled.button`
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: red; /* Set a background color */
  color: white; /* Text color */
  cursor: pointer; /* Add a mouse pointer on hover */
  padding: 15px; /* Some padding */
  border-radius: 10px; /* Rounded corners */
  font-size: 18px; /* Increase font size */

  // #myBtn:hover {
  //   background-color: #555; /* Add a dark-grey background on hover */
  // }
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
      <React.Fragment>
        <Container>
          <div class="item name">Ben Tubby</div>
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
        <Button onClick={this.topFunction} id="myBtn" title="Go to top">
          Top
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
