import React, { Component } from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";
import Particles from 'react-particles-js';
import Nav from './components/Nav';

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

class App extends Component {

  constructor(){
    super();
    this.state = {
      scrolled: false,
    }
  }

  render() {
      return (
        <div className="App">
          <div className="background">
              <Particles 
              params = {particalOpt}
              className="background"/>
          </div>
          <nav><Nav /></nav>
          <section id="Home">
          <header className="App-header">
            <h1>Full Stack Developer located in Morganton, NC</h1>
            <h2>Andy Silver</h2>
          </header>
          </section>
          <section id="About_Me">
            <h3 class="panel">About Me</h3>
            <p>
              I am a{" "}
              <strong>Western Carolina University Computer Science Graduate</strong>{" "}.
              I have full stack web development experience working for <a href="https://vannoppen.co">VanNoppen Marketing</a>. 
              Due to COVID-19 I have been doing freelance work since March of 2020.
              During my time with VanNoppen I created and assisted in creating complex <strong>custom software applications</strong> for our clients
              websites. I spend my free time doing small projects like this one so I
              can continue to expand my knowledge. I also have experience developing in
              Python, Java, JavaScript, CSS, GO, bash scripting, HTML, and PosgreSQL along with a few other languages.
              I currently work for <strong> Lowe's Companies Inc </strong> as a <strong> Software Engineer </strong>.
            </p>
          </section>
          <section id="Recent_Work">
            <h2>Recent Work Experience</h2>
            <p>
              I worked at{" "}
              <a href="https://vannoppen.co">VanNoppen Marketing</a> as a full stack
              web developer from July, 2019 until April, 2020. 
            </p>
            <p>
              Before that, I worked as a table games dealer, specifically blackjack, at
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
            <p>For a PDF copy of my resume <a href='./Resume.pdf' download>click here</a>.</p>
            <footer className="App-footer">
            <ScrollToTop />
          </footer>
          </section>
        </div>
      );
    }
}

export default App;
