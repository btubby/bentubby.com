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
  padding: 6% 0 6% 0;
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
padding-top:30px;
  font-size: 2em;
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
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Container>
          <div class="item name">Ben Tubby</div>
          <Inner>
            <div class="item about">
              <a target="_" href="https://www.linkedin.com/in/bentubby/">
                Work
              </a>

            </div>
            <div class="item photography">
              <a target="_" href="https://www.flickr.com/photos/tubby/">
                Photography
              </a>
            </div>
          </Inner>
        </Container>

        <div className="App">
          <header className="App-header">
            <img src={tubby} className="App-logo" alt="logo" />
          </header>
        </div>

        <Section>
          <About>
            Hi, I'm an experienced full stack developer
            <p/>
            I am based in the UK.
            <p/>
            I enjoy&nbsp;
              <a
                target="_"
                href="https://www.flickr.com/photos/tubby/collections/72157600056784273"
              >
                travel
              </a>
            . Sometimes I even&nbsp;
            <span class="about">
              <a target="_" href="http://bentubby.blogspot.com/">
                write about it
              </a>
              . <p />
              I like{" "}
              <a
                target="_"
                href="https://www.google.com/search?q=vegemite&rlz=1C5CHFA_enGB822GB822&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjgyJSe9KTgAhVhRBUIHdWmAwgQ_AUIDygC&biw=1680&bih=940"
              >
                Vegemite
              </a>
              .
            </span>
            <p/>
            Find me on&nbsp;
            <span class="about">
              <a target="_" href="https://www.linkedin.com/in/bentubby/">
                LinkedIn
              </a>
              .
            </span>
          </About>
        </Section>

      
      </React.Fragment>
    );
  }
}

export default App;
