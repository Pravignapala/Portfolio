import React from "react";
import './../WorkExp/WorkExp.css'

const WorkExp=()=>{
    return(
        <section id="workexp" className="work-experience">
      <h2>Work Experience</h2>

      <div className="job">
        <h3>Graduate Assistant</h3>
        <p className="company">University of Missouri – Kansas City | Aug 2023 – Dec 2024</p>
        <ul>
          <li>Supported the design and evaluation of distributed systems and data structures.</li>
          <li>Assisted in debugging and optimizing student projects.</li>
          <li>Conducted workshops on API integration, unit testing, and agile methodologies.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Software Developer Intern</h3>
        <p className="company">VComply Technologies | Aug 2022 – Jul 2023</p>
        <ul>
          <li>Built scalable web applications using Java, Ruby, and React.</li>
          <li>Designed modular, reusable front-end components.</li>
          <li>Optimized backend performance, reducing latency by 25%.</li>
        </ul>
      </div>

      <div className="job">
        <h3>Industrial Intern</h3>
        <p className="company">NICO Info Systems | Apr 2021 – May 2021</p>
        <ul>
          <li>Developed a recommendation system using Python and ML models.</li>
          <li>Implemented real-time data pipelines, improving system accuracy by 15%.</li>
          <li>Conducted unit testing to ensure system reliability.</li>
        </ul>
      </div>
    </section>
    )
}

export default WorkExp