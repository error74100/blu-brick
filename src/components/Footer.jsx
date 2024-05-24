import React from 'react';
import './Footer.css';
import imgLogo from '../assets/img/logo-white.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="f_logo">
          <img src={imgLogo} alt="logo" />
        </p>
        <address>
          <strong>(주)퍼블아카데미</strong>
          <p>
            Jaehyun WEB | contact@gmail.com | TEL.000-000-0000 | 등록번호
            263-16-01300
          </p>
          <p>All rights reserved</p>
        </address>
      </div>
    </footer>
  );
}

export default Footer;
