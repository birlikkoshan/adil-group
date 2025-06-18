// src/components/Navbar.tsx
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const navItems = [
  { path: '/products', label: 'Продукция' },
  { path: '/how-to', label: 'Как активировать подгузник?' },
  { path: '/delivery', label: 'Доставка и оплата' },
  { path: '/faq', label: 'FAQ' },
  { path: '/blog', label: 'Блог' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);


  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* <Link to='/' className="logo"></Link> */}

      <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
      
      <div className="search-bar">
        <input type="text" placeholder="Поиск..." />
        <button type="submit">🔍</button>
      </div>

      <div className={`mobile-nav ${isOpen ? 'open' : ''}`} >
        {navItems.map((item) => (
          <Link key={item.path} to={item.path} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};
