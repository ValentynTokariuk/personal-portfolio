import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const App = () => {
  return (
    <Router>
      <div className="portfolio">
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/" element={<Home />} />

        </Routes>

        <footer>
          <p>Contact: example@example.com</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
