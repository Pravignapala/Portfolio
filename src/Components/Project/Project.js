import React from "react";
import './../Project/Project.css'

const projects = [
    {
      title: "Fraudulent Transaction Detection",
      description:
        "Developed a machine learning model using PySpark and ML techniques to detect fraudulent transactions with 99% accuracy.",
      techStack: ["Python", "PySpark", "Machine Learning"],
    },
    {
      title: "Predictive Purchase Model",
      description:
        "Implemented a decision tree model to predict consumer purchasing behavior, increasing sales forecasting accuracy by 30%.",
      techStack: ["Python", "Data Science", "Machine Learning"],
    },
    {
      title: "Cloud-Based Banking Chatbot",
      description:
        "Developed an NLP-powered chatbot for banking queries, deployed using Flask and Docker for scalable cloud integration.",
      techStack: ["Python", "Flask", "Docker", "NLP"],
    },
    {
      title: "E-commerce Recommendation System",
      description:
        "Built a collaborative filtering recommendation engine to suggest products based on user behavior.",
      techStack: ["Python", "Machine Learning", "Pandas"],
    },
  ];
const Project=()=>{
    return(
        <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech">{tech}</span>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </section>
    )
}

export default Project