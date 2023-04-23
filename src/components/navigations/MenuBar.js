import React from 'react';
import logo from '../../images/logo.png';

import './MenuBar.css';

const MenuBar = () => {
  return (
    <nav className="header">
      <div className="nav-wrapper">
        <a className="logo" href="/">
          <img src={logo} alt="Your Logo"/>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/Sign up or Log in">Sign up or Log in</a></li>                
        </ul>
      </div>
    </nav>
  );
};

export default MenuBar;
