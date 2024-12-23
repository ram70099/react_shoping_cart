import React from 'react';
import { Link  } from 'react-router-dom';
import '../css/home.css';

const Header = () => {
  const token = localStorage.getItem("token");

  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo">MyBlog</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/main">Data</Link></li>
          {token ? (
            <li>
              <li><Link to="/logout">Logout</Link></li>
            </li>
          ) : (
            <li className="dropdown">
              <a className='dropbtn'><Link to="/login">Login</Link></a>
              <ul className="dropdown-content">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
              </ul>
            </li>
          )}

          <li className="dropdown">
            <a href="#" className="dropbtn">Categories</a>
            <ul className="dropdown-content">
              <li><Link to="/">Nature</Link></li>
              <li><Link to="/clothes">Clothes</Link></li>
            </ul>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default Header;
