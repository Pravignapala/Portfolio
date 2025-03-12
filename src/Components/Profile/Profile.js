import React from "react";
import profileImage from '../../img/profilepic.jpg'
import './../Profile/Profile.css'
const Profile = () => {
    return (
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile" />
        <h1>Hi, I'm Pravigna Pala</h1>
        <p>Software Engineer | Full Stack Developer</p>
      </div>
    );
  };
export default Profile