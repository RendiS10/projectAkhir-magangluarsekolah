import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/LS-logo-master.png';

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const changeColor = (e) => {
    const button = e.currentTarget;
    const link = button.querySelector('a');
    if (button.style.backgroundColor === "rgb(255, 199, 0)") {
      button.style.backgroundColor = "";
      if (link) {
        link.style.backgroundColor = "";
        link.style.color = "#fff";
      }
    } else {
      button.style.backgroundColor = "#FFC700";
      if (link) {
        link.style.backgroundColor = "#FFC700";
        link.style.color = "#000";
      }
    }
  };

  const changeColor2 = (e) => {
    e.target.style.color = "#FFC700";
  };

  return (
    <header className="navbar">
      <div className="containernav">
        <div className="logo">
          <img src={logo} alt="LS-Logo" />
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Cari Kelas Yang ingin Kamu Pelajari"
          />
        </div>
        <nav className={`menu ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li>
              <a 
                href="https://luarsekolah.com/prakerja" 
                target="_blank"
                onClick={changeColor2}
                rel="noopener noreferrer"
              >
                Prakerja
              </a>
            </li>
            <li>
              <a 
                href="https://belajarbekerja.com/" 
                target="_blank"
                onClick={changeColor2}
                rel="noopener noreferrer"
              >
                Belajar Bekerja
              </a>
            </li>
            <li>
              <a 
                href="https://luarsekolah.com/indonesia-skills-week"
                target="_blank"
                onClick={changeColor2}
                rel="noopener noreferrer"
              >
                Indonesia Skills Week
              </a>
            </li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn" onClick={changeColor}>
            <a 
              href="https://luarsekolah.com/masuk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Masuk
            </a>
          </button>
          <button className="btn" onClick={changeColor}>
            <a 
              href="https://luarsekolah.com/daftar" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Daftar
            </a>
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Navbar;