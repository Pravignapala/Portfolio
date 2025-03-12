import React from "react";
import './../Contact/Contact.css'
import pdf from './../../img/Pravigna Pala_Full_stack_developer.pdf'
const Contact = () => {
    return (
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>I'd love to connect! Feel free to reach out via email or social media.</p>
  
        <div className="contact-details">
          <p>📧 Email: <a href="mailto:pravignatech24@gmail.com">pravignatech24@gmail.com</a></p>
          <p> <a href="https://www.linkedin.com/in/pala-pravigna-aa3709312" target="_blank" rel="noopener noreferrer">🔗 LinkedIn:</a></p>
          <p> <a href="https://github.com/Pravignapala" target="_blank" rel="noopener noreferrer">📂 GitHub:</a></p>
          <p>📞 Phone: <a href="tel:+18166464642">+1 816 646 4642</a></p>
        </div>
  
        <button className="resume-btn">
          <a href={pdf} download>📄 Download Resume</a>
        </button>
      </section>
    );
  };
  
  export default Contact;