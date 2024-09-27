import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home">
        <div className="hero" data-aos="fade-up">
            <h1>Hi, I'm Valentyn Tokariuk</h1>
            <p>Beginning Full Stack Developer, passionate about building functional and responsive web applications.</p>
            <a href="/projects" className="cta-btn" data-aos="fade-right">View My Projects</a>
            <a href="/contact" className="cta-btn" data-aos="fade-left">Contact Me</a>
        </div>
        <div className="skills" data-aos="fade-up">
          <h2>Technologies I Work With</h2>
          <ul className="hard-skills">
            <li>Frontend: React, HTML5, CSS3</li>
            <li>Backend: Node.js, SQL</li>
            <li>Data Management Systems: SQL Server, Basware, NAV</li>
            <li>Git & GitHub</li>
            <li>Basic knowledge: Python, C++, Java, R</li>
            <li>Useful tools: Docker, Postman, Netlify, FastAPI, Google Cloud</li>
          </ul>
          <h2>Languages I speak</h2>
          <ul className="languages">
            <li>English - fluent</li>
            <li>Ukrainian - native</li>
            <li>Polish - fluent</li>
            <li>Russian - fluent</li>
            <li>Romanian - basic</li>
          </ul>
          <h2>Soft skills</h2>
          <ul className="soft-skills">
            <li>Problem-Solving</li>
            <li>(Intercultural) Communication</li>
            <li>Adaptability</li>
            <li>Teamwork</li>
            <li>Time Management</li>
            <li>Critical Thinking</li>
            <li>Openness to Feedback</li>
          </ul>
        </div>
        {/* Education Section */}
        <div className="education" data-aos="fade-up">
          <h2>Education</h2>
          <ul className="education-list">
            <li>
              <h3>West Pomeranian University of Technology (Poland)</h3>
              <p>Bachelor of Computer Science (2021-ongoing)</p>
            </li>
            <li>
              <h3>University of Malta (Intern)</h3>
              <p>Computer Science (2024)</p>
            </li>
          </ul>
        </div>

        {/* Work Experience Section */}
        <div className="experience" data-aos="fade-up">
          <h2>Work Experience</h2>
          <ul className="experience-list">
            <li>
              <h3>Master Data Specialist - Ossur</h3>
              <p>Worked on managing customer/vendor data and enhancing processes.</p>
              <p>2023 - Present</p>
            </li>
            <li>
              <h3>Airbnb Host</h3>
              <p>Managed listings, guests, and market research for competitive pricing.</p>
              <p>2024</p>
            </li>
            <li>
              <h3>Waiter/Bartender - Sphinx, Poland & The Brew, Premier Hall</h3>
              <p>Gained interpersonal and service management skills while working in hospitality.</p>
              <p>2019 - 2024</p>
            </li>
          </ul>
        </div>
    </section>
  );
};

export default Home;
