import React from "react";
import './../Header/Header.css'
const Header = () => {
    return (
      <header className="header">
      <h1 className="logo">My Portfolio</h1>
      <nav className="nav-links-page">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#workexp">Work Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    );
  };

export default Header