import React from "react";
import './../Skills/Skills.css'

const skillsData = [
    { category: "Programming Languages", skills: ["Python", "Java", "JavaScript", "TypeScript"] },
    { category: "Frameworks & Libraries", skills: ["Angular", "React.js", "Flask", "TensorFlow", "PyTorch"] },
    { category: "Databases", skills: ["MySQL", "MongoDB", "DynamoDB", "NoSQL"] },
    { category: "Cloud Platforms", skills: ["AWS (Lambda, S3, EC2)", "Azure (Functions, CosmosDB)", "GCP (BigQuery)"] },
    { category: "Developer Tools", skills: ["VS Code", "JIRA", "Eclipse", "Docker", "Kubernetes", "IntelliJ"] },
    { category: "Web Technologies", skills: ["HTML", "CSS", "RESTful APIs", "GraphQL"] },
    { category: "CI/CD & DevOps", skills: ["Jenkins", "GitHub Actions", "Terraform"] },
    { category: "Operating Systems", skills: ["Windows", "Linux (Ubuntu, CentOS)"] },
    { category: "Testing Frameworks", skills: ["JUnit", "PyTest", "Autify", "Selenium"] }
  ];
  
  const Skills = () => {
    return (
      <section id="skills" className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-container">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="skill-category">
              <h3>{skillCategory.category}</h3>
              <ul>
                {skillCategory.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Skills;