import React from "react";
import "./styles.css"; // Using a simple CSS file instead of Tailwind

const Portfolio = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1> HELLO IM SATHWIK </h1>
        <p>A passionate developer building cool projects.</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>
      
      {/* About Me Section */}
      <section className="about">
        <h2>ABOUT ME</h2>
        <p>I'm a web and AI&DS enthusiast working on various projects to improve my skills.</p>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>PROJECTS</h2>
        <div className="project-card">
          <h3>To-Do List App</h3>
          <p>A simple task management app.</p>
          <a href="https://github.com/yourgithub/todo-app">GitHub</a>
        </div>
        <div className="project-card">
          <h3>Weather App</h3>
          <p>Check real-time weather conditions.</p>
          <a href="https://github.com/yourgithub/weather-app">GitHub</a>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="contact">
        <h2>CONTACT ME </h2>
        <p>Let's connect!</p>
        <div className="social-links">
          <a href="https://github.com/yourgithub">GitHub</a>
          <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          <a href="mailto:your.email@example.com">Email</a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
