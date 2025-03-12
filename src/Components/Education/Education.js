import React from "react";
import './../Education/Education.css'

const Education=()=>{
    return(
       
            <section id="education" className="education-section">
              <h2 className="section-title">Education</h2>
              
              <div className="education-item">
                <h3>Master of Science in Computer Science</h3>
                <p>University of Missouri – Kansas City</p>
                <p>Aug 2023 - Dec 2024 | GPA: 3.8/4.0</p>
                <p><strong>Relevant Coursework:</strong> Distributed Systems, Machine Learning, Cloud Computing, Advanced Algorithms</p>
              </div>
        
              <div className="education-item">
                <h3>Integrated M.Tech. Software Engineering (5 Years)</h3>
                <p>Vellore Institute of Technology</p>
                <p>Jul 2018 - Jul 2023 | GPA: 3.6/4.0</p>
              </div>
            </section>
    );
    
}

export default Education