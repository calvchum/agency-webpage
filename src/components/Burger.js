import React, {Component} from 'react';
import * as data from '../constants/menuItems.js';
import { Link } from 'react-router-dom';

class Burger extends Component {

  render() {
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i}>
          <li key={i} onClick={this.props.isBurgerOpen}>{item.title}</li>
        </Link>
      )
    })

    return (
      <div className={`burger-slide-out ${this.props.isBurgerOpen ? 'burger-open' : 'burger-close'}`}>
        <div className='burger-menu-links-wrapper'>
          <ul className='subheader-text burger-menu-links'>
            {menuLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger;
