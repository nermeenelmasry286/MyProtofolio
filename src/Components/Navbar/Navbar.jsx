import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';

const Navbar = () => {
  return <div className='navbar'>
    <img src={logo} alt="logo" />
    <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Me</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Protofolio</li>
        <li className="nav-item">Contact</li>
    </ul>
    <button className="nav-contact">Connect With Me</button>
  </div>
};

export default Navbar;
