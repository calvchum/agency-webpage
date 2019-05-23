import React, {Component} from 'react';
import * as data from '../constants/menuItems.js';
import { Link } from 'react-router-dom';

class Burger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: ''
    }
    this.props.history.listen((location, action) => {
      console.log(location.pathname)
    })

    this.setCurrentPage = this.setCurrentPage.bind(this)
  }

  componentWillMount() {
    this.setCurrentPage()
  }

  setCurrentPage() {
    const path = this.props.location.pathname
    let i = data.menuItems.findIndex((item) => item.link === path);
    let item = data.menuItems[i];

    this.setState({
      currentPage: item
    })
    console.log(item)
  }

  render() {
    let menuLinks = data.menuItems.map((item, i) => {
      return (
        <Link to={item.link} key={i}>
          <li key={i} onClick={this.props.handleBurgerOpen}>{item.title}</li>
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
