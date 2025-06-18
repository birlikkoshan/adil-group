import React from 'react';
import { Link } from 'react-router-dom';

export const TopNav: React.FC = () => {
  return (
    <header className="top-header">
      <div className="logo-section">
        {/* <img src="/logo.svg" className="logo" /> */}
          <Link to='/' className="logo-text">ADIL GROUP</Link>
        {/* <p className="slogan"></p> */}
      </div>

      <div className="middle-section">
        <img src="/social-portal.svg" alt="Портал" className="social-portal" />
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
        <a href="#"><img src="https://companieslogo.com/img/orig/KKS.F.D-d5cf09c2.png?t=1720244492" style={{width: 21}} alt="Accessible" /></a>
      </div>

      <div className="right-icons">
        <a href="#"><i className="fas fa-phone-alt"></i></a>
        <div className="divider" />
        <a href="#"><i className="fas fa-globe"></i></a>
        <div className="divider" />
        <a href="#"><i className="fas fa-shopping-cart"></i></a>
      </div>
    </header>

  );
};
