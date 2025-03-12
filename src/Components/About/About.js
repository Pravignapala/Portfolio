import React from "react";
import './../About/About.css'

const About = () => {
    return(
      <section id="about" className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Hi, I'm <strong>Pravigna Pala</strong>, a passionate <strong>Full Stack Developer</strong> with expertise in <strong>React, Node.js, Python, and Cloud Technologies</strong>.  
            I have experience building <strong>scalable web applications, cloud-based solutions, and machine learning models</strong>.
          </p>
  
          <p>
            With a background in <strong>Computer Science & Software Engineering</strong>, I have worked on various projects, including <strong>fraud detection models, predictive analytics, and full-stack applications</strong>.
          </p>
  
          <p>
            I am currently pursuing my <strong>Master’s in Computer Science at the University of Missouri – Kansas City</strong>, and I am always eager to learn new technologies and solve complex problems.
          </p>
  
          <p><strong>Let’s build something amazing together! 🚀</strong></p>
        </div>
      </section>
    );
  };

export default About