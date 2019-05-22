import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as data from '../constants/menuItems.js';

class Footer extends Component {
  render() {  
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i} style={{textDecoration: 'none'}}>
          <li style={{display: 'inline'}} key={i}>{item.title} / </li>
        </Link>
      )
    })

    return (
      <ul>
        {menuLinks}
      </ul>
    );
  }
}

export default Footer;