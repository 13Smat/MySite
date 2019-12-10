import React from "react";
import "./App.css";

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
        I am a <strong>WCU Computer Science Graduate</strong> currently working at VanNoppen Marketing as a <strong>full stack developer</strong>. 
        I create and assist in creating complex <strong>custom software applications</strong> for our clients website. I spend my free time doing small projects like this one so I
        can continue to expand my knowledge in the <strong>Web Development Industry</strong>. I also have experience developing in <strong>Python, Java, C, JavaScript, and PosgreSQL.</strong>
        </p>
      </section>
      <section>
        <a href="https://vannoppen.co">VanNoppen</a>
      </section>
      <footer className="App-footer">Whatever Text I want</footer>
    </div>
  );
}

export default App;
