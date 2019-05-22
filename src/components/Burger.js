import React, {Component} from 'react';
import * as data from '../constants/menuItems.js';
import { Link } from 'react-router-dom';

class Burger extends Component {

  render() {
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i}>
          <li key={i} onClick={this.props.handleBurgerClose}>{item.title}</li>
        </Link>
      )
    })

    return (
      <div className={`Burger ${this.props.isBurgerOpen ? 'Burger--open' : ''}`}>
        <header className="Burger__header">
          <button
            onClick={this.props.handleBurgerClose}
            className="Burger__close">
            ×
          </button>
        </header>
        <div>
          <ul>
            {menuLinks}
          </ul>
        </div>
      </div>
    )
  }
}

export default Burger;
