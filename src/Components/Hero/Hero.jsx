import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';

export default function Hero() {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" className="hero-img" />
      
        <h1 ><span >I'm Nermeen Elmasry </span>, Front-End Developer</h1>
        <p >
          I'm a passionate Front-End Developer specialized in React.js and UI/UX design. 
          I create modern, responsive, and user-friendly web applications.
        </p>
        <div className="hero-actions">
            <a href="#hero-connect" className="hero-connect">Connect With Me</a>
            <a href="#hero-resume" className="hero-resume">My resume</a>
        </div>
      </div>
    
  );
}
