import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header id="resume-header">
      <div className="container">
        <div className="header-flex">
          <div className="photo-container">
            <img src={process.env.PUBLIC_URL + "/assets/Roj.png"} alt="Rojenn Clyde Patigdas" />
          </div>
          <div className="header-info">
            <h1>Rojenn Clyde Patigdas</h1>
            <p>Automations Expert</p>
            <p>General Santos City, Philippines 9500 | (+63) 9918684223 | patigdasr@gmail.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 