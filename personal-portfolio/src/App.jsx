import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="portfolio">
      <header>
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>This is a short description about myself.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        {/* You can add project components here later */}
      </section>

      <footer>
        <p>Contact: example@example.com</p>
      </footer>
    </div>
  );
};

export default App;
