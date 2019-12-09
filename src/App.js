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
        <p>THIs is AbOuT Me</p>
      </section>
      <section>
        <a href="https://vannoppen.co">Vannoppen</a>
      </section>
      <footer className="App-footer">Whatever Text I want</footer>
    </div>
  );
}

export default App;
