import React from "react";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="App">
      <div className="background">
        {Array(49)
          .fill()
          .map(_ => {
            return <span></span>;
          })}
      </div>
      <header className="App-header">
        <h1>Full Stack Developer located in Morganton, NC</h1>
        <h2>Andy Silver</h2>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          I am a{" "}
          <strong>Western Carolina University Computer Science Graduate</strong>{" "}
          currently working at VanNoppen Marketing as a{" "}
          <strong>full stack developer</strong>. I create and assist in creating
          complex <strong>custom software applications</strong> for our clients
          website. I spend my free time doing small projects like this one so I
          can continue to expand my knowledge in the{" "}
          <strong>Web Development Industry</strong>. I also have experience
          developing in
          <strong> Python, Java, JavaScript, CSS, and PosgreSQL.</strong>
        </p>
      </section>
      <section>
        <h2>Recent Work Experience</h2>
        <p>
          I currently work at{" "}
          <a href="https://vannoppen.co">VanNoppen Marketing</a> as a full stack
          web developer. 
        </p>
        <p>
          Before that I work as a table games dealer, specificaly blackjack, at
          the{" "}
          <a href="https://www.caesars.com/harrahs-cherokee">
            Harrah's Cherokee Casino
          </a>
          .
        </p>
      </section>
      <section>
        <h2>Contact Information</h2>
        <br />
        <p>
          My personal email is <a href="mailto:andysilver13@gmail.com">andysilver13@gmail.com</a>.
        </p>
        <p>
          My GitHub is <a href="https://github.com/13Smat">https://github.com/13Smat</a>.
        </p>
      </section>
      <footer className="App-footer">
        Whatever Text I want<br />
        <ScrollToTop />
      </footer>
    </div>
  );
}

export default App;
