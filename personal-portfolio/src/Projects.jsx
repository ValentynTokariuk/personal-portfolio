import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <img src="project-image.jpg" alt="Project" className="project-image" />
          <h3>Project Title</h3>
          <p>This is a brief description of the project.</p>
          <a href="https://github.com/your-username/project-link" target="_blank">View Project</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
