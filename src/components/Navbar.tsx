import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">React To-Do</h2>
        <ul className="navbar-links">
          <li><a href="#tasks">Tasks</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
