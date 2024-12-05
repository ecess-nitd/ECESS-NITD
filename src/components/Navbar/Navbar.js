import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <nav>
      <div className='hamburger' onClick={handleClick}>
        {isActive ? (
          <div className="cross-icon">
            <div className="line1"></div>
            <div className="line2"></div>
          </div>
        ) : (
          <div className="hamburger-icon">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        )}
      </div>
      <div className='nav-content'>
        <div className="logo1">
          <Link to='/'>
            <img src='https://i.imgur.com/Lg3kv0j.png' alt="ECESS Logo" />
          </Link>
        </div>
        <ul className={isActive ? 'nav-links open' : 'nav-links'}>
          <li><Link to='/' onClick={handleClick}>Home</Link></li>
          <li><Link to='/faculty' onClick={handleClick}>Faculty</Link></li>
          <li><Link to='/team' onClick={handleClick}>Team</Link></li>
          <li><Link to='/events' onClick={handleClick}>Events</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;