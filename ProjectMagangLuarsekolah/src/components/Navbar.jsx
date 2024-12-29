import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/LS-logo-master.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
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
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a 
                href="https://luarsekolah.com/prakerja" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Prakerja
              </a>
            </li>
            <li>
              <a 
                href="https://belajarbekerja.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Belajar Bekerja
              </a>
            </li>
            <li>
              <a 
                href="https://luarsekolah.com/indonesia-skills-week"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indonesia Skills Week
              </a>
            </li>
          </ul>
        </div>
        <div className="auth-buttons">
          <button className="btn">
            <a 
              href="https://luarsekolah.com/masuk" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Masuk
            </a>
          </button>
          <button className="btn">
            <a 
              href="https://luarsekolah.com/daftar" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Daftar
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;