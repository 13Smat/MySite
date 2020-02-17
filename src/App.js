import React from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Particles from 'react-particles-js';


const particalOpt = {
  particles:{
    number:{
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked:{
      distance: 100,
      opacity: .2,
      width: 2,
    },
    move:{
      speed: 1,
      bounce: true,
    }
  }
}

function App() {
  return (
    <div className="App">
      <div className="background">
        <Particles 
        params = {particalOpt}
        />
      </div>
      <div className="Nav-bar">
        <AnchorLink href="#About_Me" className="Nav-item hvr-shrink">About Me</AnchorLink>
        <AnchorLink href="#Recent_Work" className="Nav-item hvr-shrink">Work History</AnchorLink>
        <AnchorLink href="#Contact_Info" className="Nav-item hvr-shrink">Contact Info</AnchorLink>
      </div>
      <header className="App-header">
        <h1>Full Stack Developer located in Morganton, NC</h1>
        <h2>Andy Silver</h2>
      </header>
      <section id="About_Me">
        <h3 class="panel">About Me</h3>
        <p>
          I am a{" "}
          <strong>Western Carolina University Computer Science Graduate</strong>{" "}
          currently working at <a href="https://vannoppen.co">VanNoppen Marketing</a> as a{" "}
          <strong>full stack developer</strong>. I create and assist in creating
          complex <strong>custom software applications</strong> for our clients
          website. I spend my free time doing small projects like this one so I
          can continue to expand my knowledge. I also have experience
          developing in
          <strong> Python, Java, JavaScript, CSS, GO, bash scripting, HTML, and PosgreSQL. </strong>
          I do work as a freelance SquareSpace developer so
          if you want to get in contact with me my email is down below.
        </p>
      </section>
      <section id="Recent_Work">
        <h2>Recent Work Experience</h2>
        <p>
          I currently work at{" "}
          <a href="https://vannoppen.co">VanNoppen Marketing</a> as a full stack
          web developer. 
        </p>
        <p>
          Before that I worked as a table games dealer, specifically blackjack, at
          the{" "}
          <a href="https://www.caesars.com/harrahs-cherokee">
            Harrah's Cherokee Casino
          </a>
          .
        </p>
        <p>I also had a great time being a part-time security guard with Axis Security.</p>
      </section>
      <section id="Contact_Info">
        <h2>Contact Information</h2>
        <br />
        <p>
          My personal email is <a href="mailto:andysilver13@gmail.com">andysilver13@gmail.com</a>.
        </p>
        <p>
          My GitHub is <a href="https://github.com/13Smat">https://github.com/13Smat</a>.
        </p>
        <footer className="App-footer">
        <ScrollToTop />
      </footer>
      </section>
    </div>
  );
}

export default App;
