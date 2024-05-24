import React from 'react';
import { Link } from 'react-router-dom';
import imgLogo from '../assets/img/logo-white.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="header_nav">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="logo" />
            </Link>
          </h1>

          <ul>
            <li>
              <Link to="/intro">Intro</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/News">News</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
