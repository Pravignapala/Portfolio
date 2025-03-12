import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import  About from './Components/About/About'
import WorkExp from './Components/WorkExp/WorkExp';
import Project from "./Components/Project/Project";
import Education from './Components/Education/Education'
import { BrowserRouter } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        {/* Profile Page Section */}
        <div className="profile-page">
          <Profile />
          <About id="about"/>
        </div>
        <div id='skills'>
          <Skills/>
        </div>
        <div id="workexp" className="work-exp">
          <WorkExp/>
        </div>
        <div id='projects'>
          <Project/>
        </div>
        <div id='education'>
          <Education/>
        </div>
        <div id='contact'>
          <Contact/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
