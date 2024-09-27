import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div className="portfolio">
        <header>
          <h1>Valentyn Tokariuk</h1>
          <h2>Full Stack Developer</h2>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} /> 
          <Route path="*" element={<Home />} /> {/* Catch-all route to avoid 404 errors */}
        </Routes>

        <footer>
          <h3><Link to="/contact">Contact</Link></h3>
          
        </footer>
      </div>
    </Router>
  );
};

export default App;
