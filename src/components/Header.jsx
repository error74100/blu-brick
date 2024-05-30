import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgLogo from '../assets/img/logo-white.png';
import './Header.css';

function Header() {
  const { pathname } = useLocation();

  const [introNav, setIntroNav] = useState(false);
  const [menuNav, setMenuNav] = useState(false);
  const [newsNav, setNewsNav] = useState(false);

  useEffect(() => {
    if (pathname.includes('/intro')) {
      setIntroNav(true);
      setMenuNav(false);
      setNewsNav(false);
    } else if (pathname.includes('/menu') || pathname.includes('/menuDetail')) {
      setIntroNav(false);
      setMenuNav(true);
      setNewsNav(false);
    } else if (pathname.includes('/news') || pathname.includes('/newsdetail')) {
      setIntroNav(false);
      setMenuNav(false);
      setNewsNav(true);
    } else {
      setIntroNav(false);
      setMenuNav(false);
      setNewsNav(false);
    }

    window.scrollTo(0, 0);
  }, [pathname]);

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
              <Link to="/intro" id="intro" className={introNav ? 'active' : ''}>
                Intro
              </Link>
            </li>
            <li>
              <Link to="/menu" id="menu" className={menuNav ? 'active' : ''}>
                Menu
              </Link>
            </li>
            <li>
              <Link to="/news" id="news" className={newsNav ? 'active' : ''}>
                News
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
