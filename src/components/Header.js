import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {  
    return (
      <div>
        <h1>
          Header
        </h1>
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        <Link to="/projects">
          <span>Projects</span>
        </Link>
      </div>
    );
  }
}

export default Header;