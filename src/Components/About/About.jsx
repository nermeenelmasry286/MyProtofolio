import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile from '../../assets/about_profile.svg';

export default function About() {
  return (
    <div className="about">
      {/* Title Section */}
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>

      {/* About Content */}
      <div className="about-sections">
        {/* Left Side - Profile Image */}
        <div className="about-left">
          <img src={profile} alt="Profile" />
        </div>

        {/* Right Side - Description */}
        <div className="about-right">
          <div className="about-para">
          <p>
            I'm a Front-End Developer specializing in React.js, JavaScript, and UI/UX design. 
            I love building modern, high-performance, and interactive web applications.
          </p>
          <p>
            With a strong foundation in web technologies, I focus on writing clean, maintainable code
            and creating user-friendly interfaces that provide the best experience.
          </p>

          </div>
         
          <div className="about-skills">
            <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{width:"50%"}} />
            </div>
            <div className="about-skill">
                <p>React JS</p>
                <hr style={{width:"70%"}} />
            </div>
            <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{width:"60%"}} />
            </div>
            <div className="about-skill">
                <p>Next JS</p>
                <hr style={{width:"50%"}} />
            </div>
        </div>
       
        </div>
       
      </div>
  <div className="about-achievements">
    <div className="about-achievement"><h1>10+</h1><p>YEARS OF EXPERIENCE</p></div><hr/>
    <div className="about-achievement"><h1>90+</h1><p>PROJECTS COMPLETED</p></div><hr/>
    <div className="about-achievement"><h1>100+</h1><p>HAPPY CLIENTS</p></div>
  </div>
      
    </div>
   
  );
}
