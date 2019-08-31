import React, { Component } from "react";
import tubby from "./Assets/ThorbV3.svg";
import "./App.css";

import styled from "styled-components";

const Project = styled.div`
  width 90%;
  // border: 1px solid;
  font-size: 1.5rem;
  line-height:1.3;
  font-color: #f1f1f3;
  margin-bottom:30px;
  padding:5px;

  &:hover, &:active, &:focus {
    color: #15181C;
    background-color: #ba02ff;
    outline: 0px;
}

`;
const ProjectTitle = styled.div`
  font-weight: bold;
  background-color:'grey';
`;

const ProjectLink = styled.div`
  font-size: 0.9em;
  
`;

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
const Button = styled.button`
  display: none; /* Hidden by default */
  position: fixed; /* Fixed/sticky position */
  bottom: 20px; /* Place the button at the bottom of the page */
  right: 30px; /* Place the button 30px from the right */
  z-index: 99; /* Make sure it does not overlap */
  border: none; /* Remove borders */
  outline: none; /* Remove outline */
  background-color: #ba02ff; /* Set a background color */
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
    this.scrollFunction();
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      this.scrollFunction();
    };
  }

  scrollFunction = () => {
    console.log(document.body.scrollTop, document.documentElement.scrollTop);
    document.getElementById("myBtnTop").style.display = "none";
    document.getElementById("myBtnDown").style.display = "block";
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("myBtnTop").style.display = "block";
      document.getElementById("myBtnDown").style.display = "none";
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
            <a href="#projects">Projects</a>
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
            👋🏻 Hi, I'm an experienced full stack developer
            <p/>
            I am based in the UK.
            <p/>
            I enjoy&nbsp;
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

        <Section>
          <About>
            <a name="contact" />
            <br />
            07982613944
            <br />
            btubby@gmail.com
          </About>
        </Section>

        <Section>
          <About>
            <a name="projects" />
            <br />
            PROJECTS
            <br />

            <Project>
              <ProjectTitle>
               💳 Equals Go Multicurrency Card
              </ProjectTitle>
              The first customer facing product to launch after our rebrand.
              <br/>
              I worked on the web app, built with react.
              
              <ProjectLink>
              <div class=" work">
                <a target="_" href="http://www.equals.co">www.equals.co</a>
              </div>
              </ProjectLink>
            </Project>
            
            <Project>
              <ProjectTitle>
                Equals Design Library
              </ProjectTitle>
              Our first design system.  Tokens, styles and widgets used across our sites.
              <br/>
              <ProjectLink>
              <div class=" work">
                <a target="_" href="https://fuji.fairfx.io">fuji.fairfx.io</a>
                </div>
              </ProjectLink>
            </Project>

            <Project>
              <ProjectTitle>
                FairFX
              </ProjectTitle>
              I have contributed lots to this large Perl codebase.   Frontend, backend and API layers 
              <br/>
              <ProjectLink>
              <div class=" work">
                <a target="_" href="http://www.fairfx.com">www.fairfx.com</a>
                </div>
              </ProjectLink>
            </Project>
             
            <Project>
              <ProjectTitle>
              🥁 Ten Tonne Ska
              </ProjectTitle>
              "The best Ska and Reggae band in SE26"
              <br/>
              <ProjectLink>
              <div class=" work">
                <a target="_" href="http://www.tentonneska.com">www.tentonneska.com</a>
                </div>
              </ProjectLink>
            </Project>
          
            <Project>
               <ProjectTitle>
               🎨 Tubby Creative
              </ProjectTitle>
              Flickr powered portfolio site I built for my brother.
              <ProjectLink>
              <div class=" work">
                <a target="_" href="http://www.tubbycreative.com/">www.tubbycreative.com</a>
                </div>
              </ProjectLink>
            </Project>
          </About>
        </Section>
      


        <Button onClick={this.topFunction} id="myBtnTop" title="Go to top">
          ☝️
        </Button>
        <Button onClick={this.topFunction} id="myBtnDown" title="Go to top">
          👇
        </Button>
      </React.Fragment>
    );
  }
}

export default App;
